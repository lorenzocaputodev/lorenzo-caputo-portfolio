import { memo } from 'react'
import { SectionHeading } from './SectionHeading'
import { revealProps } from '../utils/reveal'

function GrowthSectionComponent({ growth }) {
  return (
    <section className="section" id="growth" aria-labelledby="growth-title">
      <div className="container growth">
        <SectionHeading
          eyebrow={growth.eyebrow}
          title={growth.title}
          className="growth__heading"
          id="growth-title"
        />

        <ol className="timeline">
          {growth.items.map((item, index) => (
            <li
              key={`${item.year}-${item.title}`}
              className="timeline__item"
              {...revealProps(index * 90 + 60, { kind: 'card', y: 24 })}
            >
              <span className="timeline__dot" aria-hidden="true" />
              <article className="timeline__content surface-card">
                <span className="timeline__year">{item.year}</span>
                <h3>{item.title}</h3>
                <p className="timeline__subtitle">{item.subtitle}</p>
                <p>{item.text}</p>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export const GrowthSection = memo(GrowthSectionComponent)
