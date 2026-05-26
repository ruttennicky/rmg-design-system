import { useState } from 'react'
import './Checkbox.css'

export default function Checkbox({ checked, onChange, label, disabled = false, indeterminate = false }) {
  const [internal, setInternal] = useState(false)
  const isChecked = checked !== undefined ? checked : internal

  const handleChange = () => {
    if (disabled) return
    if (onChange) onChange(!isChecked)
    else setInternal(v => !v)
  }

  return (
    <label className={'rds-checkbox' + (disabled ? ' rds-checkbox--disabled' : '')}>
      <div
        role="checkbox"
        aria-checked={indeterminate ? 'mixed' : isChecked}
        tabIndex={disabled ? -1 : 0}
        className={[
          'rds-checkbox__box',
          isChecked ? 'rds-checkbox__box--checked' : '',
          indeterminate ? 'rds-checkbox__box--indeterminate' : '',
        ].filter(Boolean).join(' ')}
        onClick={handleChange}
        onKeyDown={e => (e.key === ' ' || e.key === 'Enter') && handleChange()}
      >
        {isChecked && !indeterminate && (
          <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
            <path d="M1 4L4 7L9 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
        {indeterminate && (
          <svg width="10" height="2" viewBox="0 0 10 2" fill="none">
            <path d="M1 1H9" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        )}
      </div>
      {label && <span className="rds-checkbox__label">{label}</span>}
    </label>
  )
}
