import { memo } from 'react'
import { SectionHeading } from './SectionHeading'
import { revealProps } from '../utils/reveal'

function SkillsSectionComponent({ skills }) {
  return (
    <section className="section" id="skills" aria-labelledby="skills-title">
      <div className="container skills">
        <SectionHeading
          eyebrow={skills.eyebrow}
          title={skills.title}
          className="skills__heading"
          id="skills-title"
        />

        <ul className="skill-rows">
          {skills.groups.map((group, index) => (
            <li
              key={group.title}
              className="skill-row"
              {...revealProps(index * 55 + 60, { kind: 'copy', y: 18 })}
            >
              <span className="skill-row__index">0{index + 1}</span>
              <h3 className="skill-row__title">{group.title}</h3>
              <p className="skill-row__summary">{group.summary}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export const SkillsSection = memo(SkillsSectionComponent)
