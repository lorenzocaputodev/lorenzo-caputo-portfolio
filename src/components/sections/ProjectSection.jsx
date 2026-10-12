// --- Sezione Progetti ---
import { memo, useEffect, useRef, useState } from 'react'
import { ExternalLink } from '../ui/ExternalLink'
import { SectionHeading } from '../ui/SectionHeading'
import { prefersReducedMotion } from '../../utils/media'
import { revealProps } from '../../utils/reveal'

const SHOT_SIZES = {
  phone: '(max-width: 760px) 40vw, (max-width: 1080px) 300px, 240px',
  web: '(max-width: 760px) 86vw, (max-width: 1080px) 680px, 520px',
}

const pad = (value) => String(value).padStart(2, '0')

function ProjectSlide({ item, index, total, active, labels }) {
  return (
    <div
      className={`project-slide${active ? ' is-active' : ''}`}
      role="group"
      aria-roledescription={labels.slideLabel}
      aria-label={`${index + 1} / ${total}: ${item.name}`}
      inert={!active}
    >
      <div className="project-slide__content">
        <div className="project__release">
          <span className="project__release-badge">{item.stack}</span>
          <span className="project__release-copy">{item.status}</span>
        </div>
        <h3 className="project-slide__title">{item.name}</h3>
        <p className="project-slide__summary">{item.summary}</p>

        <ul className="project__proof-grid" aria-label={labels.proofAria}>
          {item.highlights.map((highlight) => (
            <li key={highlight.title} className="project-proof">
              <h4>{highlight.title}</h4>
              <p>{highlight.text}</p>
            </li>
          ))}
        </ul>

        <div className="project__links">
          {item.links.map((link, linkIndex) => (
            <ExternalLink
              key={link.href}
              className={`button ${linkIndex === 0 ? 'button--project' : 'button--ghost'}`}
              href={link.href}
            >
              {link.label}
            </ExternalLink>
          ))}
        </div>
      </div>

      <ul className={`project__shots project__shots--${item.layout}`} aria-label={labels.screenshotsAria}>
        {item.screenshots.map((shot) => (
          <li key={shot.title}>
            <figure className="project-shot">
              <img
                src={shot.image}
                srcSet={`${shot.imageSmall} ${shot.smallWidth}w, ${shot.image} ${shot.width}w`}
                sizes={SHOT_SIZES[item.layout]}
                alt={`${item.name}: ${shot.title}`}
                width={shot.width}
                height={shot.height}
                loading="lazy"
                decoding="async"
              />
            </figure>
          </li>
        ))}
      </ul>
    </div>
  )
}

function ProjectSectionComponent({ project }) {
  const projectRef = useRef(null)
  const trackRef = useRef(null)
  const pendingIndexRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const total = project.items.length

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

  // --- Slide attiva in base allo scorrimento ---
  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    let frame = 0
    const update = () => {
      frame = 0
      const slides = track.children
      if (slides.length < 2) return
      const step = slides[1].offsetLeft - slides[0].offsetLeft
      const index = Math.min(Math.max(Math.round(track.scrollLeft / step), 0), slides.length - 1)
      if (index === pendingIndexRef.current) pendingIndexRef.current = null
      const focused = document.activeElement
      if (focused !== track && track.contains(focused) && !slides[index].contains(focused)) {
        track.focus({ preventScroll: true })
      }
      setActiveIndex(index)
    }
    const handleScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    const handleScrollEnd = () => {
      pendingIndexRef.current = null
    }

    track.addEventListener('scroll', handleScroll, { passive: true })
    track.addEventListener('scrollend', handleScrollEnd)
    window.addEventListener('resize', handleScroll)
    return () => {
      cancelAnimationFrame(frame)
      track.removeEventListener('scroll', handleScroll)
      track.removeEventListener('scrollend', handleScrollEnd)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  const goTo = (index) => {
    const track = trackRef.current
    if (!track) return
    const slides = track.children
    const nextIndex = (index + slides.length) % slides.length
    pendingIndexRef.current = nextIndex
    track.scrollTo({
      left: slides[nextIndex].offsetLeft - slides[0].offsetLeft,
      behavior: prefersReducedMotion() ? 'auto' : 'smooth',
    })
  }

  const step = (direction) => goTo((pendingIndexRef.current ?? activeIndex) + direction)

  const handleKeyDown = (event) => {
    if (event.target !== event.currentTarget) return
    if (event.key === 'ArrowRight') step(1)
    else if (event.key === 'ArrowLeft') step(-1)
    else return
    event.preventDefault()
  }

  return (
    <section
      className="section section--project"
      id="project"
      aria-labelledby="project-title"
      aria-roledescription={project.carouselLabel}
    >
      <div ref={projectRef} className="container project">
        <div className="project__head">
          <SectionHeading
            eyebrow={project.eyebrow}
            title={project.title}
            body={project.summary}
            id="project-title"
          />

          <div className="project-nav" {...revealProps(120, { kind: 'copy', y: 16 })}>
            <p className="project-nav__count">
              <strong>{pad(activeIndex + 1)}</strong> / {pad(total)}
            </p>
            <button
              type="button"
              className="project-nav__arrow"
              aria-label={project.previousLabel}
              onClick={() => step(-1)}
            >
              <span aria-hidden="true">←</span>
            </button>
            <button
              type="button"
              className="project-nav__arrow"
              aria-label={project.nextLabel}
              onClick={() => step(1)}
            >
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>

        <div {...revealProps(80, { kind: 'card', y: 24 })}>
          <div ref={trackRef} className="project-track" tabIndex={0} onKeyDown={handleKeyDown}>
            {project.items.map((item, index) => (
              <ProjectSlide
                key={item.id}
                item={item}
                index={index}
                total={total}
                active={index === activeIndex}
                labels={project}
              />
            ))}
          </div>
        </div>

        <div className="project-dots">
          {project.items.map((item, index) => (
            <button
              key={item.id}
              type="button"
              className={`project-dots__dot${index === activeIndex ? ' is-active' : ''}`}
              aria-label={`${project.goToLabel} ${index + 1}: ${item.name}`}
              aria-current={index === activeIndex ? 'true' : undefined}
              onClick={() => goTo(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export const ProjectSection = memo(ProjectSectionComponent)
