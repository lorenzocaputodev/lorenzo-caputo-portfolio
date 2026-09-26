const LANG_KEY = 'portfolio-language'

function normalizeLang(value, supportedLanguages) {
  if (!value) return null

  const normalized = value.toLowerCase().split('-')[0]
  return supportedLanguages.includes(normalized) ? normalized : null
}

export function getInitialLang(supportedLanguages, fallback) {
  try {
    const stored = normalizeLang(localStorage.getItem(LANG_KEY), supportedLanguages)
    if (stored) return stored
  } catch {
    // Storage can be unavailable (private mode, blocked cookies): use the default language.
  }

  return fallback
}

export function storeLang(language) {
  try {
    localStorage.setItem(LANG_KEY, language)
  } catch {
    // Ignore storage failures without affecting the visible UI.
  }
}
