import type { PropsWithChildren } from 'react'

type InfoCardProps = PropsWithChildren<{
  eyebrow?: string
  title?: string
  dark?: boolean
  className?: string
}>

export function InfoCard({
  eyebrow,
  title,
  dark = false,
  className = '',
  children,
}: InfoCardProps) {
  return (
    <article className={`info-card ${dark ? 'info-card--dark' : ''} ${className}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      {title && <h3>{title}</h3>}
      <div className="info-card__body">{children}</div>
    </article>
  )
}
