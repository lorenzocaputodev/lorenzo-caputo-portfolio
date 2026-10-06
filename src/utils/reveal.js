// --- Proprietà per la comparsa allo scroll ---
export const REVEAL_SELECTOR = '[data-reveal]'

export function revealProps(delay = 0, { kind, x, y, scale } = {}) {
  const style = {}
  if (delay) style['--reveal-delay'] = `${delay}ms`
  if (x != null) style['--reveal-x'] = `${x}px`
  if (y != null) style['--reveal-y'] = `${y}px`
  if (scale != null) style['--reveal-scale-from'] = scale

  return {
    'data-reveal': '',
    'data-reveal-kind': kind,
    style,
  }
}
