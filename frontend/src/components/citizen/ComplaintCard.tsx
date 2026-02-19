import type { Complaint } from '../../lib/types';

export function ComplaintCard({ complaint }: { complaint: Complaint }) {
  return (
    <article className="card">
      <div className="flex justify-between gap-2">
        <h3 className="font-semibold">{complaint.title}</h3>
        <span className="text-xs rounded bg-slate-100 px-2 py-1">{complaint.status}</span>
      </div>
      <p className="text-sm text-slate-600">{complaint.ticketId} · {complaint.category}</p>
    </article>
  );
}
