// ===== Sezione Contatti e footer =====
import { memo, useEffect, useState } from 'react'
import { ExternalLink } from '../ui/ExternalLink'
import { SectionHeading } from '../ui/SectionHeading'
import { revealProps } from '../../utils/reveal'

const COPY_FEEDBACK_MS = 2000

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
                className="button button--secondary"
                download={item.download}
                href={item.href}
              >
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
