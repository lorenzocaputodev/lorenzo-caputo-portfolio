// ===== Sezione Percorso: formazione, esperienza e certificazioni =====
import { memo } from 'react'
import { SectionHeading } from '../ui/SectionHeading'
import { revealProps } from '../../utils/reveal'

function Timeline({ label, items, delay }) {
  return (
    <div className="journey__group">
      <h3 className="journey__label" {...revealProps(delay, { kind: 'heading', y: 14 })}>
        {label}
      </h3>
      <ol className="timeline">
        {items.map((item, index) => (
          <li
            key={`${item.period}-${item.title}`}
            className="timeline__item"
            {...revealProps(delay + 60 + index * 80, { kind: 'card', y: 24 })}
          >
            <span className="timeline__dot" aria-hidden="true" />
            <article className="timeline__content surface-card">
              <span className="timeline__year">{item.period}</span>
              <h4>{item.title}</h4>
              <p className="timeline__subtitle">{item.place}</p>
              <p>{item.text}</p>
            </article>
          </li>
        ))}
      </ol>
    </div>
  )
}

function JourneySectionComponent({ journey }) {
  return (
    <section className="section" id="journey" aria-labelledby="journey-title">
      <div className="container journey">
        <SectionHeading eyebrow={journey.eyebrow} title={journey.title} id="journey-title" />

        <div className="journey__columns">
          <Timeline label={journey.educationLabel} items={journey.education} delay={60} />
          <Timeline label={journey.experienceLabel} items={journey.experience} delay={120} />
        </div>

        <div className="journey__group journey__certifications">
          <h3 className="journey__label" {...revealProps(60, { kind: 'heading', y: 14 })}>
            {journey.certificationsLabel}
          </h3>
          <ul className="card-grid card-grid--three certification-grid">
            {journey.certifications.map((item, index) => (
              <li key={`${item.title}-${item.date}`} {...revealProps(index * 45 + 90, { kind: 'card', y: 22 })}>
                <article className="surface-card certification-card">
                  <p className="certification-card__date">{item.date}</p>
                  <h4>{item.title}</h4>
                  <p>{item.issuer}</p>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export const JourneySection = memo(JourneySectionComponent)
