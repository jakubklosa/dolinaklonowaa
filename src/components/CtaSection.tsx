import { Link } from 'react-router-dom'
import { Sparkles, ArrowRight } from 'lucide-react'

export default function CtaSection() {
  return (
    <section className="cta-section">
      <div className="container cta-inner">
        <div>
          <span className="eyebrow eyebrow-light">
            <Sparkles size={14} />
            <span>Zarezerwuj swój pobyt</span>
          </span>
          <h2>Zarezerwuj swój luksusowy wypoczynek już dziś!</h2>
          <p>Czekamy na Ciebie w Dolinie Klonowej – stwórz z nami niezapomniane wspomnienia w otoczeniu natury.</p>
        </div>
        <Link to="/kontakt" className="btn btn-light">
          <span>Zarezerwuj teraz</span>
          <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  )
}
