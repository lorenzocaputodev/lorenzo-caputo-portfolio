import { memo } from 'react'
import { ExternalLink } from './ExternalLink'
import { SectionHeading } from './SectionHeading'
import { revealProps } from '../utils/reveal'

function ContactSectionComponent({ contact, footer, profile }) {
  const contactActions = contact.links.filter((item) => !item.href.startsWith('mailto:'))

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

        <section className="contact__panel surface-card" {...revealProps(80, { kind: 'card', y: 22 })}>
          <p className="contact__lead">{contact.lead}</p>
          <ExternalLink className="contact__email" href={`mailto:${profile.email}`}>
            {profile.email}
          </ExternalLink>

          <div className="contact__actions">
            {contactActions.map((item) => (
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
        </section>

        <footer className="footer footer--contact" {...revealProps(140, { kind: 'copy', y: 16 })}>
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
