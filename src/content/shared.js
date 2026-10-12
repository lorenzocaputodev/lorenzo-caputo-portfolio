// --- Dati comuni a tutte le lingue ---
import portrait from '../assets/images/lorenzo-portrait.webp'
import appHome from '../assets/images/app_home.webp'
import appHomeSmall from '../assets/images/app_home-360.webp'
import appGoals from '../assets/images/app_goals.webp'
import appGoalsSmall from '../assets/images/app_goals-360.webp'
import allergyToday from '../assets/images/allergy_today.webp'
import allergyTodaySmall from '../assets/images/allergy_today-360.webp'
import allergyTrend from '../assets/images/allergy_trend.webp'
import allergyTrendSmall from '../assets/images/allergy_trend-360.webp'
import gresHero from '../assets/images/gres_hero.webp'
import gresHeroSmall from '../assets/images/gres_hero-720.webp'
import gresConfigurator from '../assets/images/gres_configurator.webp'
import gresConfiguratorSmall from '../assets/images/gres_configurator-720.webp'
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
const navSections = ['about', 'journey', 'skills', 'project', 'contact']

export const buildNavItems = (labels) =>
  labels.map((label, index) => ({ label, href: `#${navSections[index]}` }))

export const buildContactLinks = ({ github, linkedin, cv }) => [
  { label: cv, href: cvFile, download: sharedProfile.cvDownloadName, icon: 'download' },
  { label: github, href: sharedProfile.github, icon: 'github' },
  { label: linkedin, href: sharedProfile.linkedin, icon: 'linkedin' },
]

// --- Progetti ---
const phoneShot = (image, imageSmall, title, width, height) => ({ image, imageSmall, smallWidth: 360, title, width, height })
const webShot = (image, imageSmall, title) => ({ image, imageSmall, smallWidth: 720, title, width: 1440, height: 900 })

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
      phoneShot(appHome, appHomeSmall, { en: 'Home', it: 'Home' }, 718, 1596),
      phoneShot(appGoals, appGoalsSmall, { en: 'Goals & badges', it: 'Obiettivi e badge' }, 718, 1596),
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
]

export const buildProjects = (lang, copy, linkLabels) =>
  projectData.map((project) => ({
    ...project,
    ...copy[project.id],
    links: project.links.map((link) => ({ ...link, label: linkLabels[link.kind] })),
    screenshots: project.screenshots.map((shot) => ({ ...shot, title: shot.title[lang] })),
  }))

// --- Certificazioni ---
export const certifications = {
  en: [
    { title: 'Exploring in AI', issuer: 'IBM SkillsBuild', date: 'Mar 2026' },
    { title: 'Boost Your Productivity with Data', issuer: 'IBM SkillsBuild', date: 'Mar 2026' },
    { title: 'Robotics, 3D Printing & Laser Cutting', issuer: 'The Qube – Molo12', date: 'Jul 2023' },
    { title: 'Cambridge English B2 First', issuer: 'Cambridge', date: '2022' },
    { title: 'Google Analytics for Beginners', issuer: 'Google Analytics Academy', date: 'May 2022' },
    { title: 'Worker Safety Training', issuer: 'Accordo Stato-Regioni', date: 'Nov 2019' },
  ],
  it: [
    { title: 'Exploring in AI', issuer: 'IBM SkillsBuild', date: 'mar 2026' },
    { title: 'Boost Your Productivity with Data', issuer: 'IBM SkillsBuild', date: 'mar 2026' },
    { title: 'Robotics, 3D Printing & Laser Cutting', issuer: 'The Qube – Molo12', date: 'lug 2023' },
    { title: 'Cambridge English B2 First', issuer: 'Cambridge', date: '2022' },
    { title: 'Google Analytics for Beginners', issuer: 'Google Analytics Academy', date: 'mag 2022' },
    { title: 'Formazione per Lavoratori', issuer: 'Accordo Stato-Regioni', date: 'nov 2019' },
  ],
}
