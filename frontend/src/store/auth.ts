import { create } from 'zustand';
import { api } from '../lib/api';
import type { User } from '../lib/types';

type State = {
  user: User | null;
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (fullName: string, email: string, password: string) => Promise<void>;
  logout: () => void;
};

export const useAuthStore = create<State>((set) => ({
  user: null,
  token: null,
  login: async (email, password) => {
    const { data } = await api.post('/auth/login', { email, password });
    set({ token: data.token, user: data.user });
  },
  register: async (fullName, email, password) => {
    await api.post('/auth/register', { fullName, email, password });
  },
  logout: () => set({ token: null, user: null })
}));
