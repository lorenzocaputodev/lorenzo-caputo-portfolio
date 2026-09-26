// ===== Decorazioni: cursore e sfondo =====
import { memo } from 'react'
import { CURSOR_TRAIL_COUNT } from '../../hooks/useCustomCursor'

function SiteDecorComponent({ cursorDotRef, cursorTrailRefs }) {
  return (
    <>
      <div ref={cursorDotRef} className="cursor-dot" aria-hidden="true" />
      {Array.from({ length: CURSOR_TRAIL_COUNT }, (_, index) => (
        <div
          key={index}
          ref={(node) => {
            cursorTrailRefs.current[index] = node
          }}
          className={`cursor-trail cursor-trail--${index + 1}`}
          aria-hidden="true"
        />
      ))}
      <div className="site-bg" aria-hidden="true" />
      <div className="site-grain" aria-hidden="true" />
    </>
  )
}

export const SiteDecor = memo(SiteDecorComponent)
