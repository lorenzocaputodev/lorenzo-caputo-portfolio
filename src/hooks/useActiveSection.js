import { useEffect, useState } from 'react'

const SECTION_OBSERVER_OPTIONS = { rootMargin: '-18% 0px -56% 0px', threshold: 0.2 }

export function useActiveSection(navItems) {
  const [activeSection, setActiveSection] = useState(navItems[0]?.href)

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.href.slice(1)))
      .filter(Boolean)

    if (!sections.length) return

    const observer = new IntersectionObserver((entries) => {
      const [mostVisible] = entries
        .filter((entry) => entry.isIntersecting)
        .sort((left, right) => right.intersectionRatio - left.intersectionRatio)

      // React skips the re-render when the value is unchanged.
      if (mostVisible) setActiveSection(`#${mostVisible.target.id}`)
    }, SECTION_OBSERVER_OPTIONS)

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [navItems])

  return activeSection
}
