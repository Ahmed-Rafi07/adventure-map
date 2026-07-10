import { motion } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'

const messages = [
  'Preparing your adventure...',
  'Loading your next quest...',
  'Summoning your AI Mentor...',
  'Building your learning world...',
  'Almost Ready...',
]

export function SplashLoader() {
  const [messageIndex, setMessageIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  const currentMessage = useMemo(() => messages[messageIndex % messages.length], [messageIndex])

  useEffect(() => {
    const timer = window.setTimeout(() => {
      if (!isDeleting && displayText === currentMessage) {
        setIsDeleting(true)
        return
      }

      if (isDeleting && displayText === '') {
        setIsDeleting(false)
        setMessageIndex((value) => (value + 1) % messages.length)
        return
      }

      setDisplayText((value) => {
        if (isDeleting) {
          return value.slice(0, -1)
        }

        return currentMessage.slice(0, value.length + 1)
      })
    }, isDeleting ? 28 : displayText === currentMessage ? 320 : 42)

    return () => window.clearTimeout(timer)
  }, [currentMessage, displayText, isDeleting])

  return (
    <motion.div
      className="fixed inset-0 z-[100] grid place-items-center overflow-hidden bg-[#020617] px-6 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.45, ease: 'easeInOut' } }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.18),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(139,92,246,0.2),_transparent_28%),linear-gradient(180deg,#020617_0%,#050816_55%,#020617_100%)]" />

      <div className="absolute inset-0 opacity-70">
        {[
          { top: '18%', left: '14%', size: 10, delay: 0 },
          { top: '28%', left: '78%', size: 8, delay: 0.4 },
          { top: '62%', left: '12%', size: 12, delay: 0.8 },
          { top: '70%', left: '74%', size: 9, delay: 1.2 },
          { top: '42%', left: '50%', size: 7, delay: 1.6 },
        ].map((particle) => (
          <motion.span
            key={`${particle.top}-${particle.left}`}
            className="absolute rounded-full bg-cyan-200/70 blur-[1px]"
            style={{ top: particle.top, left: particle.left, width: particle.size, height: particle.size }}
            animate={{ y: [0, -18, 0], opacity: [0.2, 0.85, 0.2], scale: [1, 1.4, 1] }}
            transition={{ duration: 4.5, repeat: Number.POSITIVE_INFINITY, delay: particle.delay, ease: 'easeInOut' }}
          />
        ))}
      </div>

      <motion.div
        className="relative z-10 w-full max-w-2xl rounded-[36px] border border-white/12 bg-white/8 p-8 text-center shadow-[0_30px_120px_rgba(0,0,0,0.55)] backdrop-blur-2xl sm:p-10"
        initial={{ opacity: 0, scale: 0.96, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="mx-auto flex w-fit items-center gap-3 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs uppercase tracking-[0.35em] text-cyan-100/80 shadow-[0_0_40px_rgba(34,211,238,0.12)]">
          <span className="h-2 w-2 rounded-full bg-cyan-200 shadow-[0_0_12px_rgba(103,232,249,0.9)]" />
          StudyQuest
        </div>

        <h1 className="mt-6 bg-gradient-to-r from-cyan-100 via-white to-violet-200 bg-clip-text text-4xl font-black tracking-tight text-transparent drop-shadow-[0_0_24px_rgba(103,232,249,0.18)] sm:text-6xl">
          StudyQuest
        </h1>

        <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-200/70 sm:text-base">
          Your premium learning arena is assembling the dashboard, mentors, quests, and rewards.
        </p>

        <div className="relative mx-auto mt-8 flex h-20 w-20 items-center justify-center">
          <motion.div
            className="absolute inset-0 rounded-full border border-cyan-300/25"
            animate={{ scale: [1, 1.08, 1], opacity: [0.45, 0.85, 0.45] }}
            transition={{ duration: 1.9, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute inset-2 rounded-full border border-violet-300/20"
            animate={{ rotate: 360 }}
            transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, ease: 'linear' }}
          />
          <motion.div
            className="absolute h-3 w-3 rounded-full bg-cyan-200 shadow-[0_0_24px_rgba(103,232,249,0.9)]"
            animate={{ x: [0, 24, 0, -24, 0], y: [0, -12, 0, 12, 0] }}
            transition={{ duration: 2.4, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
          />
          <div className="grid grid-cols-3 gap-1.5">
            {[0, 1, 2].map((index) => (
              <motion.span
                key={index}
                className="h-3 w-3 rounded-full bg-white/90 shadow-[0_0_18px_rgba(255,255,255,0.45)]"
                animate={{ y: [0, -8, 0], opacity: [0.35, 1, 0.35] }}
                transition={{ duration: 0.9, repeat: Number.POSITIVE_INFINITY, delay: index * 0.15, ease: 'easeInOut' }}
              />
            ))}
          </div>
        </div>

        <div className="mt-8 min-h-8 text-sm font-medium text-white/85 sm:text-base">
          <span>{displayText}</span>
          <motion.span
            className="ml-1 inline-block h-[1em] w-[0.12em] rounded-full bg-cyan-200 align-[-0.12em]"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.9, repeat: Number.POSITIVE_INFINITY, ease: 'linear' }}
          />
        </div>
      </motion.div>
    </motion.div>
  )
}