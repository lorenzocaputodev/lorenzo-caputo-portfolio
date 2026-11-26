// --- Lingue e indirizzi delle pagine ---
import { en } from './en'
import { it } from './it'
import { DEFAULT_LANGUAGE, LANGUAGES } from './languages'

export { DEFAULT_LANGUAGE }

export const SITE_URL = 'https://lorenzocaputo.is-a.dev'

export const content = { en, it }

export const supportedLanguages = LANGUAGES

export const languagePath = (language) => (language === DEFAULT_LANGUAGE ? '/' : `/${language}/`)

export const languageFromPath = (pathname) => {
  const [firstSegment] = pathname.split('/').filter(Boolean)
  return supportedLanguages.includes(firstSegment) ? firstSegment : DEFAULT_LANGUAGE
}
