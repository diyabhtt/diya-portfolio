import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { PortfolioLink } from '../components/PortfolioLink'
import { contactEmail, contactLinks } from '../data/portfolio'

export function Contact() {
  const emailDialogRef = useRef<HTMLDialogElement>(null)

  const closeEmailDialog = () => emailDialogRef.current?.close()

  return (
    <section id="contact" data-world-section="contact" className="world-panel contact-panel">
      <div className="section-content contact-content">
        <p className="eyebrow">What’s Next?</p>
        <h2>Let’s build something.</h2>
        <p>
          I’m interested in hard problems, good teams, and ideas worth building.
        </p>
        <div className="contact-links">
          <button
            className="portfolio-link portfolio-link--dark"
            type="button"
            onClick={() => emailDialogRef.current?.showModal()}
          >
            Email
          </button>
          {Object.entries(contactLinks).map(([label, href]) => (
            <PortfolioLink
              key={label}
              href={href}
            >
              {label}
            </PortfolioLink>
          ))}
          <Link className="portfolio-link portfolio-link--light" to="/resume">
            Resume
          </Link>
        </div>
        <p className="contact-content__return">← Run back anytime</p>
      </div>

      <dialog
        ref={emailDialogRef}
        className="email-dialog"
        aria-labelledby="email-dialog-title"
        onClick={(event) => {
          if (event.target === event.currentTarget) closeEmailDialog()
        }}
      >
        <button
          className="email-dialog__close"
          type="button"
          aria-label="Close email popup"
          onClick={closeEmailDialog}
        >
          ×
        </button>
        <p className="eyebrow">Email</p>
        <h3 id="email-dialog-title">Let’s talk.</h3>
        <p className="email-dialog__address">{contactEmail}</p>
      </dialog>
    </section>
  )
}
