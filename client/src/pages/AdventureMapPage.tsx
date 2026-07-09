import { motion } from 'framer-motion'
import { Castle, Crown, Flame, Shield, Sword } from 'lucide-react'
import { Panel } from '../components/ui/Panel'
import { SectionHeading } from '../components/ui/SectionHeading'
import { quests, worlds } from '../data/mockData'

export function AdventureMapPage() {
  return (
    <div className="space-y-6">
      <SectionHeading
        eyebrow="Adventure map"
        title="Worlds, kingdoms, and boss gates"
        description="Subjects become worlds. Chapters become kingdoms. Lessons become quests. Bosses guard the next path."
      />

      <div className="grid gap-5 xl:grid-cols-3">
        {worlds.map((world) => (
          <motion.article
            key={world.id}
            whileHover={{ y: -4 }}
            className="rounded-[28px] border border-white/10 bg-white/6 p-5 shadow-xl backdrop-blur-xl"
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-cyan-200/70">{world.theme}</p>
                <h3 className="mt-2 text-2xl font-semibold text-white">{world.name}</h3>
              </div>
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-cyan-300 to-violet-500 text-slate-950">
                <Castle className="h-6 w-6" />
              </div>
            </div>

            <div className="mt-5 h-2 rounded-full bg-white/10">
              <div className="h-2 rounded-full bg-gradient-to-r from-cyan-300 to-violet-400" style={{ width: `${world.progress}%` }} />
            </div>

            <div className="mt-4 flex items-center justify-between text-sm text-white/65">
              <span>{world.kingdoms} kingdoms</span>
              <span>{world.quests} quests</span>
              <span>{world.progress}% cleared</span>
            </div>

            <div className="mt-5 rounded-3xl border border-white/10 bg-slate-950/40 p-4">
              <div className="flex items-center gap-2 text-sm font-medium text-amber-200">
                <Sword className="h-4 w-4" />
                Boss gate
              </div>
              <p className="mt-2 text-lg font-semibold text-white">{world.bossName}</p>
            </div>
          </motion.article>
        ))}
      </div>

      <Panel>
        <SectionHeading
          eyebrow="Campaign path"
          title="Quest ladder"
          description="The fastest route through the map focuses on momentum, not just completion."
        />
        <div className="space-y-4">
          {quests.map((quest) => (
            <div key={quest.id} className="flex flex-col gap-3 rounded-[24px] border border-white/10 bg-white/5 p-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/70">{quest.subject}</p>
                <h4 className="mt-1 text-lg font-semibold text-white">{quest.title}</h4>
                <p className="mt-1 text-sm text-white/55">{quest.kingdom}</p>
              </div>
              <div className="flex items-center gap-4 text-sm text-white/70">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
                  <Flame className="h-4 w-4 text-amber-300" />
                  {quest.xp} XP
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
                  <Crown className="h-4 w-4 text-cyan-300" />
                  {quest.coins} gold
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
                  <Shield className="h-4 w-4 text-violet-300" />
                  {quest.difficulty}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Panel>
    </div>
  )
}
