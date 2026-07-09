import { useQuery } from '@tanstack/react-query'
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis } from 'recharts'
import { Sparkles, Trophy, Zap } from 'lucide-react'
import { Panel } from '../components/ui/Panel'
import { SectionHeading } from '../components/ui/SectionHeading'
import { StatCard } from '../components/ui/StatCard'
import { QuestCard } from '../components/ui/QuestCard'
import { analyticsSeries, dashboardStats, quests, profile } from '../data/mockData'
import { api } from '../lib/api'
import type { Quest, StatCardData, UserProfile } from '../types/domain'

interface DashboardOverview {
  stats: StatCardData[]
  quests: Quest[]
  series: typeof analyticsSeries
  profile: UserProfile
}

const fallback: DashboardOverview = {
  stats: dashboardStats,
  quests,
  series: analyticsSeries,
  profile,
}

export function DashboardPage() {
  const { data } = useQuery<DashboardOverview>({
    queryKey: ['dashboard-overview'],
    queryFn: async () => {
      try {
        const response = await api.get('/dashboard/overview')
        return response.data
      } catch {
        return fallback
      }
    },
    initialData: fallback,
  })

  return (
    <div className="space-y-6">
      <Panel className="overflow-hidden border-cyan-400/20 bg-[radial-gradient(circle_at_top_right,_rgba(34,211,238,0.18),_transparent_30%),linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-6 lg:p-8">
        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.9fr] lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-cyan-200/70">Adventure map</p>
            <h1 className="mt-3 max-w-2xl text-4xl font-semibold leading-tight text-white sm:text-5xl">
              {data.profile.currentWorld} is waiting. Defeat the next boss and unlock the next realm.
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/70">
              Every session becomes a mission. Every lesson becomes a quest. AI watches your weak
              spots, suggests the next move, and keeps the momentum alive.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <div className="rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm text-white/75">
                <Zap className="mr-2 inline h-4 w-4 text-amber-300" />
                Power level {data.profile.powerLevel}
              </div>
              <div className="rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm text-white/75">
                <Trophy className="mr-2 inline h-4 w-4 text-cyan-300" />
                Rank 2 on campus leaderboard
              </div>
              <div className="rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm text-white/75">
                <Sparkles className="mr-2 inline h-4 w-4 text-violet-300" />
                AI mentor online
              </div>
            </div>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-slate-950/50 p-5 shadow-2xl backdrop-blur">
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/70">Current mission</p>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="rounded-3xl border border-white/10 bg-white/6 p-4">
                <p className="text-sm text-white/60">Level</p>
                <p className="mt-2 text-3xl font-semibold text-white">{data.profile.level}</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/6 p-4">
                <p className="text-sm text-white/60">Streak</p>
                <p className="mt-2 text-3xl font-semibold text-white">{data.profile.streak}d</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/6 p-4">
                <p className="text-sm text-white/60">Current quest</p>
                <p className="mt-2 text-lg font-semibold text-white">{data.quests[0].title}</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/6 p-4">
                <p className="text-sm text-white/60">Next boss</p>
                <p className="mt-2 text-lg font-semibold text-white">{data.quests[2].title}</p>
              </div>
            </div>
          </div>
        </div>
      </Panel>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {data.stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <Panel>
          <SectionHeading
            eyebrow="Study analytics"
            title="XP and focus trend"
            description="Momentum spikes show where quests, streaks, and boss fights created the most progress."
          />
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data.series}>
                <defs>
                  <linearGradient id="xpGradient" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="5%" stopColor="#67e8f9" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0.05} />
                  </linearGradient>
                </defs>
                <CartesianGrid stroke="rgba(255,255,255,0.06)" vertical={false} />
                <XAxis dataKey="day" stroke="rgba(255,255,255,0.45)" />
                <Tooltip
                  contentStyle={{
                    background: 'rgba(8, 11, 20, 0.92)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: 20,
                    color: '#fff',
                  }}
                />
                <Area type="monotone" dataKey="xp" stroke="#67e8f9" fill="url(#xpGradient)" strokeWidth={3} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Panel>

        <Panel>
          <SectionHeading
            eyebrow="Daily mission"
            title="Quest log"
            description="Complete the active mission first. Bosses only unlock when the route is clear."
          />
          <div className="space-y-4">
            {data.quests.map((quest) => (
              <QuestCard key={quest.id} quest={quest} />
            ))}
          </div>
        </Panel>
      </section>
    </div>
  )
}
