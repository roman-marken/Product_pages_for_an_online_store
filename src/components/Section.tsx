import type { ReactNode } from 'react'

type SectionProps = {
  title: string
  children: ReactNode
}

export default function Section({ title, children }: SectionProps) {
  return (
    <section>
      <h2 className="mb-6 text-2xl font-semibold tracking-tight">{title}</h2>
      {children}
    </section>
  )
}
