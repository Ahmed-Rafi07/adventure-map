import { Crown, Palette, PawPrint, Shield, Sparkles } from 'lucide-react'
import { Panel } from '../components/ui/Panel'
import { SectionHeading } from '../components/ui/SectionHeading'

const items = [
  { name: 'Skyborne Relic', type: 'Epic', icon: Sparkles },
  { name: 'Azure Armor Skin', type: 'Rare', icon: Shield },
  { name: 'Moonlight Theme', type: 'Legendary', icon: Palette },
  { name: 'Study Fox Pet', type: 'Mythic', icon: PawPrint },
]

export function InventoryPage() {
  return (
    <div className="space-y-6">
      <SectionHeading
        eyebrow="Inventory"
        title="Loot, relics, and cosmetics"
        description="Rewards are more than points. They change your character sheet, your style, and your momentum."
      />

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {items.map((item) => (
          <Panel key={item.name} className="text-center">
            <div className="mx-auto grid h-16 w-16 place-items-center rounded-3xl bg-gradient-to-br from-cyan-300 to-violet-500 text-slate-950">
              <item.icon className="h-7 w-7" />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-white">{item.name}</h3>
            <p className="mt-2 text-sm text-white/60">{item.type}</p>
          </Panel>
        ))}
      </div>

      <Panel>
        <div className="flex items-center gap-3 text-sm text-white/75">
          <Crown className="h-5 w-5 text-amber-300" />
          Storefronts, battle pass tiers, and seasonal cosmetics can be wired to the rewards API.
        </div>
      </Panel>
    </div>
  )
}
