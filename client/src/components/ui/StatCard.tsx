import { cn } from '../../lib/utils'
import type { StatCardData } from '../../types/domain'

const toneClasses = {
  gold: 'from-amber-300/20 to-orange-400/10 border-amber-300/20',
  cyan: 'from-cyan-300/20 to-sky-400/10 border-cyan-300/20',
  violet: 'from-violet-300/20 to-fuchsia-400/10 border-violet-300/20',
  emerald: 'from-emerald-300/20 to-green-400/10 border-emerald-300/20',
  rose: 'from-rose-300/20 to-pink-400/10 border-rose-300/20',
} as const

export function StatCard({ label, value, delta, tone }: StatCardData) {
  return (
    <article className={cn('rounded-[26px] border bg-gradient-to-br p-4 shadow-xl backdrop-blur-xl sm:p-5', toneClasses[tone])}>
      <p className="text-xs uppercase tracking-[0.35em] text-white/55">{label}</p>
      <h4 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">{value}</h4>
      <p className="mt-2 text-sm text-white/70">{delta}</p>
    </article>
  )
}
