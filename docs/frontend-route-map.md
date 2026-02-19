# Frontend Component Hierarchy & Route Map

## Core layout
- `App`
  - `AuthProvider`
  - `Router`
    - `PublicLayout`
    - `CitizenLayout`
    - `DepartmentAdminLayout`
    - `SuperAdminLayout`

## Route map
- `/` -> Landing page
- `/login` -> Login
- `/register` -> Register

### Citizen routes
- `/citizen/dashboard`
- `/citizen/complaints`
- `/citizen/complaints/:id`
- `/citizen/alerts`
- `/citizen/services`
- `/citizen/transport`
- `/citizen/jobs`
- `/citizen/settings`

### Department admin routes
- `/department/dashboard`
- `/department/complaints`
- `/department/analytics`
- `/department/announcements`

### Super admin routes
- `/admin/dashboard`
- `/admin/users`
- `/admin/departments`
- `/admin/jobs`
- `/admin/alerts`
- `/admin/events`
- `/admin/escalations`

## Example component mapping
- Citizen
  - `AlertBanner.tsx`
  - `ComplaintCard.tsx`
  - `QuickServiceGrid.tsx`
- Department Admin
  - `ComplaintTable.tsx`
  - `AnalyticsChart.tsx`
- Super Admin
  - `CityKpiPanel.tsx`
  - `EscalationQueue.tsx`
