export const LANG_KEY = 'portfolio-language'

function normalizeLang(value, supportedLanguages) {
  if (!value) return null

  const normalized = value.toLowerCase().split('-')[0]
  return supportedLanguages.includes(normalized) ? normalized : null
}

export function getInitialLang(supportedLanguages, fallback = 'it') {
  if (typeof window === 'undefined') return fallback

  try {
    const stored = normalizeLang(localStorage.getItem(LANG_KEY), supportedLanguages)
    if (stored) return stored
  } catch {
    // Ignore storage access failures and fall back to the configured default language.
  }

  return supportedLanguages.includes(fallback) ? fallback : supportedLanguages[0] ?? 'it'
}
