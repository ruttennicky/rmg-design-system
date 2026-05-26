import { PageHeader, DocSection } from '../components/layout/DocSection'
import './ColorsPage.css'

function Swatch({ name, value, token, textDark }) {
  const copy = () => navigator.clipboard?.writeText(value)
  return (
    <div className="swatch" onClick={copy} title={`Copy ${value}`}>
      <div className="swatch__block" style={{ backgroundColor: value }} />
      <div className="swatch__info">
        <div className="swatch__name">{name}</div>
        <div className="swatch__value">{value}</div>
        {token && <div className="swatch__token">{token}</div>}
      </div>
    </div>
  )
}

function SwatchRow({ swatches }) {
  return (
    <div className="swatch-row">
      {swatches.map(s => <Swatch key={s.name} {...s} />)}
    </div>
  )
}

function SemanticSwatch({ name, token, bg, text }) {
  return (
    <div className="semantic-swatch" style={{ backgroundColor: bg, color: text }}>
      <div className="semantic-swatch__name">{name}</div>
      <div className="semantic-swatch__token">{token}</div>
      <div className="semantic-swatch__value">{bg}</div>
    </div>
  )
}

const primaryScale = [
  { name: '50',  value: '#fceded', token: '--color-primary-50' },
  { name: '100', value: '#f4d7d8', token: '--color-primary-100' },
  { name: '200', value: '#e7b1b3', token: '--color-primary-200' },
  { name: '300', value: '#f0868a', token: '--color-primary-300' },
  { name: '400', value: '#de494e', token: '--color-primary-400' },
  { name: '500', value: '#e42229', token: '--color-primary-500' },
  { name: '600', value: '#b5161b', token: '--color-primary-600' },
  { name: '700', value: '#870e12', token: '--color-primary-700' },
  { name: '800', value: '#660609', token: '--color-primary-800' },
  { name: '900', value: '#4d0205', token: '--color-primary-900' },
  { name: '950', value: '#2e0002', token: '--color-primary-950' },
]

const neutralScale = [
  { name: 'White',    value: '#ffffff', token: '--color-neutral-0' },
  { name: '50',       value: '#f2f2f2', token: '--color-neutral-50' },
  { name: '100',      value: '#d8d8d8', token: '--color-neutral-100' },
  { name: '200',      value: '#c5c5c5', token: '--color-neutral-200' },
  { name: '300',      value: '#aaaaaa', token: '--color-neutral-300' },
  { name: '400',      value: '#999999', token: '--color-neutral-400' },
  { name: '500',      value: '#808080', token: '--color-neutral-500' },
  { name: '600',      value: '#747474', token: '--color-neutral-600' },
  { name: '700',      value: '#5b5b5b', token: '--color-neutral-700' },
  { name: '800',      value: '#464646', token: '--color-neutral-800' },
  { name: '900',      value: '#363636', token: '--color-neutral-900' },
  { name: '950',      value: '#121212', token: '--color-neutral-950' },
]

const accents = [
  { name: 'Accent 01', value: '#a3abd5' },
  { name: 'Accent 02', value: '#c3c6da' },
  { name: 'Accent 03', value: '#85c5a5' },
  { name: 'Accent 04', value: '#9eceb8' },
  { name: 'Accent 05', value: '#95c0d6' },
  { name: 'Accent 06', value: '#adcde0' },
  { name: 'Accent 07', value: '#f2916b' },
  { name: 'Accent 08', value: '#f8b77d' },
  { name: 'Accent 09', value: '#f4a3a9' },
  { name: 'Accent 10', value: '#f7bdc1' },
  { name: 'Accent 11', value: '#fad255' },
  { name: 'Accent 12', value: '#feda77' },
  { name: 'Accent 13', value: '#ceb188' },
  { name: 'Accent 14', value: '#eacfa5' },
  { name: 'Accent 15', value: '#f39b90' },
  { name: 'Accent 16', value: '#f9c7b9' },
  { name: 'Accent 17', value: '#520c20' },
]

export default function ColorsPage() {
  return (
    <div>
      <PageHeader
        title="🌈 Colors"
        description="The RDS colour system is built on three layers: primitives (raw hex values), semantic tokens (alias variables), and component-level tokens. Click any swatch to copy the hex value."
      />

      <DocSection
        title="Primary brand colour"
        description="The Roularta brand red. Use primary-500 as the main interactive colour — buttons, links, highlights. Lighter tints work well for backgrounds and subtle states."
      >
        <SwatchRow swatches={primaryScale} />
      </DocSection>

      <DocSection
        title="Neutral scale"
        description="Used for text, backgrounds, borders and subtle UI. The scale runs from pure white (0) to near-black (950). Text defaults are 900, secondary text 600."
      >
        <SwatchRow swatches={neutralScale} />
      </DocSection>

      <DocSection
        title="Semantic colours"
        description="Contextual feedback colours that communicate status. Always pair background and text tokens from the same semantic family."
      >
        <div className="semantic-grid">
          <SemanticSwatch name="Info"     token="--color-info"     bg="#0682c8" text="#fff" />
          <SemanticSwatch name="Info light" token="--color-info-light" bg="#e6f3fa" text="#045c8e" />
          <SemanticSwatch name="Success"  token="--color-success"  bg="#1bb17b" text="#fff" />
          <SemanticSwatch name="Success light" token="--color-success-light" bg="#e8f7f2" text="#137e57" />
          <SemanticSwatch name="Warning"  token="--color-warning"  bg="#ed9a4e" text="#fff" />
          <SemanticSwatch name="Warning light" token="--color-warning-light" bg="#fdf5ed" text="#a86d37" />
          <SemanticSwatch name="Critical" token="--color-critical" bg="#e11b1b" text="#fff" />
          <SemanticSwatch name="Critical light" token="--color-critical-light" bg="#fce8e8" text="#a01313" />
        </div>
      </DocSection>

      <DocSection
        title="Accent colours"
        description="17 accent colours used for category labels, illustration, and decorative UI across Roularta's magazine brands."
      >
        <div className="accent-grid">
          {accents.map(a => (
            <div key={a.name} className="accent-swatch" title={a.value} onClick={() => navigator.clipboard?.writeText(a.value)}>
              <div className="accent-swatch__block" style={{ backgroundColor: a.value }} />
              <div className="accent-swatch__label">{a.name}</div>
              <div className="accent-swatch__value">{a.value}</div>
            </div>
          ))}
        </div>
      </DocSection>
    </div>
  )
}
