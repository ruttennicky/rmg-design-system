import { useState } from 'react'
import './Tag.css'

export default function Tag({ children, togglable = false, selected, onToggle, size = 'default', color }) {
  const [internal, setInternal] = useState(false)
  const isSelected = selected !== undefined ? selected : internal

  const handleClick = () => {
    if (!togglable) return
    if (onToggle) onToggle(!isSelected)
    else setInternal(v => !v)
  }

  return (
    <span
      className={[
        'rds-tag',
        `rds-tag--${size}`,
        togglable ? 'rds-tag--togglable' : '',
        isSelected ? 'rds-tag--selected' : '',
        color ? `rds-tag--${color}` : '',
      ].filter(Boolean).join(' ')}
      onClick={togglable ? handleClick : undefined}
      role={togglable ? 'checkbox' : undefined}
      aria-checked={togglable ? isSelected : undefined}
      tabIndex={togglable ? 0 : undefined}
      onKeyDown={togglable ? e => (e.key === ' ' || e.key === 'Enter') && handleClick() : undefined}
    >
      {children}
    </span>
  )
}
