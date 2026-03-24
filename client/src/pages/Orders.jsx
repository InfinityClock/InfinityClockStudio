import React, { useState } from 'react';
import { Plus, Search, Filter, MoreHorizontal, ArrowRightCircle, Download } from 'lucide-react';

const Orders = () => {
  const [orders, setOrders] = useState([
    { id: 'ORD-8242', customer: 'Global Logistics Inc.', service: '3D Prototyping', amount: '$450.00', status: 'In Production', date: '2026-03-24' },
    { id: 'ORD-8241', customer: 'Sarah Jenkins', service: 'Custom Parts', amount: '$120.00', status: 'New Request', date: '2026-03-23' },
    { id: 'ORD-8240', customer: 'TechRepair Co.', service: 'Bulk Manufacturing', amount: '$1,200.00', status: 'Delivered', date: '2026-03-22' },
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'New Request': return 'bg-blue-500/10 text-blue-500 border-blue-500/20';
      case 'In Production': return 'bg-orange-500/10 text-orange-500 border-orange-500/20';
      case 'Delivered': return 'bg-green-500/10 text-green-500 border-green-500/20';
      default: return 'bg-gray-500/10 text-gray-500 border-gray-500/20';
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold">Orders Management</h2>
          <p className="text-gray-400 mt-1">Track and manage your customer orders through the pipeline.</p>
        </div>
        <div className="flex gap-3">
             <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-border text-gray-400 hover:text-white transition-all font-medium">
                <Download size={18} /> Export
            </button>
            <button className="flex items-center gap-2 bg-primary text-white px-6 py-2.5 rounded-xl font-bold hover:shadow-lg hover:shadow-primary/20 transition-all">
                <Plus size={20} /> New Order
            </button>
        </div>
      </div>

      <div className="glass-card rounded-2xl border border-border/50 overflow-hidden">
        <div className="p-6 border-b border-border/50 flex gap-4">
            <div className="relative flex-1">
                <Search className="absolute left-3 top-2.5 text-gray-500" size={18} />
                <input type="text" placeholder="Search orders, customers..." className="w-full bg-dark/50 border border-border rounded-lg py-2 pl-10 text-sm focus:ring-1 focus:ring-primary" />
            </div>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-gray-400 hover:text-white text-sm">
                <Filter size={16} /> Filters
            </button>
        </div>

        <table className="w-full text-left">
          <thead className="bg-white/5 text-gray-400 text-xs uppercase tracking-wider font-semibold">
            <tr>
              <th className="px-8 py-4">Order ID</th>
              <th className="px-8 py-4">Customer</th>
              <th className="px-8 py-4">Service</th>
              <th className="px-8 py-4">Amount</th>
              <th className="px-8 py-4">Status</th>
              <th className="px-8 py-4">Date</th>
              <th className="px-8 py-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/50">
            {orders.map((order) => (
              <tr key={order.id} className="hover:bg-white/5 transition-all group">
                <td className="px-8 py-5 font-bold text-primary">{order.id}</td>
                <td className="px-8 py-5 font-medium">{order.customer}</td>
                <td className="px-8 py-5 text-gray-400 text-sm">{order.service}</td>
                <td className="px-8 py-5 font-semibold">{order.amount}</td>
                <td className="px-8 py-5">
                  <span className={`px-3 py-1 rounded-full border text-xs font-bold ${getStatusColor(order.status)}`}>
                    {order.status}
                  </span>
                </td>
                <td className="px-8 py-5 text-gray-500 text-sm">{order.date}</td>
                <td className="px-8 py-5">
                    <div className="flex justify-center gap-2">
                         <button className="p-2 text-gray-500 hover:text-white hover:bg-white/10 rounded-lg">
                            <ArrowRightCircle size={18} />
                        </button>
                        <button className="p-2 text-gray-500 hover:text-white hover:bg-white/10 rounded-lg">
                            <MoreHorizontal size={18} />
                        </button>
                    </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="p-6 bg-white/5 border-t border-border/50 flex justify-between items-center text-sm text-gray-500">
            <span>Showing 3 of 124 orders</span>
            <div className="flex gap-2">
                <button className="px-3 py-1 rounded border border-border hover:bg-white/5 disabled:opacity-50" disabled>Previous</button>
                <button className="px-3 py-1 rounded border border-border hover:bg-white/5">Next</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
