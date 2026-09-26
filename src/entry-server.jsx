// ===== Rendering in fase di build: HTML e <head> per ogni lingua =====
import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import App from './App'
import { content, languageFromPath, languagePath, SITE_URL, supportedLanguages } from './content'

export { languageFromPath, languagePath, SITE_URL, supportedLanguages }

const escapeHtml = (value) =>
  String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char])

export function renderApp(language) {
  return renderToString(
    <StrictMode>
      <App language={language} />
    </StrictMode>,
  )
}

export function renderHead(language) {
  const { meta } = content[language]
  const url = `${SITE_URL}${languagePath(language)}`
  const otherLocales = supportedLanguages
    .filter((item) => item !== language)
    .map((item) => content[item].meta.ogLocale)

  const tags = [
    `<title>${escapeHtml(meta.title)}</title>`,
    `<meta name="description" content="${escapeHtml(meta.description)}" />`,
    `<link rel="canonical" href="${url}" />`,
    ...supportedLanguages.map(
      (item) => `<link rel="alternate" hreflang="${item}" href="${SITE_URL}${languagePath(item)}" />`,
    ),
    `<link rel="alternate" hreflang="x-default" href="${SITE_URL}/" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:title" content="${escapeHtml(meta.ogTitle)}" />`,
    `<meta property="og:description" content="${escapeHtml(meta.ogDescription)}" />`,
    `<meta property="og:locale" content="${meta.ogLocale}" />`,
    `<meta property="og:image" content="${SITE_URL}${meta.image}" />`,
    '<meta property="og:image:width" content="1200" />',
    '<meta property="og:image:height" content="630" />',
    `<meta property="og:image:alt" content="${escapeHtml(meta.imageAlt)}" />`,
    ...otherLocales.map((locale) => `<meta property="og:locale:alternate" content="${locale}" />`),
    `<meta name="twitter:title" content="${escapeHtml(meta.twitterTitle)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(meta.twitterDescription)}" />`,
    `<meta name="twitter:image" content="${SITE_URL}${meta.image}" />`,
  ]

  return tags.join('\n    ')
}
