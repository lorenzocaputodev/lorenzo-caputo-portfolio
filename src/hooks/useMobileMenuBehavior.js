// --- Comportamento del menu mobile ---
import { useEffect } from 'react'

const MOBILE_BREAKPOINT = 760

export function useMobileMenuBehavior(mobileMenuOpen, closeMenu, mobileNavRef) {
  useEffect(() => {
    if (!mobileMenuOpen) return

    const previousOverflow = document.body.style.overflow

    const onResize = () => {
      if (window.innerWidth > MOBILE_BREAKPOINT) closeMenu()
    }

    const onKey = (event) => {
      if (event.key !== 'Escape') return
      closeMenu()
      mobileNavRef.current?.querySelector('.menu-toggle')?.focus()
    }

    const onPointer = (event) => {
      if (!mobileNavRef.current?.contains(event.target)) closeMenu()
    }

    window.addEventListener('resize', onResize)
    window.addEventListener('keydown', onKey)
    document.addEventListener('pointerdown', onPointer)
    document.body.style.overflow = 'hidden'
    document.body.setAttribute('data-lenis-prevent', '')

    return () => {
      window.removeEventListener('resize', onResize)
      window.removeEventListener('keydown', onKey)
      document.removeEventListener('pointerdown', onPointer)
      document.body.style.overflow = previousOverflow
      document.body.removeAttribute('data-lenis-prevent')
    }
  }, [mobileMenuOpen, closeMenu, mobileNavRef])
}
