import { revealProps } from '../utils/reveal'

export function SectionHeading({
  eyebrow,
  title,
  body,
  align = 'left',
  className = '',
  id,
  delay = 0,
}) {
  return (
    <header className={`section-heading section-heading--${align} ${className}`.trim()}>
      <p className="eyebrow" {...revealProps(delay, { kind: 'heading', y: 16 })}>
        {eyebrow}
      </p>
      <h2 id={id} {...revealProps(delay + 70, { kind: 'heading', y: 22 })}>
        {title}
      </h2>
      {body ? (
        <p className="section-copy" {...revealProps(delay + 150, { kind: 'copy', y: 18 })}>
          {body}
        </p>
      ) : null}
    </header>
  )
}
