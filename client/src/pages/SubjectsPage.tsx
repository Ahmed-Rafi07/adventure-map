import { BookOpenCheck, FlaskConical, Globe2, ScrollText } from 'lucide-react'
import { Panel } from '../components/ui/Panel'
import { SectionHeading } from '../components/ui/SectionHeading'
import { worlds } from '../data/mockData'

export function SubjectsPage() {
  return (
    <div className="space-y-6">
      <SectionHeading
        eyebrow="Worlds"
        title="Subject portals"
        description="Each subject behaves like a world with its own mood, quests, and boss battle rhythm."
      />

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {[
          { title: 'Mathematics', icon: BookOpenCheck, accent: 'from-cyan-300 to-violet-500' },
          { title: 'Science', icon: FlaskConical, accent: 'from-emerald-300 to-cyan-500' },
          { title: 'Social Studies', icon: Globe2, accent: 'from-amber-300 to-orange-500' },
          { title: 'Language Arts', icon: ScrollText, accent: 'from-rose-300 to-fuchsia-500' },
        ].map((item) => (
          <Panel key={item.title} className="text-center">
            <div className={`mx-auto grid h-16 w-16 place-items-center rounded-3xl bg-gradient-to-br ${item.accent} text-slate-950`}>
              <item.icon className="h-7 w-7" />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-white">{item.title}</h3>
            <p className="mt-2 text-sm text-white/60">World progression, side quests, and bosses tuned for mastery.</p>
          </Panel>
        ))}
      </div>

      <Panel>
        <SectionHeading
          eyebrow="Current worlds"
          title="Progress snapshot"
          description="The live world state is a blend of mastery, quests cleared, and boss gate progress."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {worlds.map((world) => (
            <div key={world.id} className="rounded-[24px] border border-white/10 bg-white/5 p-4">
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/70">{world.name}</p>
              <p className="mt-2 text-lg font-semibold text-white">{world.progress}% mastered</p>
              <div className="mt-4 h-2 rounded-full bg-white/10">
                <div className="h-2 rounded-full bg-gradient-to-r from-cyan-300 to-violet-400" style={{ width: `${world.progress}%` }} />
              </div>
            </div>
          ))}
        </div>
      </Panel>
    </div>
  )
}
