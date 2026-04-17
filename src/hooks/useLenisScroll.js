import { useEffect } from 'react'
import Lenis from 'lenis'

const LENIS_IDLE_FRAMES = 8
const SCROLL_IDLE_MS = 90
const FINE_POINTER_QUERY = '(hover: hover) and (pointer: fine)'
const SCROLL_WAKE_KEYS = new Set([
  'ArrowUp',
  'ArrowDown',
  'PageUp',
  'PageDown',
  'Home',
  'End',
  'Space',
])

export function useLenisScroll() {
  useEffect(() => {
    const root = document.documentElement
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const hasFinePointer = window.matchMedia(FINE_POINTER_QUERY).matches

    let scrollIdleTimer = 0
    let cleanupNativeScroll = () => {}

    const setScrolling = () => {
      root.classList.add('is-scrolling')
      clearTimeout(scrollIdleTimer)
      scrollIdleTimer = window.setTimeout(() => {
        root.classList.remove('is-scrolling')
      }, SCROLL_IDLE_MS)
    }

    const clearScrolling = () => {
      clearTimeout(scrollIdleTimer)
      root.classList.remove('is-scrolling')
    }

    const enableNativeScrollMode = () => {
      root.classList.add('has-native-scroll')

      const onNativeScroll = () => {
        setScrolling()
      }

      window.addEventListener('scroll', onNativeScroll, { passive: true })
      cleanupNativeScroll = () => {
        window.removeEventListener('scroll', onNativeScroll)
      }
    }

    if (prefersReducedMotion || !hasFinePointer) {
      enableNativeScrollMode()

      return () => {
        cleanupNativeScroll()
        clearScrolling()
        root.classList.remove('has-native-scroll')
      }
    }

    root.classList.remove('has-native-scroll')

    const lenis = new Lenis({
      duration: 0.78,
      easing: (value) => 1 - Math.pow(1 - value, 4),
      smoothWheel: true,
      wheelMultiplier: 1.0,
    })

    let raf = 0
    let running = false
    let idleFrames = 0

    const hasMomentum = () => (
      lenis.isScrolling === 'smooth'
      || Math.abs(lenis.velocity) > 0.01
      || Math.abs(lenis.animatedScroll - lenis.actualScroll) > 0.5
    )

    const loop = (time) => {
      lenis.raf(time)

      if (hasMomentum()) {
        idleFrames = 0
        raf = requestAnimationFrame(loop)
        return
      }

      if (idleFrames < LENIS_IDLE_FRAMES) {
        idleFrames += 1
        raf = requestAnimationFrame(loop)
        return
      }

      clearScrolling()
      running = false
      raf = 0
    }

    const wake = () => {
      idleFrames = 0
      setScrolling()
      if (running) return
      running = true
      raf = requestAnimationFrame(loop)
    }

    const onKey = (event) => {
      if (SCROLL_WAKE_KEYS.has(event.code)) wake()
    }

    const onAnchor = (event) => {
      if (!(event.target instanceof Element)) return
      if (event.target.closest('a[href^="#"]')) wake()
    }

    lenis.on('scroll', () => {
      idleFrames = 0
      setScrolling()
    })

    window.addEventListener('wheel', wake, { passive: true })
    window.addEventListener('keydown', onKey)
    document.addEventListener('click', onAnchor)

    return () => {
      cancelAnimationFrame(raf)
      clearScrolling()
      window.removeEventListener('wheel', wake)
      window.removeEventListener('keydown', onKey)
      document.removeEventListener('click', onAnchor)
      lenis.destroy()
    }
  }, [])
}
