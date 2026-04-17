export function ExternalLink({ href, children, className = '', download, ...rest }) {
  const extra = href.startsWith('mailto:') || download
    ? {}
    : { target: '_blank', rel: 'noopener noreferrer' }

  return (
    <a className={className} href={href} download={download} {...extra} {...rest}>
      {children}
    </a>
  )
}
