# Lorenzo Caputo — Portfolio

✨ Portfolio personale sviluppato per presentare in modo chiaro, moderno e coerente il mio percorso, il mio approccio al lavoro e i progetti che sto costruendo.

L’idea non è creare un semplice biglietto da visita, ma uno spazio curato dove raccogliere **identità, crescita tecnica e proof of work reale**.

---

## 🌐 Live Website

[Visita il portfolio](https://lorenzocaputo.is-a.dev/)

---

## 👋 Overview

Questo portfolio nasce per raccontare in modo credibile chi sono oggi:

- **Junior Developer in formazione**
- orientato a costruire progetti concreti
- attento a ordine, qualità e dettagli
- interessato sia al **software** sia al lato **hardware, sistemi e troubleshooting**

Il sito mette al centro soprattutto **My Tracking App**, il progetto personale che rappresenta meglio il mio modo di lavorare e il livello di cura che voglio portare nei miei progetti.

---

## 🎯 Main Goals

- presentare il mio profilo in modo professionale ma autentico
- valorizzare un progetto reale come prova concreta
- costruire una presenza online ordinata, leggibile e curata
- mantenere un design premium, ma sobrio e coerente
- offrire una buona esperienza sia su desktop che su mobile

---

## 🚀 Featured Project

### My Tracking App

Applicazione sviluppata per il tracciamento quotidiano di prodotti e utilizzi, con focus su **praticità, chiarezza dei dati e continuità d’uso**.

#### Core features
- tracking multi-prodotto
- dashboard con dati di utilizzo
- cronologia e analytics
- reminder periodici
- widget Android
- import/export CSV
- supporto tema dark / light / system
- approccio local-first

🔗 Repository progetto: [My Tracking App](https://github.com/lorenzocaputodev/my_tracking_app)

---

## 🛠 Tech Stack

- **React**
- **Vite**
- **JavaScript**
- **Custom CSS** con font self-hosted (Fontsource)
- **Playwright** per i test end-to-end
- **GitHub Pages** per il deploy

---

## 🧑‍💻 Sviluppo locale

Requisiti: Node.js 20.19+ o 22.12+ (la CI usa Node 22).

```bash
npm install
npm run dev      # server di sviluppo
npm run check    # lint + build di produzione (lo stesso controllo della CI)
npm run preview  # anteprima della build in dist/
npm run test:e2e # test end-to-end Playwright (desktop + mobile)
```

La prima volta che lanci i test serve il browser: `npx playwright install chromium`.

Il deploy su GitHub Pages parte automaticamente a ogni push su `main`; sulle pull request la CI esegue lint, build e test end-to-end senza pubblicare.

## 🗂 Struttura del progetto

```
src/
├── App.jsx                 # composizione della pagina e stato globale (lingua, menu)
├── main.jsx                # entry point
├── content/                # testi e dati del sito
│   ├── shared.js           # dati comuni (profilo, link, screenshot, certificazioni)
│   ├── en.js / it.js       # contenuti localizzati, stessa struttura
│   └── index.js            # lingue supportate e lingua di default
├── components/
│   ├── layout/             # Topbar, LanguageSwitch, SkipLink, SiteDecor
│   ├── sections/           # una sezione della pagina per file
│   └── ui/                 # componenti riutilizzabili (SectionHeading, ExternalLink…)
├── hooks/                  # effetti: smooth scroll, reveal, cursore, tilt, meta tag…
├── utils/                  # helper (lingua, reveal, media query)
├── styles/                 # CSS diviso per livello, importato da styles/index.css
└── assets/                 # immagini (con varianti 360px per srcset) e CV
tests/                      # test end-to-end Playwright
public/                     # favicon, icone PWA, manifest, robots.txt, sitemap.xml, anteprima social
```

Per modificare i testi basta intervenire in `src/content/en.js` e `src/content/it.js`, mantenendo la stessa struttura in entrambe le lingue.

---

## 🎨 Frontend / Design Notes

Questo progetto è stato costruito con attenzione particolare a:

- gerarchia visiva
- qualità del layout e degli spazi
- coerenza tipografica
- performance frontend
- responsive behavior
- micro-animazioni leggere e non invasive
- accessibilità di base

Non è stato pensato come un template generico, ma come un portfolio personale con una direzione visiva precisa.

---

## 🤖 Notes

Questo portfolio è stato progettato, curato e rifinito da me, con supporto mirato di strumenti AI in alcune fasi del lavoro, soprattutto per:

- revisione del codice
- refactor frontend
- polishing del copy
- ottimizzazione della struttura
- refinement visivo e tecnico

L’AI è stata usata come supporto, non come sostituzione del mio lavoro: direzione, scelte finali, contenuti, validazione e rifinitura del progetto sono stati gestiti da me.

---

## 📫 Contacts

- GitHub: [@lorenzocaputodev](https://github.com/lorenzocaputodev)
- LinkedIn: [lorenzocaputodev](https://www.linkedin.com/in/lorenzocaputodev/)
- Email: `lorenzocaputo2002.lc@gmail.com`

---

Grazie per aver dato un’occhiata al progetto ✨
