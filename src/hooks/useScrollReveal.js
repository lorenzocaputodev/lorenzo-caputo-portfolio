import { useEffect } from 'react'
import { applyRevealVars, REVEAL_SELECTOR } from '../utils/reveal'

export function useScrollReveal(language) {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll(REVEAL_SELECTOR))
    if (!elements.length) return

    elements.forEach(applyRevealVars)

    const showAll = () => {
      elements.forEach((element) => element.classList.add('is-visible'))
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      showAll()
      return
    }

    if (typeof IntersectionObserver === 'undefined') {
      showAll()
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          if (entry.target.classList.contains('is-visible')) {
            observer.unobserve(entry.target)
            return
          }
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -5% 0px' },
    )

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [language])
}
