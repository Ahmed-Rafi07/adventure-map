import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <div className="grid min-h-screen place-items-center bg-slate-950 px-4 text-white sm:px-6">
      <div className="max-w-md rounded-[32px] border border-white/10 bg-white/5 p-6 text-center shadow-2xl backdrop-blur sm:p-8">
        <p className="text-xs uppercase tracking-[0.35em] text-cyan-200/70">Lost in the void</p>
        <h1 className="mt-3 text-3xl font-semibold sm:text-4xl">That quest does not exist.</h1>
        <p className="mt-3 text-sm leading-6 text-white/70">Return to the dashboard and pick a valid route through the kingdom map.</p>
        <Link className="mt-6 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]" to="/dashboard">
          Return home
        </Link>
      </div>
    </div>
  )
}
