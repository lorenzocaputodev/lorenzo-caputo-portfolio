import { memo } from 'react'
import { SectionHeading } from './SectionHeading'
import { revealProps } from '../utils/reveal'

function CertificationsSectionComponent({ certifications }) {
  return (
    <section className="section" id="certifications" aria-labelledby="certifications-title">
      <div className="container certifications">
        <SectionHeading
          eyebrow={certifications.eyebrow}
          title={certifications.title}
          className="certifications__heading"
          id="certifications-title"
        />

        <div className="card-grid card-grid--compact certification-grid">
          {certifications.items.map((item, index) => (
            <div
              key={`${item.title}-${item.date}`}
              {...revealProps(index * 45 + 60, { kind: 'card', y: 22 })}
            >
              <article className="surface-card certification-card">
                <p className="certification-card__date">{item.date}</p>
                <h3>{item.title}</h3>
                <p>{item.issuer}</p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export const CertificationsSection = memo(CertificationsSectionComponent)
