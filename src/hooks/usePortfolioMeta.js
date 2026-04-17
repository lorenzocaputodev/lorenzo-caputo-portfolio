import { useEffect } from 'react'
import { LANG_KEY } from '../utils/language'

function setMeta(language, meta) {
  document.documentElement.lang = language
  document.title = meta.title

  const updateMeta = (selector, value) => {
    const element = document.querySelector(selector)
    if (element && value) {
      element.setAttribute('content', value)
    }
  }

  updateMeta('meta[name="description"]', meta.description)
  updateMeta('meta[property="og:title"]', meta.ogTitle)
  updateMeta('meta[property="og:description"]', meta.ogDescription)
  updateMeta('meta[property="og:locale"]', meta.ogLocale)
  updateMeta('meta[name="twitter:title"]', meta.twitterTitle)
  updateMeta('meta[name="twitter:description"]', meta.twitterDescription)
}

export function usePortfolioMeta(language, meta) {
  useEffect(() => {
    try {
      localStorage.setItem(LANG_KEY, language)
    } catch {
      // Ignore storage failures without affecting the visible UI.
    }

    setMeta(language, meta)
  }, [language, meta])
}
