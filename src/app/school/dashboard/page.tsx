import SchoolNavigation from "@/components/shared/SchoolNavigation";

const dashboardMetrics = [
  {
    label: "Total Students",
    value: 0,
  },
  {
    label: "Placed Students",
    value: 0,
  },
  {
    label: "Unplaced Students",
    value: 0,
  },
  {
    label: "Active Students",
    value: 0,
  },
  {
    label: "At-Risk Students",
    value: 0,
  },
  {
    label: "Completed Students",
    value: 0,
  },
];

export default function SchoolDashboardPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <header className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div>
            <p className="text-sm font-medium text-slate-500">School</p>
            <h1 className="text-2xl font-semibold text-slate-900">
              School Dashboard
            </h1>
          </div>

          <SchoolNavigation />
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

        <section aria-labelledby="metrics-heading">
          <h3
            id="metrics-heading"
            className="text-lg font-semibold text-slate-900"
          >
            Student Overview
          </h3>

          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {dashboardMetrics.map((metric) => (
              <article
                key={metric.label}
                className="rounded-xl border bg-white p-6 shadow-sm"
              >
                <p className="text-sm font-medium text-slate-500">
                  {metric.label}
                </p>

                <p className="mt-2 text-3xl font-semibold text-slate-900">
                  {metric.value}
                </p>
              </article>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}