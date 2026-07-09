import type { ReactNode } from 'react'
import { cn } from '../../lib/utils'

interface Props {
  className?: string
  children: ReactNode
}

export function Panel({ className, children }: Props) {
  return (
    <section className={cn('rounded-[28px] border border-white/10 bg-white/5 p-5 shadow-xl backdrop-blur-xl', className)}>
      {children}
    </section>
  )
}
