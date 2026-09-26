import { useEffect } from 'react'
import { storeLang } from '../utils/language'

const META_SELECTORS = {
  description: 'meta[name="description"]',
  ogTitle: 'meta[property="og:title"]',
  ogDescription: 'meta[property="og:description"]',
  ogLocale: 'meta[property="og:locale"]',
  twitterTitle: 'meta[name="twitter:title"]',
  twitterDescription: 'meta[name="twitter:description"]',
}

export function usePortfolioMeta(language, meta) {
  useEffect(() => {
    storeLang(language)

    document.documentElement.lang = language
    document.title = meta.title

    Object.entries(META_SELECTORS).forEach(([key, selector]) => {
      const element = document.querySelector(selector)
      if (element && meta[key]) element.setAttribute('content', meta[key])
    })
  }, [language, meta])
}
