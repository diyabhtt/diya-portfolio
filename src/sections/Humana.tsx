import { InfoCard } from '../components/InfoCard'
import { SectionHeading } from '../components/SectionHeading'

export function Humana() {
  return (
    <section id="humana" data-world-section="humana" className="world-panel">
      <div className="section-content experience-layout">
        <SectionHeading
          eyebrow="Experience · Summer 2026"
          title="Humana"
          subtitle="AI / Full-Stack Engineer Intern"
        />

        <div className="experience-layout__grid">
          <InfoCard eyebrow="The Project" title="Claims Control Tower">
            <p>
              A platform that helps analysts spot unusual claims behavior,
              understand KPI anomalies, and investigate what changed without
              searching across disconnected tools and data sources.
            </p>
            <p>
              Its AI assistant turns natural-language questions into
              controlled data access and guided KPI drilldowns.
            </p>
          </InfoCard>

          <InfoCard eyebrow="My Contributions" title="The Chatbot Experience">
            <ul className="compact-list">
              <li>I owned the chatbot experience within our five-intern team.</li>
              <li>
                I built FastAPI orchestration that mapped questions to 32
                controlled KPI and drilldown tools.
              </li>
              <li>
                I grounded answers in Databricks data, cached KPI context, and
                the page an analyst was viewing.
              </li>
              <li>
                I added multi-step execution, streamed SSE responses, automated
                tests, linting, SonarQube, and CI checks.
              </li>
              <li>
                I shaped requirements with SMEs, product managers, engineers,
                and data architects. New code reached 80%+ test coverage.
              </li>
            </ul>
          </InfoCard>

          <InfoCard
            eyebrow="Impact"
            title="Faster, Clearer Investigation"
            dark
          >
            <p>
              Analysts could ask one assistant for relevant claims context and
              move into drilldowns more quickly. The experience made complex
              investigations more conversational and accessible, and the team
              demonstrated it to senior leadership.
            </p>
          </InfoCard>

          <InfoCard eyebrow="Intern Hackathon · Runner-Up" title="Live AI Call-Center Agent">
            <p>
              Our five-person team built a multilingual voice and text agent
              that could access member data, identify account issues, and guide
              common resolutions end to end when possible.
            </p>
            <p>
              I served as the sole presenter for the final demo to the CIO, VPs,
              managers, and the intern cohort.
            </p>
          </InfoCard>

          <InfoCard eyebrow="Claude Webinar · 100+ Employees" title="One Workflow, Three Software Roles">
            <p>
              We demonstrated an accessibility-tooltip feature through a full
              AI-assisted delivery loop: a Product Manager workflow shaped the
              story, a developer workflow implemented it, and a QA workflow
              tested the result through completion.
            </p>
          </InfoCard>
        </div>
      </div>
    </section>
  )
}
