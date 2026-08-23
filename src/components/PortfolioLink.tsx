type PortfolioLinkProps = {
  href?: string
  children: string
  variant?: 'dark' | 'light'
}

export function PortfolioLink({
  href,
  children,
  variant = 'light',
}: PortfolioLinkProps) {
  const className = `portfolio-link portfolio-link--${variant}`

  if (!href) {
    return (
      <span className={`${className} portfolio-link--disabled`} aria-disabled="true">
        {children}
        <span className="sr-only"> — link coming soon</span>
      </span>
    )
  }

  return (
    <a className={className} href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  )
}
