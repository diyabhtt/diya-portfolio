import { Link, Navigate, useParams } from 'react-router-dom'
import { findProject } from '../data/projects'

export function ProjectDetail() {
  const { slug } = useParams()
  const project = findProject(slug)

  if (!project) return <Navigate to="/" replace />

  return (
    <main className="project-world">
      <header className="project-world__hud">
        <Link to="/">DIYA.RUN</Link>
        <span>Project World</span>
        <div className="hud__line" />
      </header>

      <div className="project-world__content">
        <Link className="back-link" to="/?section=projects">
          ← Back to main world
        </Link>

        <header className="project-world__title">
          <p className="eyebrow">{project.subtitle}</p>
          <h1>{project.title}</h1>
          <p>{project.tech.join(' · ')}</p>
        </header>

        <div className="project-world__grid">
          <article>
            <p className="eyebrow">Project Overview</p>
            <h2>What This Project Is</h2>
            <p>{project.overview}</p>
          </article>
          <article>
            <p className="eyebrow">My Contributions</p>
            <h2>What I Built</h2>
            <p>{project.contributions}</p>
          </article>
          <article>
            <p className="eyebrow">Technical Implementation</p>
            <h2>How It Works</h2>
            <p>{project.technical}</p>
          </article>
          <article className="project-world__impact">
            <p className="eyebrow">Impact / Result</p>
            <h2>Why It Matters</h2>
            <p>{project.impact}</p>
          </article>
        </div>

        <section className="media-placeholder" aria-label="Project media placeholder">
          <p className="eyebrow">Video / Screenshots / Diagrams</p>
          <div>
            <span aria-hidden="true">＋</span>
            <p>Project media coming soon</p>
          </div>
        </section>

        <div className="project-world__links">
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer">
              Demo ↗
            </a>
          )}
          {project.video && (
            <a href={project.video} target="_blank" rel="noreferrer">
              Video ↗
            </a>
          )}
          {!project.github && !project.demo && !project.video && (
            <span className="portfolio-link portfolio-link--disabled" aria-disabled="true">
              Project links coming soon
            </span>
          )}
        </div>
      </div>

      <div className="project-world__ground" aria-hidden="true">
        <span className="project-world__mini-dino">◆</span>
      </div>
    </main>
  )
}
