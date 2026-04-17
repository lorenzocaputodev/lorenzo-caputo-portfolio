import { useEffect } from 'react'

export function useMobileMenuBehavior(mobileMenuOpen, setMobileMenuOpen, mobileNavRef) {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow

    const onResize = () => {
      if (window.innerWidth > 760) setMobileMenuOpen(false)
    }

    const onKey = (event) => {
      if (event.key === 'Escape') setMobileMenuOpen(false)
    }

    const onPointer = (event) => {
      if (!mobileMenuOpen) return
      if (mobileNavRef.current && !mobileNavRef.current.contains(event.target)) {
        setMobileMenuOpen(false)
      }
    }

    window.addEventListener('resize', onResize)
    window.addEventListener('keydown', onKey)
    document.addEventListener('pointerdown', onPointer)
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : previousOverflow

    return () => {
      window.removeEventListener('resize', onResize)
      window.removeEventListener('keydown', onKey)
      document.removeEventListener('pointerdown', onPointer)
      document.body.style.overflow = previousOverflow
    }
  }, [mobileMenuOpen, mobileNavRef, setMobileMenuOpen])
}
