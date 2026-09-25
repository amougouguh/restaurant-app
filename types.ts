export type Category = 'starter' | 'main' | 'dessert' | 'drink';
export type ReservationStatus = 'pending' | 'confirmed' | 'cancelled';

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: Category;
  image?: string;
  available?: boolean;
}

export interface DayHours {
  day: string;
  open?: string;
  close?: string;
  closed?: boolean;
  hours?: string;
}

export interface Reservation {
  id: number;
  name: string;
  phone: string;
  date: string;
  time: string;
  partySize: number;
  status: ReservationStatus;
}

export interface RestaurantInfo {
  name: string;
  address: string;
  phone: string;
  email: string;
}
