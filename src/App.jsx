import { useRef, useState } from 'react'
import { content, supportedLanguages } from './content'
import { AboutSection } from './components/AboutSection'
import { CertificationsSection } from './components/CertificationsSection'
import { ContactSection } from './components/ContactSection'
import { GrowthSection } from './components/GrowthSection'
import { HeroSection } from './components/HeroSection'
import { ProjectSection } from './components/ProjectSection'
import { SiteDecor } from './components/SiteDecor'
import { SkipLink } from './components/SkipLink'
import { SkillsSection } from './components/SkillsSection'
import { Topbar } from './components/Topbar'
import { ExperienceSection } from './components/ExperienceSection'
import { useCustomCursor } from './hooks/useCustomCursor'
import { useLenisScroll } from './hooks/useLenisScroll'
import { useMobileMenuBehavior } from './hooks/useMobileMenuBehavior'
import { usePortraitTilt } from './hooks/usePortraitTilt'
import { usePortfolioMeta } from './hooks/usePortfolioMeta'
import { useScrollReveal } from './hooks/useScrollReveal'
import { getInitialLang } from './utils/language'

export default function App() {
  const [language, setLanguage] = useState(() => getInitialLang(supportedLanguages))
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const mobileNavRef = useRef(null)
  const cursorDotRef = useRef(null)
  const cursorTrailRefs = useRef([])
  const portraitRef = useRef(null)

  const data = content[language] ?? content.en
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
  } = data

  usePortfolioMeta(language, meta)
  useLenisScroll()
  useScrollReveal(language)
  useMobileMenuBehavior(mobileMenuOpen, setMobileMenuOpen, mobileNavRef)
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
        onCloseMenu={() => setMobileMenuOpen(false)}
        onLanguageChange={setLanguage}
        onToggleMenu={() => setMobileMenuOpen((value) => !value)}
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
