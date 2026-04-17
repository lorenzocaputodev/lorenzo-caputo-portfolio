import { memo, useEffect, useRef } from 'react'
import { ExternalLink } from './ExternalLink'
import { SectionHeading } from './SectionHeading'
import { revealProps } from '../utils/reveal'

function ProjectSectionComponent({ project, profile, ui }) {
  const projectRef = useRef(null)

  useEffect(() => {
    const projectElement = projectRef.current

    if (!projectElement) {
      return undefined
    }

    const activateGlow = () => {
      projectElement.classList.add('project--glow-active')
    }

    const handleAnimationEnd = (event) => {
      if (event.animationName === 'project-glow') {
        projectElement.classList.remove('project--glow-active')
      }
    }

    projectElement.addEventListener('animationend', handleAnimationEnd)
    let frameId = 0

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return () => {
        projectElement.removeEventListener('animationend', handleAnimationEnd)
      }
    }

    if (typeof IntersectionObserver === 'undefined') {
      frameId = requestAnimationFrame(activateGlow)

      return () => {
        cancelAnimationFrame(frameId)
        projectElement.removeEventListener('animationend', handleAnimationEnd)
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting)

        if (!visibleEntry) {
          return
        }

        activateGlow()
        observer.disconnect()
      },
      {
        threshold: 0.22,
        rootMargin: '0px 0px -10% 0px',
      },
    )

    observer.observe(projectElement)

    return () => {
      observer.disconnect()
      projectElement.removeEventListener('animationend', handleAnimationEnd)
    }
  }, [])

  return (
    <section className="section section--project" id="project" aria-labelledby="project-title">
      <div ref={projectRef} className="container project">
        <SectionHeading
          eyebrow={project.eyebrow}
          title={project.title}
          body={project.summary}
          id="project-title"
        />

        <div className="project__grid">
          <div className="project__content">
            <div {...revealProps(60, { kind: 'card', y: 24 })}>
              <article className="project__intro surface-card">
                <div className="project__release">
                  <span className="project__release-version">{project.release.version}</span>
                  <span className="project__release-copy">
                    {project.release.label} &middot; {project.release.date}
                  </span>
                </div>
                <p className="project__journey">{project.journey}</p>
              </article>
            </div>

            <div {...revealProps(130, { kind: 'card', y: 24 })}>
              <article className="project__narrative surface-card">
                <p className="project__detail-label">{project.whyLabel}</p>
                <p className="project__narrative-copy">{project.whyItMatters}</p>
              </article>
            </div>

            <section className="project__proof-grid" aria-label={project.proofAria}>
              {project.proofHighlights.map((item, index) => (
                <div
                  key={item.title}
                  className="project__proof-item"
                  {...revealProps(index * 55 + 170, { kind: 'card', y: 22 })}
                >
                  <article className="project-proof">
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </article>
                </div>
              ))}
            </section>

            <div {...revealProps(220, { kind: 'card', y: 24 })}>
              <section className="project__block surface-card">
                <p className="project__detail-label">{project.detailsLabel}</p>
                <ul className="project-list">
                  {project.evidence.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            </div>

            <div className="project__links" {...revealProps(260, { kind: 'copy', y: 16 })}>
              <ExternalLink className="button button--project" href={profile.projectRepo}>
                {project.links.repository}
              </ExternalLink>
              <ExternalLink
                className="button button--ghost"
                href={profile.projectRelease}
                aria-label={ui.openReleaseAria}
              >
                {project.links.release}
              </ExternalLink>
            </div>
          </div>

          <section
            className="project__shots"
            aria-label={project.screenshotsAria}
          >
            {project.screenshotColumns.map((column, columnIndex) => (
              <ul key={columnIndex} className="project__shot-column">
                {column.map((shot, shotIndex) => (
                  <li
                    key={shot.title}
                    {...revealProps(
                      170 + columnIndex * 90 + shotIndex * 95,
                      {
                        kind: 'media',
                        x: columnIndex === 0 ? -10 : 10,
                        y: 20 + shotIndex * 4,
                        scale: 0.985,
                      },
                    )}
                  >
                    <figure className="project-shot">
                      <img
                        src={shot.image}
                        alt={shot.title}
                        width={shot.width}
                        height={shot.height}
                        loading="lazy"
                        decoding="async"
                        sizes="(max-width: 760px) 100vw, (max-width: 1080px) 46vw, 22vw"
                      />
                    </figure>
                  </li>
                ))}
              </ul>
            ))}
          </section>
        </div>
      </div>
    </section>
  )
}

export const ProjectSection = memo(ProjectSectionComponent)
