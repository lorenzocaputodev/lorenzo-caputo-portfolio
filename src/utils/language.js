// --- Memorizzazione della lingua scelta ---
const LANG_KEY = 'portfolio-language'

export function storeLang(language) {
  try {
    localStorage.setItem(LANG_KEY, language)
  } catch {
    return
  }
}
