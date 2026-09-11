export default async function StudentDetails({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}) {
  const { id } = await params;
  
  return (
    <div className="min-h-screen bg-slate-50 p-8 text-slate-900">
      <h1 className="text-2xl font-bold text-slate-900 mb-4">Student Details View</h1>
      <p>Supervising student ID: <span className="font-mono text-teal-700 bg-teal-50 px-2 py-1 rounded">{id}</span></p>
    </div>
  );
}