import Button from '../components/ui/Button'
import Tag from '../components/ui/Tag'
import { PageHeader, DocSection, Demo, DemoRow, PropTable } from '../components/layout/DocSection'
import './ButtonsPage.css'

const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 8h10M9 4l4 4-4 4"/>
  </svg>
)

const Plus = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M8 3v10M3 8h10"/>
  </svg>
)

export default function ButtonsPage() {
  return (
    <div>
      <PageHeader
        title="🔘 Buttons"
        description="The RDS Button component maps directly to the Figma Button component set. It supports three variants, three sizes, optional leading/trailing icons, and disabled states."
      />

      <DocSection
        title="Variants"
        description="Primary for the main action, Secondary for supporting actions, Tertiary for low-emphasis actions."
      >
        <DemoRow>
          <Demo label="Primary">
            <Button variant="primary">Get started</Button>
          </Demo>
          <Demo label="Secondary">
            <Button variant="secondary">Learn more</Button>
          </Demo>
          <Demo label="Tertiary">
            <Button variant="tertiary">Cancel</Button>
          </Demo>
        </DemoRow>
      </DocSection>

      <DocSection
        title="Sizes"
        description="Large (56px), Default (48px) and Small (32px) heights — matching Figma's button-large, button and button-small text styles."
      >
        <DemoRow>
          <Demo label="Large">
            <Button size="large">Large button</Button>
          </Demo>
          <Demo label="Default">
            <Button size="default">Default button</Button>
          </Demo>
          <Demo label="Small">
            <Button size="small">Small button</Button>
          </Demo>
        </DemoRow>
      </DocSection>

      <DocSection
        title="With icons"
        description="Icons can appear on the left, right or both sides. Pass any element as iconLeft or iconRight."
      >
        <DemoRow>
          <Demo label="Icon left">
            <Button iconLeft={<Plus />}>Add item</Button>
          </Demo>
          <Demo label="Icon right">
            <Button iconRight={<ArrowRight />}>Continue</Button>
          </Demo>
          <Demo label="Both icons">
            <Button iconLeft={<Plus />} iconRight={<ArrowRight />}>Create & go</Button>
          </Demo>
          <Demo label="Secondary + icon">
            <Button variant="secondary" iconRight={<ArrowRight />}>See all</Button>
          </Demo>
        </DemoRow>
      </DocSection>

      <DocSection
        title="States"
        description="Disabled buttons retain their visual structure but become non-interactive."
      >
        <DemoRow>
          <Demo label="Default disabled">
            <Button disabled>Disabled</Button>
          </Demo>
          <Demo label="Secondary disabled">
            <Button variant="secondary" disabled>Disabled</Button>
          </Demo>
          <Demo label="Tertiary disabled">
            <Button variant="tertiary" disabled>Disabled</Button>
          </Demo>
        </DemoRow>
      </DocSection>

      <DocSection
        title="Tags"
        description="Tags are compact labels used for categories, filters and status indicators. The toggle variant lets users select/deselect interactively."
      >
        <DemoRow>
          <Demo label="Default">
            <Tag>Breaking news</Tag>
            <Tag>Lifestyle</Tag>
            <Tag>Opinion</Tag>
          </Demo>
          <Demo label="Semantic colours">
            <Tag color="brand">Brand</Tag>
            <Tag color="info">Info</Tag>
            <Tag color="success">Success</Tag>
            <Tag color="warning">Warning</Tag>
            <Tag color="critical">Critical</Tag>
          </Demo>
          <Demo label="Togglable">
            <Tag togglable>Sport</Tag>
            <Tag togglable selected>Nieuws</Tag>
            <Tag togglable>Cultuur</Tag>
          </Demo>
        </DemoRow>
      </DocSection>

      <DocSection title="Props — Button">
        <PropTable rows={[
          { prop: 'variant',   type: '"primary"|"secondary"|"tertiary"', default: '"primary"', desc: 'Visual style of the button.' },
          { prop: 'size',      type: '"large"|"default"|"small"',        default: '"default"', desc: 'Height and text size.' },
          { prop: 'iconLeft',  type: 'ReactNode',                        default: 'undefined', desc: 'Element rendered before the label.' },
          { prop: 'iconRight', type: 'ReactNode',                        default: 'undefined', desc: 'Element rendered after the label.' },
          { prop: 'disabled',  type: 'boolean',                          default: 'false',     desc: 'Disables the button.' },
          { prop: 'fullWidth', type: 'boolean',                          default: 'false',     desc: 'Stretches button to full container width.' },
          { prop: 'onClick',   type: 'function',                         default: 'undefined', desc: 'Click handler.' },
        ]} />
      </DocSection>
    </div>
  )
}
