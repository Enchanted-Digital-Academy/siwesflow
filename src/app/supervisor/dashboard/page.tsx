import React from 'react';
import { LayoutDashboard, Users, FileText, AlertCircle, CheckCircle, Clock } from 'lucide-react';

export default function SupervisorDashboard() {
  return (
    <div className="min-h-screen bg-slate-50 flex font-sans">
      <aside className="w-64 bg-slate-900 text-slate-300 flex flex-col">
        <div className="h-16 flex items-center px-6 border-b border-slate-800">
          <span className="text-white text-xl font-bold tracking-wide">SIWES<span className="text-teal-500">Flow</span></span>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <a href="#" className="flex items-center gap-3 px-4 py-3 bg-teal-600/10 text-teal-400 rounded-lg">
            <LayoutDashboard size={20} />
            <span className="font-medium">Dashboard</span>
          </a>
        </nav>
      </aside>

      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold text-slate-900 mb-6">Supervisor Overview</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="text-sm font-medium text-slate-500 mb-2">Assigned Students</h3>
            <p className="text-3xl font-bold text-slate-900">12</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="text-sm font-medium text-slate-500 mb-2">Pending Reviews</h3>
            <p className="text-3xl font-bold text-amber-500">8</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="text-sm font-medium text-slate-500 mb-2">Flagged Students</h3>
            <p className="text-3xl font-bold text-rose-500">1</p>
          </div>
        </div>
      </main>
    </div>
  );
}