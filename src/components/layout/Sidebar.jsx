import { NavLink } from 'react-router-dom'
import './Sidebar.css'

const navItems = [
  { to: '/colors',     label: 'Colors' },
  { to: '/typography', label: 'Typography' },
  { to: '/spacing',    label: 'Spacing & Radius' },
  { to: '/buttons',    label: 'Buttons' },
  { to: '/forms',      label: 'Form Elements' },
  { to: '/cards',      label: 'Cards & Organisms' },
]

export default function Sidebar({ theme, onToggleTheme }) {
  return (
    <aside className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__logo">
          <span className="sidebar__logo-mark">R</span>
          <div>
            <div className="sidebar__logo-title">RDS</div>
            <div className="sidebar__logo-sub">Design System</div>
          </div>
        </div>
      </div>

      <nav className="sidebar__nav">
        <div className="sidebar__section-label">Foundations</div>
        {navItems.slice(0, 3).map(item => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              'sidebar__link' + (isActive ? ' sidebar__link--active' : '')
            }
          >
            {item.label}
          </NavLink>
        ))}

        <div className="sidebar__section-label">Components</div>
        {navItems.slice(3).map(item => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              'sidebar__link' + (isActive ? ' sidebar__link--active' : '')
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="sidebar__footer">
        <button className="sidebar__theme-toggle" onClick={onToggleTheme} title="Toggle theme">
          {theme === 'light' ? 'Dark mode' : 'Light mode'}
        </button>
        <div className="sidebar__version">v1.0 · Roularta Media Group</div>
      </div>
    </aside>
  )
}
