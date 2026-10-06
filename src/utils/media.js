// --- Media query: puntatore e movimento ridotto ---
const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)'
const FINE_POINTER_QUERY = '(hover: hover) and (pointer: fine)'

export const prefersReducedMotion = () => window.matchMedia(REDUCED_MOTION_QUERY).matches

export const hasFinePointer = () => window.matchMedia(FINE_POINTER_QUERY).matches

export const canUsePointerEffects = () => hasFinePointer() && !prefersReducedMotion()
