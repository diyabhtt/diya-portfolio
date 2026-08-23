type SectionHeadingProps = {
  eyebrow: string
  title: string
  subtitle?: string
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: SectionHeadingProps) {
  return (
    <header className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {subtitle && <p className="section-heading__subtitle">{subtitle}</p>}
    </header>
  )
}
