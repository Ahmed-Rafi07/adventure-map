import { Award, Clock3, Coins, ShieldCheck, Sparkles, Users } from 'lucide-react'
import { Panel } from '../components/ui/Panel'
import { SectionHeading } from '../components/ui/SectionHeading'
import { achievements, profile } from '../data/mockData'

export function ProfilePage() {
  return (
    <div className="space-y-6">
      <SectionHeading
        eyebrow="Character sheet"
        title="Player profile"
        description="Your identity combines progress, cosmetics, achievements, study habits, and social standing."
      />

      <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
        <Panel className="text-center">
          <div className="mx-auto grid h-20 w-20 place-items-center rounded-[32px] bg-gradient-to-br from-cyan-300 to-violet-500 text-3xl font-semibold text-slate-950 shadow-2xl shadow-cyan-500/20 sm:h-24 sm:w-24 sm:text-4xl">
            {profile.avatar}
          </div>
          <h3 className="mt-5 text-2xl font-semibold text-white sm:text-3xl">{profile.name}</h3>
          <p className="mt-2 text-sm text-white/60">{profile.email}</p>
          <div className="mt-5 grid grid-cols-1 gap-3 text-left text-sm text-white/75 sm:grid-cols-2">
            <div className="rounded-[20px] border border-white/10 bg-white/5 p-4">
              <div className="flex items-center gap-2 text-cyan-200"><Sparkles className="h-4 w-4" /> Level</div>
              <p className="mt-2 text-2xl font-semibold text-white">{profile.level}</p>
            </div>
            <div className="rounded-[20px] border border-white/10 bg-white/5 p-4">
              <div className="flex items-center gap-2 text-amber-200"><Coins className="h-4 w-4" /> Coins</div>
              <p className="mt-2 text-2xl font-semibold text-white">{profile.coins}</p>
            </div>
            <div className="rounded-[20px] border border-white/10 bg-white/5 p-4">
              <div className="flex items-center gap-2 text-violet-200"><ShieldCheck className="h-4 w-4" /> Shield</div>
              <p className="mt-2 text-2xl font-semibold text-white">{profile.streakShield ? 'Active' : 'Off'}</p>
            </div>
            <div className="rounded-[20px] border border-white/10 bg-white/5 p-4">
              <div className="flex items-center gap-2 text-rose-200"><Clock3 className="h-4 w-4" /> Streak</div>
              <p className="mt-2 text-2xl font-semibold text-white">{profile.streak}d</p>
            </div>
          </div>
        </Panel>

        <Panel>
          <SectionHeading eyebrow="Achievements" title="Recent trophies" />
          <div className="space-y-3">
            {achievements.map((achievement) => (
              <div key={achievement.id} className="flex items-start justify-between gap-4 rounded-[22px] border border-white/10 bg-white/5 p-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/70">{achievement.rarity}</p>
                  <h4 className="mt-1 text-lg font-semibold text-white">{achievement.title}</h4>
                  <p className="mt-1 text-sm text-white/60">{achievement.description}</p>
                </div>
                <Award className="h-6 w-6 text-amber-300" />
              </div>
            ))}
          </div>

          <div className="mt-5 grid gap-3 md:grid-cols-3">
            <div className="rounded-[22px] border border-white/10 bg-white/5 p-4 text-sm text-white/75"><Users className="mb-2 h-5 w-5 text-cyan-300" /> 24 friends</div>
            <div className="rounded-[22px] border border-white/10 bg-white/5 p-4 text-sm text-white/75"><ShieldCheck className="mb-2 h-5 w-5 text-emerald-300" /> Bronze rank</div>
            <div className="rounded-[22px] border border-white/10 bg-white/5 p-4 text-sm text-white/75"><Clock3 className="mb-2 h-5 w-5 text-violet-300" /> 18h study time</div>
          </div>
        </Panel>
      </div>
    </div>
  )
}
