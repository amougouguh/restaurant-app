'use client';

import { AuthProvider } from '@/context/authcontext';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <AuthProvider>{children}</AuthProvider>;
}

export const NAV = [
  { href: '/admin', label: 'Overview', icon: '📊' },
  { href: '/admin/menu', label: 'Menu', icon: '🍽️' },
  { href: '/admin/hours', label: 'Hours', icon: '🕒' },
  { href: '/admin/reservations', label: 'Reservations', icon: '📅' },
  { href: '/admin/settings', label: 'Settings', icon: '⚙️' },
];