import { useState } from 'react'
import TextField from '../components/ui/TextField'
import Toggle from '../components/ui/Toggle'
import Checkbox from '../components/ui/Checkbox'
import RadioButton from '../components/ui/RadioButton'
import { PageHeader, DocSection, Demo, DemoRow, PropTable } from '../components/layout/DocSection'

const SearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
    <circle cx="7" cy="7" r="4"/><path d="M10.5 10.5L14 14"/>
  </svg>
)

const EyeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
    <path d="M1 8s2.5-5 7-5 7 5 7 5-2.5 5-7 5-7-5-7-5z"/>
    <circle cx="8" cy="8" r="2"/>
  </svg>
)

export default function FormsPage() {
  const [radio, setRadio] = useState('opt1')

  return (
    <div>
      <PageHeader
        title="Form Elements"
        description="RDS form components cover all interactive input patterns from the Figma Atoms / Form section: text fields, toggles, checkboxes and radio buttons."
      />

      <DocSection
        title="Text field"
        description="Covers Figma's 'Text field' component — filled and empty states. Supports labels, hints, error messages, icons and required indicators."
      >
        <DemoRow>
          <Demo label="Default (empty)">
            <div style={{ width: 280 }}>
              <TextField label="Email address" placeholder="you@example.com" />
            </div>
          </Demo>
          <Demo label="With hint">
            <div style={{ width: 280 }}>
              <TextField label="Username" placeholder="john_doe" hint="Only letters, numbers and underscores." />
            </div>
          </Demo>
          <Demo label="Required + error">
            <div style={{ width: 280 }}>
              <TextField label="Password" type="password" required error="Password must be at least 8 characters." />
            </div>
          </Demo>
        </DemoRow>
        <DemoRow>
          <Demo label="Icon left">
            <div style={{ width: 280 }}>
              <TextField label="Search" placeholder="Search articles…" iconLeft={<SearchIcon />} />
            </div>
          </Demo>
          <Demo label="Icon right">
            <div style={{ width: 280 }}>
              <TextField label="Password" type="password" placeholder="Enter password" iconRight={<EyeIcon />} />
            </div>
          </Demo>
          <Demo label="Disabled">
            <div style={{ width: 280 }}>
              <TextField label="Locked field" value="Cannot edit this" disabled />
            </div>
          </Demo>
        </DemoRow>
      </DocSection>

      <DocSection
        title="Toggle"
        description="Maps to Figma's Toggle component — default and small sizes, selected/unselected states."
      >
        <DemoRow>
          <Demo label="Default">
            <Toggle label="Enable notifications" />
          </Demo>
          <Demo label="Default (on)">
            <Toggle label="Dark mode" checked={true} />
          </Demo>
          <Demo label="Small">
            <Toggle size="small" label="Compact toggle" />
          </Demo>
          <Demo label="Small (on)">
            <Toggle size="small" label="On" checked={true} />
          </Demo>
          <Demo label="Disabled">
            <Toggle label="Unavailable" disabled />
          </Demo>
        </DemoRow>
      </DocSection>

      <DocSection
        title="Checkbox"
        description="Maps to Figma's Checkbox component — selected, unselected and indeterminate states."
      >
        <DemoRow>
          <Demo label="Unselected">
            <Checkbox label="Accept terms and conditions" />
          </Demo>
          <Demo label="Selected">
            <Checkbox label="Subscribe to newsletter" checked={true} />
          </Demo>
          <Demo label="Indeterminate">
            <Checkbox label="Select all" indeterminate />
          </Demo>
          <Demo label="Disabled">
            <Checkbox label="Not available" disabled />
          </Demo>
        </DemoRow>
      </DocSection>

      <DocSection
        title="Radio button"
        description="Maps to Figma's Radio button component. Group with the same name prop for native exclusivity."
      >
        <DemoRow>
          <Demo label="Radio group">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>
              <RadioButton name="plan" label="Free plan"     checked={radio === 'opt1'} onChange={() => setRadio('opt1')} />
              <RadioButton name="plan" label="Pro plan"      checked={radio === 'opt2'} onChange={() => setRadio('opt2')} />
              <RadioButton name="plan" label="Business plan" checked={radio === 'opt3'} onChange={() => setRadio('opt3')} />
            </div>
          </Demo>
          <Demo label="Disabled">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>
              <RadioButton name="plan2" label="Option A" checked={true}  disabled />
              <RadioButton name="plan2" label="Option B" checked={false} disabled />
            </div>
          </Demo>
        </DemoRow>
      </DocSection>

      <DocSection title="Props — TextField">
        <PropTable rows={[
          { prop: 'label',       type: 'string',  default: 'undefined', desc: 'Visible label above the input.' },
          { prop: 'placeholder', type: 'string',  default: '""',        desc: 'Ghost text when empty.' },
          { prop: 'type',        type: 'string',  default: '"text"',     desc: 'HTML input type (text, password, email…).' },
          { prop: 'error',       type: 'string',  default: 'undefined', desc: 'Error message — triggers error state styling.' },
          { prop: 'hint',        type: 'string',  default: 'undefined', desc: 'Helper text below the input.' },
          { prop: 'required',    type: 'boolean', default: 'false',     desc: 'Adds * to label and HTML required attribute.' },
          { prop: 'disabled',    type: 'boolean', default: 'false',     desc: 'Makes the field non-interactive.' },
          { prop: 'iconLeft',    type: 'ReactNode', default: 'undefined', desc: 'Icon rendered inside the left edge.' },
          { prop: 'iconRight',   type: 'ReactNode', default: 'undefined', desc: 'Icon rendered inside the right edge.' },
        ]} />
      </DocSection>
    </div>
  )
}
