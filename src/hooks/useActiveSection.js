import { useEffect, useState } from 'react'

const SECTION_OBSERVER_OPTIONS = { rootMargin: '-18% 0px -56% 0px', threshold: 0.2 }

// The hero is observed too, so no nav item stays highlighted when scrolling back to the top.
const HERO_ID = 'hero'

export function useActiveSection(navItems) {
  const [activeSection, setActiveSection] = useState(null)

  useEffect(() => {
    const sections = [HERO_ID, ...navItems.map((item) => item.href.slice(1))]
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (!sections.length) return

    const observer = new IntersectionObserver((entries) => {
      const [mostVisible] = entries
        .filter((entry) => entry.isIntersecting)
        .sort((left, right) => right.intersectionRatio - left.intersectionRatio)

      if (!mostVisible) return

      // React skips the re-render when the value is unchanged.
      const { id } = mostVisible.target
      setActiveSection(id === HERO_ID ? null : `#${id}`)
    }, SECTION_OBSERVER_OPTIONS)

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [navItems])

  return activeSection
}
