// --- Generazione delle immagini di anteprima social ---
import { readFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { chromium } from '@playwright/test'

const here = dirname(fileURLToPath(import.meta.url))
const root = resolve(here, '../..')

// --- Testi ---
const previews = {
  it: {
    output: 'public/social-preview-it.jpg',
    headline: ['Junior developer', 'in formazione'],
    subtitle: ['Appassionato di software e hardware.', 'Imparo, costruisco e miglioro ogni giorno.'],
    tagline: ['Codice pulito.', 'UI curata.', 'Impatto reale.'],
  },
  en: {
    output: 'public/social-preview-en.jpg',
    headline: ['Junior developer', 'in training'],
    subtitle: ['Passionate about software and hardware.', 'I learn, build, and improve every day.'],
    tagline: ['Clean code.', 'Great UI.', 'Real impact.'],
  },
}

// --- Competenze chiave mostrate nell'immagine ---
const skills = [
  ['Java', 'java.png'],
  ['JavaScript', 'javascript.svg'],
  ['React', 'react.svg'],
  ['Flutter', 'flutter.svg'],
  ['Spring', 'spring.svg'],
  ['SQL', 'sql.png'],
]

// --- Risorse: sfondo e font ---
const dataUrl = async (path, type) => `data:${type};base64,${(await readFile(resolve(root, path))).toString('base64')}`

const assets = {
  background: await dataUrl('scripts/social-preview/background.jpg', 'image/jpeg'),
  inter500: await dataUrl('node_modules/@fontsource/inter/files/inter-latin-500-normal.woff2', 'font/woff2'),
  inter600: await dataUrl('node_modules/@fontsource/inter/files/inter-latin-600-normal.woff2', 'font/woff2'),
  mono: await dataUrl('node_modules/@fontsource/jetbrains-mono/files/jetbrains-mono-latin-400-normal.woff2', 'font/woff2'),
}

const icons = Object.fromEntries(
  await Promise.all(
    skills.map(async ([, file]) => [file, await dataUrl(`scripts/social-preview/icons/${file}`, file.endsWith('.svg') ? 'image/svg+xml' : 'image/png')]),
  ),
)

// --- Impaginazione (coordinate dell'immagine sorgente 1774×887) ---
const page = ({ headline, subtitle, tagline }) => `<!doctype html>
<html>
  <head>
    <style>
      @font-face { font-family: Inter; font-weight: 500; src: url(${assets.inter500}) format('woff2'); }
      @font-face { font-family: Inter; font-weight: 600; src: url(${assets.inter600}) format('woff2'); }
      @font-face { font-family: Mono; font-weight: 400; src: url(${assets.mono}) format('woff2'); }
      html, body { margin: 0; overflow: hidden; background: #02070c; }
      .stage {
        position: relative;
        width: 1774px;
        height: 887px;
        background: url(${assets.background}) no-repeat;
        transform: translateX(-30px) scale(${630 / 887});
        transform-origin: 0 0;
      }
      .stage > * { position: absolute; margin: 0; white-space: nowrap; }
      .headline { left: 92px; font: 600 86px/1 Inter, sans-serif; letter-spacing: -0.005em; color: #f4f3f3; }
      .headline.first { top: 247px; }
      .headline.second { top: 338px; color: #01f4fd; }
      .subtitle { left: 93px; font: 500 24.6px/1 Inter, sans-serif; color: #afb5ba; }
      .subtitle.first { top: 458px; }
      .subtitle.second { top: 499px; }
      .tagline { left: 123px; top: 740px; font: 400 24.8px/1 Mono, monospace; color: #f4f3f3; }
      .tagline span { color: #01eef6; }
      .skills { left: 93px; top: 596px; display: flex; gap: 13px; }
      .skill {
        display: flex;
        align-items: center;
        gap: 10px;
        box-sizing: border-box;
        height: 66px;
        padding: 0 14px;
        border: 2px solid rgb(8, 178, 172);
        border-radius: 12px;
        background: rgba(1, 7, 15, 0.82);
        font: 500 21px/1 Inter, sans-serif;
        color: #fff;
      }
      .skill i {
        width: 28px;
        height: 33px;
        background: #01f4fd;
        -webkit-mask: var(--icon) center / contain no-repeat;
        mask: var(--icon) center / contain no-repeat;
      }
    </style>
  </head>
  <body>
    <div class="stage">
      <p class="headline first">${headline[0]}</p>
      <p class="headline second">${headline[1]}</p>
      <p class="subtitle first">${subtitle[0]}</p>
      <p class="subtitle second">${subtitle[1]}</p>
      <div class="skills">
        ${skills.map(([label, file]) => `<span class="skill"><i style="--icon: url('${icons[file]}')"></i>${label}</span>`).join('')}
      </div>
      <p class="tagline">${tagline[0]}&nbsp; <span>${tagline[1]}</span>&nbsp; ${tagline[2]}</p>
    </div>
  </body>
</html>`

// --- Rendering ---
const browser = await chromium.launch(process.env.PW_CHROMIUM_PATH ? { executablePath: process.env.PW_CHROMIUM_PATH } : {})
const tab = await browser.newPage({ viewport: { width: 1200, height: 630 } })

for (const [language, preview] of Object.entries(previews)) {
  await tab.setContent(page(preview))
  await tab.evaluate('document.fonts.ready')
  await tab.screenshot({ path: resolve(root, preview.output), type: 'jpeg', quality: 88 })
  console.log(`${language}: ${preview.output}`)
}

await browser.close()
