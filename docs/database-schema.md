# Database Schema (MongoDB + Mongoose-Oriented)

## Users
```ts
{
  _id: ObjectId,
  fullName: string,
  email: string, // unique index
  phone?: string,
  passwordHash: string,
  role: 'CITIZEN' | 'DEPARTMENT_ADMIN' | 'SUPER_ADMIN',
  departmentId?: ObjectId,
  isActive: boolean,
  address?: string,
  location?: {
    type: 'Point',
    coordinates: [number, number], // [lng, lat]
  },
  notificationPreferences: {
    emergency: boolean,
    transport: boolean,
    jobs: boolean,
    utilities: boolean,
  },
  favorites: [{ serviceId: ObjectId }],
  createdAt: Date,
  updatedAt: Date,
}
```

## Departments
```ts
{
  _id: ObjectId,
  name: string, // unique
  code: string, // unique
  description: string,
  contactEmail: string,
  contactPhone: string,
  serviceAreas: string[],
  isActive: boolean,
  createdBy: ObjectId,
  createdAt: Date,
  updatedAt: Date,
}
```

## Complaints
```ts
{
  _id: ObjectId,
  ticketId: string, // unique
  title: string,
  description: string,
  category: 'roads' | 'waste' | 'water' | 'electricity' | 'streetlights' | 'drainage' | 'public_safety' | 'other',
  status: 'PENDING' | 'IN_PROGRESS' | 'RESOLVED' | 'ESCALATED',
  priority: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL',
  citizenId: ObjectId,
  departmentId: ObjectId,
  assignedTo?: ObjectId,
  location: {
    type: 'Point',
    coordinates: [number, number],
    address?: string,
  },
  media: [{
    type: 'image' | 'video',
    url: string,
    mimeType: string,
  }],
  resolutionNote?: string,
  resolvedAt?: Date,
  timeline: [{
    status: string,
    note?: string,
    changedBy: ObjectId,
    changedAt: Date,
  }],
  createdAt: Date,
  updatedAt: Date,
}
```

## Alerts
```ts
{
  _id: ObjectId,
  title: string,
  message: string,
  severity: 'INFO' | 'WARNING' | 'EMERGENCY',
  scope: 'CITY_WIDE' | 'GEOFENCED' | 'DEPARTMENTAL',
  targetDepartmentId?: ObjectId,
  geoFence?: {
    center: [number, number],
    radiusMeters: number,
  },
  startAt: Date,
  endAt?: Date,
  createdBy: ObjectId,
  createdAt: Date,
}
```

## Jobs
```ts
{
  _id: ObjectId,
  title: string,
  departmentId?: ObjectId,
  description: string,
  eligibility: string,
  applicationUrl: string,
  closingDate: Date,
  publishedBy: ObjectId,
  status: 'DRAFT' | 'PUBLISHED' | 'CLOSED',
  createdAt: Date,
  updatedAt: Date,
}
```

## CityServices
```ts
{
  _id: ObjectId,
  name: string,
  type: 'HOSPITAL' | 'SCHOOL' | 'PARK' | 'BANK' | 'ATM' | 'EV_CHARGING' | 'PETROL_PUMP' | 'TOURIST_SPOT' | 'UTILITY',
  description?: string,
  address: string,
  location: {
    type: 'Point',
    coordinates: [number, number],
  },
  openingHours?: string,
  contact?: string,
  metadata?: Record<string, unknown>,
}
```

## TransportRoutes
```ts
{
  _id: ObjectId,
  routeCode: string,
  mode: 'BUS' | 'TRAIN' | 'METRO',
  startStop: string,
  endStop: string,
  stops: [{ name: string, location: [number, number], etaMinutes?: number }],
  baseFare: number,
  schedule: [{ departure: string, frequencyMinutes: number }],
  activeVehicles: [{ vehicleId: string, location: [number, number], occupancy?: number }],
  updatedAt: Date,
}
```

## Notifications
```ts
{
  _id: ObjectId,
  userId: ObjectId,
  type: 'ALERT' | 'COMPLAINT' | 'JOB' | 'SYSTEM',
  title: string,
  body: string,
  read: boolean,
  relatedEntityType?: string,
  relatedEntityId?: ObjectId,
  createdAt: Date,
}
```
