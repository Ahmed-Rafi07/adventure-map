import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle2, CircleAlert, Info, TriangleAlert, X } from 'lucide-react'
import { useUiStore } from '../store/ui'
import { cn } from '../lib/utils'

const toneMap = {
  default: { icon: Info, ring: 'border-white/10', glow: 'shadow-cyan-500/10' },
  success: { icon: CheckCircle2, ring: 'border-emerald-400/30', glow: 'shadow-emerald-500/10' },
  warning: { icon: TriangleAlert, ring: 'border-amber-400/30', glow: 'shadow-amber-500/10' },
  danger: { icon: CircleAlert, ring: 'border-rose-400/30', glow: 'shadow-rose-500/10' },
} as const

export function ToastViewport() {
  const toasts = useUiStore((state) => state.toasts)
  const dismissToast = useUiStore((state) => state.dismissToast)

  return (
    <div className="pointer-events-none fixed bottom-4 right-4 z-50 flex w-full max-w-sm flex-col gap-3 px-4 sm:px-0">
      <AnimatePresence>
        {toasts.map((toast) => {
          const tone = toneMap[toast.tone ?? 'default']
          const Icon = tone.icon

          return (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, y: 16, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.96 }}
              className={cn(
                'pointer-events-auto rounded-3xl border bg-slate-950/90 p-4 text-white shadow-2xl backdrop-blur-xl',
                tone.ring,
                tone.glow,
              )}
            >
              <div className="flex items-start gap-3">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-white/10">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-semibold">{toast.title}</p>
                  <p className="mt-1 text-sm text-white/70">{toast.message}</p>
                </div>
                <button
                  type="button"
                  className="rounded-full p-1 text-white/60 transition hover:bg-white/10 hover:text-white"
                  onClick={() => dismissToast(toast.id)}
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          )
        })}
      </AnimatePresence>
    </div>
  )
}
