// --- Sezione Contatti e footer ---
import { memo, useEffect, useState } from 'react'
import { ExternalLink } from '../ui/ExternalLink'
import { GitHubIcon } from '../ui/GitHubIcon'
import { SectionHeading } from '../ui/SectionHeading'
import { revealProps } from '../../utils/reveal'

const COPY_FEEDBACK_MS = 2000

// --- Icone dei collegamenti ---
const icons = {
  download: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v12" />
      <path d="m7 10 5 5 5-5" />
      <path d="M5 21h14" />
    </svg>
  ),
  github: <GitHubIcon />,
  linkedin: (
    <svg viewBox="0 0 24 24">
      <path fill="currentColor" d="M6 2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4Zm.4 7.6V18h2.4V9.6H6.4Zm1.2-3.8a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8Zm3 3.8V18h2.3v-4.1c0-1 .2-2.1 1.6-2.1s1.4 1.2 1.4 2.2V18h2.4v-4.6c0-2.2-.5-3.8-3-3.8-1.3 0-2.1.8-2.4 1.4V9.6h-2.3Z" />
    </svg>
  ),
}

function ContactSectionComponent({ contact, footer, profile }) {
  const [copyState, setCopyState] = useState(null)

  useEffect(() => {
    if (!copyState) return undefined
    const timer = setTimeout(() => setCopyState(null), COPY_FEEDBACK_MS)
    return () => clearTimeout(timer)
  }, [copyState])

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopyState('copied')
    } catch {
      setCopyState('failed')
    }
  }

  const copyLabel = { copied: contact.emailCopied, failed: contact.copyFailed }[copyState] ?? contact.copyEmail

  return (
    <section className="section section--contact" id="contact" aria-labelledby="contact-title">
      <div className="container contact">
        <SectionHeading
          eyebrow={contact.eyebrow}
          title={(
            <>
              {contact.titleLead} <span className="accent-serif">{contact.titleAccent}</span>{' '}
              {contact.titleTrail}
            </>
          )}
          align="center"
          id="contact-title"
        />

        <div className="contact__panel surface-card" {...revealProps(80, { kind: 'card', y: 22 })}>
          <p className="contact__lead">{contact.lead}</p>
          <ExternalLink className="contact__email" href={`mailto:${profile.email}`}>
            {profile.email}
          </ExternalLink>
          <button
            className={copyState ? `contact__copy is-${copyState}` : 'contact__copy'}
            type="button"
            aria-live="polite"
            onClick={copyEmail}
          >
            {copyLabel}
          </button>

          <div className="contact__actions">
            {contact.links.map((item) => (
              <ExternalLink
                key={item.label}
                className={item.download ? 'button button--project contact__cv' : 'button button--secondary'}
                download={item.download}
                href={item.href}
              >
                <span className="contact__icon" aria-hidden="true">{icons[item.icon]}</span>
                {item.label}
              </ExternalLink>
            ))}
          </div>
        </div>

        <footer className="footer" {...revealProps(140, { kind: 'copy', y: 16 })}>
          <div className="footer__inner">
            <div className="footer__identity">
              <p className="footer__name">{profile.name}</p>
              <span className="footer__role">{profile.role}</span>
            </div>
            <p className="footer__closing">{footer.closing}</p>
          </div>
        </footer>
      </div>
    </section>
  )
}

export const ContactSection = memo(ContactSectionComponent)
