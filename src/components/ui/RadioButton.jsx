import './RadioButton.css'

export default function RadioButton({ checked = false, onChange, label, disabled = false, name }) {
  return (
    <label className={'rds-radio' + (disabled ? ' rds-radio--disabled' : '')}>
      <input
        type="radio"
        className="sr-only"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        name={name}
      />
      <div className={'rds-radio__circle' + (checked ? ' rds-radio__circle--checked' : '')}>
        {checked && <div className="rds-radio__dot" />}
      </div>
      {label && <span className="rds-radio__label">{label}</span>}
    </label>
  )
}
