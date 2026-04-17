import { useEffect } from 'react'

const CURSOR_IDLE_MS = 2000
const CURSOR_SETTLE_EPSILON = 0.05
const CURSOR_TRAIL_LERPS = [0.24, 0.19, 0.15, 0.12, 0.1]
const CURSOR_TRAIL_COUNT = CURSOR_TRAIL_LERPS.length

export function useCustomCursor(cursorDotRef, cursorTrailRefs) {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return

    const root = document.documentElement
    const dot = cursorDotRef.current
    const trails = cursorTrailRefs.current.filter(Boolean)
    if (!dot || trails.length !== CURSOR_TRAIL_COUNT) return

    document.documentElement.classList.add('has-custom-cursor')

    let raf = 0
    let idleTimer = 0
    let shown = false
    let running = false
    let interactive = false
    let trailsVisible = false
    let mouseX = -400
    let mouseY = -400
    let dotX = mouseX
    let dotY = mouseY
    const trailPositions = trails.map(() => ({ x: mouseX, y: mouseY }))

    const start = () => {
      if (running) return
      running = true
      raf = requestAnimationFrame(tick)
    }

    const setTrailsVisible = (nextVisible) => {
      if (trailsVisible === nextVisible) return
      trailsVisible = nextVisible
      trails.forEach((trail) => {
        trail.style.opacity = nextVisible ? '1' : '0'
      })
    }

    const show = () => {
      if (!shown) {
        shown = true
        dot.style.opacity = '1'
      }

      if (!root.classList.contains('is-scrolling')) {
        setTrailsVisible(true)
      }

      start()
    }

    const hide = () => {
      shown = false
      dot.style.opacity = '0'
      setTrailsVisible(false)
      start()
    }

    const scheduleIdle = () => {
      clearTimeout(idleTimer)
      idleTimer = window.setTimeout(hide, CURSOR_IDLE_MS)
    }

    const setInteractiveState = (nextInteractive) => {
      if (interactive === nextInteractive) return
      interactive = nextInteractive
      dot.dataset.interactive = interactive ? 'true' : 'false'
    }

    const tick = () => {
      let maxDelta = 0
      const scrollActive = root.classList.contains('is-scrolling')

      dotX += (mouseX - dotX) * 0.42
      dotY += (mouseY - dotY) * 0.42
      maxDelta = Math.max(maxDelta, Math.abs(mouseX - dotX), Math.abs(mouseY - dotY))

      dot.style.transform = `translate3d(${dotX}px, ${dotY}px, 0) translate(-50%, -50%)`

      if (scrollActive) {
        setTrailsVisible(false)
        trailPositions.forEach((position) => {
          position.x = dotX
          position.y = dotY
        })
      } else {
        if (shown) {
          setTrailsVisible(true)
        }

        trails.forEach((trail, index) => {
          const previous = index === 0 ? { x: dotX, y: dotY } : trailPositions[index - 1]
          trailPositions[index].x += (previous.x - trailPositions[index].x) * CURSOR_TRAIL_LERPS[index]
          trailPositions[index].y += (previous.y - trailPositions[index].y) * CURSOR_TRAIL_LERPS[index]

          maxDelta = Math.max(
            maxDelta,
            Math.abs(previous.x - trailPositions[index].x),
            Math.abs(previous.y - trailPositions[index].y),
          )

          trail.style.transform =
            `translate3d(${trailPositions[index].x}px, ${trailPositions[index].y}px, 0) translate(-50%, -50%)`
        })
      }

      if (maxDelta < CURSOR_SETTLE_EPSILON) {
        running = false
        raf = 0
        return
      }

      raf = requestAnimationFrame(tick)
    }

    const onMove = (event) => {
      mouseX = event.clientX
      mouseY = event.clientY
      show()
      scheduleIdle()

      const nextInteractive =
        event.target instanceof Element && Boolean(event.target.closest('a,button,[role="button"]'))

      setInteractiveState(nextInteractive)
    }

    const onVisibilityChange = () => {
      if (document.hidden) hide()
    }

    hide()
    window.addEventListener('pointermove', onMove, { passive: true })
    window.addEventListener('blur', hide)
    document.addEventListener('visibilitychange', onVisibilityChange)

    return () => {
      document.documentElement.classList.remove('has-custom-cursor')
      cancelAnimationFrame(raf)
      clearTimeout(idleTimer)
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('blur', hide)
      document.removeEventListener('visibilitychange', onVisibilityChange)
    }
  }, [cursorDotRef, cursorTrailRefs])
}
