// ===== Comparsa degli elementi allo scroll =====
import { useEffect } from 'react'
import { REVEAL_SELECTOR } from '../utils/reveal'
import { prefersReducedMotion } from '../utils/media'

export function useScrollReveal() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll(`${REVEAL_SELECTOR}:not(.is-visible)`))
    if (!elements.length) return

    if (prefersReducedMotion()) {
      elements.forEach((element) => element.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -5% 0px' },
    )

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])
}
