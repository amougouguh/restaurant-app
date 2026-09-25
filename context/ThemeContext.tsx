'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { menuItems as seedMenu } from '@/data/menu';
import { openingHours as seedHours } from '@/data/hours';
import { restaurantInfo as seedInfo } from '@/data/info';
import type { DayHours, MenuItem, Reservation, RestaurantInfo } from '@/types';

type ThemeMode = 'light' | 'dark';

interface ThemeContextValue {
  theme: ThemeMode;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<ThemeMode>('light');

  useEffect(() => {
    const saved = window.localStorage.getItem('restaurant-theme') as ThemeMode | null;
    if (saved === 'light' || saved === 'dark') {
      setTheme(saved);
      return;
    }

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDark ? 'dark' : 'light');
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    window.localStorage.setItem('restaurant-theme', theme);
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,
      toggleTheme: () => setTheme((current) => (current === 'dark' ? 'light' : 'dark')),
    }),
    [theme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used inside ThemeProvider');
  }
  return context;
}

const STORAGE_KEY = 'restaurant-admin-v1';

interface Store {
  menu: MenuItem[];
  hours: DayHours[];
  reservations: Reservation[];
  info: RestaurantInfo;
}

const seed: Store = {
  menu: seedMenu,
  hours: seedHours,
  reservations: [],
  info: seedInfo,
};

interface RestaurantContextValue extends Store {
  hydrated: boolean;
  addItem: (item: Omit<MenuItem, 'id'>) => void;
  updateItem: (id: number, patch: Partial<MenuItem>) => void;
  deleteItem: (id: number) => void;
  toggleAvailable: (id: number) => void;
  updateHours: (day: string, patch: Partial<DayHours>) => void;
  addReservation: (r: Omit<Reservation, 'id' | 'status'>) => void;
  setReservationStatus: (id: number, status: Reservation['status']) => void;
  resetAll: () => void;
}

const RestaurantContext = createContext<RestaurantContextValue | undefined>(undefined);

export function RestaurantProvider({ children }: { children: React.ReactNode }) {
  const [store, setStore] = useState<Store>(seed);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const saved = JSON.parse(raw) as Partial<Store>;
        setStore({ ...seed, ...saved });
      }
    } catch {
      // Ignore invalid persisted data and fall back to the seed values.
    } finally {
      setHydrated(true);
    }
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
  }, [store, hydrated]);

  const addItem = useCallback((item: Omit<MenuItem, 'id'>) => {
    setStore((current) => ({
      ...current,
      menu: [...current.menu, { ...item, id: Date.now() }],
    }));
  }, []);

  const updateItem = useCallback((id: number, patch: Partial<MenuItem>) => {
    setStore((current) => ({
      ...current,
      menu: current.menu.map((entry) => (entry.id === id ? { ...entry, ...patch } : entry)),
    }));
  }, []);

  const deleteItem = useCallback((id: number) => {
    setStore((current) => ({
      ...current,
      menu: current.menu.filter((entry) => entry.id !== id),
    }));
  }, []);

  const toggleAvailable = useCallback((id: number) => {
    setStore((current) => ({
      ...current,
      menu: current.menu.map((entry) =>
        entry.id === id ? { ...entry, available: !entry.available } : entry,
      ),
    }));
  }, []);

  const updateHours = useCallback((day: string, patch: Partial<DayHours>) => {
    setStore((current) => ({
      ...current,
      hours: current.hours.map((entry) => (entry.day === day ? { ...entry, ...patch } : entry)),
    }));
  }, []);

  const addReservation = useCallback((reservation: Omit<Reservation, 'id' | 'status'>) => {
    setStore((current) => ({
      ...current,
      reservations: [{ ...reservation, id: Date.now(), status: 'pending' }, ...current.reservations],
    }));
  }, []);

  const setReservationStatus = useCallback((id: number, status: Reservation['status']) => {
    setStore((current) => ({
      ...current,
      reservations: current.reservations.map((reservation) =>
        reservation.id === id ? { ...reservation, status } : reservation,
      ),
    }));
  }, []);

  const resetAll = useCallback(() => {
    window.localStorage.removeItem(STORAGE_KEY);
    setStore(seed);
  }, []);

  return (
    <RestaurantContext.Provider
      value={{
        ...store,
        hydrated,
        addItem,
        updateItem,
        deleteItem,
        toggleAvailable,
        updateHours,
        addReservation,
        setReservationStatus,
        resetAll,
      }}
    >
      {children}
    </RestaurantContext.Provider>
  );
}

export function useRestaurant() {
  const context = useContext(RestaurantContext);
  if (!context) {
    throw new Error('useRestaurant must be used inside RestaurantProvider');
  }
  return context;
}