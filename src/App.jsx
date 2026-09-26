import { useCallback, useRef, useState } from 'react'
import { content, DEFAULT_LANGUAGE, supportedLanguages } from './content'
import { SiteDecor } from './components/layout/SiteDecor'
import { SkipLink } from './components/layout/SkipLink'
import { Topbar } from './components/layout/Topbar'
import { AboutSection } from './components/sections/AboutSection'
import { CertificationsSection } from './components/sections/CertificationsSection'
import { ContactSection } from './components/sections/ContactSection'
import { ExperienceSection } from './components/sections/ExperienceSection'
import { GrowthSection } from './components/sections/GrowthSection'
import { HeroSection } from './components/sections/HeroSection'
import { ProjectSection } from './components/sections/ProjectSection'
import { SkillsSection } from './components/sections/SkillsSection'
import { useCustomCursor } from './hooks/useCustomCursor'
import { useLenisScroll } from './hooks/useLenisScroll'
import { useMobileMenuBehavior } from './hooks/useMobileMenuBehavior'
import { usePortfolioMeta } from './hooks/usePortfolioMeta'
import { usePortraitTilt } from './hooks/usePortraitTilt'
import { useScrollReveal } from './hooks/useScrollReveal'
import { getInitialLang, storeLang } from './utils/language'

export default function App() {
  const [language, setLanguage] = useState(() => getInitialLang(supportedLanguages, DEFAULT_LANGUAGE))
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const mobileNavRef = useRef(null)
  const cursorDotRef = useRef(null)
  const cursorTrailRefs = useRef([])
  const portraitRef = useRef(null)

  // Stable callbacks keep the memoized Topbar from re-rendering on every App render.
  const closeMenu = useCallback(() => setMobileMenuOpen(false), [])
  const toggleMenu = useCallback(() => setMobileMenuOpen((open) => !open), [])
  const changeLanguage = useCallback((nextLanguage) => {
    setLanguage(nextLanguage)
    storeLang(nextLanguage)
  }, [])

  const {
    about,
    certifications,
    contact,
    experience,
    footer,
    growth,
    meta,
    navItems,
    profile,
    project,
    skills,
    ui,
  } = content[language]

  usePortfolioMeta(language, meta)
  useLenisScroll()
  useScrollReveal(language)
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
        onLanguageChange={changeLanguage}
        onToggleMenu={toggleMenu}
        profile={profile}
        ui={ui}
      />

      <main id="main-content">
        <HeroSection profile={profile} portraitRef={portraitRef} />
        <AboutSection about={about} />
        <GrowthSection growth={growth} />
        <ExperienceSection experience={experience} />
        <SkillsSection skills={skills} />
        <ProjectSection profile={profile} project={project} ui={ui} />
        <CertificationsSection certifications={certifications} />
        <ContactSection contact={contact} footer={footer} profile={profile} />
      </main>
    </div>
  )
}
