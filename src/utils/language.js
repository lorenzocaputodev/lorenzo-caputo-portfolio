export const LANG_KEY = 'portfolio-language'

function normalizeLang(value, supportedLanguages) {
  if (!value) return null

  const normalized = value.toLowerCase().split('-')[0]
  return supportedLanguages.includes(normalized) ? normalized : null
}

export function getInitialLang(supportedLanguages, fallback = 'en') {
  if (typeof window === 'undefined') return fallback

  try {
    const stored = normalizeLang(localStorage.getItem(LANG_KEY), supportedLanguages)
    if (stored) return stored
  } catch {
    // Ignore storage access failures and fall back to browser language detection.
  }

  for (const locale of [...(navigator.languages ?? []), navigator.language]) {
    const resolved = normalizeLang(locale, supportedLanguages)
    if (resolved) return resolved
  }

  return fallback
}
