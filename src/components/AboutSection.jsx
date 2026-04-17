import { memo } from 'react'
import { SectionHeading } from './SectionHeading'
import { revealProps } from '../utils/reveal'

function AboutSectionComponent({ about }) {
  return (
    <section className="section" id="about" aria-labelledby="about-title">
      <div className="container about">
        <div className="about__grid">
          <article className="about__editorial">
            <SectionHeading
              eyebrow={about.eyebrow}
              title={about.title}
              className="about__heading"
              id="about-title"
            />
            <div className="about__copy" {...revealProps(140, { kind: 'copy', y: 18 })}>
              <p className="about__lead">{about.lead}</p>
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </article>

          <aside className="principles" aria-labelledby="about-principles-title">
            <header className="principles__intro" {...revealProps(70, { kind: 'heading', y: 14 })}>
              <p className="eyebrow" id="about-principles-title">
                {about.principlesEyebrow}
              </p>
            </header>

            {about.principles.map((item, index) => (
              <div key={item.title} {...revealProps(index * 70 + 120, { kind: 'card', y: 24 })}>
                <article className="surface-card principle-card">
                  <span className="surface-card__index">0{index + 1}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              </div>
            ))}
          </aside>
        </div>
      </div>
    </section>
  )
}

export const AboutSection = memo(AboutSectionComponent)
