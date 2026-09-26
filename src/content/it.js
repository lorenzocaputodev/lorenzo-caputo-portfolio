import {
  buildContactLinks,
  buildNavItems,
  buildScreenshotColumns,
  certifications,
  sharedProfile,
} from './shared'

export const it = {
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
    openGitHubAria: 'Profilo GitHub',
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
    release: { badge: 'Flutter · Android', label: 'In sviluppo attivo, con release pubbliche su GitHub' },
    journey: "Dalla prima release pubblica a oggi: aggiornamenti continui su interfaccia, widget Android, statistiche e gestione dei dati, guidati dall'uso reale.",
    whyLabel: 'Perché conta',
    whyItMatters: 'Va oltre una demo: mi ha costretto a prendere decisioni reali su scope, gestione dei dati e qualità della release.',
    proofAria: 'Punti chiave del progetto',
    proofHighlights: [
      { title: 'Widget Android', text: 'Tre layout (small, medium, large) per registrare un utilizzo direttamente dalla Home.' },
      { title: 'Statistiche e obiettivi', text: 'Cronologia per giorni, settimane e mesi, badge sbloccabili e un piano di riduzione per ogni prodotto.' },
      { title: 'Backup CSV', text: "Backup ed export in CSV: i dati restano portabili e sotto il controllo dell'utente." },
      { title: 'Local-first', text: 'Nessun account, nessun backend — i dati restano sul dispositivo.' },
    ],
    detailsLabel: 'Dettagli prodotto',
    evidence: [
      'Tracciamento multi-prodotto con selettore rapido, archiviazione e storico conservato',
      'Conteggio giornaliero, scorta residua, costi e andamento degli ultimi 7 giorni',
      'Annulla dopo ogni registrazione, promemoria periodici e tema scuro / chiaro / sistema',
      "Test automatici dell'interfaccia (golden test) per mantenere stabile il design tra un aggiornamento e l'altro",
    ],
    links: { repository: 'Repository', release: 'Ultima release' },
    screenshotsAria: 'Screenshot del progetto',
    screenshotColumns: buildScreenshotColumns('it'),
  },
  certifications: {
    eyebrow: 'Certificazioni',
    title: 'Certificazioni selezionate.',
    items: certifications.it,
  },
  contact: {
    eyebrow: 'Contatti',
    titleLead: 'Pronto per un',
    titleAccent: 'passo serio',
    titleTrail: 'nel software.',
    lead: 'Resto aperto a confronti, opportunità concrete e connessioni professionali solide.',
    links: buildContactLinks({ github: 'GitHub', linkedin: 'LinkedIn', cv: 'Scarica CV' }),
  },
  footer: { closing: 'Costruito con cura. Altro in arrivo.' },
}
