import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Sidebar } from './chrome/Sidebar'
import { TopBar } from './chrome/TopBar'
import { useUiStore } from '../store/ui'

export function AppShell() {
  const theme = useUiStore((state) => state.theme)
  const sidebarOpen = useUiStore((state) => state.sidebarOpen)
  const closeSidebar = useUiStore((state) => state.closeSidebar)
  const location = useLocation()

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.body.dataset.theme = theme
  }, [theme])

  useEffect(() => {
    closeSidebar()
  }, [closeSidebar, location.pathname])

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.15),_transparent_35%),linear-gradient(180deg,#050816_0%,#0b1020_45%,#090d18_100%)] text-slate-50">
      <div className="mx-auto flex min-h-screen max-w-[1600px] gap-5 p-4 sm:p-6 lg:p-8">
        <Sidebar />
        <Sidebar mobile open={sidebarOpen} onClose={closeSidebar} />
        <div className="flex min-w-0 flex-1 flex-col gap-5">
          <TopBar />
          <main className="min-h-0 flex-1 rounded-[32px] border border-white/10 bg-white/6 p-4 shadow-[0_25px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-6 lg:p-8">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  )
}
