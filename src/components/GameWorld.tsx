import { memo, useCallback, useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { usePlayerController } from '../hooks/usePlayerController'
import { About } from '../sections/About'
import { AutoWisp } from '../sections/AutoWisp'
import { BeyondTheCode } from '../sections/BeyondTheCode'
import { Contact } from '../sections/Contact'
import { HexdResearch } from '../sections/HexdResearch'
import { Humana } from '../sections/Humana'
import { Intro } from '../sections/Intro'
import { MoreExperience } from '../sections/MoreExperience'
import { Projects } from '../sections/Projects'
import { Dino } from './Dino'
import { HUD } from './HUD'
import { MobileControls } from './MobileControls'

const sectionToNavigation: Record<string, string> = {
  intro: 'intro',
  about: 'about',
  humana: 'humana',
  'more-experience': 'humana',
  autowisp: 'autowisp',
  hexd: 'autowisp',
  projects: 'projects',
  beyond: 'beyond',
  contact: 'contact',
}

const worldSections = [
  'intro',
  'about',
  'humana',
  'more-experience',
  'autowisp',
  'hexd',
  'projects',
  'beyond',
  'contact',
] as const

const WorldSections = memo(function WorldSections() {
  return (
    <>
      <Intro />
      <About />
      <Humana />
      <MoreExperience />
      <AutoWisp />
      <HexdResearch />
      <Projects />
      <BeyondTheCode />
      <Contact />
    </>
  )
})

export function GameWorld() {
  const viewportRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const collisionLockedRef = useRef(false)
  const location = useLocation()
  const navigate = useNavigate()
  const [dimensions, setDimensions] = useState({
    worldWidth: 12_000,
    viewportWidth: window.innerWidth,
  })
  const [reducedMotion, setReducedMotion] = useState(() =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updatePreference = () => setReducedMotion(media.matches)
    media.addEventListener('change', updatePreference)
    return () => media.removeEventListener('change', updatePreference)
  }, [])

  useEffect(() => {
    const updateDimensions = () => {
      if (!trackRef.current || !viewportRef.current) return
      setDimensions({
        worldWidth: trackRef.current.scrollWidth,
        viewportWidth: viewportRef.current.clientWidth,
      })
    }

    updateDimensions()
    const observer = new ResizeObserver(updateDimensions)
    if (trackRef.current) observer.observe(trackRef.current)
    if (viewportRef.current) observer.observe(viewportRef.current)
    window.addEventListener('resize', updateDimensions)
    return () => {
      observer.disconnect()
      window.removeEventListener('resize', updateDimensions)
    }
  }, [])

  const { player, cameraX, setControl, jump, moveTo } = usePlayerController({
    ...dimensions,
    reducedMotion,
  })

  const getSection = useCallback((target: string) => {
    return trackRef.current?.querySelector<HTMLElement>(`#${target}`) ?? null
  }, [])

  const goToSection = useCallback(
    (target: string) => {
      const section = getSection(target)
      if (!section) return
      moveTo(section.offsetLeft + dimensions.viewportWidth * 0.35)
    },
    [dimensions.viewportWidth, getSection, moveTo],
  )

  useEffect(() => {
    const requestedSection = new URLSearchParams(location.search).get('section')
    if (!requestedSection) return
    const frame = requestAnimationFrame(() => goToSection(requestedSection))
    return () => cancelAnimationFrame(frame)
  }, [goToSection, location.search])

  const panelWidth = dimensions.worldWidth / worldSections.length
  const activeSectionIndex = Math.min(
    worldSections.length - 1,
    Math.max(0, Math.floor(player.x / panelWidth)),
  )
  const activeWorldSection = worldSections[activeSectionIndex]

  const activeNavigation = sectionToNavigation[activeWorldSection] ?? 'intro'

  useEffect(() => {
    if (player.grounded) {
      collisionLockedRef.current = false
      return
    }
    if (player.y < 34 || collisionLockedRef.current || !trackRef.current) return

    const dino = trackRef.current.querySelector<HTMLElement>('[data-dino]')
    if (!dino) return
    const dinoRect = dino.getBoundingClientRect()
    const portals = trackRef.current.querySelectorAll<HTMLElement>(
      '[data-project-slug]',
    )

    for (const portal of portals) {
      const portalRect = portal.getBoundingClientRect()
      const overlaps =
        dinoRect.right > portalRect.left &&
        dinoRect.left < portalRect.right &&
        dinoRect.bottom > portalRect.top &&
        dinoRect.top < portalRect.bottom

      if (overlaps) {
        collisionLockedRef.current = true
        navigate(`/projects/${portal.dataset.projectSlug}`)
        break
      }
    }
  }, [navigate, player.grounded, player.x, player.y])

  return (
    <main className="game-shell">
      <a className="skip-link" href="#fixed-navigation">
        Skip to portfolio navigation
      </a>
      <HUD activeSection={activeNavigation} onNavigate={goToSection} />

      <div className="game-viewport" ref={viewportRef} aria-label="Interactive portfolio world">
        <div
          className="world-track"
          ref={trackRef}
          style={{ transform: `translate3d(${-cameraX}px, 0, 0)` }}
        >
          <WorldSections />
          <div className="ground-line" aria-hidden="true" />
          <Dino player={player} />
        </div>
      </div>

      <MobileControls onControl={setControl} onJump={jump} />
      <div className="sr-only" aria-live="polite">
        Current section: {activeWorldSection.replace('-', ' ')}
      </div>
    </main>
  )
}
