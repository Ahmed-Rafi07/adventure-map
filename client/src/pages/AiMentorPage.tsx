import { useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Bot, Lightbulb, MessageSquarePlus, Sparkles } from 'lucide-react'
import { api } from '../lib/api'
import { mentorPrompts } from '../data/mockData'
import { Panel } from '../components/ui/Panel'
import { SectionHeading } from '../components/ui/SectionHeading'
import { useUiStore } from '../store/ui'

const schema = z.object({
  message: z.string().min(3, 'Ask something specific so the mentor can help'),
})

type FormValues = z.infer<typeof schema>

export function AiMentorPage() {
  const pushToast = useUiStore((state) => state.pushToast)
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { message: '' },
  })

  const quickPrompts = useMemo(() => mentorPrompts, [])

  const onSubmit = async (values: FormValues) => {
    try {
      await api.post('/ai/chat', { message: values.message })
      pushToast({ title: 'Mentor replied', message: 'A personalized response is ready in the timeline.', tone: 'success' })
    } catch {
      pushToast({ title: 'Offline mode', message: 'The AI mentor will answer from the local fallback until the API is live.', tone: 'warning' })
    }
    reset()
  }

  return (
    <div className="space-y-6">
      <SectionHeading
        eyebrow="AI mentor"
        title="Your in-game tutor"
        description="Use the mentor to simplify concepts, generate quizzes, extract weak spots, and recommend the next quest."
      />

      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <Panel className="space-y-5">
          <div className="flex items-center gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-cyan-300 to-violet-500 text-slate-950">
              <Bot className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-cyan-200/70">Mentor NPC</p>
              <h3 className="text-2xl font-semibold text-white">Ada, the learning guide</h3>
            </div>
          </div>

          <div className="rounded-[24px] border border-white/10 bg-slate-950/40 p-4 text-sm leading-7 text-white/70">
            <p className="text-white">
              I can explain difficult concepts, generate revision cards, build practice quizzes, and
              recommend quests based on your weak topics.
            </p>
            <p className="mt-3">
              Try asking for an explanation like you are 10, a step-by-step hint, or a 3-minute summary.
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <textarea
              {...register('message')}
              rows={5}
              placeholder="Explain fractions with examples and give me 3 practice questions..."
              className="w-full rounded-[24px] border border-white/10 bg-white/5 px-4 py-4 text-sm leading-6 text-white outline-none transition placeholder:text-white/35 focus:border-cyan-300/40 focus:ring-4 focus:ring-cyan-300/10 sm:text-base"
            />
            <div className="flex flex-wrap gap-3">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02] disabled:opacity-60 sm:w-auto"
              >
                <Sparkles className="h-4 w-4" />
                Ask mentor
              </button>
              <button
                type="button"
                onClick={() => pushToast({ title: 'Prompt copied', message: 'Paste this into the mentor input to generate a study roadmap.', tone: 'default' })}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white/6 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/12 sm:w-auto"
              >
                <MessageSquarePlus className="h-4 w-4" />
                Copy prompt
              </button>
            </div>
          </form>
        </Panel>

        <Panel>
          <SectionHeading eyebrow="Quick actions" title="Suggested prompts" />
          <div className="space-y-3">
            {quickPrompts.map((prompt) => (
              <button
                key={prompt}
                type="button"
                onClick={() => pushToast({ title: 'Prompt selected', message: prompt, tone: 'success' })}
                className="flex w-full items-center justify-between rounded-[22px] border border-white/10 bg-white/5 px-4 py-3 text-left text-sm text-white/80 transition hover:bg-white/10"
              >
                {prompt}
                <Lightbulb className="h-4 w-4 text-amber-300" />
              </button>
            ))}
          </div>
        </Panel>
      </div>
    </div>
  )
}
