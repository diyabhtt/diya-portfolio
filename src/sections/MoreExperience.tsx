import { InfoCard } from '../components/InfoCard'
import { SectionHeading } from '../components/SectionHeading'
import { moreExperience } from '../data/portfolio'

export function MoreExperience() {
  return (
    <section
      id="more-experience"
      data-world-section="more-experience"
      className="world-panel"
    >
      <div className="section-content">
        <SectionHeading eyebrow="Experience" title="More Experience" />
        <div className="three-card-grid">
          {moreExperience.map((experience) => (
            <InfoCard
              key={experience.eyebrow}
              eyebrow={experience.eyebrow}
              title={experience.title}
            >
              <h4>Project / Context</h4>
              <p>{experience.context}</p>
              <h4>My Contributions</h4>
              <ul className="compact-list">
                {experience.contributions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <h4>Impact</h4>
              <p>{experience.impact}</p>
            </InfoCard>
          ))}
        </div>
      </div>
    </section>
  )
}
