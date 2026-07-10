import { useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CheckCircle2, Clock4, Crown, Skull } from 'lucide-react'
import { Panel } from '../components/ui/Panel'
import { SectionHeading } from '../components/ui/SectionHeading'
import { quests } from '../data/mockData'

const options = ['1/2', '2/3', '3/4', '4/5']

export function QuizBattlePage() {
  const { questId } = useParams()
  const quest = useMemo(() => quests.find((item) => item.id === questId) ?? quests[2], [questId])
  const [selected, setSelected] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)

  return (
    <div className="space-y-6">
      <SectionHeading
        eyebrow="Boss battle"
        title={quest.title}
        description="Answer correctly to break the shield, earn the loot chest, and unlock the next kingdom."
      />

      <div className="grid gap-6 xl:grid-cols-[1fr_0.75fr]">
        <Panel className="space-y-5">
          <div className="flex flex-wrap items-center gap-3 text-sm text-white/70">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
              <Skull className="h-4 w-4 text-rose-300" />
              Boss mode
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
              <Clock4 className="h-4 w-4 text-cyan-300" />
              Timed quiz
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
              <Crown className="h-4 w-4 text-amber-300" />
              Reward chest unlocked
            </span>
          </div>

          <div className="rounded-[24px] border border-white/10 bg-slate-950/40 p-4 sm:p-5">
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/70">Question 1</p>
            <h3 className="mt-3 text-xl font-semibold text-white sm:text-2xl">What fraction is equal to 0.75?</h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {options.map((option) => {
                const active = selected === option

                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setSelected(option)}
                    className={`rounded-[20px] border px-4 py-4 text-left transition ${active ? 'border-cyan-300/40 bg-cyan-300/10 text-white' : 'border-white/10 bg-white/5 text-white/80 hover:bg-white/10'}`}
                  >
                    {option}
                  </button>
                )
              })}
            </div>

            <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="button"
                onClick={() => setSubmitted(true)}
                className="inline-flex w-full items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02] sm:w-auto"
              >
                Attack boss
              </button>
              {submitted ? (
                <p className="flex items-center gap-2 text-sm text-emerald-300">
                  <CheckCircle2 className="h-4 w-4" />
                  Correct answer. Loot unlocked.
                </p>
              ) : (
                <p className="text-sm text-white/50">Select an answer to begin the strike.</p>
              )}
            </div>
          </div>
        </Panel>

        <Panel>
          <SectionHeading eyebrow="Boss rewards" title="Victory chest" />
          <div className="space-y-3 text-sm text-white/75">
            <div className="rounded-[22px] border border-white/10 bg-white/5 p-4">+{quest.xp} XP</div>
            <div className="rounded-[22px] border border-white/10 bg-white/5 p-4">+{quest.coins} Gold</div>
            <div className="rounded-[22px] border border-white/10 bg-white/5 p-4">Badge: Precision Finisher</div>
            <div className="rounded-[22px] border border-white/10 bg-white/5 p-4">Unlocks next kingdom after completion</div>
          </div>
        </Panel>
      </div>
    </div>
  )
}
