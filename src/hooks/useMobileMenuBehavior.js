import { useEffect } from 'react'

// Keep in sync with the mobile breakpoint in styles/05-responsive.css.
const MOBILE_BREAKPOINT = 760

/** While the mobile menu is open: lock page scroll and close it on Escape, outside click or desktop resize. */
export function useMobileMenuBehavior(mobileMenuOpen, closeMenu, mobileNavRef) {
  useEffect(() => {
    if (!mobileMenuOpen) return

    const previousOverflow = document.body.style.overflow

    const onResize = () => {
      if (window.innerWidth > MOBILE_BREAKPOINT) closeMenu()
    }

    const onKey = (event) => {
      if (event.key === 'Escape') closeMenu()
    }

    const onPointer = (event) => {
      if (!mobileNavRef.current?.contains(event.target)) closeMenu()
    }

    window.addEventListener('resize', onResize)
    window.addEventListener('keydown', onKey)
    document.addEventListener('pointerdown', onPointer)
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('resize', onResize)
      window.removeEventListener('keydown', onKey)
      document.removeEventListener('pointerdown', onPointer)
      document.body.style.overflow = previousOverflow
    }
  }, [mobileMenuOpen, closeMenu, mobileNavRef])
}
