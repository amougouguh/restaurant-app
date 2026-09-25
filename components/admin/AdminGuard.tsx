'use client';

import { useEffect } from 'react';
import { useAuth } from '@/context/authcontext';

export default function AdminGuard({ children }: { children: React.ReactNode }) {
  const { isAuthed } = useAuth();

  useEffect(() => {
    if (!isAuthed) {
      window.location.href = '/';
    }
  }, [isAuthed]);

  if (!isAuthed) return null;
  return <>{children}</>;
}
