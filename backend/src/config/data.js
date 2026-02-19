export const departments = [
  { id: 'd1', name: 'Waste Management', code: 'WASTE' },
  { id: 'd2', name: 'Transport', code: 'TRANSPORT' }
];

export const users = [
  { id: 'u1', fullName: 'Aarav Citizen', email: 'citizen@smartcity.local', passwordHash: '', role: 'CITIZEN' },
  { id: 'u2', fullName: 'Waste Admin', email: 'waste.admin@smartcity.local', passwordHash: '', role: 'DEPARTMENT_ADMIN', department: 'WASTE' },
  { id: 'u3', fullName: 'Gov Super Admin', email: 'super.admin@smartcity.local', passwordHash: '', role: 'SUPER_ADMIN' }
];

export const complaints = [
  { id: 'c1', ticketId: 'CMP-2026-0001', title: 'Streetlight not working', category: 'streetlights', status: 'PENDING', priority: 'MEDIUM', citizenId: 'u1', departmentCode: 'TRANSPORT', createdAt: new Date().toISOString() },
  { id: 'c2', ticketId: 'CMP-2026-0002', title: 'Garbage overflow', category: 'waste', status: 'IN_PROGRESS', priority: 'HIGH', citizenId: 'u1', departmentCode: 'WASTE', createdAt: new Date().toISOString() }
];
