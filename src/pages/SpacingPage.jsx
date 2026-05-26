import { PageHeader, DocSection } from '../components/layout/DocSection'
import './SpacingPage.css'

const spacingScale = [0, 2, 4, 8, 12, 16, 24, 32, 40, 48, 72, 104]

const radiusScale = [
  { name: 'radius-0',    value: 0,    label: 'Sharp' },
  { name: 'radius-4',    value: 4,    label: 'XS' },
  { name: 'radius-6',    value: 6,    label: 'SM' },
  { name: 'radius-8',    value: 8,    label: 'MD' },
  { name: 'radius-12',   value: 12,   label: 'LG' },
  { name: 'radius-16',   value: 16,   label: 'XL' },
  { name: 'radius-20',   value: 20,   label: '2XL' },
  { name: 'radius-24',   value: 24,   label: '3XL' },
  { name: 'radius-32',   value: 32,   label: '4XL' },
  { name: 'radius-full', value: 9999, label: 'Full' },
]

export default function SpacingPage() {
  return (
    <div>
      <PageHeader
        title="Spacing & Radius"
        description="RDS uses a spacing scale built on multiples of 4, with a few additional values for specific use cases. Border-radius tokens cover everything from sharp edges to pill shapes."
      />

      <DocSection
        title="Spacing scale"
        description="Use --space-{n} CSS variables. The base unit is 4px. Desktop and Mobile share the same spacing values."
      >
        <div className="spacing-table">
          {spacingScale.map(s => (
            <div key={s} className="spacing-row" onClick={() => navigator.clipboard?.writeText(`var(--space-${s})`)}>
              <code className="spacing-row__token">--space-{s}</code>
              <div className="spacing-row__bar-wrap">
                <div className="spacing-row__bar" style={{ width: Math.min(s * 3, 320) || 2, minWidth: s === 0 ? 2 : undefined }} />
              </div>
              <span className="spacing-row__value">{s}px</span>
            </div>
          ))}
        </div>
      </DocSection>

      <DocSection
        title="Border radius"
        description="Consistent rounding across the system. Use --radius-{n} variables. radius-full produces a pill / circle shape."
      >
        <div className="radius-grid">
          {radiusScale.map(r => (
            <div key={r.name} className="radius-card" onClick={() => navigator.clipboard?.writeText(`var(--${r.name})`)}>
              <div
                className="radius-card__preview"
                style={{ borderRadius: r.value === 9999 ? '9999px' : `${r.value}px` }}
              />
              <div className="radius-card__info">
                <code className="radius-card__token">--{r.name}</code>
                <div className="radius-card__value">{r.value === 9999 ? '9999px' : `${r.value}px`}</div>
                <div className="radius-card__label">{r.label}</div>
              </div>
            </div>
          ))}
        </div>
      </DocSection>

      <DocSection
        title="Component heights"
        description="Standard interactive element heights used across buttons, inputs and similar components."
      >
        <div className="height-list">
          {[
            { token: '--height-sm', value: 32, label: 'Small' },
            { token: '--height-md', value: 48, label: 'Default' },
            { token: '--height-lg', value: 56, label: 'Large' },
          ].map(h => (
            <div key={h.token} className="height-row" onClick={() => navigator.clipboard?.writeText(`var(${h.token})`)}>
              <code className="height-row__token">{h.token}</code>
              <div className="height-row__bar" style={{ height: h.value, width: 160 }} />
              <span className="height-row__label">{h.label} · {h.value}px</span>
            </div>
          ))}
        </div>
      </DocSection>
    </div>
  )
}
