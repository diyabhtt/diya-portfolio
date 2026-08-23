export function Intro() {
  return (
    <section id="intro" data-world-section="intro" className="world-panel intro-panel">
      <div className="section-content intro-content">
        <p className="intro-content__hello">Hi, I’m</p>
        <h1>Diya.</h1>
        <p className="intro-content__role">
          Software Engineer <span>·</span> AI <span>·</span> Research
        </p>
        <p className="intro-content__lede">
          I build useful software, intelligent systems, and things people
          remember.
        </p>
      </div>
      <p className="world-hint">
        <span>← A / D or arrows to move</span>
        <span>Space to jump →</span>
      </p>
    </section>
  )
}
