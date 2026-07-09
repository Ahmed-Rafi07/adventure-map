import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { ToastItem } from '../types/domain'

interface UiState {
  theme: 'dark' | 'light'
  sidebarOpen: boolean
  toasts: ToastItem[]
  toggleTheme: () => void
  toggleSidebar: () => void
  openSidebar: () => void
  closeSidebar: () => void
  pushToast: (toast: Omit<ToastItem, 'id'>) => void
  dismissToast: (id: string) => void
}

export const useUiStore = create<UiState>()(
  persist(
    (set) => ({
      theme: 'dark',
      sidebarOpen: false,
      toasts: [],
      toggleTheme: () => set((state) => ({ theme: state.theme === 'dark' ? 'light' : 'dark' })),
      toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
      openSidebar: () => set(() => ({ sidebarOpen: true })),
      closeSidebar: () => set(() => ({ sidebarOpen: false })),
      pushToast: (toast) =>
        set((state) => ({
          toasts: [
            { id: `${Date.now()}-${Math.random().toString(16).slice(2)}`, ...toast },
            ...state.toasts,
          ].slice(0, 4),
        })),
      dismissToast: (id) => set((state) => ({ toasts: state.toasts.filter((item) => item.id !== id) })),
    }),
    {
      name: 'levelup-ui',
    },
  ),
)
