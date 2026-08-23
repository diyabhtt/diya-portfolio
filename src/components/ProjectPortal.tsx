import { Link } from 'react-router-dom'
import type { Project } from '../data/projects'

export function ProjectPortal({ project }: { project: Project }) {
  return (
    <article className="project-portal" data-project-slug={project.slug}>
      <p className="eyebrow">Jump to open ↗</p>
      <h3>{project.title}</h3>
      <p>{project.summary}</p>
      <Link to={`/projects/${project.slug}`}>
        Open <span aria-hidden="true">↗</span>
        <span className="sr-only"> {project.title} project</span>
      </Link>
      <span className="project-portal__arrow" aria-hidden="true">
        ↑
      </span>
    </article>
  )
}
