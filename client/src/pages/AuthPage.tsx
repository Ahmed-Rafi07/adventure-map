import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Crown, Sparkles } from 'lucide-react'
import { useAuthStore } from '../store/auth'
import { useUiStore } from '../store/ui'

const schema = z.object({
  name: z.string().min(2, 'Enter your name'),
  email: z.string().email('Enter a valid email'),
  role: z.enum(['student', 'mentor', 'admin']),
})

type FormValues = z.infer<typeof schema>

export function AuthPage() {
  const signIn = useAuthStore((state) => state.signIn)
  const pushToast = useUiStore((state) => state.pushToast)
  const navigate = useNavigate()
  const location = useLocation()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: 'Aanya Nova',
      email: 'aanya@levelup.ai',
      role: 'student',
    },
  })

  useEffect(() => {
    document.documentElement.dataset.theme = 'dark'
  }, [])

  const onSubmit = async (values: FormValues) => {
    signIn(values)
    pushToast({ title: 'Welcome back', message: 'Your adventure profile has been restored.', tone: 'success' })
    navigate((location.state as { from?: string } | null)?.from ?? '/dashboard', { replace: true })
  }

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.2),_transparent_35%),linear-gradient(180deg,#020617_0%,#0f172a_100%)] px-4 py-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-cyan-100/80">
            <Crown className="h-4 w-4" />
            LevelUp AI: turn studying into an RPG adventure
          </div>
          <h1 className="max-w-3xl text-5xl font-semibold leading-tight sm:text-6xl">
            Every lesson becomes a quest. Every quiz becomes a boss battle.
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-white/70">
            Sign in to continue your campaign, restore progress, and ask the AI mentor to guide your next move.
          </p>
          <div className="flex flex-wrap gap-3 text-sm text-white/75">
            {['Worlds', 'Boss battles', 'Loot', 'AI mentor'].map((item) => (
              <span key={item} className="rounded-full border border-white/10 bg-white/6 px-4 py-2">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-[34px] border border-white/10 bg-white/8 p-6 shadow-[0_30px_100px_rgba(0,0,0,0.45)] backdrop-blur-xl">
          <div className="mb-6 flex items-center gap-3">
            <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-cyan-300 to-violet-500 text-slate-950">
              <Sparkles className="h-7 w-7" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-cyan-200/70">Portal access</p>
              <h2 className="text-2xl font-semibold text-white">Enter the realm</h2>
            </div>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className="mb-2 block text-sm text-white/70">Name</label>
              <input
                {...register('name')}
                className="w-full rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-cyan-300/40 focus:ring-4 focus:ring-cyan-300/10"
                placeholder="Aanya Nova"
              />
              {errors.name ? <p className="mt-2 text-sm text-rose-300">{errors.name.message}</p> : null}
            </div>

            <div>
              <label className="mb-2 block text-sm text-white/70">Email</label>
              <input
                {...register('email')}
                className="w-full rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-cyan-300/40 focus:ring-4 focus:ring-cyan-300/10"
                placeholder="hero@levelup.ai"
              />
              {errors.email ? <p className="mt-2 text-sm text-rose-300">{errors.email.message}</p> : null}
            </div>

            <div>
              <label className="mb-2 block text-sm text-white/70">Role</label>
              <select
                {...register('role')}
                className="w-full rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 text-white outline-none transition focus:border-cyan-300/40 focus:ring-4 focus:ring-cyan-300/10"
              >
                <option value="student">Student</option>
                <option value="mentor">Mentor</option>
                <option value="admin">Admin</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.01] disabled:opacity-60"
            >
              Begin campaign
            </button>
          </form>

          <div className="mt-5 flex items-center justify-between text-sm text-white/60">
            <span>Google login, Firebase auth, and password reset can attach here.</span>
            <Link to="/dashboard" className="text-cyan-200 hover:text-cyan-100">
              Skip demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
