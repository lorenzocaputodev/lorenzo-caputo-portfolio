// ===== Composizione della pagina =====
import { useCallback, useRef, useState } from 'react'
import { content } from './content'
import { SiteDecor } from './components/layout/SiteDecor'
import { SkipLink } from './components/layout/SkipLink'
import { Topbar } from './components/layout/Topbar'
import { AboutSection } from './components/sections/AboutSection'
import { ContactSection } from './components/sections/ContactSection'
import { HeroSection } from './components/sections/HeroSection'
import { JourneySection } from './components/sections/JourneySection'
import { ProjectSection } from './components/sections/ProjectSection'
import { SkillsSection } from './components/sections/SkillsSection'
import { useCustomCursor } from './hooks/useCustomCursor'
import { useLenisScroll } from './hooks/useLenisScroll'
import { useMobileMenuBehavior } from './hooks/useMobileMenuBehavior'
import { usePortraitTilt } from './hooks/usePortraitTilt'
import { useScrollReveal } from './hooks/useScrollReveal'

export default function App({ language }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const mobileNavRef = useRef(null)
  const cursorDotRef = useRef(null)
  const cursorTrailRefs = useRef([])
  const portraitRef = useRef(null)

  const closeMenu = useCallback(() => setMobileMenuOpen(false), [])
  const toggleMenu = useCallback(() => setMobileMenuOpen((open) => !open), [])

  const {
    about,
    contact,
    footer,
    journey,
    navItems,
    profile,
    project,
    skills,
    ui,
  } = content[language]

  useLenisScroll()
  useScrollReveal()
  useMobileMenuBehavior(mobileMenuOpen, closeMenu, mobileNavRef)
  useCustomCursor(cursorDotRef, cursorTrailRefs)
  usePortraitTilt(portraitRef)

  return (
    <div className="site-shell">
      <SkipLink label={ui.skipToContentLabel} />
      <SiteDecor cursorDotRef={cursorDotRef} cursorTrailRefs={cursorTrailRefs} />

      <Topbar
        language={language}
        mobileMenuOpen={mobileMenuOpen}
        mobileNavRef={mobileNavRef}
        navItems={navItems}
        onCloseMenu={closeMenu}
        onToggleMenu={toggleMenu}
        profile={profile}
        ui={ui}
      />

      <main id="main-content">
        <HeroSection profile={profile} portraitRef={portraitRef} />
        <AboutSection about={about} />
        <JourneySection journey={journey} />
        <SkillsSection skills={skills} />
        <ProjectSection profile={profile} project={project} />
        <ContactSection contact={contact} footer={footer} profile={profile} />
      </main>
    </div>
  )
}
