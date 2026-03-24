import React, { useState } from 'react';
import { Plus, GripVertical, Trash2, Save, Play } from 'lucide-react';
import { motion, Reorder } from 'framer-motion';

const WorkflowManagement = () => {
  const [stages, setStages] = useState([
    { id: '1', name: 'New Request' },
    { id: '2', name: 'In Production' },
    { id: '3', name: 'Quality Check' },
    { id: '4', name: 'Ready for Pickup' },
  ]);

  const addStage = () => {
    const newId = (stages.length + 1).toString();
    setStages([...stages, { id: newId, name: 'New Stage' }]);
  };

  const removeStage = (id) => {
    setStages(stages.filter(s => s.id !== id));
  };

  const updateStageName = (id, name) => {
    setStages(stages.map(s => s.id === id ? { ...s, name } : s));
  };

  return (
    <div className="max-w-4xl space-y-8">
      <div>
        <h2 className="text-3xl font-bold">Workflow Engine</h2>
        <p className="text-gray-400 mt-1">Define the stages your orders move through. Drag to reorder.</p>
      </div>

      <div className="glass-card rounded-2xl p-8 border border-border/50">
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-xl font-semibold">Active Pipeline</h3>
          <button 
            onClick={addStage}
            className="flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-lg hover:bg-primary/30 transition-all font-medium"
          >
            <Plus size={18} /> Add Stage
          </button>
        </div>

        <Reorder.Group axis="y" values={stages} onReorder={setStages} className="space-y-3">
          {stages.map((stage) => (
            <Reorder.Item 
              key={stage.id} 
              value={stage}
              className="group flex items-center gap-4 bg-dark/40 border border-border/30 p-4 rounded-xl hover:border-primary/50 transition-all"
            >
              <div className="cursor-grab active:cursor-grabbing text-gray-600 group-hover:text-gray-400">
                <GripVertical size={20} />
              </div>
              
              <div className="flex-1 flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">
                  {stages.indexOf(stage) + 1}
                </div>
                <input 
                  className="bg-transparent border-none focus:ring-0 text-white font-medium w-full"
                  value={stage.name}
                  onChange={(e) => updateStageName(stage.id, e.target.value)}
                />
              </div>

              <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                 <button 
                  onClick={() => removeStage(stage.id)}
                  className="p-2 text-gray-500 hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-all"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </Reorder.Item>
          ))}
        </Reorder.Group>

        <div className="mt-10 pt-8 border-t border-border/50 flex justify-end gap-3">
            <button className="px-6 py-2.5 rounded-xl border border-border text-gray-400 hover:text-white transition-all font-medium">Discard Changes</button>
            <button className="flex items-center gap-2 bg-primary text-white px-8 py-2.5 rounded-xl font-bold hover:shadow-lg hover:shadow-primary/20 transition-all">
                <Save size={18} /> Save Pipeline
            </button>
        </div>
      </div>

       {/* Preview Board */}
       <div className="mt-12">
          <h3 className="text-xl font-semibold mb-6">Kanban Preview</h3>
          <div className="flex gap-4 overflow-x-auto pb-6 scrollbar-hide">
            {stages.map((stage) => (
              <div key={stage.id} className="min-w-[280px] bg-dark-card border border-border/50 rounded-2xl p-4">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-bold text-sm tracking-wide uppercase text-gray-400">{stage.name}</h4>
                  <span className="bg-white/10 px-2 py-0.5 rounded text-xs text-gray-500">0</span>
                </div>
                <div className="h-24 border-2 border-dashed border-border/30 rounded-xl flex items-center justify-center text-gray-700 text-xs italic">
                  No orders yet
                </div>
              </div>
            ))}
          </div>
       </div>
    </div>
  );
};

export default WorkflowManagement;
