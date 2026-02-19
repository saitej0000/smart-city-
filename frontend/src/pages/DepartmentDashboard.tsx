import { ComplaintTable } from '../components/admin/ComplaintTable';
import { AnalyticsChart } from '../components/admin/AnalyticsChart';

const complaints = [
  { id: '1', ticketId: 'CMP-002', title: 'Garbage overflow', category: 'waste', status: 'PENDING', priority: 'HIGH', createdAt: '' },
  { id: '2', ticketId: 'CMP-003', title: 'Water leak', category: 'water', status: 'IN_PROGRESS', priority: 'MEDIUM', createdAt: '' }
] as const;

export function DepartmentDashboard() {
  return (
    <main className="p-4 md:p-6 space-y-4">
      <h1 className="text-2xl font-bold">Department Admin Dashboard</h1>
      <AnalyticsChart />
      <ComplaintTable complaints={complaints as any} />
    </main>
  );
}
