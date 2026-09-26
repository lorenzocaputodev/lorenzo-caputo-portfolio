import { memo } from 'react'

function HeroSectionComponent({ profile, portraitRef }) {
  return (
    <section className="hero" id="hero" aria-labelledby="hero-title">
      <div className="container hero__grid">
        <header className="hero__content">
          <p className="hero__eyebrow hero-reveal hero-reveal--0">
            {profile.role} <span>&middot;</span> {profile.school}
          </p>

          <h1 className="hero-reveal hero-reveal--1" id="hero-title">
            {profile.headlineLead} <span className="accent-serif">{profile.headlineAccent}</span>{' '}
            {profile.headlineTrail}
          </h1>

          <p className="hero__intro hero-reveal hero-reveal--2">{profile.intro}</p>
          <p className="hero__note hero-reveal hero-reveal--3">{profile.introNote}</p>
        </header>

        <aside className="hero__aside">
          <figure className="portrait-card" ref={portraitRef}>
            <div className="portrait-card__frame hero-reveal hero-reveal--4">
              <img
                src={profile.portrait}
                alt={profile.portraitAlt}
                width={profile.portraitWidth}
                height={profile.portraitHeight}
                decoding="async"
                fetchPriority="high"
              />
            </div>
            <figcaption className="portrait-card__meta hero-reveal hero-reveal--5">
              <p>{profile.name}</p>
              <span>{profile.location}</span>
            </figcaption>
          </figure>
        </aside>
      </div>
    </section>
  )
}

export const HeroSection = memo(HeroSectionComponent)
