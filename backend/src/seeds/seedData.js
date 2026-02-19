export const departments = [
  { name: 'Waste Management', code: 'WASTE', description: 'Solid waste collection and disposal' },
  { name: 'Water Supply', code: 'WATER', description: 'Water distribution and quality services' },
  { name: 'Transport', code: 'TRANSPORT', description: 'Public mobility and traffic operations' }
];

export const users = [
  {
    fullName: 'Aarav Citizen',
    email: 'citizen@smartcity.local',
    role: 'CITIZEN',
    passwordHint: 'Use bcrypt hash in DB seeding script'
  },
  {
    fullName: 'Waste Admin',
    email: 'waste.admin@smartcity.local',
    role: 'DEPARTMENT_ADMIN',
    departmentCode: 'WASTE'
  },
  {
    fullName: 'Gov Super Admin',
    email: 'super.admin@smartcity.local',
    role: 'SUPER_ADMIN'
  }
];

export const complaints = [
  {
    ticketId: 'CMP-2026-0001',
    title: 'Streetlight not working near central park',
    category: 'streetlights',
    status: 'PENDING',
    priority: 'MEDIUM',
    location: { type: 'Point', coordinates: [77.5946, 12.9716], address: 'Central Park Road' }
  },
  {
    ticketId: 'CMP-2026-0002',
    title: 'Garbage overflow at market lane',
    category: 'waste',
    status: 'IN_PROGRESS',
    priority: 'HIGH',
    location: { type: 'Point', coordinates: [77.6021, 12.975], address: 'Market Lane Sector 5' }
  }
];
