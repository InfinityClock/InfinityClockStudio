import React from 'react';
import { ShoppingBag, TrendingUp, Users, DollarSign, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const Overview = () => {
  const stats = [
    { label: 'Total Revenue', value: '$12,450', change: '+12%', items: <DollarSign />, color: 'text-green-500', trend: 'up' },
    { label: 'Active Orders', value: '84', change: '+5%', items: <ShoppingBag />, color: 'text-primary', trend: 'up' },
    { label: 'New Customers', value: '12', change: '-2%', items: <Users />, color: 'text-purple-500', trend: 'down' },
    { label: 'Conversion Rate', value: '3.2%', change: '+0.4%', items: <TrendingUp />, color: 'text-orange-500', trend: 'up' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold">Good morning, John!</h2>
        <p className="text-gray-400 mt-1">Here's what's happening with your business today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="glass-card p-6 rounded-2xl border border-border/50">
            <div className="flex justify-between items-start mb-4">
              <div className={`p-3 rounded-xl bg-white/5 ${stat.color}`}>
                {stat.items}
              </div>
              <div className={`flex items-center gap-1 text-xs font-bold ${stat.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                {stat.change}
                {stat.trend === 'up' ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
              </div>
            </div>
            <p className="text-gray-400 text-sm font-medium">{stat.label}</p>
            <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
          </div>
        ))}
      </div>

      {/* Chart Placeholders */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 glass-card rounded-2xl p-6 h-96 flex items-center justify-center text-gray-600 border border-border/50">
           Revenue Chart (Analytics Integration)
        </div>
        <div className="glass-card rounded-2xl p-6 h-96 border border-border/50">
          <h4 className="font-bold mb-6">Recent Activity</h4>
          <div className="space-y-6">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                <div>
                  <p className="text-sm font-medium">New order #8242 received</p>
                  <p className="text-xs text-gray-500 mt-0.5">2 minutes ago</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
