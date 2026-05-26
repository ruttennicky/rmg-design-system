import { useState } from 'react'
import './TextField.css'

export default function TextField({
  label,
  placeholder = '',
  value,
  onChange,
  type = 'text',
  disabled = false,
  error,
  hint,
  required = false,
  iconLeft,
  iconRight,
}) {
  const [internal, setInternal] = useState('')
  const val = value !== undefined ? value : internal

  return (
    <div className={'rds-field' + (error ? ' rds-field--error' : '') + (disabled ? ' rds-field--disabled' : '')}>
      {label && (
        <label className="rds-field__label">
          {label}
          {required && <span className="rds-field__required" aria-hidden="true"> *</span>}
        </label>
      )}
      <div className="rds-field__input-wrap">
        {iconLeft && <span className="rds-field__icon rds-field__icon--left">{iconLeft}</span>}
        <input
          type={type}
          className={'rds-field__input' + (iconLeft ? ' rds-field__input--icon-left' : '') + (iconRight ? ' rds-field__input--icon-right' : '')}
          placeholder={placeholder}
          value={val}
          onChange={e => {
            if (onChange) onChange(e)
            else setInternal(e.target.value)
          }}
          disabled={disabled}
          required={required}
        />
        {iconRight && <span className="rds-field__icon rds-field__icon--right">{iconRight}</span>}
      </div>
      {error && <div className="rds-field__error">{error}</div>}
      {hint && !error && <div className="rds-field__hint">{hint}</div>}
    </div>
  )
}
