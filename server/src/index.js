const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Tenant-Aware Middleware (Mock for now, will extract from header/domain)
app.use((req, res, next) => {
    const tenantId = req.headers['x-tenant-id'];
    if (tenantId) {
        req.tenantId = tenantId;
        // In a real DB connection, we'd set the session variable here
        // await pool.query(`SET app.current_tenant_id = '${tenantId}'`);
    }
    next();
});

// Basic Routes
app.get('/', (req, res) => {
    res.json({ message: 'Timora Multi-Tenant Backend is Running' });
});

// Routes
app.use('/api/tenants', require('./routes/tenantRoutes'));
// app.use('/api/auth', require('./routes/authRoutes'));
// app.use('/api/orders', require('./routes/orderRoutes'));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
