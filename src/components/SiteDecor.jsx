import { memo } from 'react'

const CURSOR_TRAIL_COUNT = 5

function SiteDecorComponent({ cursorDotRef, cursorTrailRefs }) {
  return (
    <>
      <div ref={cursorDotRef} className="cursor-dot" aria-hidden="true" />
      {Array.from({ length: CURSOR_TRAIL_COUNT }, (_, index) => index + 1).map((index) => (
        <div
          key={`cursor-trail-${index}`}
          ref={(node) => {
            cursorTrailRefs.current[index - 1] = node
          }}
          className={`cursor-trail cursor-trail--${index}`}
          aria-hidden="true"
        />
      ))}
      <div className="site-bg" aria-hidden="true" />
      <div className="site-grain" aria-hidden="true" />
    </>
  )
}

export const SiteDecor = memo(SiteDecorComponent)
