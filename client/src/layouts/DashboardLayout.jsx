import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { Bell, Search, User, TrendingUp, Users, ShoppingBag, DollarSign } from 'lucide-react';

const DashboardLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen bg-dark text-white">
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-16 border-b border-border px-8 flex items-center justify-between sticky top-0 bg-dark/80 backdrop-blur-md z-10">
          <div className="relative w-96">
            <Search className="absolute left-3 top-2.5 text-gray-500" size={18} />
            <input 
              type="text" 
              placeholder="Search anything..." 
              className="w-full bg-dark/50 border border-border rounded-lg py-2 pl-10 focus:outline-none focus:ring-1 focus:ring-primary/50 text-sm" 
            />
          </div>

          <div className="flex items-center gap-6">
            <button className="text-gray-400 hover:text-white relative">
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full"></span>
            </button>
            <div className="h-8 w-px bg-border"></div>
            <div className="flex items-center gap-3 cursor-pointer group">
              <div className="text-right">
                <p className="text-sm font-medium leading-none">John Doe</p>
                <p className="text-xs text-gray-500 mt-1">Administrator</p>
              </div>
              <div className="w-9 h-9 bg-primary/20 rounded-full flex items-center justify-center text-primary group-hover:bg-primary/30 transition-all font-bold">
                JD
              </div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
