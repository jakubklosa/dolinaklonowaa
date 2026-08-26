import { Link } from 'react-router-dom'
import { Sparkles, ArrowRight, Trees, Waves, Mountain } from 'lucide-react'
import CtaSection from '../components/CtaSection'
import ProcessSteps from '../components/ProcessSteps'
import ProwBanner from '../components/ProwBanner'

export default function Home() {
  return (
    <>
      {/* Hero Fullscreen with Spa Background */}
      <section className="hero-fullscreen">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <span className="eyebrow">
              <Sparkles size={14} />
              <span>Odkryj Luksus & Relaks</span>
            </span>
            <h1 className="hero-title">
              Dolina Klonowa – Twoje Miejsce Wypoczynku
            </h1>
            <p className="hero-subtitle">
              Zrelaksuj się w eleganckim otoczeniu, korzystając z naszych luksusowych usług spa oraz szerokiej gamy atrakcji.
            </p>
            <div className="hero-cta-group">
              <Link to="/kontakt" className="btn btn-primary">
                <span>Zarezerwuj teraz</span>
                <ArrowRight size={16} />
              </Link>
              <Link to="/uslugi" className="btn btn-outline">
                Zobacz ofertę
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Dofinansowanie PROW i statystyki */}
      <section className="prow-stats-section">
        <div className="prow-stats-grid">
          <div className="prow-banner-container">
            <ProwBanner />
          </div>
          <div className="prow-stats-container">
            <div className="prow-stat-block">
              <span className="prow-stat-number">2023</span>
              <span className="prow-stat-text">Rok założenia</span>
            </div>
            <div className="prow-stat-block">
              <span className="prow-stat-number">100.000zł</span>
              <span className="prow-stat-text">Dofinansowanie ze środków PROW</span>
            </div>
          </div>
        </div>
      </section>

      <section className="about-preview">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Poznaj nas</span>
            <h2>Dolina Klonowa – miejsce pełne harmonii i luksusu</h2>
          </div>
          <div className="about-preview-grid">
            <div>
              <h3 style={{ fontSize: '1.35rem', lineHeight: '1.4', marginBottom: '1rem' }}>
                Nasza historia to pasja do tworzenia wyjątkowych doświadczeń dla naszych gości.
              </h3>
              <p>
                Dolina Klonowa to ośrodek, który zapewnia gościom niezapomniane chwile relaksu w
                otoczeniu natury, dbając o ich komfort i dobrostan.
              </p>
              <ul className="feature-list">
                <li>
                  <Trees size={20} color="var(--color-primary)" />
                  <span>Eleganckie pokoje z widokiem na zieleń i las</span>
                </li>
                <li>
                  <Waves size={20} color="var(--color-primary)" />
                  <span>Strefa spa z sauną fińską i balią z gorącą wodą</span>
                </li>
                <li>
                  <Mountain size={20} color="var(--color-primary)" />
                  <span>Malownicze trasy spacerowe i rowerowe w scenerii doliny</span>
                </li>
              </ul>
              <div style={{ marginTop: '2rem' }}>
                <Link to="/o-nas" className="btn btn-outline">
                  <span>Wszystko o nas</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
            <div className="about-image-wrap">
              <img 
                src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1000&q=85" 
                alt="Ekskluzywne wnętrza i apartamenty w Dolinie Klonowej" 
                className="section-image"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="services-preview" style={{ background: 'var(--color-surface-warm)' }}>
        <div className="container services-preview-grid">
          <div className="services-preview-images">
            <img 
              src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=900&q=80" 
              alt="Strefa relaksu i wellness" 
              className="preview-img-top"
              referrerPolicy="no-referrer"
            />
            <img 
              src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=900&q=80" 
              alt="Ekskluzywne apartamenty i tarasy" 
              className="preview-img-bottom"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <span className="eyebrow">Nasze usługi</span>
            <h2>Oferujemy wyjątkowe usługi relaksacyjne</h2>
            <p>
              Wypełnij swój pobyt masażami, saunami i czasem w strefie wellness, które pozwolą Ci odprężyć się w
              komfortowym otoczeniu.
            </p>
            <ol className="numbered-list" style={{ margin: '1.75rem 0' }}>
              <li>
                <span className="num">01</span>
                <span>Ekskluzywne pokoje i apartamenty</span>
              </li>
              <li>
                <span className="num">02</span>
                <span>Strefa saun i kąpieli w balii</span>
              </li>
              <li>
                <span className="num">03</span>
                <span>Masaże relaksacyjne i regeneracja</span>
              </li>
            </ol>
            <Link to="/uslugi" className="btn btn-primary">
              <span>Poznaj pełną ofertę</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="banner-cta">
        <div className="container">
          <h2>Dołącz do nas i odkryj wyjątkowy relaks w Dolinie Klonowej.</h2>
          <Link to="/kontakt" className="btn btn-light">
            <span>Zarezerwuj teraz</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <ProcessSteps />
      <CtaSection />
    </>
  )
}
