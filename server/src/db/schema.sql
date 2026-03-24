-- Multi-Tenant Database Schema with Row Level Security (RLS)

-- 1. Create Extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 2. Create Tenants table
CREATE TABLE tenants (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    subdomain TEXT UNIQUE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 3. Create Users table (Multi-Tenant)
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tenant_id UUID NOT NULL REFERENCES tenants(id) ON DELETE CASCADE,
    email TEXT NOT NULL,
    password_hash TEXT NOT NULL,
    role TEXT CHECK (role IN ('admin', 'staff')) DEFAULT 'staff',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(tenant_id, email)
);

-- 4. Create Orders table (Multi-Tenant)
CREATE TABLE orders (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tenant_id UUID NOT NULL REFERENCES tenants(id) ON DELETE CASCADE,
    customer_name TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'pending',
    total_amount DECIMAL(12, 2) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 5. Enable Row Level Security (RLS)
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

-- 6. Define RLS Policies
-- Users can only see/modify data belonging to their tenant
CREATE POLICY tenant_user_isolation ON users
    USING (tenant_id = (SELECT (current_setting('app.current_tenant_id'))::UUID));

CREATE POLICY tenant_order_isolation ON orders
    USING (tenant_id = (SELECT (current_setting('app.current_tenant_id'))::UUID));

-- 7. Helper Function for Onboarding
CREATE OR REPLACE FUNCTION create_new_tenant(p_name TEXT, p_subdomain TEXT, p_admin_email TEXT, p_password_hash TEXT)
RETURNS UUID AS $$
DECLARE
    v_tenant_id UUID;
BEGIN
    INSERT INTO tenants (name, subdomain) VALUES (p_name, p_subdomain) RETURNING id INTO v_tenant_id;
    INSERT INTO users (tenant_id, email, password_hash, role) VALUES (v_tenant_id, p_admin_email, p_password_hash, 'admin');
    RETURN v_tenant_id;
END;
$$ LANGUAGE plpgsql;
