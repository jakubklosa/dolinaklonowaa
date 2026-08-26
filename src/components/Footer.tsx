import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Sparkles } from 'lucide-react'
import logoImg from '../assets/images/golden_maple_logo_1787784263957.jpg'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top-grid">
          <div>
            <div className="footer-brand-title" style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <img
                src={logoImg}
                alt="Logo Dolina Klonowa"
                style={{ width: '32px', height: '32px', borderRadius: '50%', objectFit: 'cover' }}
                referrerPolicy="no-referrer"
              />
              <span>Dolina Klonowa</span>
            </div>
            <p className="footer-desc">
              Kameralne miejsce wypoczynku i relaksu w otoczeniu natury. Luksusowe apartamenty, strefa spa oraz niezapomniane chwile w Chwalibożycach.
            </p>
          </div>

          <div>
            <div className="footer-heading">Nawigacja</div>
            <ul className="footer-links-list">
              <li><Link to="/">Strona główna</Link></li>
              <li><Link to="/o-nas">O nas</Link></li>
              <li><Link to="/uslugi">Usługi i Spa</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/kontakt">Kontakt i Dojazd</Link></li>
            </ul>
          </div>

          <div>
            <div className="footer-heading">Kontakt</div>
            <div className="footer-contact-item">
              <Phone size={16} />
              <span>609 959 997</span>
            </div>
            <div className="footer-contact-item">
              <Mail size={16} />
              <span>biuro@dolinaklonowa.com</span>
            </div>
            <div className="footer-contact-item">
              <MapPin size={16} />
              <span>55-200 Chwalibożyce, gm. Oława</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            Prawo autorskie © {new Date().getFullYear()} Dolina Klonowa. Wszelkie prawa zastrzeżone.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#7d9682', fontSize: '0.85rem' }}>
            <Sparkles size={14} color="#c29541" />
            <span>Oaza ciszy i natury</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
