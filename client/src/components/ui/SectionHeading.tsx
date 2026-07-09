import type { ReactNode } from 'react'

interface Props {
  eyebrow?: string
  title: string
  description?: string
  action?: ReactNode
}

export function SectionHeading({ eyebrow, title, description, action }: Props) {
  return (
    <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div>
        {eyebrow ? <p className="text-xs uppercase tracking-[0.35em] text-cyan-200/70">{eyebrow}</p> : null}
        <h3 className="mt-2 text-2xl font-semibold text-white">{title}</h3>
        {description ? <p className="mt-2 max-w-2xl text-sm leading-6 text-white/65">{description}</p> : null}
      </div>
      {action}
    </div>
  )
}
