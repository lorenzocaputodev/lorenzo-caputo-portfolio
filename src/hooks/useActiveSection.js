// ===== Voce attiva della navigazione =====
import { useEffect, useState } from 'react'

const ACTIVATION_LINE = 0.3
const CLICK_LOCK_MS = 1000

export function useActiveSection(navItems) {
  const [activeSection, setActiveSection] = useState(null)

  useEffect(() => {
    const hrefs = navItems.map((item) => item.href)
    const sections = hrefs.map((href) => document.getElementById(href.slice(1))).filter(Boolean)
    if (!sections.length) return

    let frame = 0
    let unlockTimer = 0
    let lockedUntil = 0
    let clickedSection = null

    const update = () => {
      frame = 0
      const now = performance.now()
      if (now < lockedUntil) {
        clearTimeout(unlockTimer)
        unlockTimer = setTimeout(scheduleUpdate, lockedUntil - now)
        return
      }

      const { innerHeight, scrollY } = window
      const atBottom = innerHeight + scrollY >= document.documentElement.scrollHeight - 2
      const line = innerHeight * ACTIVATION_LINE

      let current = null
      if (atBottom) {
        const clickedVisible = clickedSection && clickedSection.getBoundingClientRect().top < innerHeight
        current = clickedVisible ? clickedSection : sections[sections.length - 1]
      } else {
        clickedSection = null
        for (const section of sections) {
          if (section.getBoundingClientRect().top > line) break
          current = section
        }
      }

      setActiveSection(current ? `#${current.id}` : null)
    }

    const scheduleUpdate = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    const onClick = (event) => {
      const link = event.target instanceof Element ? event.target.closest('a[href^="#"]') : null
      const href = link?.getAttribute('href')
      if (!hrefs.includes(href)) return

      setActiveSection(href)
      clickedSection = sections.find((section) => `#${section.id}` === href) ?? null
      lockedUntil = performance.now() + CLICK_LOCK_MS
    }

    update()
    window.addEventListener('scroll', scheduleUpdate, { passive: true })
    window.addEventListener('resize', scheduleUpdate)
    document.addEventListener('click', onClick)

    return () => {
      cancelAnimationFrame(frame)
      clearTimeout(unlockTimer)
      window.removeEventListener('scroll', scheduleUpdate)
      window.removeEventListener('resize', scheduleUpdate)
      document.removeEventListener('click', onClick)
    }
  }, [navItems])

  return activeSection
}
