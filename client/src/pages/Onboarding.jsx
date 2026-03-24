import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Settings2, Users, CheckCircle2, ChevronRight, ChevronLeft } from 'lucide-react';

const Onboarding = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    businessName: '',
    industry: '',
    workflowStages: ['Received', 'Processing', 'Quality Check', 'Delivered'],
    teamCount: 1,
  });

  const nextStep = () => setStep(s => Math.min(s + 1, 4));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  const StepIndicator = () => (
    <div className="flex justify-between items-center mb-10 max-w-lg mx-auto">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="flex flex-col items-center">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all ${
            step >= i ? 'bg-primary border-primary text-white shadow-lg shadow-primary/20' : 'bg-dark-card border-border text-gray-500'
          }`}>
            {step > i ? <CheckCircle2 size={20} /> : i}
          </div>
          <span className={`text-xs mt-2 ${step >= i ? 'text-white' : 'text-gray-500'}`}>
            {['Business', 'Workflow', 'Team', 'Ready'][i-1]}
          </span>
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-dark flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto w-full">
        <div className="text-center mb-12">
            <h1 className="text-4xl font-bold gradient-text mb-4">Set Up Your Command Center</h1>
            <p className="text-gray-400">Complete these steps to launch your Timora environment.</p>
        </div>

        <StepIndicator />

        <div className="glass-card rounded-2xl p-8 shadow-2xl">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary"><Building2 size={24}/></div>
                  <h3 className="text-2xl font-semibold">Business Identity</h3>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Business Name</label>
                  <input
                    type="text"
                    className="w-full bg-dark/50 border border-border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="Infinity Clock Studio"
                    value={formData.businessName}
                    onChange={(e) => setFormData({...formData, businessName: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Industry Type</label>
                  <select
                    className="w-full bg-dark/50 border border-border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    value={formData.industry}
                    onChange={(e) => setFormData({...formData, industry: e.target.value})}
                  >
                    <option value="">Select an industry</option>
                    <option value="3d-printing">3D Printing</option>
                    <option value="water-delivery">Water Delivery</option>
                    <option value="appliance-repair">Appliance Repair</option>
                    <option value="other">Other Service Business</option>
                  </select>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary"><Settings2 size={24}/></div>
                  <h3 className="text-2xl font-semibold">Define Your Workflow</h3>
                </div>
                <p className="text-gray-400 text-sm">Stages through which your orders will move.</p>
                <div className="space-y-3">
                  {formData.workflowStages.map((stage, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-dark/30 p-3 rounded-lg border border-border/50">
                      <span className="text-gray-600">{idx + 1}</span>
                      <input
                        className="bg-transparent border-none focus:ring-0 text-white w-full"
                        value={stage}
                        onChange={(e) => {
                            const newStages = [...formData.workflowStages];
                            newStages[idx] = e.target.value;
                            setFormData({...formData, workflowStages: newStages});
                        }}
                      />
                    </div>
                  ))}
                  <button className="text-primary text-sm font-medium">+ Add Stage</button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary"><Users size={24}/></div>
                  <h3 className="text-2xl font-semibold">Team Setup</h3>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Estimated Team Size</label>
                  <input
                    type="number"
                    className="w-full bg-dark/50 border border-border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    value={formData.teamCount}
                    onChange={(e) => setFormData({...formData, teamCount: parseInt(e.target.value)})}
                  />
                </div>
                 <div className="p-4 bg-primary/5 border border-primary/20 rounded-xl">
                    <p className="text-sm text-primary">You'll be able to invite team members and assign roles (Admin, Staff) once your dashboard is ready.</p>
                 </div>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10"
              >
                <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={48} />
                </div>
                <h3 className="text-3xl font-bold mb-4">You're All Set!</h3>
                <p className="text-gray-400 mb-8 max-w-sm mx-auto">
                    Your {formData.businessName} environment is being provisioned. Ready to run your business on time?
                </p>
                <button
                    className="w-full py-4 bg-primary rounded-xl font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform"
                    onClick={() => window.location.href = '/dashboard'}
                >
                  Enter Dashboard
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {step < 4 && (
            <div className="flex justify-between mt-12 pt-8 border-t border-border">
              <button
                disabled={step === 1}
                onClick={prevStep}
                className="flex items-center gap-2 text-gray-400 hover:text-white disabled:opacity-0 transition-all font-medium"
              >
                <ChevronLeft size={20} /> Back
              </button>
              <button
                onClick={nextStep}
                className="flex items-center gap-2 bg-primary text-white py-3 px-8 rounded-xl font-bold hover:shadow-lg hover:shadow-primary/20 transition-all"
              >
                Next <ChevronRight size={20} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
