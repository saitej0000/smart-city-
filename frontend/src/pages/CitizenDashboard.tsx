import { AlertBanner } from '../components/citizen/AlertBanner';
import { ComplaintCard } from '../components/citizen/ComplaintCard';

const complaints = [
  { id: '1', ticketId: 'CMP-001', title: 'Pothole near 5th avenue', category: 'roads', status: 'IN_PROGRESS', priority: 'MEDIUM', createdAt: '' }
] as const;

export function CitizenDashboard() {
  return (
    <main className="p-4 md:p-6 space-y-4">
      <h1 className="text-2xl font-bold">Citizen Dashboard</h1>
      <AlertBanner />
      <section className="grid gap-3 md:grid-cols-2">
        {complaints.map((c) => <ComplaintCard key={c.id} complaint={c as any} />)}
      </section>
    </main>
  );
}
