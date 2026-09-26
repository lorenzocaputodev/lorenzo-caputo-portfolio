# Lorenzo Caputo — Portfolio

🇮🇹 [Italiano](#-italiano) · 🇬🇧 [English](#-english)

🌐 **Live:** [lorenzocaputo.is-a.dev](https://lorenzocaputo.is-a.dev/) (IT) · [lorenzocaputo.is-a.dev/en/](https://lorenzocaputo.is-a.dev/en/) (EN)

---

## 🇮🇹 Italiano

✨ Portfolio personale sviluppato per presentare in modo chiaro, moderno e coerente il mio percorso, il mio approccio al lavoro e i progetti che sto costruendo.

L’idea non è creare un semplice biglietto da visita, ma uno spazio curato dove raccogliere **identità, crescita tecnica e proof of work reale**.

### 👋 Overview

Questo portfolio nasce per raccontare in modo credibile chi sono oggi:

- **Junior Developer in formazione**
- orientato a costruire progetti concreti
- attento a ordine, qualità e dettagli
- interessato sia al **software** sia al lato **hardware, sistemi e troubleshooting**

Il sito mette al centro soprattutto **My Tracking App**, il progetto personale che rappresenta meglio il mio modo di lavorare e il livello di cura che voglio portare nei miei progetti.

### 🎯 Main Goals

- presentare il mio profilo in modo professionale ma autentico
- valorizzare un progetto reale come prova concreta
- costruire una presenza online ordinata, leggibile e curata
- mantenere un design premium, ma sobrio e coerente
- offrire una buona esperienza sia su desktop che su mobile

### 🚀 Featured Project — My Tracking App

Applicazione sviluppata per il tracciamento quotidiano di prodotti e utilizzi, con focus su **praticità, chiarezza dei dati e continuità d’uso**.

- tracking multi-prodotto
- dashboard con dati di utilizzo
- cronologia e analytics
- reminder periodici
- widget Android
- import/export CSV
- supporto tema dark / light / system
- approccio local-first

🔗 Repository progetto: [My Tracking App](https://github.com/lorenzocaputodev/my_tracking_app)

### 🛠 Tech Stack

- **React** + **Vite**, con HTML pre-generato in fase di build per ogni lingua (`/` italiano, `/en/` inglese)
- **JavaScript**
- **Custom CSS** con font self-hosted (Fontsource)
- **Playwright** + **axe** per i test end-to-end e di accessibilità
- **Lighthouse CI** per tenere sotto controllo performance, accessibilità e SEO
- **GitHub Pages** per il deploy

### 🧑‍💻 Sviluppo locale

Requisiti: Node.js 20.19+ o 22.12+ (la CI usa Node 22).

```bash
npm install
npm run dev      # server di sviluppo (http://localhost:5173/ e /en/)
npm run check    # lint + build di produzione con le pagine pre-generate
npm run preview  # anteprima della build in dist/
npm run test:e2e # test end-to-end Playwright (desktop + mobile)
```

La prima volta che lanci i test serve il browser: `npx playwright install chromium`.

A ogni pull request la CI esegue lint, build, test end-to-end e Lighthouse; a ogni push su `main` pubblica anche il sito su GitHub Pages.

### 🗂 Struttura del progetto

```
src/
├── App.jsx                 # composizione della pagina (la lingua arriva dall'URL)
├── main.jsx                # entry point nel browser (idrata l'HTML pre-generato)
├── entry-server.jsx        # rendering in fase di build: HTML e <head> per ogni lingua
├── content/                # testi e dati del sito
│   ├── shared.js           # dati comuni (profilo, link, screenshot, certificazioni)
│   ├── en.js / it.js       # contenuti localizzati, stessa struttura
│   └── index.js            # lingue supportate, lingua di default, URL delle pagine
├── components/
│   ├── layout/             # Topbar, LanguageSwitch, SkipLink, SiteDecor
│   ├── sections/           # una sezione della pagina per file
│   └── ui/                 # componenti riutilizzabili (SectionHeading, ExternalLink…)
├── hooks/                  # effetti: smooth scroll, reveal, cursore, tilt, menu…
├── utils/                  # helper (lingua, reveal, media query)
├── styles/                 # CSS diviso per livello, importato da styles/index.css
└── assets/                 # immagini (con varianti 360px per srcset) e CV
scripts/prerender.js        # genera dist/index.html e dist/en/index.html
tests/                      # test end-to-end Playwright
public/                     # favicon, icone PWA, manifest, robots.txt, sitemap.xml, 404, anteprima social
```

Per modificare i testi basta intervenire in `src/content/en.js` e `src/content/it.js`, mantenendo la stessa struttura in entrambe le lingue.

### 🎨 Frontend / Design Notes

Questo progetto è stato costruito con attenzione particolare a:

- gerarchia visiva
- qualità del layout e degli spazi
- coerenza tipografica
- performance frontend
- responsive behavior
- micro-animazioni leggere e non invasive
- accessibilità

Non è stato pensato come un template generico, ma come un portfolio personale con una direzione visiva precisa.

### 🤖 Notes

Questo portfolio è stato progettato, curato e rifinito da me, con supporto mirato di strumenti AI in alcune fasi del lavoro, soprattutto per:

- revisione del codice
- refactor frontend
- polishing del copy
- ottimizzazione della struttura
- refinement visivo e tecnico

L’AI è stata usata come supporto, non come sostituzione del mio lavoro: direzione, scelte finali, contenuti, validazione e rifinitura del progetto sono stati gestiti da me.

### 📫 Contatti

- GitHub: [@lorenzocaputodev](https://github.com/lorenzocaputodev)
- LinkedIn: [lorenzocaputodev](https://www.linkedin.com/in/lorenzocaputodev/)
- Email: `lorenzocaputo2002.lc@gmail.com`

Grazie per aver dato un’occhiata al progetto ✨

---

## 🇬🇧 English

✨ A personal portfolio built to present my path, my approach to work and the projects I'm building in a clear, modern and consistent way.

The goal isn't a simple business card, but a curated space that brings together **identity, technical growth and real proof of work**.

### 👋 Overview

This portfolio aims to give an honest picture of who I am today:

- **Junior Developer in training**
- focused on building concrete projects
- attentive to order, quality and details
- interested in both **software** and **hardware, systems and troubleshooting**

The site centers on **My Tracking App**, the personal project that best represents how I work and the level of care I want to bring to my projects.

### 🎯 Main Goals

- present my profile in a professional yet authentic way
- showcase a real project as concrete proof
- build a tidy, readable and well-crafted online presence
- keep a premium but restrained and consistent design
- offer a good experience on both desktop and mobile

### 🚀 Featured Project — My Tracking App

An app for daily tracking of products and usage, focused on **practicality, clear data and continuity of use**.

- multi-product tracking
- usage dashboard
- history and analytics
- periodic reminders
- Android widgets
- CSV import/export
- dark / light / system theme
- local-first approach

🔗 Project repository: [My Tracking App](https://github.com/lorenzocaputodev/my_tracking_app)

### 🛠 Tech Stack

- **React** + **Vite**, with HTML prerendered at build time for each language (`/` Italian, `/en/` English)
- **JavaScript**
- **Custom CSS** with self-hosted fonts (Fontsource)
- **Playwright** + **axe** for end-to-end and accessibility tests
- **Lighthouse CI** to keep performance, accessibility and SEO in check
- **GitHub Pages** for deployment

### 🧑‍💻 Local development

Requirements: Node.js 20.19+ or 22.12+ (CI uses Node 22).

```bash
npm install
npm run dev      # dev server (http://localhost:5173/ and /en/)
npm run check    # lint + production build with prerendered pages
npm run preview  # preview the build in dist/
npm run test:e2e # Playwright end-to-end tests (desktop + mobile)
```

The first time you run the tests you need the browser: `npx playwright install chromium`.

On every pull request CI runs lint, build, end-to-end tests and Lighthouse; every push to `main` also deploys the site to GitHub Pages.

The project structure is described in the Italian section above. To edit the copy, change `src/content/en.js` and `src/content/it.js`, keeping the same structure in both languages.

### 🤖 Notes

I designed, curated and refined this portfolio myself, with targeted support from AI tools in some phases of the work, mainly for code review, frontend refactoring, copy polishing, structure optimization and visual/technical refinement.

AI was used as support, not as a replacement for my work: direction, final choices, content, validation and finishing were handled by me.

### 📫 Contacts

- GitHub: [@lorenzocaputodev](https://github.com/lorenzocaputodev)
- LinkedIn: [lorenzocaputodev](https://www.linkedin.com/in/lorenzocaputodev/)
- Email: `lorenzocaputo2002.lc@gmail.com`

Thanks for taking a look ✨
