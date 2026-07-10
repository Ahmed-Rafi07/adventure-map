import { motion } from 'framer-motion'
import { Coins, Clock3, Sparkles, Swords } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Quest } from '../../types/domain'

export function QuestCard({ quest }: { quest: Quest }) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 280, damping: 20 }}
      className="rounded-[26px] border border-white/10 bg-slate-950/50 p-4 shadow-xl shadow-cyan-500/5 backdrop-blur sm:p-5"
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/70">{quest.subject}</p>
          <h4 className="mt-2 text-lg font-semibold text-white sm:text-xl">{quest.title}</h4>
          <p className="mt-1 text-sm text-white/55">{quest.kingdom}</p>
        </div>
        <span className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-xs font-medium text-white/80">
          {quest.difficulty}
        </span>
      </div>

      <div className="mt-5 h-2 rounded-full bg-white/10">
        <div
          className="h-2 rounded-full bg-gradient-to-r from-cyan-300 to-violet-400"
          style={{ width: `${quest.progress}%` }}
        />
      </div>

      <div className="mt-4 grid grid-cols-1 gap-3 text-sm text-white/70 sm:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
          <div className="flex items-center gap-2 text-amber-200">
            <Sparkles className="h-4 w-4" />
            XP
          </div>
          <p className="mt-2 text-white">{quest.xp}</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
          <div className="flex items-center gap-2 text-cyan-200">
            <Coins className="h-4 w-4" />
            Gold
          </div>
          <p className="mt-2 text-white">{quest.coins}</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
          <div className="flex items-center gap-2 text-rose-200">
            <Clock3 className="h-4 w-4" />
            Due
          </div>
          <p className="mt-2 text-white">{quest.dueAt}</p>
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="flex items-center gap-2 text-sm text-white/60">
          <Swords className="h-4 w-4 text-violet-300" />
          {quest.boss ? 'Boss fight unlocked' : 'Quest in progress'}
        </p>
        <Link
          to={`/quiz/${quest.id}`}
          className="inline-flex w-full items-center justify-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:scale-[1.02] sm:w-auto"
        >
          Enter Quest
        </Link>
      </div>
    </motion.article>
  )
}
