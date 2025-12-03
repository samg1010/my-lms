// src/components/UserDashboard.tsx
'use client';

import { UserButton } from '@clerk/nextjs';

export function UserDashboard() {
  return <UserButton afterSignOutUrl="/" />;
}