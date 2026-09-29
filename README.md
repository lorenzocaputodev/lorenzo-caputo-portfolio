# Lorenzo Caputo — Portfolio

[![Deploy](https://github.com/lorenzocaputodev/lorenzo-caputo-portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/lorenzocaputodev/lorenzo-caputo-portfolio/actions/workflows/deploy.yml) [![Live site](https://img.shields.io/website?url=https%3A%2F%2Florenzocaputo.is-a.dev%2F&label=live)](https://lorenzocaputo.is-a.dev/)

🇮🇹 [Italiano](#-italiano) · 🇬🇧 [English](#-english)

🌐 **Live:** [lorenzocaputo.is-a.dev](https://lorenzocaputo.is-a.dev/) (IT) · [lorenzocaputo.is-a.dev/en/](https://lorenzocaputo.is-a.dev/en/) (EN)

---

## 🇮🇹 Italiano

✨ Il mio portfolio personale: chi sono, il percorso che sto facendo e i progetti che sto costruendo.

Non vuole essere un semplice biglietto da visita, ma un posto ordinato dove mostrare **chi sono, come sto crescendo e cosa ho realizzato davvero**.

### 👋 In breve

Il sito racconta chi sono oggi:

- **junior developer in formazione** all'ITS Academy Apulia Digital Maker
- con la voglia di costruire progetti concreti
- attento all'ordine, alla qualità e ai dettagli
- interessato sia al **software** sia all'**hardware**, ai sistemi e alla risoluzione dei problemi

Al centro c'è **My Tracking App**, il progetto personale che mostra meglio il mio modo di lavorare.

### 🎯 Obiettivi

- presentarmi in modo professionale ma autentico
- mostrare un progetto reale, pubblicato e usato
- avere una presenza online ordinata e facile da leggere
- un design curato ma sobrio
- funzionare bene sia su computer sia su telefono

### 🚀 Progetto in evidenza — My Tracking App

App Android sviluppata in Flutter per tenere traccia dei consumi quotidiani, pensata per essere **pratica, chiara e comoda da usare ogni giorno**.

- più prodotti da seguire, con scorta e costi
- schermata principale con il conteggio del giorno e gli ultimi 7 giorni
- cronologia per giorni, settimane e mesi, con statistiche
- obiettivi, badge e piano di riduzione
- promemoria periodici
- widget Android in tre dimensioni
- backup CSV (esporta e importa)
- tema scuro, chiaro o di sistema
- nessun account: i dati restano sul telefono

🔗 Repository progetto: [My Tracking App](https://github.com/lorenzocaputodev/my_tracking_app)

### 🛠 Tecnologie

- **Preact** (compatibile con React) + **Vite**, con HTML pre-generato in fase di build per ogni lingua (`/` italiano, `/en/` inglese)
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
npm run social-preview # rigenera le immagini di anteprima social (IT ed EN)
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
scripts/prerender.js        # genera le pagine per lingua, la CSP e la sitemap
scripts/social-preview/     # generatore delle immagini di anteprima social
tests/                      # test end-to-end Playwright
public/                     # favicon, icone PWA, manifest, robots.txt, pagina 404, anteprime social
```

Per modificare i testi basta intervenire in `src/content/en.js` e `src/content/it.js`, mantenendo la stessa struttura in entrambe le lingue.

### 🎨 Design

Nel costruire il sito ho curato in particolare:

- gerarchia visiva, spazi e tipografia
- velocità di caricamento
- resa su schermi di ogni dimensione
- animazioni leggere e mai invadenti
- accessibilità

Non è un template: è un portfolio personale con uno stile preciso.

### 🤖 Note

Ho progettato e rifinito questo portfolio in prima persona, usando strumenti di AI come supporto in alcune fasi:

- revisione del codice
- riorganizzazione del frontend
- revisione dei testi
- rifiniture grafiche e tecniche

L'AI è stata un aiuto, non un sostituto: direzione, scelte finali, contenuti e verifica sono miei.

### 📫 Contatti

- GitHub: [@lorenzocaputodev](https://github.com/lorenzocaputodev)
- LinkedIn: [lorenzocaputodev](https://www.linkedin.com/in/lorenzocaputodev/)
- Email: `lorenzocaputo2002.lc@gmail.com`

Grazie per aver dato un’occhiata al progetto ✨

---

## 🇬🇧 English

✨ My personal portfolio: who I am, the path I'm on and the projects I'm building.

It isn't meant to be a simple business card, but a tidy place to show **who I am, how I'm growing and what I've actually built**.

### 👋 Overview

The site shows who I am today:

- **junior developer in training** at ITS Academy Apulia Digital Maker
- keen on building concrete projects
- attentive to order, quality and details
- interested in both **software** and **hardware**, systems and troubleshooting

At its center is **My Tracking App**, the personal project that best shows how I work.

### 🎯 Main Goals

- present myself in a professional yet authentic way
- show a real project, published and in use
- have a tidy, easy-to-read online presence
- a polished but restrained design
- work well on both computers and phones

### 🚀 Featured Project — My Tracking App

An Android app built with Flutter to keep track of daily consumption, designed to be **practical, clear and easy to use every day**.

- multiple products, with stock and costs
- home screen with today's count and the last 7 days
- history by day, week and month, with statistics
- goals, badges and a reduction plan
- periodic reminders
- Android widgets in three sizes
- CSV backup (export and import)
- dark, light or system theme
- no account: data stays on the phone

🔗 Project repository: [My Tracking App](https://github.com/lorenzocaputodev/my_tracking_app)

### 🛠 Tech Stack

- **Preact** (React-compatible) + **Vite**, with HTML prerendered at build time for each language (`/` Italian, `/en/` English)
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
npm run social-preview # regenerate the social preview images (IT and EN)
```

The first time you run the tests you need the browser: `npx playwright install chromium`.

On every pull request CI runs lint, build, end-to-end tests and Lighthouse; every push to `main` also deploys the site to GitHub Pages.

The project structure is described in the Italian section above. To edit the copy, change `src/content/en.js` and `src/content/it.js`, keeping the same structure in both languages.

### 🤖 Notes

I designed and refined this portfolio myself, using AI tools as support in some phases: code review, frontend restructuring, copy review and visual/technical polish.

AI was a help, not a replacement: direction, final choices, content and validation are mine.

### 📫 Contacts

- GitHub: [@lorenzocaputodev](https://github.com/lorenzocaputodev)
- LinkedIn: [lorenzocaputodev](https://www.linkedin.com/in/lorenzocaputodev/)
- Email: `lorenzocaputo2002.lc@gmail.com`

Thanks for taking a look ✨
