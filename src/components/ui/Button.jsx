import './Button.css'

/**
 * RDS Button
 * Variants: primary | secondary | tertiary
 * Sizes:    large | default | small
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'default',
  iconLeft,
  iconRight,
  disabled = false,
  fullWidth = false,
  onClick,
  type = 'button',
  ...props
}) {
  const classes = [
    'rds-btn',
    `rds-btn--${variant}`,
    `rds-btn--${size}`,
    fullWidth ? 'rds-btn--full' : '',
    disabled ? 'rds-btn--disabled' : '',
  ].filter(Boolean).join(' ')

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {iconLeft && <span className="rds-btn__icon rds-btn__icon--left">{iconLeft}</span>}
      <span className="rds-btn__label">{children}</span>
      {iconRight && <span className="rds-btn__icon rds-btn__icon--right">{iconRight}</span>}
    </button>
  )
}
