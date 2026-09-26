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
            attrs: { rel: 'preload', href: `./${fileName}`, as: 'font', type: 'font/woff2', crossorigin: '' },
            injectTo: 'head',
          }))
      },
    },
  }
}

export default defineConfig({
  base: './',
  plugins: [react(), preloadFonts()],
})
