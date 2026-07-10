import { motion } from 'framer-motion'
import { Bell, Menu, MoonStar, Search, SunMedium } from 'lucide-react'
import { useUiStore } from '../../store/ui'
import { useAuthStore } from '../../store/auth'

export function TopBar() {
  const toggleTheme = useUiStore((state) => state.toggleTheme)
  const toggleSidebar = useUiStore((state) => state.toggleSidebar)
  const theme = useUiStore((state) => state.theme)
  const user = useAuthStore((state) => state.user)

  return (
    <header className="flex flex-col gap-3 rounded-[28px] border border-white/10 bg-white/6 p-4 shadow-xl backdrop-blur-xl lg:flex-row lg:items-center lg:justify-between">
      <div className="flex items-center gap-3">
        <motion.button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/6 text-white transition hover:bg-white/12 xl:hidden"
          onClick={toggleSidebar}
          aria-label="Open navigation"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
        >
          <Menu className="h-5 w-5" />
        </motion.button>
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/70">Adventure dashboard</p>
          <h2 className="mt-1 text-lg font-semibold text-white sm:text-2xl">
            Good to see you, {user?.name.split(' ')[0] ?? 'Hero'}
          </h2>
        </div>
      </div>

      <div className="flex flex-1 items-center justify-between gap-3 lg:justify-end">
        <div className="hidden flex-1 items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white/45 lg:flex lg:max-w-md">
          <Search className="h-4 w-4" />
          <span className="text-sm">Search quests, worlds, notes, and bosses</span>
        </div>
        <motion.button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/6 text-white transition hover:bg-white/12"
          onClick={toggleTheme}
          aria-label="Toggle theme"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
        >
          {theme === 'dark' ? <SunMedium className="h-5 w-5" /> : <MoonStar className="h-5 w-5" />}
        </motion.button>
        <motion.button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/6 text-white transition hover:bg-white/12"
          aria-label="Notifications"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
        >
          <Bell className="h-5 w-5" />
        </motion.button>
        <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/6 px-3 py-2">
          <div className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-cyan-300 to-violet-500 font-semibold text-slate-950">
            {user?.avatar ?? 'LV'}
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-semibold text-white">{user?.name ?? 'Player'}</p>
            <p className="text-xs text-white/55">Level {user?.level ?? 1} Mentor</p>
          </div>
        </div>
      </div>
    </header>
  )
}
