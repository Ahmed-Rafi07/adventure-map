import { Trophy } from 'lucide-react'
import { Panel } from '../components/ui/Panel'
import { SectionHeading } from '../components/ui/SectionHeading'
import { leaderboard } from '../data/mockData'

export function LeaderboardPage() {
  return (
    <div className="space-y-6">
      <SectionHeading
        eyebrow="Hall of fame"
        title="Leaderboard"
        description="Competition is split by campus, class, and global rank. The more you study, the more you rise."
      />

      <Panel>
        <div className="space-y-3 lg:hidden">
          {leaderboard.map((entry) => (
            <div key={entry.rank} className="rounded-[22px] border border-white/10 bg-white/5 p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/70">Rank #{entry.rank}</p>
                  <h3 className="mt-2 text-lg font-semibold text-white">{entry.name}</h3>
                  <p className="mt-1 text-sm text-white/60">{entry.school}</p>
                </div>
                <Trophy className="h-5 w-5 text-amber-300" />
              </div>

              <div className="mt-4 grid grid-cols-3 gap-3 text-sm text-white/75">
                <div className="rounded-2xl border border-white/10 bg-slate-950/30 p-3">
                  <p className="text-xs uppercase tracking-[0.25em] text-white/50">XP</p>
                  <p className="mt-2 text-white">{entry.xp}</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-950/30 p-3">
                  <p className="text-xs uppercase tracking-[0.25em] text-white/50">Power</p>
                  <p className="mt-2 text-white">{entry.powerLevel}</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-950/30 p-3">
                  <p className="text-xs uppercase tracking-[0.25em] text-white/50">Streak</p>
                  <p className="mt-2 text-white">{entry.streak}d</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="hidden overflow-hidden rounded-[22px] border border-white/10 lg:block">
          <table className="min-w-full divide-y divide-white/10 text-left text-sm text-white/75">
            <thead className="bg-white/5 text-xs uppercase tracking-[0.3em] text-cyan-200/70">
              <tr>
                <th className="px-4 py-3">Rank</th>
                <th className="px-4 py-3">Player</th>
                <th className="px-4 py-3">School</th>
                <th className="px-4 py-3">XP</th>
                <th className="px-4 py-3">Power</th>
                <th className="px-4 py-3">Streak</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {leaderboard.map((entry) => (
                <tr key={entry.rank} className="bg-slate-950/30">
                  <td className="px-4 py-4 font-semibold text-white">#{entry.rank}</td>
                  <td className="px-4 py-4">{entry.name}</td>
                  <td className="px-4 py-4">{entry.school}</td>
                  <td className="px-4 py-4">{entry.xp}</td>
                  <td className="px-4 py-4">{entry.powerLevel}</td>
                  <td className="px-4 py-4">{entry.streak} days</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-5 flex items-start gap-3 rounded-[22px] border border-amber-300/20 bg-amber-300/10 p-4 text-sm text-amber-100">
          <Trophy className="h-5 w-5" />
          Global, campus, class, and friend rankings can be filtered from the future leaderboard API.
        </div>
      </Panel>
    </div>
  )
}
