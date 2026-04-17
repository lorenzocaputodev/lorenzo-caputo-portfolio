export const SECTION_OBS = { rootMargin: '-18% 0px -56% 0px', threshold: 0.2 }
export const REVEAL_SELECTOR = '[data-reveal]'

export function revealProps(delay = 0, options = {}) {
  const props = { 'data-reveal': '' }
  if (delay) props['data-reveal-delay'] = delay
  if (options.x != null) props['data-reveal-x'] = options.x
  if (options.y != null) props['data-reveal-y'] = options.y
  if (options.scale != null) props['data-reveal-scale'] = options.scale
  if (options.kind) props['data-reveal-kind'] = options.kind
  return props
}

export function applyRevealVars(element) {
  const mapping = [
    ['revealDelay', '--reveal-delay', 'ms'],
    ['revealX', '--reveal-x', 'px'],
    ['revealY', '--reveal-y', 'px'],
    ['revealScale', '--reveal-scale-from', ''],
  ]

  mapping.forEach(([datasetKey, cssVar, unit]) => {
    const value = element.dataset[datasetKey]
    if (value == null || value === '') {
      element.style.removeProperty(cssVar)
      return
    }

    element.style.setProperty(cssVar, `${value}${unit}`)
  })
}
