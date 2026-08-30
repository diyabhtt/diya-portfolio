import { Link } from 'react-router-dom'
import resumePdf from '../../files/resume.pdf?url'

export function ResumePage() {
  return (
    <main className="resume-world">
      <header className="project-world__hud">
        <Link to="/">DIYA.RUN</Link>
        <span>Resume</span>
        <div className="hud__line" />
      </header>

      <div className="resume-world__content">
        <div className="resume-world__heading">
          <div>
            <Link className="back-link" to="/?section=contact">
              ← Back to main world
            </Link>
            <p className="eyebrow">Diya Bhattarai</p>
            <h1>Resume</h1>
          </div>
          <div className="resume-world__actions">
            <a href={resumePdf} target="_blank" rel="noreferrer">
              Open PDF ↗
            </a>
            <a href={resumePdf} download="Diya-Bhattarai-Resume.pdf">
              Download ↓
            </a>
          </div>
        </div>

        <object
          className="resume-world__document"
          data={resumePdf}
          type="application/pdf"
          aria-label="Diya Bhattarai resume"
        >
          <p>
            This browser cannot display the resume inline.{' '}
            <a href={resumePdf} target="_blank" rel="noreferrer">
              Open the resume PDF
            </a>
            .
          </p>
        </object>
      </div>
    </main>
  )
}
