export function AlertBanner() {
  return (
    <section className="card border-l-4 border-brand-orange" aria-live="polite">
      <h2 className="font-semibold">Emergency Alert</h2>
      <p className="text-sm text-slate-700">Heavy rainfall advisory in Zone 3. Avoid low-lying roads.</p>
    </section>
  );
}
