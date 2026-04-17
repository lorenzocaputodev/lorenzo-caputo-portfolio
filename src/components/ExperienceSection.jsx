import { memo } from 'react'
import { SectionHeading } from './SectionHeading'
import { revealProps } from '../utils/reveal'

function ExperienceSectionComponent({ experience }) {
  return (
    <section className="section" id="experience" aria-labelledby="experience-title">
      <div className="container experience">
        <SectionHeading
          eyebrow={experience.eyebrow}
          title={experience.title}
          className="experience__heading"
          id="experience-title"
        />

        <div className="card-grid card-grid--three">
          {experience.cards.map((card, index) => (
            <div key={card.title} {...revealProps(index * 80 + 60, { kind: 'card', y: 24 })}>
              <article className="surface-card experience-card">
                <p className="experience-card__context">{card.context}</p>
                <h3 className="experience-card__title">{card.title}</h3>
                <p className="experience-card__copy">{card.text}</p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export const ExperienceSection = memo(ExperienceSectionComponent)
