import { PageHeader, DocSection } from '../components/layout/DocSection'
import './TypographyPage.css'

const typeScale = [
  { name: 'header-01', size: '40px', lh: '58px', weight: 'Bold',    sample: 'The quick brown fox' },
  { name: 'header-02', size: '36px', lh: '52px', weight: 'Bold',    sample: 'The quick brown fox' },
  { name: 'header-03', size: '32px', lh: '46px', weight: 'Bold',    sample: 'The quick brown fox jumps' },
  { name: 'header-04', size: '24px', lh: '34px', weight: 'Bold',    sample: 'The quick brown fox jumps over' },
  { name: 'header-05', size: '18px', lh: '30px', weight: 'Bold',    sample: 'The quick brown fox jumps over the lazy dog' },
  { name: 'header-06', size: '16px', lh: '26px', weight: 'Bold',    sample: 'The quick brown fox jumps over the lazy dog' },
  { name: 'section-title', size: '24px', lh: '26px', weight: 'Bold', sample: 'Section Title' },
  { name: 'intro',     size: '18px', lh: '24px', weight: 'Bold',    sample: 'Intro text — usually the lead paragraph' },
  { name: 'body',      size: '16px', lh: '22px', weight: 'Regular', sample: 'Body text — the primary reading size for articles and UI.' },
  { name: 'body-bold', size: '16px', lh: '22px', weight: 'Bold',    sample: 'Body bold — for emphasis within body copy.' },
  { name: 'body-small', size: '14px', lh: '20px', weight: 'Regular', sample: 'Small body — captions, helper text, secondary info.' },
  { name: 'body-small-bold', size: '14px', lh: '20px', weight: 'Bold', sample: 'Small body bold — for emphasis in compact UI.' },
  { name: 'link',      size: '16px', lh: '24px', weight: 'Regular', sample: 'This is a hyperlink', underline: true },
  { name: 'link-bold', size: '16px', lh: '24px', weight: 'Bold',    sample: 'This is a bold hyperlink', underline: true },
  { name: 'label',     size: '14px', lh: '18px', weight: 'Regular', sample: 'Form label or UI label' },
  { name: 'label-small', size: '12px', lh: '16px', weight: 'Regular', sample: 'Small label — error messages, hints' },
  { name: 'tag',       size: '12px', lh: '16px', weight: 'Bold',    sample: 'TAG · CATEGORY' },
  { name: 'tag-small', size: '10px', lh: '12px', weight: 'Bold',    sample: 'SMALL TAG' },
  { name: 'button-large', size: '18px', lh: '18px', weight: 'Bold', sample: 'Button Large' },
  { name: 'button',    size: '16px', lh: '16px', weight: 'Bold',    sample: 'Button' },
  { name: 'button-small', size: '14px', lh: '14px', weight: 'Bold', sample: 'Small Button' },
  { name: 'quote',     size: '24px', lh: '32px', weight: 'Regular', sample: '"Good typography is invisible. Bad typography is everywhere."' },
]

export default function TypographyPage() {
  return (
    <div>
      <PageHeader
        title="Typography"
        description="RDS uses Figtree as its sole typeface — a rounded, geometric sans-serif available in Regular (400) and Bold (700). All type tokens are defined as CSS custom properties in tokens.css."
      />

      <DocSection
        title="Typeface"
        description="Figtree is loaded from Google Fonts with weights 400 (Regular) and 700 (Bold)."
      >
        <div className="type-specimen">
          <div className="type-specimen__hero">Figtree</div>
          <div className="type-specimen__alpha">
            AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz 0123456789
          </div>
          <div className="type-specimen__weights">
            <span style={{ fontWeight: 400 }}>Regular 400</span>
            <span style={{ fontWeight: 700 }}>Bold 700</span>
          </div>
        </div>
      </DocSection>

      <DocSection
        title="Type scale"
        description="The full set of named text styles from the Figma file. All sizes use px. Click a row to copy the CSS variable name."
      >
        <div className="type-scale">
          <div className="type-scale__header">
            <span>Style name</span>
            <span>Size · Line-height · Weight</span>
          </div>
          {typeScale.map(style => (
            <div
              key={style.name}
              className="type-scale__row"
              onClick={() => navigator.clipboard?.writeText(`var(--text-${style.name}-size)`)}
              title="Click to copy"
            >
              <div className="type-scale__meta">
                <code className="type-scale__token">{style.name}</code>
                <div className="type-scale__specs">
                  {style.size} · {style.lh} · {style.weight}
                </div>
              </div>
              <div
                className="type-scale__sample"
                style={{
                  fontSize: style.size,
                  lineHeight: style.lh,
                  fontWeight: style.weight === 'Bold' ? 700 : 400,
                  textDecoration: style.underline ? 'underline' : 'none',
                  color: style.underline ? 'var(--color-info)' : 'var(--color-text)',
                }}
              >
                {style.sample}
              </div>
            </div>
          ))}
        </div>
      </DocSection>
    </div>
  )
}
