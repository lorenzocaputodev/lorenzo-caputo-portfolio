import portrait from './assets/images/lorenzo-portrait.webp'
import dashboardOverview from './assets/images/dashboard_overview.webp'
import historyAnalytics from './assets/images/history_analytics.webp'
import reductionPlan from './assets/images/reduction_plan.webp'
import settingsOverview from './assets/images/settings_overview.webp'
import cvFile from './assets/files/cv-caputo-lorenzo.pdf'

const sharedProfile = {
  name: 'Lorenzo Caputo',
  email: 'lorenzocaputo2002.lc@gmail.com',
  github: 'https://github.com/lorenzocaputodev',
  linkedin: 'https://www.linkedin.com/in/lorenzocaputodev/',
  projectRepo: 'https://github.com/lorenzocaputodev/my_tracking_app',
  projectRelease: 'https://github.com/lorenzocaputodev/my_tracking_app/releases/tag/v1.0.0',
  portrait,
  portraitWidth: 511,
  portraitHeight: 512,
  cvFile,
}

/**
 * Main bilingual content contract consumed by the app.
 * Keep structure stable so section components can stay presentation-only.
 */

const sharedProjectScreenshots = [
  [
    { title: { en: 'Daily dashboard', it: 'Dashboard giornaliera' }, image: dashboardOverview, width: 718, height: 1591 },
    { title: { en: 'Reduction planning', it: 'Piano di riduzione' }, image: reductionPlan, width: 718, height: 1590 },
  ],
  [
    { title: { en: 'History & analytics', it: 'Storico e analisi' }, image: historyAnalytics, width: 718, height: 1591 },
    { title: { en: 'Configuration', it: 'Impostazioni' }, image: settingsOverview, width: 718, height: 1591 },
  ],
]

const sharedNavSections = ['about', 'growth', 'experience', 'skills', 'project', 'certifications', 'contact']

const buildNavItems = (labels) =>
  labels.map((label, index) => ({ label, href: `#${sharedNavSections[index]}` }))

const buildContactLinks = ({ email, github, linkedin, cv }) => [
  { label: email, href: `mailto:${sharedProfile.email}` },
  { label: github, href: sharedProfile.github },
  { label: linkedin, href: sharedProfile.linkedin },
  { label: cv, href: sharedProfile.cvFile, download: 'Lorenzo-Caputo-CV.pdf' },
]

const buildScreenshotColumns = (lang) =>
  sharedProjectScreenshots.map((column) => column.map((shot) => ({ ...shot, title: shot.title[lang] })))

const buildProjectLinks = (release) => ({ repository: 'Repository', release })

const sharedCertifications = {
  en: [
    { title: 'Exploring in AI', issuer: 'IBM SkillsBuild', date: 'Mar 2026' },
    { title: 'Boost Your Productivity with Data', issuer: 'IBM SkillsBuild', date: 'Mar 2026' },
    { title: 'Robotics, 3D Printing & Laser Cutting', issuer: 'The Qube – Molo12', date: 'Jul 2023' },
    { title: 'Cambridge English B2 First', issuer: 'Cambridge', date: '2022' },
    { title: 'Google Analytics for Beginners', issuer: 'Google Analytics Academy', date: '2022' },
    { title: 'Worker Safety Training', issuer: 'Accordo Stato-Regioni', date: 'Nov 2019' },
  ],
  it: [
    { title: 'Exploring in AI', issuer: 'IBM SkillsBuild', date: 'mar 2026' },
    { title: 'Boost Your Productivity with Data', issuer: 'IBM SkillsBuild', date: 'mar 2026' },
    { title: 'Robotics, 3D Printing & Laser Cutting', issuer: 'The Qube – Molo12', date: 'lug 2023' },
    { title: 'Cambridge English B2 First', issuer: 'Cambridge', date: '2022' },
    { title: 'Google Analytics for Beginners', issuer: 'Google Analytics Academy', date: '2022' },
    { title: 'Formazione per Lavoratori', issuer: 'Accordo Stato-Regioni', date: 'nov 2019' },
  ],
}

export const supportedLanguages = ['en', 'it']

export const content = {
  en: {
    meta: {
      title: 'Lorenzo Caputo | Junior Developer in Training',
      description: 'Portfolio of Lorenzo Caputo — a junior developer in training at ITS Academy, building a solid technical foundation with care and curiosity.',
      ogTitle: 'Lorenzo Caputo | Junior Developer in Training',
      ogDescription: 'Junior developer in training — building a technical foundation with care, curiosity, and hands-on practice.',
      twitterTitle: 'Lorenzo Caputo | Junior Developer in Training',
      twitterDescription: 'Junior developer in training. Care, curiosity, steady progress.',
      ogLocale: 'en_US',
    },
    ui: {
      skipToContentLabel: 'Skip to content',
      backToTopAria: 'Back to top',
      primaryNavAria: 'Primary',
      mobileNavAria: 'Mobile',
      menuToggleAria: 'Toggle navigation menu',
      openGitHubAria: 'Open GitHub repository',
      openReleaseAria: 'Open public release page',
      languageSwitcherAria: 'Language selector',
    },
    profile: {
      ...sharedProfile,
      role: 'Junior Developer in Training',
      school: 'ITS Academy Apulia Digital Maker',
      location: 'Lecce, Puglia, Italy',
      portraitAlt: 'Portrait of Lorenzo Caputo',
      headlineLead: 'Learning to build software with logic, care, and',
      headlineAccent: 'genuine',
      headlineTrail: 'technical curiosity.',
      intro: "I'm Lorenzo — a junior developer in training at ITS Academy, building solid technical foundations through study, practice, and my first real product.",
      introNote: "I'm interested in the point where interface quality meets system behavior, from product decisions to the devices underneath.",
    },
    navItems: buildNavItems(['About', 'Growth', 'Experience', 'Skills', 'Project', 'Certifications', 'Contact']),
    about: {
      eyebrow: 'About',
      title: 'The background that shaped how I approach the work.',
      lead: 'I come into software with structure, public-facing experience, and a practical sense of responsibility.',
      paragraphs: [
        'ITS Academy is building the technical side. Earlier roles outside software gave me pace, accountability, and the composure to stay clear under pressure.',
        'That background shapes how I work: not only learning tools, but building judgment, consistency, and habits that hold up in real environments.',
      ],
      principlesEyebrow: 'How I work',
      principles: [
        {
          title: 'Follow-through',
          text: 'Finish the details, hold the standard, and leave things in a state others can rely on.',
        },
        {
          title: 'Clear judgment',
          text: 'Prefer readable decisions, honest tradeoffs, and software that earns its place.',
        },
        {
          title: 'Systems thinking',
          text: 'Stay focused across interface polish, debugging, devices, and the layers underneath.',
        },
      ],
    },
    growth: {
      eyebrow: 'Growth Path',
      title: 'The technical side of the path is becoming more structured over time.',
      items: [
        {
          year: '2026 – Present',
          title: 'ITS Academy Apulia Digital Maker',
          subtitle: 'Tecnico Superiore Developer (EQF 5)',
          text: 'A 1,800-hour program centered on Java, C#, OOP, SQL, Git/GitHub, cloud foundations, AI integration, and hands-on debugging labs.',
        },
        {
          year: '2022',
          title: 'Scientific-Linguistic High School Diploma',
          subtitle: 'I.I.S.S. "G.C. Vanini" – Casarano',
          text: 'An earlier foundation in logic, mathematics, physics, and languages that still shapes how I study and connect ideas.',
        },
      ],
    },
    experience: {
      eyebrow: 'Experience',
      title: 'Roles that strengthened pace, communication, and practical judgment.',
      cards: [
        {
          title: 'Hospitality & Team Coordination',
          context: 'Fast service, digital orders, constant team timing.',
          text: 'High-pressure service shifts taught me to keep priorities visible and handoffs clean — even as conditions changed minute to minute.',
        },
        {
          title: 'Front-Office / Sala',
          context: 'Reception, payments, and public-facing problem solving.',
          text: 'Working reception sharpened calm communication: listen first, resolve the immediate problem, and explain the next step clearly.',
        },
        {
          title: 'Technical Support & Hardware',
          context: 'Device diagnostics, workstation setup, local networks.',
          text: 'Hands-on diagnostics and hardware assembly pushed me toward structured troubleshooting — isolate the fault, validate the fix, close the loop.',
        },
      ],
    },
    skills: {
      eyebrow: 'Skills',
      title: 'The tools and habits I already work with.',
      groups: [
        {
          title: 'Core Languages',
          summary: 'Java, C#, C++, SQL, HTML, and CSS, practiced through coursework, labs, and repetition.',
        },
        {
          title: 'Build Workflow',
          summary: 'Git, GitHub, iterative development, debugging, and release-focused refinement.',
        },
        {
          title: 'Systems Context',
          summary: 'Hardware troubleshooting, workstation setup, OS tuning, and practical support across devices and small local networks.',
        },
        {
          title: 'Working Style',
          summary: 'Clear communication, precision, and dependable follow-through under daily pressure.',
        },
      ],
    },
    project: {
      eyebrow: 'Featured Project',
      title: 'My Tracking App',
      summary: 'My first personal project carried all the way to release: a Flutter app for tracking recurring product use with a calm interface and reliable local data.',
      release: { version: 'v1.0.0', label: 'Public release', date: 'Apr 7, 2026' },
      journey: 'From flow design to public release: interface refinement, Android-specific behavior, and the final polish of v1.0.0.',
      whyLabel: 'Why it matters',
      whyItMatters: 'It goes beyond a demo: it required real decisions about product scope, data handling, and release quality.',
      proofAria: 'Project proof points',
      proofHighlights: [
        { title: 'Android widgets', text: 'Home-screen access keeps logging fast enough to fit a daily routine.' },
        { title: 'Usage analytics', text: 'Short- and mid-range views surface patterns instead of burying them.' },
        { title: 'CSV import/export', text: 'Portable data keeps the app useful beyond a closed test environment.' },
        { title: 'Local-first design', text: 'No account, no backend dependency — all data stays on the device.' },
      ],
      detailsLabel: 'Product details',
      evidence: [
        'Multi-product tracking with active switching and daily usage logging',
        'Package math with remaining quantity, cost, and unit visibility',
        'History, reminders, and trend views built for repeated daily use',
        'Release-ready flow: clarity, retention, and consistent interaction',
      ],
      links: buildProjectLinks('Public Release'),
      screenshotsAria: 'Project screenshots',
      screenshotColumns: buildScreenshotColumns('en'),
    },
    certifications: {
      eyebrow: 'Certifications',
      title: 'Selected certifications.',
      items: sharedCertifications.en,
    },
    contact: {
      eyebrow: 'Contact',
      titleLead: 'Open to a',
      titleAccent: 'serious next step',
      titleTrail: 'in software.',
      lead: 'Open to meaningful conversations, concrete opportunities, and strong professional connections.',
      links: buildContactLinks({ email: 'Email', github: 'GitHub', linkedin: 'LinkedIn', cv: 'Download CV' }),
    },
    footer: { closing: 'Built with care. More coming.' },
  },

  it: {
    meta: {
      title: 'Lorenzo Caputo — Portfolio',
      description: 'Junior Developer in formazione con una forte passione per software, hardware e problem solving pratico.',
      ogTitle: 'Lorenzo Caputo — Portfolio',
      ogDescription: 'Junior Developer in formazione con una forte passione per software, hardware e problem solving pratico.',
      twitterTitle: 'Lorenzo Caputo — Portfolio',
      twitterDescription: 'Junior Developer in formazione con una forte passione per software, hardware e problem solving pratico.',
      ogLocale: 'it_IT',
    },
    ui: {
      skipToContentLabel: 'Salta al contenuto',
      backToTopAria: 'Torna in alto',
      primaryNavAria: 'Principale',
      mobileNavAria: 'Mobile',
      menuToggleAria: 'Apri o chiudi il menu',
      openGitHubAria: 'Apri il repository GitHub',
      openReleaseAria: 'Apri la pagina della release',
      languageSwitcherAria: 'Seleziona la lingua',
    },
    profile: {
      ...sharedProfile,
      role: 'Junior Developer in Formazione',
      school: 'ITS Academy Apulia Digital Maker',
      location: 'Lecce, Puglia, Italia',
      portraitAlt: 'Ritratto di Lorenzo Caputo',
      headlineLead: 'Sto imparando a sviluppare con metodo, cura e',
      headlineAccent: 'autentica',
      headlineTrail: 'curiosità tecnica.',
      intro: "Sono Lorenzo: junior developer in formazione all'ITS Academy. Sto costruendo basi tecniche solide attraverso studio, pratica e il mio primo progetto reale.",
      introNote: "Mi interessa il punto in cui qualità dell'interfaccia e comportamento del sistema si incontrano, dalle scelte di prodotto fino a ciò che succede sotto il cofano.",
    },
    navItems: buildNavItems(['Chi sono', 'Percorso', 'Esperienza', 'Competenze', 'Progetto', 'Certificazioni', 'Contatti']),
    about: {
      eyebrow: 'Chi sono',
      title: 'Il contesto che ha formato il mio modo di lavorare.',
      lead: "Arrivo al software con struttura, esperienza a contatto con il pubblico e un senso pratico della responsabilità.",
      paragraphs: [
        "L'ITS Academy sta costruendo la parte tecnica. Le esperienze precedenti, fuori dal software, mi hanno insegnato ritmo, affidabilità e lucidità sotto pressione.",
        "Quel contesto incide sul mio modo di lavorare: non sto solo imparando strumenti, ma costruendo giudizio, continuità e abitudini che reggano in situazioni reali.",
      ],
      principlesEyebrow: 'Come lavoro',
      principles: [
        {
          title: 'Fino in fondo',
          text: 'Curare i dettagli, tenere lo standard e lasciare il lavoro in uno stato su cui gli altri possano contare.',
        },
        {
          title: 'Giudizio chiaro',
          text: 'Preferire decisioni leggibili, compromessi onesti e software che abbia un motivo chiaro per esistere.',
        },
        {
          title: 'Visione di sistema',
          text: "Restare focalizzato tra interfaccia, debugging, dispositivi e tutto ciò che c'è sotto.",
        },
      ],
    },
    growth: {
      eyebrow: 'Percorso',
      title: 'La parte tecnica del percorso sta diventando più strutturata nel tempo.',
      items: [
        {
          year: '2026 – Oggi',
          title: 'ITS Academy Apulia Digital Maker',
          subtitle: 'Tecnico Superiore Developer (EQF 5)',
          text: 'Un percorso da 1.800 ore centrato su Java, C#, OOP, SQL, Git/GitHub, basi cloud, integrazione AI e laboratori pratici di debugging.',
        },
        {
          year: '2022',
          title: 'Diploma Scientifico-Linguistico',
          subtitle: 'I.I.S.S. "G.C. Vanini" – Casarano',
          text: 'Una base precedente in logica, matematica, fisica e lingue che ancora oggi influenza il modo in cui studio e collego le idee.',
        },
      ],
    },
    experience: {
      eyebrow: 'Esperienza',
      title: 'Esperienze che hanno rafforzato ritmo, comunicazione e giudizio pratico.',
      cards: [
        {
          title: 'Hospitality & Team Coordination',
          context: 'Turni intensi, ordini digitali, coordinamento continuo.',
          text: 'I turni ad alta pressione mi hanno insegnato a tenere visibili le priorità e a mantenere puliti i passaggi, anche quando il contesto cambiava di continuo.',
        },
        {
          title: 'Front-Office / Sala',
          context: 'Accoglienza, pagamenti, problemi in tempo reale.',
          text: 'Il lavoro in sala ha affinato una comunicazione calma: ascoltare, risolvere il problema immediato e spiegare con chiarezza il passo successivo.',
        },
        {
          title: 'Supporto Tecnico & Hardware',
          context: 'Diagnostica, workstation, reti locali.',
          text: "Diagnostica e assemblaggio mi hanno portato verso un troubleshooting strutturato: isolare il guasto, validare la soluzione, chiudere il cerchio.",
        },
      ],
    },
    skills: {
      eyebrow: 'Competenze',
      title: 'Gli strumenti e le abitudini di lavoro che uso già con continuità.',
      groups: [
        {
          title: 'Linguaggi principali',
          summary: 'Java, C#, C++, SQL, HTML e CSS: pratica costruita tra corso, laboratori e ripetizione.',
        },
        {
          title: 'Flusso di sviluppo',
          summary: 'Git, GitHub, sviluppo iterativo, debugging e rifinitura orientata alla release.',
        },
        {
          title: 'Contesto di sistema',
          summary: 'Troubleshooting hardware, setup workstation, tuning del sistema operativo e supporto pratico su dispositivi e piccole reti locali.',
        },
        {
          title: 'Metodo di lavoro',
          summary: 'Comunicazione chiara, precisione e affidabilità anche in contesti di lavoro quotidiano.',
        },
      ],
    },
    project: {
      eyebrow: 'Progetto in evidenza',
      title: 'My Tracking App',
      summary: "Il mio primo progetto personale portato fino alla release: un'app Flutter per tracciare l'uso ricorrente di prodotti, con interfaccia pulita e dati gestiti in locale.",
      release: { version: 'v1.0.0', label: 'Release pubblica', date: '7 apr 2026' },
      journey: "Dalla definizione dei flussi alla pubblicazione: interfaccia, comportamenti Android e rifinitura della v1.0.0.",
      whyLabel: 'Perché conta',
      whyItMatters: 'Va oltre una demo: mi ha costretto a prendere decisioni reali su scope, gestione dei dati e qualità della release.',
      proofAria: 'Punti chiave del progetto',
      proofHighlights: [
        { title: 'Widget Android', text: 'Accesso dalla Home abbastanza rapido per entrare davvero nella routine quotidiana.' },
        { title: 'Analisi utilizzo', text: 'Viste a breve e medio termine che mostrano i pattern invece di nasconderli.' },
        { title: 'Import/export CSV', text: "Dati portabili che rendono l'app utile anche fuori da un flusso di test chiuso." },
        { title: 'Local-first', text: 'Nessun account, nessun backend — i dati restano sul dispositivo.' },
      ],
      detailsLabel: 'Dettagli prodotto',
      evidence: [
        "Tracciamento multi-prodotto con cambio rapido dell'elemento attivo e registrazione giornaliera",
        'Calcoli di confezione con quantità residua, costo e unità sempre visibili',
        'Storico, promemoria e trend pensati per un uso quotidiano regolare',
        'Flusso pronto alla release: chiarezza, continuità e interazione ripetuta',
      ],
      links: buildProjectLinks('Release pubblica'),
      screenshotsAria: 'Screenshot del progetto',
      screenshotColumns: buildScreenshotColumns('it'),
    },
    certifications: {
      eyebrow: 'Certificazioni',
      title: 'Certificazioni selezionate.',
      items: sharedCertifications.it,
    },
    contact: {
      eyebrow: 'Contatti',
      titleLead: 'Pronto per un',
      titleAccent: 'passo serio',
      titleTrail: 'nel software.',
      lead: 'Resto aperto a confronti, opportunità concrete e connessioni professionali solide.',
      links: buildContactLinks({ email: 'Email', github: 'GitHub', linkedin: 'LinkedIn', cv: 'Scarica CV' }),
    },
    footer: { closing: 'Costruito con cura. Altro in arrivo.' },
  },
}
