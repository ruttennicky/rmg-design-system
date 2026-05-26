import { Card, CardMedia, CardBody, CardTag, CardTitle, CardMeta } from '../components/ui/Card'
import Button from '../components/ui/Button'
import { PageHeader, DocSection, DemoRow, PropTable } from '../components/layout/DocSection'
import './CardsPage.css'

export default function CardsPage() {
  return (
    <div>
      <PageHeader
        title="Cards & Organisms"
        description="Higher-level layout components from the Figma Organisms section. Cards map to the Product component set (small, default, large, cover, usp and icon card variants)."
      />

      <DocSection
        title="Default card"
        description="The standard content card with optional media, category tag, title and meta information."
      >
        <div className="card-grid">
          <Card>
            <CardMedia />
            <CardBody>
              <CardTag>Nieuws</CardTag>
              <CardTitle>Roularta lanceert nieuw digitaal platform voor mediamerken</CardTitle>
              <CardMeta>25 mei 2026 · 4 min lezen</CardMeta>
            </CardBody>
          </Card>

          <Card>
            <CardMedia />
            <CardBody>
              <CardTag color="neutral">Lifestyle</CardTag>
              <CardTitle>De 10 beste restaurants in Brussel voor dit najaar</CardTitle>
              <CardMeta>22 mei 2026 · 6 min lezen</CardMeta>
            </CardBody>
          </Card>

          <Card>
            <CardMedia />
            <CardBody>
              <CardTag color="success">Exclusief</CardTag>
              <CardTitle>Interview: Hoe Belgische start-ups de wereld veroveren</CardTitle>
              <CardMeta>20 mei 2026 · 8 min lezen</CardMeta>
            </CardBody>
          </Card>
        </div>
      </DocSection>

      <DocSection
        title="Cover card"
        description="Full-bleed image card with overlaid text — used for hero stories and featured content."
      >
        <div className="card-grid card-grid--wide">
          <Card variant="cover" style={{ minHeight: 280 }}>
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #e42229 0%, #870e12 100%)' }} />
            <CardBody>
              <CardTag>Exclusief</CardTag>
              <CardTitle size="large">Groot verhaal van de week</CardTitle>
              <CardMeta>24 mei 2026</CardMeta>
            </CardBody>
          </Card>

          <Card variant="cover" style={{ minHeight: 280 }}>
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #121212 0%, #363636 100%)' }} />
            <CardBody>
              <CardTag color="neutral">Achtergrond</CardTag>
              <CardTitle size="large">Hoe Belgium's mediascene verandert</CardTitle>
              <CardMeta>21 mei 2026</CardMeta>
            </CardBody>
          </Card>
        </div>
      </DocSection>

      <DocSection
        title="Elevated card"
        description="Shadow-lifted card with no border — suitable for dashboard widgets and feature highlights."
      >
        <div className="card-grid">
          <Card variant="elevated">
            <CardBody>
              <CardTitle size="small">Wekelijkse statistieken</CardTitle>
              <p style={{ fontSize: 'var(--text-body-sm-size)', color: 'var(--color-text-secondary)', marginTop: 'var(--space-4)' }}>
                245.000 unieke bezoekers deze week — stijging van 12% t.o.v. vorige week.
              </p>
              <Button size="small" variant="secondary" style={{ marginTop: 'var(--space-12)' }}>Bekijk rapport</Button>
            </CardBody>
          </Card>

          <Card variant="elevated">
            <CardBody>
              <CardTitle size="small">Meest gelezen</CardTitle>
              <p style={{ fontSize: 'var(--text-body-sm-size)', color: 'var(--color-text-secondary)', marginTop: 'var(--space-4)' }}>
                "Top 10 restaurants Brussel" blijft de best gelezen pagina deze maand.
              </p>
              <Button size="small" variant="secondary" style={{ marginTop: 'var(--space-12)' }}>Alle artikels</Button>
            </CardBody>
          </Card>

          <Card variant="elevated">
            <CardBody>
              <CardTitle size="small">Tip van de redactie</CardTitle>
              <p style={{ fontSize: 'var(--text-body-sm-size)', color: 'var(--color-text-secondary)', marginTop: 'var(--space-4)' }}>
                Gebruik de nieuwe planningmodule om je contentkalender te beheren.
              </p>
              <Button size="small" variant="primary" style={{ marginTop: 'var(--space-12)' }}>Probeer nu</Button>
            </CardBody>
          </Card>
        </div>
      </DocSection>

      <DocSection
        title="USP card"
        description="Brand-tinted card for highlighting value propositions or membership benefits."
      >
        <div className="card-grid">
          <Card variant="usp">
            <CardBody>
              <CardTitle size="small">Onbeperkt lezen</CardTitle>
              <p style={{ fontSize: 'var(--text-body-sm-size)', color: 'var(--color-text-secondary)' }}>
                Toegang tot alle premium artikels van al onze merken.
              </p>
            </CardBody>
          </Card>

          <Card variant="usp">
            <CardBody>
              <CardTitle size="small">Op elk toestel</CardTitle>
              <p style={{ fontSize: 'var(--text-body-sm-size)', color: 'var(--color-text-secondary)' }}>
                Lees op je smartphone, tablet of computer.
              </p>
            </CardBody>
          </Card>

          <Card variant="usp">
            <CardBody>
              <CardTitle size="small">Luister-artikels</CardTitle>
              <p style={{ fontSize: 'var(--text-body-sm-size)', color: 'var(--color-text-secondary)' }}>
                Laat artikels voorlezen met onze audio-lezer.
              </p>
            </CardBody>
          </Card>
        </div>
      </DocSection>

      <DocSection
        title="CTA block"
        description="Full-width call-to-action organisms from the Figma CTA section — used for subscription prompts, newsletter sign-ups and promotional banners."
      >
        <div className="cta-block">
          <div className="cta-block__inner">
            <div className="cta-block__label">Abonnement</div>
            <h2 className="cta-block__title">Lees alles. Mis niets.</h2>
            <p className="cta-block__body">Word abonnee en krijg onbeperkte toegang tot alle artikels van Roularta Media Group.</p>
            <div className="cta-block__actions">
              <Button size="large">Start gratis proefperiode</Button>
              <Button size="large" variant="tertiary" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.3)' }}>Meer info</Button>
            </div>
          </div>
        </div>
      </DocSection>

      <DocSection title="Props — Card">
        <PropTable rows={[
          { prop: 'variant', type: '"default"|"elevated"|"cover"|"usp"', default: '"default"', desc: 'Card visual style.' },
        ]} />
      </DocSection>
    </div>
  )
}
