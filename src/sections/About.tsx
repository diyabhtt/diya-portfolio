import { InfoCard } from '../components/InfoCard'
import { SectionHeading } from '../components/SectionHeading'
import { SkillChip } from '../components/SkillChip'
import { skills } from '../data/portfolio'

export function About() {
  return (
    <section id="about" data-world-section="about" className="world-panel">
      <div className="section-content about-layout">
        <div className="about-layout__intro">
          <SectionHeading
            eyebrow="About me"
            title={'I like turning messy problems\ninto simple systems.'}
          />
          <p className="section-copy">
            I’m a computer science student, software engineer, AI builder, and
            researcher. I like building useful things, presenting ideas,
            leading teams, and learning by making.
          </p>
          <InfoCard eyebrow="Education" title="University of Texas at Dallas">
            <p>B.S. Computer Science</p>
            <p>Minor in Business Administration</p>
            <p>Class of 2028</p>
          </InfoCard>
        </div>

        <div className="skills-board">
          <p className="eyebrow">Skills</p>
          {Object.entries(skills).map(([group, items]) => (
            <div className="skill-group" key={group}>
              <h3>{group}</h3>
              <div className="skill-group__chips">
                {items.map((skill) => (
                  <SkillChip key={skill}>{skill}</SkillChip>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
