import { NavLink } from 'react-router-dom'
import { BookOpen, Castle, Crown, Grid2x2, Shield, Swords, Sparkles, Trophy, User, Wallet } from 'lucide-react'
import { cn } from '../../lib/utils'

const items = [
  { to: '/dashboard', label: 'Dashboard', icon: Grid2x2 },
  { to: '/map', label: 'Adventure Map', icon: Castle },
  { to: '/subjects', label: 'Worlds', icon: BookOpen },
  { to: '/mentor', label: 'AI Mentor', icon: Sparkles },
  { to: '/quiz/quest-3', label: 'Boss Battle', icon: Swords },
  { to: '/leaderboard', label: 'Hall of Fame', icon: Trophy },
  { to: '/inventory', label: 'Inventory', icon: Wallet },
  { to: '/profile', label: 'Character Sheet', icon: User },
  { to: '/admin', label: 'Admin Vault', icon: Shield },
]

interface SidebarProps {
  mobile?: boolean
  open?: boolean
  onClose?: () => void
}

export function Sidebar({ mobile = false, open = false, onClose }: SidebarProps) {
  const desktopClassName = 'hidden w-72 shrink-0 flex-col rounded-[32px] border border-white/10 bg-slate-950/70 p-5 shadow-2xl backdrop-blur-xl xl:flex'

  if (mobile) {
    return (
      <div
        className={cn(
          'fixed inset-0 z-50 xl:hidden',
          open ? 'pointer-events-auto' : 'pointer-events-none',
        )}
        aria-hidden={!open}
      >
        <button
          type="button"
          className={cn(
            'absolute inset-0 bg-slate-950/70 transition-opacity duration-300',
            open ? 'opacity-100' : 'opacity-0',
          )}
          onClick={onClose}
          aria-label="Close navigation overlay"
        />

        <aside
          className={cn(
            'relative z-10 flex h-full w-[86vw] max-w-sm flex-col border-r border-white/10 bg-slate-950/95 p-5 shadow-[0_30px_100px_rgba(0,0,0,0.5)] backdrop-blur-xl transition-transform duration-300',
            open ? 'translate-x-0' : '-translate-x-full',
          )}
        >
          <div className="rounded-[28px] border border-cyan-400/20 bg-cyan-400/10 p-4">
            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-cyan-300 to-violet-500 text-slate-950 shadow-lg shadow-cyan-500/20">
                <Crown className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-cyan-200/70">LevelUp AI</p>
                <h1 className="text-lg font-semibold text-white">Study like a hero</h1>
              </div>
            </div>
            <p className="mt-4 text-sm leading-6 text-white/70">
              Worlds, kingdoms, quests, bosses, and an AI mentor that keeps your momentum alive.
            </p>
          </div>

          <nav className="mt-6 flex-1 space-y-2">
            {items.map((item) => {
              const Icon = item.icon

              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={onClose}
                  className={({ isActive }) =>
                    cn(
                      'flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition',
                      isActive
                        ? 'bg-white text-slate-950 shadow-lg shadow-cyan-500/20'
                        : 'text-white/70 hover:bg-white/8 hover:text-white',
                    )
                  }
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </NavLink>
              )
            })}
          </nav>
        </aside>
      </div>
    )
  }

  return (
    <aside className={desktopClassName}>
      <div className="rounded-[28px] border border-cyan-400/20 bg-cyan-400/10 p-4">
        <div className="flex items-center gap-3">
          <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-cyan-300 to-violet-500 text-slate-950 shadow-lg shadow-cyan-500/20">
            <Crown className="h-6 w-6" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-cyan-200/70">LevelUp AI</p>
            <h1 className="text-lg font-semibold text-white">Study like a hero</h1>
          </div>
        </div>
        <p className="mt-4 text-sm leading-6 text-white/70">
          Worlds, kingdoms, quests, bosses, and an AI mentor that keeps your momentum alive.
        </p>
      </div>

      <nav className="mt-6 flex-1 space-y-2">
        {items.map((item) => {
          const Icon = item.icon

          return (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  'flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition',
                  isActive
                    ? 'bg-white text-slate-950 shadow-lg shadow-cyan-500/20'
                    : 'text-white/70 hover:bg-white/8 hover:text-white',
                )
              }
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </NavLink>
          )
        })}
      </nav>
    </aside>
  )
}
