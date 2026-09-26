import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Fonts used above the fold: preloading them avoids the layout shift caused by the late font swap.
const PRELOAD_FONTS = [/sora-latin-400-normal-.*\.woff2$/, /sora-latin-700-normal-.*\.woff2$/, /cormorant-garamond-latin-600-italic-.*\.woff2$/]

function preloadFonts() {
  return {
    name: 'preload-fonts',
    apply: 'build',
    transformIndexHtml: {
      order: 'post',
      handler(_html, { bundle }) {
        return Object.keys(bundle ?? {})
          .filter((fileName) => PRELOAD_FONTS.some((pattern) => pattern.test(fileName)))
          .map((fileName) => ({
            tag: 'link',
            attrs: { rel: 'preload', href: `/${fileName}`, as: 'font', type: 'font/woff2', crossorigin: '' },
            injectTo: 'head',
          }))
      },
    },
  }
}

// Dev server only: fill the <head> placeholder like scripts/prerender.js does for the production pages.
function devHead() {
  return {
    name: 'dev-head',
    apply: 'serve',
    async transformIndexHtml(html, { server, originalUrl = '/' }) {
      const { languageFromPath, renderHead } = await server.ssrLoadModule('/src/entry-server.jsx')
      const language = languageFromPath(new URL(originalUrl, 'http://localhost').pathname)
      return html.replace('<!--app-head-->', renderHead(language)).replace('<html lang="it">', `<html lang="${language}">`)
    },
  }
}

export default defineConfig({
  // Absolute base: the English page lives at /en/ and must load the same /assets/.
  base: '/',
  plugins: [react(), preloadFonts(), devHead()],
})
