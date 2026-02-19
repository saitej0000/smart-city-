import { complaints } from '../config/data.js';

export function getMyComplaints(req, res) {
  const mine = complaints.filter((c) => c.citizenId === req.user.sub);
  res.json(mine);
}

export function createComplaint(req, res) {
  const { title, category = 'other', priority = 'MEDIUM' } = req.body;
  const item = {
    id: `c${complaints.length + 1}`,
    ticketId: `CMP-2026-${String(complaints.length + 1).padStart(4, '0')}`,
    title,
    category,
    status: 'PENDING',
    priority,
    citizenId: req.user.sub,
    departmentCode: 'WASTE',
    createdAt: new Date().toISOString()
  };
  complaints.push(item);
  res.status(201).json(item);
}

export function departmentComplaints(req, res) {
  const dept = req.user.department;
  const list = complaints.filter((c) => c.departmentCode === dept);
  res.json(list);
}
