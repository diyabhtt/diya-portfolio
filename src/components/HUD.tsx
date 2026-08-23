import { navigation } from '../data/portfolio'

type HUDProps = {
  activeSection: string
  onNavigate: (target: string) => void
}

export function HUD({ activeSection, onNavigate }: HUDProps) {
  return (
    <header className="hud">
      <button className="hud__brand" onClick={() => onNavigate('intro')}>
        DIYA.RUN
      </button>
      <nav
        id="fixed-navigation"
        className="hud__nav"
        aria-label="Portfolio sections"
        tabIndex={-1}
      >
        {navigation.map((item) => (
          <button
            key={item.target}
            className={activeSection === item.target ? 'is-active' : ''}
            onClick={() => onNavigate(item.target)}
            aria-current={activeSection === item.target ? 'page' : undefined}
          >
            {item.label}
          </button>
        ))}
      </nav>
      <div className="hud__line" />
    </header>
  )
}
