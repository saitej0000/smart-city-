export function SuperAdminDashboard() {
  return (
    <main className="p-4 md:p-6 space-y-4">
      <h1 className="text-2xl font-bold">Government Super Admin</h1>
      <section className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {['Total Complaints','Open Alerts','Active Users','Departments'].map((k, idx) => (
          <article key={k} className="card">
            <p className="text-sm text-slate-600">{k}</p>
            <p className="text-2xl font-bold">{[1240,4,8921,12][idx]}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
