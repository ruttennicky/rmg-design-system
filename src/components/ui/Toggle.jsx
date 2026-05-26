import { useState } from 'react'
import './Toggle.css'

export default function Toggle({ checked, onChange, size = 'default', disabled = false, label }) {
  const [internal, setInternal] = useState(false)
  const isChecked = checked !== undefined ? checked : internal

  const handleChange = () => {
    if (disabled) return
    if (onChange) onChange(!isChecked)
    else setInternal(v => !v)
  }

  return (
    <label className={'rds-toggle' + (disabled ? ' rds-toggle--disabled' : '') + (size === 'small' ? ' rds-toggle--small' : '')}>
      <div
        role="switch"
        aria-checked={isChecked}
        tabIndex={disabled ? -1 : 0}
        className={'rds-toggle__track' + (isChecked ? ' rds-toggle__track--on' : '')}
        onClick={handleChange}
        onKeyDown={e => (e.key === ' ' || e.key === 'Enter') && handleChange()}
      >
        <div className="rds-toggle__thumb" />
      </div>
      {label && <span className="rds-toggle__label">{label}</span>}
    </label>
  )
}
