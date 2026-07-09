import { BellRing, MoonStar, ShieldCheck, Smartphone, Volume2 } from 'lucide-react'
import { Panel } from '../components/ui/Panel'
import { SectionHeading } from '../components/ui/SectionHeading'

export function SettingsPage() {
  return (
    <div className="space-y-6">
      <SectionHeading
        eyebrow="Settings"
        title="Game and study preferences"
        description="Tune notifications, sound, streak protection, and display modes from one place."
      />

      <div className="grid gap-5 xl:grid-cols-2">
        {[
          { title: 'Push alerts', icon: BellRing, text: 'Quest reminders, boss warnings, and reward drops.' },
          { title: 'Theme mode', icon: MoonStar, text: 'Switch between the light and dark adventure skin.' },
          { title: 'Streak shield', icon: ShieldCheck, text: 'Freeze one missed day before the streak resets.' },
          { title: 'Sound packs', icon: Volume2, text: 'Button clicks, XP rewards, and boss victory cues.' },
          { title: 'Mobile sync', icon: Smartphone, text: 'Keep progress synced across devices and screens.' },
        ].map((setting) => (
          <Panel key={setting.title} className="flex items-center gap-4">
            <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-cyan-300 to-violet-500 text-slate-950">
              <setting.icon className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">{setting.title}</h3>
              <p className="mt-1 text-sm text-white/60">{setting.text}</p>
            </div>
          </Panel>
        ))}
      </div>
    </div>
  )
}
