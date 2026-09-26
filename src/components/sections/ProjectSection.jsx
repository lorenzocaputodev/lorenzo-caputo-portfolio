import { memo, useEffect, useRef } from 'react'
import { ExternalLink } from '../ui/ExternalLink'
import { SectionHeading } from '../ui/SectionHeading'
import { prefersReducedMotion } from '../../utils/media'
import { revealProps } from '../../utils/reveal'

// Rendered width of one screenshot column at each breakpoint (see .project__shots in CSS).
const SCREENSHOT_SIZES = '(max-width: 760px) 72vw, (max-width: 1080px) 340px, 270px'

function ProjectSectionComponent({ project, profile }) {
  const projectRef = useRef(null)

  // One-shot glow the first time the project card scrolls into view.
  useEffect(() => {
    const projectElement = projectRef.current
    if (!projectElement || prefersReducedMotion()) return

    const handleAnimationEnd = (event) => {
      if (event.animationName === 'project-glow') {
        projectElement.classList.remove('project--glow-active')
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return
        projectElement.classList.add('project--glow-active')
        observer.disconnect()
      },
      { threshold: 0.22, rootMargin: '0px 0px -10% 0px' },
    )

    projectElement.addEventListener('animationend', handleAnimationEnd)
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
                  <span className="project__release-badge">{project.release.badge}</span>
                  <span className="project__release-copy">{project.release.label}</span>
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
              <ExternalLink className="button button--ghost" href={profile.projectRelease}>
                {project.links.release}
              </ExternalLink>
            </div>
          </div>

          <section className="project__shots" aria-label={project.screenshotsAria}>
            {/* A 2-column grid on desktop, a horizontal swipe carousel on mobile (focusable to scroll by keyboard). */}
            <ul className="project__shot-list" tabIndex={0}>
              {project.screenshots.map((shot, index) => (
                <li
                  key={shot.title}
                  {...revealProps(170 + index * 90, {
                    kind: 'media',
                    x: index % 2 === 0 ? -10 : 10,
                    y: 20,
                    scale: 0.985,
                  })}
                >
                  <figure className="project-shot">
                    <img
                      src={shot.image}
                      srcSet={`${shot.imageSmall} 360w, ${shot.image} 718w`}
                      sizes={SCREENSHOT_SIZES}
                      alt={shot.title}
                      width={shot.width}
                      height={shot.height}
                      loading="lazy"
                      decoding="async"
                    />
                  </figure>
                </li>
              ))}
            </ul>
            <p className="project__shots-hint" aria-hidden="true">
              {project.screenshotsHint}
            </p>
          </section>
        </div>
      </div>
    </section>
  )
}

export const ProjectSection = memo(ProjectSectionComponent)
