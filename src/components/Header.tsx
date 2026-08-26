import { NavLink } from 'react-router-dom'
import { Sparkles } from 'lucide-react'

const links = [
  { to: '/', label: 'Strona główna' },
  { to: '/o-nas', label: 'O nas' },
  { to: '/uslugi', label: 'Usługi' },
  { to: '/blog', label: 'Blog' },
  { to: '/kontakt', label: 'Kontakt' },
]

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <NavLink to="/" className="logo">
          <Sparkles className="logo-icon" size={20} />
          <span>Dolina Klonowa</span>
        </NavLink>
        <nav className="main-nav">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
              end={link.to === '/'}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <NavLink to="/kontakt" className="btn btn-primary">
          Zarezerwuj teraz
        </NavLink>
      </div>
    </header>
  )
}
