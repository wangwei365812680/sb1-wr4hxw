import { create } from 'zustand';
import { User } from '../types';

interface AuthStore {
  user: User | null;
  login: (email: string, password: string) => void;
  register: (email: string, password: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  login: (email: string, _password: string) => {
    set({ user: { email, isAuthenticated: true } });
  },
  register: (email: string, _password: string) => {
    set({ user: { email, isAuthenticated: true } });
  },
  logout: () => set({ user: null }),
}));