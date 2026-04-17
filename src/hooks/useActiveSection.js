import { useEffect, useRef, useState } from 'react'
import { SECTION_OBS } from '../utils/reveal'

export function useActiveSection(navItems) {
  const [activeSection, setActiveSection] = useState(navItems[0]?.href ?? '#about')
  const activeSectionRef = useRef(activeSection)

  useEffect(() => {
    activeSectionRef.current = activeSection
  }, [activeSection])

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.href.replace('#', '')))
      .filter(Boolean)

    if (!sections.length) return
    if (typeof IntersectionObserver === 'undefined') return

    const observer = new IntersectionObserver((entries) => {
      const nextSection = entries
        .filter((entry) => entry.isIntersecting)
        .sort((left, right) => right.intersectionRatio - left.intersectionRatio)
        .map((entry) => `#${entry.target.id}`)[0]

      if (!nextSection || nextSection === activeSectionRef.current) return

      activeSectionRef.current = nextSection
      setActiveSection(nextSection)
    }, SECTION_OBS)

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [navItems])

  return activeSection
}
