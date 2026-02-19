import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../../store/auth';
import type { Role } from '../../lib/types';

export function ProtectedRoute({ roles, children }: { roles: Role[]; children: React.ReactElement }) {
  const { user } = useAuthStore();
  if (!user) return <Navigate to="/login" replace />;
  if (!roles.includes(user.role)) return <Navigate to="/" replace />;
  return children;
}
