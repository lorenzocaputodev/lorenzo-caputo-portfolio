// ===== Sezione Contatti e footer =====
import { memo, useEffect, useState } from 'react'
import { ExternalLink } from '../ui/ExternalLink'
import { SectionHeading } from '../ui/SectionHeading'
import { revealProps } from '../../utils/reveal'

const COPY_FEEDBACK_MS = 2000

// ===== Icone dei collegamenti =====
const icons = {
  download: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v12" />
      <path d="m7 10 5 5 5-5" />
      <path d="M5 21h14" />
    </svg>
  ),
  github: (
    <svg viewBox="0 0 24 24">
      <path fill="currentColor" d="M12 2C6.48 2 2 6.58 2 12.23c0 4.51 2.87 8.34 6.84 9.69.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.89-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .08 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.74 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.84c.85 0 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.43.2 2.48.1 2.74.64.72 1.03 1.63 1.03 2.75 0 3.95-2.34 4.81-4.57 5.07.36.32.68.95.68 1.92 0 1.39-.01 2.5-.01 2.84 0 .27.18.59.69.49A10.27 10.27 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z" />
    </svg>
  ),
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
