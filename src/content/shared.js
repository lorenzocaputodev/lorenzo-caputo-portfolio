// --- Dati comuni a tutte le lingue ---
import portrait from '../assets/images/lorenzo-portrait.webp'
import appHome from '../assets/images/app_home.webp'
import appHomeSmall from '../assets/images/app_home-360.webp'
import appGoals from '../assets/images/app_goals.webp'
import appGoalsSmall from '../assets/images/app_goals-360.webp'
import appHomeEn from '../assets/images/app_home_en.webp'
import appHomeEnSmall from '../assets/images/app_home_en-360.webp'
import appGoalsEn from '../assets/images/app_goals_en.webp'
import appGoalsEnSmall from '../assets/images/app_goals_en-360.webp'
import allergyToday from '../assets/images/allergy_today.webp'
import allergyTodaySmall from '../assets/images/allergy_today-360.webp'
import allergyTrend from '../assets/images/allergy_trend.webp'
import allergyTrendSmall from '../assets/images/allergy_trend-360.webp'
import gresHero from '../assets/images/gres_hero.webp'
import gresHeroSmall from '../assets/images/gres_hero-720.webp'
import gresConfigurator from '../assets/images/gres_configurator.webp'
import gresConfiguratorSmall from '../assets/images/gres_configurator-720.webp'
import sincroNexus from '../assets/images/sincro_nexus.webp'
import sincroNexusSmall from '../assets/images/sincro_nexus-360.webp'
import sincroScenario from '../assets/images/sincro_scenario.webp'
import sincroScenarioSmall from '../assets/images/sincro_scenario-360.webp'
import mhenaTitle from '../assets/images/mhena_title.webp'
import mhenaTitleSmall from '../assets/images/mhena_title-844.webp'
import mhenaPlay from '../assets/images/mhena_play.webp'
import mhenaPlaySmall from '../assets/images/mhena_play-844.webp'
import cvFile from '../assets/files/cv-caputo-lorenzo.pdf'

export const sharedProfile = {
  name: 'Lorenzo Caputo',
  email: 'lorenzocaputo2002.lc@gmail.com',
  github: 'https://github.com/lorenzocaputodev',
  linkedin: 'https://www.linkedin.com/in/lorenzocaputodev/',
  portrait,
  portraitWidth: 511,
  portraitHeight: 512,
  cvFile,
  cvDownloadName: 'Lorenzo-Caputo-CV.pdf',
}

// --- Navigazione e contatti ---
export const buildNavItems = (labels) =>
  Object.entries(labels).map(([id, label]) => ({ label, href: `#${id}` }))

export const buildContactLinks = ({ github, linkedin, cv }) => [
  { label: cv, href: cvFile, download: sharedProfile.cvDownloadName, icon: 'download' },
  { label: github, href: sharedProfile.github, icon: 'github' },
  { label: linkedin, href: sharedProfile.linkedin, icon: 'linkedin' },
]

// --- Progetti ---
const phoneShot = (image, imageSmall, title, width, height) => ({ image, imageSmall, smallWidth: 360, title, width, height })
const webShot = (image, imageSmall, title, width = 1440, height = 900) => ({ image, imageSmall, smallWidth: width / 2, title, width, height })

const projectData = [
  {
    id: 'my-tracking-app',
    name: 'My Tracking App',
    stack: 'Flutter · Android',
    layout: 'phone',
    links: [
      { kind: 'repository', href: 'https://github.com/lorenzocaputodev/my_tracking_app' },
      { kind: 'release', href: 'https://github.com/lorenzocaputodev/my_tracking_app/releases/latest' },
    ],
    screenshots: [
      phoneShot({ it: appHome, en: appHomeEn }, { it: appHomeSmall, en: appHomeEnSmall }, { en: 'Home', it: 'Home' }, 718, 1596),
      phoneShot({ it: appGoals, en: appGoalsEn }, { it: appGoalsSmall, en: appGoalsEnSmall }, { en: 'Achievements & badges', it: 'Obiettivi e badge' }, 718, 1596),
    ],
  },
  {
    id: 'allergy-radar',
    name: 'Allergy Radar',
    stack: 'Flutter · Android',
    layout: 'phone',
    links: [
      { kind: 'repository', href: 'https://github.com/lorenzocaputodev/allergy_radar' },
      { kind: 'release', href: 'https://github.com/lorenzocaputodev/allergy_radar/releases/latest' },
    ],
    screenshots: [
      phoneShot(allergyToday, allergyTodaySmall, { en: 'Today', it: 'Oggi' }, 540, 1199),
      phoneShot(allergyTrend, allergyTrendSmall, { en: 'Trend', it: 'Andamento' }, 540, 1199),
    ],
  },
  {
    id: 'caputo-gres-design',
    name: 'Caputo Gres Design',
    stack: 'Vite · GSAP · CSS 3D',
    layout: 'web',
    links: [
      { kind: 'live', href: 'https://caputogresdesign.pages.dev/' },
      { kind: 'repository', href: 'https://github.com/lorenzocaputodev/caputogresdesign' },
    ],
    screenshots: [
      webShot(gresHero, gresHeroSmall, { en: 'Opening', it: 'Apertura' }),
      webShot(gresConfigurator, gresConfiguratorSmall, { en: 'Sink configurator', it: 'Componi il tuo lavandino' }),
    ],
  },
  {
    id: 'sincro',
    name: 'Sincro',
    stack: 'Flutter · Supabase · Android',
    layout: 'phone',
    links: [],
    screenshots: [
      phoneShot(sincroNexus, sincroNexusSmall, { en: 'Nexus', it: 'Nexus' }, 720, 1560),
      phoneShot(sincroScenario, sincroScenarioSmall, { en: 'Scenario of the day', it: 'Scenario del giorno' }, 720, 1560),
    ],
  },
  {
    id: 'mhena-meh',
    name: 'Mhèna meh!',
    stack: 'JavaScript · Canvas · Cloudflare',
    layout: 'web',
    links: [],
    screenshots: [
      webShot(mhenaTitle, mhenaTitleSmall, { en: 'Title screen', it: 'Schermata iniziale' }, 1688, 780),
      webShot(mhenaPlay, mhenaPlaySmall, { en: 'Boss fight', it: 'Scontro con il boss' }, 1688, 780),
    ],
  },
]

// --- Strumenti per Windows ---
const toolData = [
  { id: 'windows-vm-advisor', name: 'Windows VM Advisor', language: 'PowerShell', href: 'https://github.com/lorenzocaputodev/Windows-VM-Advisor' },
  { id: 'windows-log-toolkit', name: 'Windows Log Toolkit', language: 'Batch', href: 'https://github.com/lorenzocaputodev/windows-log-toolkit' },
  { id: 'remove-vcredist', name: 'Remove VC++ Redist', language: 'PowerShell', href: 'https://github.com/lorenzocaputodev/remove-vcredist' },
  { id: 'java-uninstaller', name: 'Java Uninstaller', language: 'PowerShell', href: 'https://github.com/lorenzocaputodev/java-uninstaller' },
  { id: 'fix-lightshot-fn', name: 'Fix Lightshot Fn', language: 'Batch', href: 'https://github.com/lorenzocaputodev/fix-lightshot-fn' },
]

export const buildTools = (copy) => toolData.map((tool) => ({ ...tool, text: copy[tool.id] }))

export const buildProjects = (lang, copy, linkLabels) =>
  projectData.map((project) => ({
    ...project,
    ...copy[project.id],
    links: project.links.map((link) => ({ ...link, label: linkLabels[link.kind] })),
    screenshots: project.screenshots.map((shot) => ({
      ...shot,
      image: shot.image[lang] ?? shot.image,
      imageSmall: shot.imageSmall[lang] ?? shot.imageSmall,
      title: shot.title[lang],
    })),
  }))

// --- Certificazioni ---
export const certifications = {
  en: [
    { title: 'Exploring in AI', issuer: 'IBM SkillsBuild', date: 'Mar 2026' },
    { title: 'Boost Your Productivity with Data', issuer: 'IBM SkillsBuild', date: 'Mar 2026' },
    { title: 'Robotics, 3D Printing & Laser Cutting', issuer: 'The Qube – Molo12', date: 'Jul 2023' },
    { title: 'Google Analytics for Beginners', issuer: 'Google Analytics Academy', date: 'May 2022' },
    { title: 'Cambridge English B2 First', issuer: 'Cambridge', date: 'Nov 2021' },
    { title: 'Worker Safety Training (State-Regions Agreement)', issuer: 'I.I.S.S. "G.C. Vanini" – Casarano', date: 'Nov 2019' },
  ],
  it: [
    { title: 'Exploring in AI', issuer: 'IBM SkillsBuild', date: 'mar 2026' },
    { title: 'Boost Your Productivity with Data', issuer: 'IBM SkillsBuild', date: 'mar 2026' },
    { title: 'Robotics, 3D Printing & Laser Cutting', issuer: 'The Qube – Molo12', date: 'lug 2023' },
    { title: 'Google Analytics for Beginners', issuer: 'Google Analytics Academy', date: 'mag 2022' },
    { title: 'Cambridge English B2 First', issuer: 'Cambridge', date: 'nov 2021' },
    { title: 'Formazione per Lavoratori (Accordo Stato-Regioni)', issuer: 'I.I.S.S. "G.C. Vanini" – Casarano', date: 'nov 2019' },
  ],
}
