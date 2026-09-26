// Turns the client build into one static HTML page per language (dist/index.html, dist/en/index.html),
// so content, titles and social previews are in the HTML before any JavaScript runs.
import { mkdir, readFile, rm, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const distDir = resolve(root, 'dist')
const serverDir = resolve(root, 'dist-ssr')

const template = await readFile(resolve(distDir, 'index.html'), 'utf8')
const { languagePath, renderApp, renderHead, supportedLanguages } = await import(
  pathToFileURL(resolve(serverDir, 'entry-server.js')).href
)

for (const language of supportedLanguages) {
  const html = template
    .replace(/<html lang="[^"]*">/, `<html lang="${language}">`)
    .replace('<!--app-head-->', renderHead(language))
    .replace('<!--app-html-->', renderApp(language))

  const outputFile = resolve(distDir, `.${languagePath(language)}`, 'index.html')
  await mkdir(dirname(outputFile), { recursive: true })
  await writeFile(outputFile, html)
  console.log(`prerendered ${languagePath(language)} -> ${outputFile.replace(`${root}/`, '')}`)
}

await rm(serverDir, { recursive: true, force: true })
