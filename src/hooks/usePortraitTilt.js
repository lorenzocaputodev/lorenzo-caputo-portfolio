// ===== Effetto 3D sul ritratto =====
import { useEffect } from 'react'
import { canUsePointerEffects } from '../utils/media'

const TILT_PROPERTIES = [
  'transform',
  '--gx',
  '--gy',
  '--media-shift-x',
  '--media-shift-y',
  '--meta-shift-x',
  '--meta-shift-y',
  '--portrait-glow',
  '--frame-scale',
  '--media-scale',
]

export function usePortraitTilt(portraitRef) {
  useEffect(() => {
    if (!canUsePointerEffects()) return

    const card = portraitRef.current
    if (!card) return

    let frame = 0
    let hovered = false
    let rect = null
    let rectDirty = true

    const updateRect = () => {
      rect = card.getBoundingClientRect()
      rectDirty = false
    }

    const setNeutralState = () => {
      TILT_PROPERTIES.forEach((property) => card.style.removeProperty(property))
    }

    const reset = () => {
      hovered = false
      rect = null
      rectDirty = true
      setNeutralState()
    }

    const onEnter = () => {
      hovered = true
      card.classList.add('is-portrait-active')
      updateRect()
    }

    const onMove = (event) => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        if (!rect || rectDirty) updateRect()
        if (!rect) return

        const normalizedX = (event.clientX - rect.left) / rect.width - 0.5
        const normalizedY = (event.clientY - rect.top) / rect.height - 0.5

        const tiltX = normalizedY * -4
        const tiltY = normalizedX * 6
        const mediaShiftX = normalizedX * 6
        const mediaShiftY = normalizedY * 7
        const metaShiftX = normalizedX * -2.4
        const metaShiftY = normalizedY * -2
        const glow = 0.22 + (Math.abs(normalizedX) + Math.abs(normalizedY)) * 0.08

        card.style.transform = `perspective(900px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`
        card.style.setProperty('--gx', `${((event.clientX - rect.left) / rect.width) * 100}%`)
        card.style.setProperty('--gy', `${((event.clientY - rect.top) / rect.height) * 100}%`)
        card.style.setProperty('--media-shift-x', `${mediaShiftX}px`)
        card.style.setProperty('--media-shift-y', `${mediaShiftY}px`)
        card.style.setProperty('--meta-shift-x', `${metaShiftX}px`)
        card.style.setProperty('--meta-shift-y', `${metaShiftY}px`)
        card.style.setProperty('--portrait-glow', `${glow}`)
        card.style.setProperty('--frame-scale', '1.004')
        card.style.setProperty('--media-scale', '1.012')
      })
    }

    const onViewportChange = () => {
      if (!hovered) return
      rectDirty = true
    }

    const onLeave = () => {
      cancelAnimationFrame(frame)
      card.classList.remove('is-portrait-active')
      reset()
    }

    card.addEventListener('pointerenter', onEnter)
    card.addEventListener('pointermove', onMove)
    card.addEventListener('pointerleave', onLeave)
    window.addEventListener('resize', onViewportChange)
    window.addEventListener('scroll', onViewportChange, { passive: true })

    return () => {
      card.removeEventListener('pointerenter', onEnter)
      card.removeEventListener('pointermove', onMove)
      card.removeEventListener('pointerleave', onLeave)
      window.removeEventListener('resize', onViewportChange)
      window.removeEventListener('scroll', onViewportChange)
      cancelAnimationFrame(frame)
      card.classList.remove('is-portrait-active')
      setNeutralState()
    }
  }, [portraitRef])
}
