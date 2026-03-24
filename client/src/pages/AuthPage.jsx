import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, ArrowRight, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AuthPage = ({ type = 'login' }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Integration logic here
    if (type === 'signup') {
      navigate('/onboarding');
    } else {
      navigate('/dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-dark flex items-center justify-center p-6">
      <div className="max-w-md w-full">
        <div className="flex flex-col items-center mb-10">
          <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-4">
            <Clock size={32} />
          </div>
          <h2 className="text-3xl font-bold gradient-text">
            {type === 'login' ? 'Welcome Back' : 'Create Your Account'}
          </h2>
          <p className="text-gray-400 mt-2">
            {type === 'login' ? 'Enter your details to access Timora' : 'Start your 14-day free trial today'}
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card rounded-2xl p-8 shadow-2xl"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Work Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3.5 text-gray-500" size={18} />
                <input
                  type="email"
                  required
                  className="w-full bg-dark/50 border border-border rounded-xl p-3 pl-10 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-3.5 text-gray-500" size={18} />
                <input
                  type="password"
                  required
                  className="w-full bg-dark/50 border border-border rounded-xl p-3 pl-10 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-primary text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              {type === 'login' ? 'Sign In' : 'Create My Account'}
              <ArrowRight size={20} />
            </button>
          </form>

          <p className="text-center text-gray-400 text-sm mt-8">
            {type === 'login' ? (
              <>Don't have an account? <span onClick={() => navigate('/signup')} className="text-primary cursor-pointer hover:underline">Sign up</span></>
            ) : (
              <>Already have an account? <span onClick={() => navigate('/login')} className="text-primary cursor-pointer hover:underline">Log in</span></>
            )}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AuthPage;
