// ===== Dati comuni a tutte le lingue =====
import portrait from '../assets/images/lorenzo-portrait.webp'
import appHome from '../assets/images/app_home.webp'
import appGoals from '../assets/images/app_goals.webp'
import appSettings from '../assets/images/app_settings.webp'
import appHistory from '../assets/images/app_history.webp'
import appHomeSmall from '../assets/images/app_home-360.webp'
import appGoalsSmall from '../assets/images/app_goals-360.webp'
import appSettingsSmall from '../assets/images/app_settings-360.webp'
import appHistorySmall from '../assets/images/app_history-360.webp'
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
  { label: cv, href: cvFile, download: sharedProfile.cvDownloadName, icon: 'download' },
  { label: github, href: sharedProfile.github, icon: 'github' },
  { label: linkedin, href: sharedProfile.linkedin, icon: 'linkedin' },
]

// ===== Screenshot del progetto =====
const projectScreenshots = [
  { title: { en: 'Home', it: 'Home' }, image: appHome, imageSmall: appHomeSmall, width: 718, height: 1596 },
  { title: { en: 'Goals & badges', it: 'Obiettivi e badge' }, image: appGoals, imageSmall: appGoalsSmall, width: 718, height: 1596 },
  { title: { en: 'Settings', it: 'Impostazioni' }, image: appSettings, imageSmall: appSettingsSmall, width: 718, height: 1596 },
  { title: { en: 'History & statistics', it: 'Cronologia e statistiche' }, image: appHistory, imageSmall: appHistorySmall, width: 718, height: 1596 },
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
