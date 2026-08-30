import { InfoCard } from '../components/InfoCard'
import { PortfolioLink } from '../components/PortfolioLink'
import { SectionHeading } from '../components/SectionHeading'
import { hexDContributions, researchLinks } from '../data/portfolio'

export function HexdResearch() {
  return (
    <section id="hexd" data-world-section="hexd" className="world-panel">
      <div className="section-content research-layout">
        <SectionHeading
          eyebrow="Undergraduate Research Assistant"
          title="ACM Research + HeXD Lab"
        />

        <div className="research-layout__overview research-layout__overview--hexd">
          <InfoCard eyebrow="The Problem" title="XR Systems Forget What Left the Frame">
            <p>
              Computer-vision systems often understand what is visible now but
              lose context when objects disappear, people move, or interactions
              unfold over longer periods.
            </p>
          </InfoCard>
          <InfoCard eyebrow="Research Direction" title="Give the Scene a Memory" dark>
            <p>
              We build temporal scene graphs and memory-aware perception so a
              system can reason about people, objects, actions, and changing
              relationships across time—not only within one frame.
            </p>
          </InfoCard>
        </div>

        <p className="eyebrow research-layout__label">My Contributions</p>
        <div className="contribution-grid contribution-grid--three">
          {hexDContributions.map((item) => (
            <InfoCard key={item.title} eyebrow={item.eyebrow} title={item.title}>
              <p>{item.body}</p>
            </InfoCard>
          ))}
          <InfoCard eyebrow="Impact" title="Persistent, Context-Aware XR" dark>
            <p>
              The work helps the system remember earlier context, reason beyond
              a single frame, and move toward long-horizon spatial understanding.
            </p>
          </InfoCard>
          <article className="info-card research-media-card">
            <p className="eyebrow">Research Poster</p>
            <h3>YOLO: Intent-Aware Scene Memory</h3>
            <object
              data={researchLinks.hexDPoster}
              type="application/pdf"
              aria-label="YOLO: Intent-Aware Scene Descriptions and Memory for the Blind poster"
            >
              <a href={researchLinks.hexDPoster} target="_blank" rel="noreferrer">
                Open research poster
              </a>
            </object>
          </article>
        </div>
        <div className="link-row">
          <PortfolioLink href={researchLinks.hexDPoster} variant="dark">
            View Research Poster ↗
          </PortfolioLink>
        </div>
      </div>
    </section>
  )
}
