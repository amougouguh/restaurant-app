'use client';
import { createContext, useContext, useEffect, useState } from 'react';

const SESSION_KEY = 'restaurant-admin-session';
const DEMO_PASSWORD = 'admin123'; // demo only — visible in the client bundle

interface AuthCtx { isAuthed: boolean; login: (pw: string) => boolean; logout: () => void; }

const AuthContext = createContext<AuthCtx | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthed, setIsAuthed] = useState(false);

  useEffect(() => {
    setIsAuthed(sessionStorage.getItem(SESSION_KEY) === 'true');
  }, []);

  const login = (pw: string) => {
    if (pw !== DEMO_PASSWORD) return false;
    sessionStorage.setItem(SESSION_KEY, 'true');
    setIsAuthed(true);
    return true;
  };

  const logout = () => {
    sessionStorage.removeItem(SESSION_KEY);
    setIsAuthed(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthed, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider');
  return ctx;
}