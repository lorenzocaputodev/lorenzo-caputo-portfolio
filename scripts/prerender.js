// ===== Generazione delle pagine per lingua, CSP e sitemap =====
import { execSync } from 'node:child_process'
import { createHash } from 'node:crypto'
import { mkdir, readFile, rm, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const distDir = resolve(root, 'dist')
const serverDir = resolve(root, 'dist-ssr')

const template = await readFile(resolve(distDir, 'index.html'), 'utf8')
const { languagePath, renderApp, renderHead, SITE_URL, supportedLanguages } = await import(
  pathToFileURL(resolve(serverDir, 'entry-server.js')).href
)

// ===== Content Security Policy =====
const inlineScripts = [...template.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(([, code]) => code)
const scriptHashes = inlineScripts.map((code) => `'sha256-${createHash('sha256').update(code).digest('base64')}'`)

const contentSecurityPolicy = [
  "default-src 'self'",
  `script-src 'self' ${scriptHashes.join(' ')}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self'",
  "font-src 'self'",
  "connect-src 'self'",
  "manifest-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'none'",
].join('; ')

const cspTag = `<meta http-equiv="Content-Security-Policy" content="${contentSecurityPolicy}" />`

// ===== Pagine per lingua =====
for (const language of supportedLanguages) {
  const html = template
    .replace(/<html lang="[^"]*">/, `<html lang="${language}">`)
    .replace('<meta charset="UTF-8" />', `<meta charset="UTF-8" />\n    ${cspTag}`)
    .replace('<!--app-head-->', renderHead(language))
    .replace('<!--app-html-->', renderApp(language))

  const outputFile = resolve(distDir, `.${languagePath(language)}`, 'index.html')
  await mkdir(dirname(outputFile), { recursive: true })
  await writeFile(outputFile, html)
  console.log(`prerendered ${languagePath(language)} -> ${outputFile.replace(`${root}/`, '')}`)
}

// ===== Sitemap =====
function lastModified() {
  try {
    return execSync('git log -1 --format=%cs', { cwd: root, stdio: ['ignore', 'pipe', 'ignore'] }).toString().trim()
  } catch {
    return new Date().toISOString().slice(0, 10)
  }
}

const lastmod = lastModified()
const alternates = supportedLanguages
  .map((language) => `    <xhtml:link rel="alternate" hreflang="${language}" href="${SITE_URL}${languagePath(language)}" />`)
  .join('\n')

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${supportedLanguages
  .map((language) => `  <url>
    <loc>${SITE_URL}${languagePath(language)}</loc>
    <lastmod>${lastmod}</lastmod>
${alternates}
  </url>`)
  .join('\n')}
</urlset>
`

await writeFile(resolve(distDir, 'sitemap.xml'), sitemap)
console.log(`sitemap.xml -> lastmod ${lastmod}`)

await rm(serverDir, { recursive: true, force: true })
