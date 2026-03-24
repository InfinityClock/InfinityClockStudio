import React, { useState } from 'react';
import { UserPlus, Mail, Shield, ShieldCheck, Trash2, MoreVertical } from 'lucide-react';

const Team = () => {
  const [members, setMembers] = useState([
    { id: 1, name: 'John Doe', email: 'john@infinityclock.io', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Sarah Miller', email: 'sarah@infinityclock.io', role: 'Employee', status: 'Active' },
    { id: 3, name: 'Mike Ross', email: 'mike@infinityclock.io', role: 'Employee', status: 'Pending' },
  ]);

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold">Team Management</h2>
          <p className="text-gray-400 mt-1">Invite your colleagues and manage their access levels.</p>
        </div>
        <button className="flex items-center gap-2 bg-primary text-white px-6 py-2.5 rounded-xl font-bold hover:shadow-lg hover:shadow-primary/20 transition-all">
            <UserPlus size={20} /> Invite Member
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-card p-6 rounded-2xl border border-border/50">
            <div className="flex items-center gap-3 mb-2">
                <Users className="text-primary" size={20} />
                <span className="text-gray-400 text-sm font-medium">Total Members</span>
            </div>
            <h3 className="text-2xl font-bold">12</h3>
        </div>
        <div className="glass-card p-6 rounded-2xl border border-border/50">
            <div className="flex items-center gap-3 mb-2">
                <ShieldCheck className="text-green-500" size={20} />
                <span className="text-gray-400 text-sm font-medium">Admins</span>
            </div>
            <h3 className="text-2xl font-bold">2</h3>
        </div>
         <div className="glass-card p-6 rounded-2xl border border-border/50">
            <div className="flex items-center gap-3 mb-2">
                <Shield className="text-orange-500" size={20} />
                <span className="text-gray-400 text-sm font-medium">Employees</span>
            </div>
            <h3 className="text-2xl font-bold">10</h3>
        </div>
      </div>

      <div className="glass-card rounded-2xl border border-border/50 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-white/5 text-gray-400 text-xs uppercase tracking-wider font-semibold">
            <tr>
              <th className="px-8 py-4">Name</th>
              <th className="px-8 py-4">Role</th>
              <th className="px-8 py-4">Status</th>
              <th className="px-8 py-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/50">
            {members.map((member) => (
              <tr key={member.id} className="hover:bg-white/5 transition-all group">
                <td className="px-8 py-5">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                            {member.name.charAt(0)}
                        </div>
                        <div>
                            <p className="font-bold">{member.name}</p>
                            <p className="text-xs text-gray-500">{member.email}</p>
                        </div>
                    </div>
                </td>
                <td className="px-8 py-5">
                    <span className={`flex items-center gap-1.5 text-sm font-medium ${member.role === 'Admin' ? 'text-primary' : 'text-gray-400'}`}>
                        {member.role === 'Admin' ? <ShieldCheck size={16} /> : <Shield size={16} />}
                        {member.role}
                    </span>
                </td>
                <td className="px-8 py-5">
                  <span className={`px-2 py-0.5 rounded text-xs font-bold ${member.status === 'Active' ? 'bg-green-500/10 text-green-500' : 'bg-gray-500/10 text-gray-500'}`}>
                    {member.status}
                  </span>
                </td>
                <td className="px-8 py-5">
                    <div className="flex justify-center gap-2">
                        <button className="p-2 text-gray-500 hover:text-white hover:bg-white/10 rounded-lg">
                            <MoreVertical size={18} />
                        </button>
                        <button className="p-2 text-gray-500 hover:text-red-500 hover:bg-red-500/10 rounded-lg">
                            <Trash2 size={18} />
                        </button>
                    </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Team;
