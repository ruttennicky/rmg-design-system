import './Card.css'

export function Card({ children, variant = 'default', className = '' }) {
  return (
    <div className={['rds-card', `rds-card--${variant}`, className].filter(Boolean).join(' ')}>
      {children}
    </div>
  )
}

export function CardMedia({ src, alt = '', aspectRatio = '16/9' }) {
  return (
    <div className="rds-card__media" style={{ aspectRatio }}>
      {src
        ? <img src={src} alt={alt} />
        : <div className="rds-card__media-placeholder" />
      }
    </div>
  )
}

export function CardBody({ children }) {
  return <div className="rds-card__body">{children}</div>
}

export function CardTag({ children, color }) {
  return (
    <span className={'rds-card__tag' + (color ? ` rds-card__tag--${color}` : '')}>
      {children}
    </span>
  )
}

export function CardTitle({ children, size = 'default' }) {
  return <h3 className={`rds-card__title rds-card__title--${size}`}>{children}</h3>
}

export function CardMeta({ children }) {
  return <div className="rds-card__meta">{children}</div>
}
