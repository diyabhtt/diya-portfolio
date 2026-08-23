import { InfoCard } from '../components/InfoCard'
import { PortfolioLink } from '../components/PortfolioLink'
import { SectionHeading } from '../components/SectionHeading'
import { autoWispContributions, researchLinks } from '../data/portfolio'

export function AutoWisp() {
  return (
    <section id="autowisp" data-world-section="autowisp" className="world-panel">
      <div className="section-content research-layout">
        <SectionHeading
          eyebrow="Undergraduate Research Assistant"
          title="AutoWISP / Exoplanet Group"
        />
        <div className="research-layout__overview">
          <InfoCard
            eyebrow="What AutoWISP Does"
            title="Raw Images → Science-Ready Light Curves"
          >
            <p>
              AutoWISP is an astronomical photometry pipeline that turns raw
              telescope images into calibrated, research-ready measurements and
              light curves through image calibration, star detection,
              photometry, flux correction, validation, and researcher review.
            </p>
          </InfoCard>
          <InfoCard eyebrow="Project Impact" title="Making the Pipeline Easier to Use" dark>
            <p>
              My work lowered the barrier for researchers, improved the
              reliability and visibility of calibration and photometry
              workflows, and supported reproducible analysis and publication.
            </p>
          </InfoCard>
        </div>

        <p className="eyebrow research-layout__label">What I Changed</p>
        <div className="contribution-grid contribution-grid--five">
          {autoWispContributions.map((item) => (
            <InfoCard key={item.title} eyebrow={item.eyebrow} title={item.title}>
              <p>{item.body}</p>
            </InfoCard>
          ))}
        </div>
        <div className="link-row">
          <PortfolioLink href={researchLinks.autoWispZenodo} variant="dark">
            View Zenodo ↗
          </PortfolioLink>
          <PortfolioLink href={researchLinks.autoWispPoster}>
            View Research Poster ↗
          </PortfolioLink>
        </div>
      </div>
    </section>
  )
}
