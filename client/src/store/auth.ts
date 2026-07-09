import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { profile } from '../data/mockData'
import type { Role, UserProfile } from '../types/domain'

interface AuthState {
  user: UserProfile | null
  isAuthenticated: boolean
  signIn: (payload: { name: string; email: string; role: Role }) => void
  signOut: () => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: profile,
      isAuthenticated: true,
      signIn: ({ name, email, role }) =>
        set(() => ({
          user: {
            ...profile,
            name,
            email,
            role,
          },
          isAuthenticated: true,
        })),
      signOut: () => set(() => ({ user: null, isAuthenticated: false })),
    }),
    {
      name: 'levelup-auth',
    },
  ),
)
