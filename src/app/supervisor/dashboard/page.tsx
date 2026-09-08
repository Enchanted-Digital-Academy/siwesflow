import React from 'react';
import Sidebar from '../../../components/supervisor/Sidebar';
import StatCard from '../../../components/supervisor/StatCard';
import RecentActivityTable from '../../../components/supervisor/RecentActivityTable';
import { mockStudents, mockActivityLogs } from '../../../data/mock';

export default function SupervisorDashboard() {
  // Dynamically calculate pending reviews
  const pendingCount = mockActivityLogs.filter(log => log.status === 'pending').length;

  return (
    <div className="min-h-screen bg-slate-50 flex font-sans">
      <Sidebar />

      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold text-slate-900 mb-6">Supervisor Overview</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard title="Assigned Students" value={mockStudents.length} />
          <StatCard title="Pending Reviews" value={pendingCount} valueColor="text-amber-500" />
          <StatCard title="Flagged Students" value="0" valueColor="text-rose-500" />
        </div>

        {/* New Table Component */}
        <RecentActivityTable logs={mockActivityLogs} students={mockStudents} />
      </main>
    </div>
  );
}