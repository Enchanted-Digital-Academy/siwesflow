export default function SchoolDashboardPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-sm font-medium text-slate-500">School</p>
            <h1 className="text-2xl font-semibold text-slate-900">
              School Dashboard
            </h1>
          </div>

          <nav aria-label="School dashboard navigation">
            <ul className="flex items-center gap-6 text-sm font-medium text-slate-600">
              <li>
                <a className="hover:text-slate-900" href="/school/dashboard">
                  Dashboard
                </a>
              </li>
              <li>
                <a className="hover:text-slate-900" href="/school/students">
                  Students
                </a>
              </li>
              <li>
                <a className="hover:text-slate-900" href="/school/placements">
                  Placements
                </a>
              </li>
              <li>
                <a
                  className="hover:text-slate-900"
                  href="/school/activity-monitoring"
                >
                  Activity Monitoring
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <div className="mb-8">
          <p className="text-sm font-medium text-slate-500">Overview</p>
          <h2 className="mt-1 text-xl font-semibold text-slate-900">
            SIWES Monitoring
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-600">
            Monitor student placements, activity, progress, and completion
            across your institution.
          </p>
        </div>

        <section aria-labelledby="dashboard-sections-heading">
          <h3 id="dashboard-sections-heading" className="sr-only">
            Dashboard sections
          </h3>

          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-xl border bg-white p-6 shadow-sm">
              <h4 className="font-semibold text-slate-900">
                Student Monitoring
              </h4>
              <p className="mt-2 text-sm text-slate-600">
                View and monitor students within the institution.
              </p>
            </article>

            <article className="rounded-xl border bg-white p-6 shadow-sm">
              <h4 className="font-semibold text-slate-900">
                Placement Monitoring
              </h4>
              <p className="mt-2 text-sm text-slate-600">
                Monitor student placement status and host company information.
              </p>
            </article>

            <article className="rounded-xl border bg-white p-6 shadow-sm">
              <h4 className="font-semibold text-slate-900">
                Activity Monitoring
              </h4>
              <p className="mt-2 text-sm text-slate-600">
                Track student activity and identify students who may need
                attention.
              </p>
            </article>

            <article className="rounded-xl border bg-white p-6 shadow-sm">
              <h4 className="font-semibold text-slate-900">
                Completion & Verification
              </h4>
              <p className="mt-2 text-sm text-slate-600">
                Review completion status and verification progress.
              </p>
            </article>
          </div>
        </section>
      </section>
    </main>
  );
}
