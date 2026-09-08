import React from 'react';
import Link from 'next/link';
import { LayoutDashboard, Users, FileText } from 'lucide-react';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-slate-900 text-slate-300 flex flex-col min-h-screen">
      <div className="h-16 flex items-center px-6 border-b border-slate-800">
        <span className="text-white text-xl font-bold tracking-wide">
          SIWES<span className="text-teal-500">Flow</span>
        </span>
      </div>
      <nav className="flex-1 p-4 space-y-2">
        <Link 
          href="/supervisor/dashboard" 
          className="flex items-center gap-3 px-4 py-3 bg-teal-600/10 text-teal-400 rounded-lg transition-colors"
        >
          <LayoutDashboard size={20} />
          <span className="font-medium">Dashboard</span>
        </Link>
        <Link 
          href="#" 
          className="flex items-center gap-3 px-4 py-3 hover:bg-slate-800 text-slate-400 hover:text-slate-200 rounded-lg transition-colors"
        >
          <Users size={20} />
          <span className="font-medium">Students</span>
        </Link>
        <Link 
          href="#" 
          className="flex items-center gap-3 px-4 py-3 hover:bg-slate-800 text-slate-400 hover:text-slate-200 rounded-lg transition-colors"
        >
          <FileText size={20} />
          <span className="font-medium">Reviews</span>
        </Link>
      </nav>
    </aside>
  );
}