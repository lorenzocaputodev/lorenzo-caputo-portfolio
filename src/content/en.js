import {
  buildContactLinks,
  buildNavItems,
  buildScreenshotColumns,
  certifications,
  sharedProfile,
} from './shared'

export const en = {
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
    openGitHubAria: 'GitHub profile',
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
    links: { repository: 'Repository', release: 'Public Release' },
    screenshotsAria: 'Project screenshots',
    screenshotColumns: buildScreenshotColumns('en'),
  },
  certifications: {
    eyebrow: 'Certifications',
    title: 'Selected certifications.',
    items: certifications.en,
  },
  contact: {
    eyebrow: 'Contact',
    titleLead: 'Open to a',
    titleAccent: 'serious next step',
    titleTrail: 'in software.',
    lead: 'Open to meaningful conversations, concrete opportunities, and strong professional connections.',
    links: buildContactLinks({ github: 'GitHub', linkedin: 'LinkedIn', cv: 'Download CV' }),
  },
  footer: { closing: 'Built with care. More coming.' },
}
