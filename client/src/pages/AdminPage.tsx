import { BarChart3, MessageCircleWarning, Settings2, Users } from 'lucide-react'
import { Panel } from '../components/ui/Panel'
import { SectionHeading } from '../components/ui/SectionHeading'

const cards = [
  { label: 'Users', value: '12,408', icon: Users },
  { label: 'AI requests', value: '4,820', icon: MessageCircleWarning },
  { label: 'Rewards issued', value: '31,409', icon: Settings2 },
  { label: 'Daily retention', value: '74%', icon: BarChart3 },
]

export function AdminPage() {
  return (
    <div className="space-y-6">
      <SectionHeading
        eyebrow="Admin vault"
        title="Operations console"
        description="Manage users, content, rewards, and analytics from a control room instead of a separate app."
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {cards.map((card) => (
          <Panel key={card.label}>
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm text-white/60">{card.label}</p>
                <p className="mt-2 text-3xl font-semibold text-white">{card.value}</p>
              </div>
              <card.icon className="h-7 w-7 text-cyan-300" />
            </div>
          </Panel>
        ))}
      </div>

      <Panel>
        <div className="grid gap-4 md:grid-cols-3">
          {['Users', 'Subjects', 'Boss battles', 'Questions', 'Rewards', 'Reports'].map((item) => (
            <div key={item} className="rounded-[22px] border border-white/10 bg-white/5 p-4 text-sm text-white/75">
              {item}
            </div>
          ))}
        </div>
      </Panel>
    </div>
  )
}
