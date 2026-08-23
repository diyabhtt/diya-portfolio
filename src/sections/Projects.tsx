import { ProjectPortal } from '../components/ProjectPortal'
import { SectionHeading } from '../components/SectionHeading'
import { projects } from '../data/projects'

export function Projects() {
  return (
    <section id="projects" data-world-section="projects" className="world-panel">
      <div className="section-content projects-layout">
        <SectionHeading
          eyebrow="Selected Work"
          title="Projects"
          subtitle="Jump into a card—or choose Open—to enter its project world."
        />
        <div className="project-portals">
          {projects.map((project) => (
            <ProjectPortal key={project.slug} project={project} />
          ))}
        </div>
      </div>
      <p className="world-hint world-hint--projects">
        Space to jump into a project
      </p>
    </section>
  )
}
