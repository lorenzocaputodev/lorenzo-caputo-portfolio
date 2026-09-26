const LANG_KEY = 'portfolio-language'

function normalizeLang(value, supportedLanguages) {
  if (!value) return null

  const normalized = value.toLowerCase().split('-')[0]
  return supportedLanguages.includes(normalized) ? normalized : null
}

function getStoredLang(supportedLanguages) {
  try {
    return normalizeLang(localStorage.getItem(LANG_KEY), supportedLanguages)
  } catch {
    // Storage can be unavailable (private mode, blocked cookies).
    return null
  }
}

function getBrowserLang(supportedLanguages) {
  const preferred = navigator.languages?.length ? navigator.languages : [navigator.language]

  for (const value of preferred) {
    const match = normalizeLang(value, supportedLanguages)
    if (match) return match
  }

  return null
}

/** Language priority: explicit user choice, then browser preferences, then the site default. */
export function getInitialLang(supportedLanguages, fallback) {
  return getStoredLang(supportedLanguages) ?? getBrowserLang(supportedLanguages) ?? fallback
}

export function storeLang(language) {
  try {
    localStorage.setItem(LANG_KEY, language)
  } catch {
    // Ignore storage failures without affecting the visible UI.
  }
}
