import './DocSection.css'

export function PageHeader({ title, description }) {
  return (
    <div className="page-header">
      <h1 className="page-header__title">{title}</h1>
      {description && <p className="page-header__desc">{description}</p>}
    </div>
  )
}

export function DocSection({ title, description, children }) {
  return (
    <section className="doc-section">
      <div className="doc-section__meta">
        <h2 className="doc-section__title">{title}</h2>
        {description && <p className="doc-section__desc">{description}</p>}
      </div>
      <div className="doc-section__body">{children}</div>
    </section>
  )
}

export function Demo({ label, children, dark }) {
  return (
    <div className="demo">
      <div className={'demo__canvas' + (dark ? ' demo__canvas--dark' : '')}>
        {children}
      </div>
      {label && <div className="demo__label">{label}</div>}
    </div>
  )
}

export function DemoRow({ children }) {
  return <div className="demo-row">{children}</div>
}

export function PropTable({ rows }) {
  return (
    <table className="prop-table">
      <thead>
        <tr>
          <th>Prop</th>
          <th>Type</th>
          <th>Default</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {rows.map(row => (
          <tr key={row.prop}>
            <td><code>{row.prop}</code></td>
            <td><code>{row.type}</code></td>
            <td><code>{row.default ?? '—'}</code></td>
            <td>{row.desc}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
