import type { ReactNode } from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

type CardProps = {
  children: ReactNode
  className?: string
}

export default function Card({ children, className }: CardProps) {
  // Передані класи можуть змінити базове оформлення картки.
  return (
    <article className={twMerge(clsx('rounded-2xl border border-stone-200 bg-white p-5', className))}>
      {children}
    </article>
  )
}
