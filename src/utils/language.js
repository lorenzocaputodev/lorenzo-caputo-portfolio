// Also read by the inline script in index.html: keep the two in sync.
const LANG_KEY = 'portfolio-language'

/** Remembers an explicit language choice so the root page can send the visitor back to it. */
export function storeLang(language) {
  try {
    localStorage.setItem(LANG_KEY, language)
  } catch {
    // Ignore storage failures without affecting the visible UI.
  }
}
