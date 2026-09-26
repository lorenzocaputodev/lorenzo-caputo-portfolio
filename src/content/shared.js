// ===== Dati comuni a tutte le lingue =====
import portrait from '../assets/images/lorenzo-portrait.webp'
import dashboardOverview from '../assets/images/dashboard_overview.webp'
import historyAnalytics from '../assets/images/history_analytics.webp'
import reductionPlan from '../assets/images/reduction_plan.webp'
import settingsOverview from '../assets/images/settings_overview.webp'
import dashboardOverviewSmall from '../assets/images/dashboard_overview-360.webp'
import historyAnalyticsSmall from '../assets/images/history_analytics-360.webp'
import reductionPlanSmall from '../assets/images/reduction_plan-360.webp'
import settingsOverviewSmall from '../assets/images/settings_overview-360.webp'
import cvFile from '../assets/files/cv-caputo-lorenzo.pdf'

export const sharedProfile = {
  name: 'Lorenzo Caputo',
  email: 'lorenzocaputo2002.lc@gmail.com',
  github: 'https://github.com/lorenzocaputodev',
  linkedin: 'https://www.linkedin.com/in/lorenzocaputodev/',
  projectRepo: 'https://github.com/lorenzocaputodev/my_tracking_app',
  projectRelease: 'https://github.com/lorenzocaputodev/my_tracking_app/releases/latest',
  portrait,
  portraitWidth: 511,
  portraitHeight: 512,
  cvFile,
  cvDownloadName: 'Lorenzo-Caputo-CV.pdf',
}

// ===== Navigazione e contatti =====
const navSections = ['about', 'journey', 'skills', 'project', 'contact']

export const buildNavItems = (labels) =>
  labels.map((label, index) => ({ label, href: `#${navSections[index]}` }))

export const buildContactLinks = ({ github, linkedin, cv }) => [
  { label: github, href: sharedProfile.github },
  { label: linkedin, href: sharedProfile.linkedin },
  { label: cv, href: cvFile, download: sharedProfile.cvDownloadName },
]

// ===== Screenshot del progetto =====
const projectScreenshots = [
  { title: { en: 'Daily dashboard', it: 'Dashboard giornaliera' }, image: dashboardOverview, imageSmall: dashboardOverviewSmall, width: 718, height: 1591 },
  { title: { en: 'History & analytics', it: 'Storico e analisi' }, image: historyAnalytics, imageSmall: historyAnalyticsSmall, width: 718, height: 1591 },
  { title: { en: 'Reduction planning', it: 'Piano di riduzione' }, image: reductionPlan, imageSmall: reductionPlanSmall, width: 718, height: 1590 },
  { title: { en: 'Configuration', it: 'Impostazioni' }, image: settingsOverview, imageSmall: settingsOverviewSmall, width: 718, height: 1591 },
]

export const buildScreenshots = (lang) => projectScreenshots.map((shot) => ({ ...shot, title: shot.title[lang] }))

// ===== Certificazioni =====
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
