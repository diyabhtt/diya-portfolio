import { PortfolioLink } from '../components/PortfolioLink'
import { contactLinks } from '../data/portfolio'

export function Contact() {
  return (
    <section id="contact" data-world-section="contact" className="world-panel contact-panel">
      <div className="section-content contact-content">
        <p className="eyebrow">What’s Next?</p>
        <h2>Let’s build something.</h2>
        <p>
          I’m interested in hard problems, good teams, and ideas worth building.
        </p>
        <div className="contact-links">
          {Object.entries(contactLinks).map(([label, href], index) => (
            <PortfolioLink
              key={label}
              href={href}
              variant={index === 0 ? 'dark' : 'light'}
            >
              {label}
            </PortfolioLink>
          ))}
        </div>
        <p className="contact-content__return">← Run back anytime</p>
      </div>
    </section>
  )
}
