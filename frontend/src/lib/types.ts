export type Role = 'CITIZEN' | 'DEPARTMENT_ADMIN' | 'SUPER_ADMIN';

export interface User {
  id: string;
  fullName: string;
  email: string;
  role: Role;
  department?: string;
}

export interface Complaint {
  id: string;
  ticketId: string;
  title: string;
  category: string;
  status: 'PENDING' | 'IN_PROGRESS' | 'RESOLVED';
  priority: 'LOW' | 'MEDIUM' | 'HIGH';
  createdAt: string;
}
