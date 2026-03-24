import React, { useState } from 'react';
import { CreditCard, Check, Zap, Crown, Rocket, ArrowRight, History } from 'lucide-react';

const Payments = () => {
  const [activePlan, setActivePlan] = useState('Starter');

  const plans = [
    { name: 'Starter', price: '$19', icon: Rocket, features: ['Up to 5 Users', '100 Orders/mo', 'Basic Workflows', 'Email Support'] },
    { name: 'Pro', price: '$49', icon: Zap, features: ['Up to 20 Users', 'Unlimited Orders', 'Custom Workflows', 'Priority Support'], popular: true },
    { name: 'Premium', price: '$99', icon: Crown, features: ['Unlimited Users', 'Unlimited Orders', 'Advanced Analytics', 'Dedicated Manager'] },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold">Billing & Subscription</h2>
        <p className="text-gray-400 mt-1">Manage your plan, payment methods, and view your transaction history.</p>
      </div>

      {/* Plans Selection */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div 
            key={plan.name} 
            className={`glass-card p-8 rounded-3xl border-2 transition-all relative ${
              plan.popular ? 'border-primary shadow-lg shadow-primary/10' : 'border-border/50'
            } ${activePlan === plan.name ? 'ring-2 ring-primary/50' : ''}`}
          >
            {plan.popular && (
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                Most Popular
              </span>
            )}
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${plan.popular ? 'bg-primary text-white' : 'bg-primary/10 text-primary'}`}>
              <plan.icon size={24} />
            </div>
            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
            <div className="flex items-baseline gap-1 mb-8">
              <span className="text-4xl font-bold">{plan.price}</span>
              <span className="text-gray-500">/month</span>
            </div>
            
            <ul className="space-y-4 mb-10">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-gray-400">
                  <Check size={16} className="text-primary flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>

            <button 
              onClick={() => setActivePlan(plan.name)}
              className={`w-full py-3 rounded-xl font-bold transition-all flex items-center justify-center gap-2 ${
                activePlan === plan.name 
                  ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                  : 'bg-white/5 text-white hover:bg-white/10'
              }`}
            >
              {activePlan === plan.name ? 'Current Plan' : 'Upgrade Plan'}
              <ArrowRight size={18} />
            </button>
          </div>
        ))}
      </div>

      {/* Payment History */}
      <div className="mt-12">
        <div className="flex items-center gap-3 mb-6">
            <History className="text-primary" size={24} />
            <h3 className="text-xl font-semibold">Payment History</h3>
        </div>
        <div className="glass-card rounded-2xl border border-border/50 overflow-hidden">
            <table className="w-full text-left">
                <thead className="bg-white/5 text-gray-400 text-xs uppercase tracking-wider font-semibold">
                    <tr>
                        <th className="px-8 py-4">Invoice</th>
                        <th className="px-8 py-4">Date</th>
                        <th className="px-8 py-4">Amount</th>
                        <th className="px-8 py-4">Status</th>
                        <th className="px-8 py-4 text-center">Action</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-border/50">
                    {[1, 2, 3].map(i => (
                        <tr key={i} className="hover:bg-white/5 transition-all">
                            <td className="px-8 py-5 font-medium text-primary">INV-3029{i}</td>
                            <td className="px-8 py-5 text-gray-400">March {24-i}, 2026</td>
                            <td className="px-8 py-5 font-bold">$19.00</td>
                            <td className="px-8 py-5">
                                <span className="px-2 py-0.5 rounded bg-green-500/10 text-green-500 text-xs font-bold">Paid</span>
                            </td>
                            <td className="px-8 py-5 text-center">
                                <button className="text-gray-400 hover:text-white transition-all text-sm font-medium">Download PDF</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
      </div>
    </div>
  );
};

export default Payments;
