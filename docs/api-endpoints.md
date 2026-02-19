# Backend API Endpoints (v1)

Base URL: `/api/v1`

## Auth
- `POST /auth/register`
- `POST /auth/login`
- `POST /auth/logout`
- `POST /auth/refresh`
- `GET /auth/me`

## Citizen
- `GET /dashboard/citizen`
- `GET /alerts`
- `GET /services`
- `GET /transport/routes`
- `GET /jobs`
- `PATCH /users/me/preferences`
- `POST /users/me/favorites/:serviceId`

## Complaints
- `POST /complaints`
- `GET /complaints/my`
- `GET /complaints/:id`
- `PATCH /complaints/:id` (citizen edit before assignment)
- `POST /complaints/:id/media`

## Department Admin
- `GET /department/dashboard`
- `GET /department/complaints`
- `PATCH /department/complaints/:id/status`
- `PATCH /department/complaints/:id/assign`
- `POST /department/announcements`
- `GET /department/analytics`

## Super Admin
- `GET /admin/dashboard`
- `POST /admin/departments`
- `GET /admin/users`
- `PATCH /admin/users/:id/role`
- `POST /admin/jobs`
- `POST /admin/alerts/broadcast`
- `POST /admin/events`
- `GET /admin/complaints/escalations`
- `PATCH /admin/complaints/:id/escalate`

## Example request/response (complaint create)

### Request
```json
{
  "title": "Overflowing garbage bin near sector 12",
  "description": "Bin has not been cleared for 3 days.",
  "category": "waste",
  "priority": "MEDIUM",
  "location": {
    "coordinates": [77.5946, 12.9716],
    "address": "Sector 12, Near Market Road"
  }
}
```

### Response
```json
{
  "success": true,
  "data": {
    "id": "66c0f2...",
    "ticketId": "CMP-2026-00103",
    "status": "PENDING",
    "department": "Waste Management"
  }
}
```
