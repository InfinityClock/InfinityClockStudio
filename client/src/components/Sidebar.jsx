import React from 'react';
import { 
  LayoutDashboard, 
  ShoppingCart, 
  GitBranch, 
  Users, 
  CreditCard, 
  Settings, 
  LogOut,
  Clock,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Sidebar = ({ collapsed, setCollapsed }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { icon: LayoutDashboard, label: 'Overview', path: '/dashboard' },
    { icon: ShoppingCart, label: 'Orders', path: '/orders' },
    { icon: GitBranch, label: 'Workflows', path: '/workflows' },
    { icon: Users, label: 'Team', path: '/team' },
    { icon: CreditCard, label: 'Payments', path: '/payments' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ];

  return (
    <div className={`h-screen sticky top-0 bg-dark-card border-r border-border transition-all duration-300 flex flex-col ${collapsed ? 'w-20' : 'w-64'}`}>
      <div className="p-6 flex items-center gap-3">
        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white flex-shrink-0">
          <Clock size={20} />
        </div>
        {!collapsed && <span className="font-bold text-xl tracking-tight">Timora</span>}
      </div>

      <nav className="flex-1 px-3 space-y-1 mt-6">
        {menuItems.map((item) => (
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
            className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl transition-all group ${
              location.pathname === item.path 
                ? 'bg-primary/10 text-primary' 
                : 'text-gray-400 hover:bg-white/5 hover:text-white'
            }`}
          >
            <item.icon size={22} className={location.pathname === item.path ? 'text-primary' : 'group-hover:text-white'} />
            {!collapsed && <span className="font-medium">{item.label}</span>}
          </button>
        ))}
      </nav>

      <div className="p-4 border-t border-border">
        <button className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-gray-400 hover:bg-red-500/10 hover:text-red-500 transition-all">
          <LogOut size={22} />
          {!collapsed && <span className="font-medium">Logout</span>}
        </button>
      </div>

      <button 
        onClick={() => setCollapsed(!collapsed)}
        className="absolute -right-3 top-10 w-6 h-6 bg-border rounded-full border border-border flex items-center justify-center text-gray-400 hover:text-white"
      >
        {collapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
      </button>
    </div>
  );
};

export default Sidebar;
