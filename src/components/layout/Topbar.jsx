// --- Barra di navigazione in alto ---
import { memo } from 'react'
import { ExternalLink } from '../ui/ExternalLink'
import { GitHubIcon } from '../ui/GitHubIcon'
import { LanguageSwitch } from './LanguageSwitch'
import { useActiveSection } from '../../hooks/useActiveSection'

function TopbarComponent({
  language,
  mobileMenuOpen,
  mobileNavRef,
  navItems,
  onCloseMenu,
  onToggleMenu,
  profile,
  ui,
}) {
  const activeSection = useActiveSection(navItems)

  return (
    <header className="topbar">
      <div className="container topbar__stack" ref={mobileNavRef}>
        <div className="topbar__inner">
          <a className="brand" href="#hero" aria-label={`LC – ${ui.backToTopAria}`}>
            <span className="brand__mark">LC</span>
          </a>

          <span className="topbar__mobile-title" aria-hidden="true">
            {profile.name}
          </span>

          <nav className="nav" aria-label={ui.primaryNavAria}>
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                aria-current={activeSection === item.href ? 'location' : undefined}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="topbar__actions">
            <LanguageSwitch
              language={language}
              ariaLabel={ui.languageSwitcherAria}
              className="lang-switch--topbar"
            />

            <ExternalLink
              className="topbar__link topbar__icon-link"
              href={profile.github}
              aria-label={ui.openGitHubAria}
            >
              <GitHubIcon />
            </ExternalLink>

            <button
              className={mobileMenuOpen ? 'menu-toggle is-open' : 'menu-toggle'}
              type="button"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav"
              aria-label={ui.menuToggleAria}
              onClick={onToggleMenu}
            >
              <span />
              <span />
            </button>
          </div>
        </div>

        <div className="mobile-nav" id="mobile-nav" hidden={!mobileMenuOpen}>
          <nav className="mobile-nav__panel" aria-label={ui.mobileNavAria}>
            <ul className="mobile-nav__links">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={activeSection === item.href ? 'location' : undefined}
                    onClick={onCloseMenu}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <LanguageSwitch
              language={language}
              ariaLabel={ui.languageSwitcherAria}
              className="lang-switch--mobile"
            />
          </nav>
        </div>
      </div>
    </header>
  )
}

export const Topbar = memo(TopbarComponent)
