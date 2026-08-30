import { Link, Navigate, useParams } from 'react-router-dom'
import { findProject, type ProjectMedia } from '../data/projects'

function EmbeddedProjectMedia({ media }: { media: ProjectMedia }) {
  return (
    <section
      className={`project-media project-media--${media.layout}`}
      aria-labelledby="project-media-title"
    >
      <div className="project-media__header">
        <div>
          <p className="eyebrow">{media.eyebrow}</p>
          <h2 id="project-media-title">{media.title}</h2>
        </div>
        <a href={media.src} target="_blank" rel="noreferrer">
          {media.linkLabel}
        </a>
      </div>

      {media.kind === 'video' ? (
        <video controls preload="metadata" aria-label={media.title}>
          <source src={media.src} type="video/mp4" />
          Your browser does not support embedded video.
        </video>
      ) : (
        <object data={media.src} type="application/pdf" aria-label={media.title}>
          <p>
            This browser cannot display the PDF inline.{' '}
            <a href={media.src} target="_blank" rel="noreferrer">
              Open {media.title}
            </a>
            .
          </p>
        </object>
      )}
    </section>
  )
}

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

        {project.media && <EmbeddedProjectMedia media={project.media} />}

        {(project.github || project.demo || project.video) && (
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
          </div>
        )}
      </div>

      <div className="project-world__ground" aria-hidden="true">
        <span className="project-world__mini-dino">◆</span>
      </div>
    </main>
  )
}
