import type { Complaint } from '../../lib/types';

export function ComplaintTable({ complaints }: { complaints: Complaint[] }) {
  return (
    <div className="card overflow-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left border-b">
            <th className="py-2">Ticket</th><th>Title</th><th>Status</th><th>Priority</th>
          </tr>
        </thead>
        <tbody>
          {complaints.map((c) => (
            <tr key={c.id} className="border-b last:border-0">
              <td className="py-2">{c.ticketId}</td><td>{c.title}</td><td>{c.status}</td><td>{c.priority}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
