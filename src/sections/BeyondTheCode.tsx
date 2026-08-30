import { InfoCard } from '../components/InfoCard'
import { SectionHeading } from '../components/SectionHeading'

export function BeyondTheCode() {
  return (
    <section id="beyond" data-world-section="beyond" className="world-panel">
      <div className="section-content">
        <SectionHeading eyebrow="Leadership + Community" title="Beyond the Code" />
        <div className="beyond-grid">
          <InfoCard
            eyebrow="Artificial Intelligence Society"
            title="Project Manager"
          >
            <h4>What I Led</h4>
            <p>
              I led a six-person team building an AI kitchen assistant across
              computer vision, Flutter, SQL, backend work, and technical
              integration. I planned milestones, helped teammates debug, and
              mentored newer builders through Git and GitHub workflows.
            </p>
            <h4>Impact</h4>
            <p>
              I created a collaborative structure that helped the team turn an
              idea into a functioning build, and ran ML/CV workshops for 70+
              students.
            </p>
          </InfoCard>

          <InfoCard eyebrow="ACM Outreach" title="Logistics Officer">
            <h4>What I Do</h4>
            <p>
              I connect ACM with local schools, coordinate workshops and event
              logistics, and help bring hands-on computer-science experiences to
              younger students.
            </p>
            <h4>Impact</h4>
            <p>
              The work gives students a direct path to meet college builders,
              try technical workshops, and see themselves participating in
              computing communities.
            </p>
          </InfoCard>

          <InfoCard eyebrow="NTHS Hackathon" title="100+ High-School Participants" dark>
            <p>
              I supported logistics and event execution for ACM’s large-scale
              high-school hackathon, helping students experience coding,
              collaboration, and hackathon-style problem solving.
            </p>
          </InfoCard>
        </div>
      </div>
    </section>
  )
}
