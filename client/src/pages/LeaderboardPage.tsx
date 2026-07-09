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
        <div className="overflow-hidden rounded-[22px] border border-white/10">
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

        <div className="mt-5 flex items-center gap-3 rounded-[22px] border border-amber-300/20 bg-amber-300/10 p-4 text-sm text-amber-100">
          <Trophy className="h-5 w-5" />
          Global, campus, class, and friend rankings can be filtered from the future leaderboard API.
        </div>
      </Panel>
    </div>
  )
}
