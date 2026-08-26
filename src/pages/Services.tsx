import { Sparkles, BedDouble, Sparkle, HeartPulse, Bike } from 'lucide-react'
import CtaSection from '../components/CtaSection'
import ProcessSteps from '../components/ProcessSteps'

const services = [
  {
    number: '01',
    tag: 'KOMFORT & NOCLEG',
    icon: BedDouble,
    title: 'Ekskluzywne pokoje i apartamenty',
    text: 'Oferujemy luksusowe, przestronne pokoje z eleganckim wystrojem z naturalnego drewna i kamienia, które zapewnią Ci pełen komfort podczas pobytu w Dolinie Klonowej.',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80',
    alt: 'Przytulny apartament w Dolinie Klonowej',
  },
  {
    number: '02',
    tag: 'REGENERACJA',
    icon: Sparkle,
    title: 'Strefa SPA & Wellness',
    text: 'Nasza strefa spa zachęca do głębokiego relaksu. Skorzystaj z sauny fińskiej, łaźni parowej i zewnętrznej balii z gorącą wodą pod gwiazdami.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
    alt: 'Strefa relaksu i basen wellness',
  },
  {
    number: '03',
    tag: 'RITUALS',
    icon: HeartPulse,
    title: 'Masaże i rytuały odnowy',
    text: 'Oferujemy profesjonalne masaże relaksacyjne gorącymi kamieniami oraz autorskie rytuały z użyciem naturalnych olejków z polskich ziół i igliwia.',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80',
    alt: 'Masaż relaksacyjny i zabiegi wellness',
  },
  {
    number: '04',
    tag: 'OUTDOOR',
    icon: Bike,
    title: 'Aktywności na świeżym powietrzu',
    text: 'Zrelaksuj się w otoczeniu natury, korzystając z naszych aktywności: wypożyczalni rowerów, tras nordic walking, leśnych ścieżek oraz strefy ogniskowej.',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80',
    alt: 'Wyprawy leśne i kontakt z naturą',
  },
]

export default function Services() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">
            <Sparkles size={14} />
            <span>Odkryj nasze wyjątkowe usługi</span>
          </span>
          <h1>Relaks i komfort na wyciągnięcie ręki</h1>
        </div>
      </section>

      <section className="services-list">
        <div className="container services-grid">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <article className="service-card" key={service.number}>
                <div className="service-image-wrap">
                  <img 
                    src={service.image} 
                    alt={service.alt} 
                    className="service-card-img"
                    referrerPolicy="no-referrer"
                  />
                  <div style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    background: 'rgba(255, 255, 255, 0.92)',
                    backdropFilter: 'blur(8px)',
                    padding: '0.35rem 0.75rem',
                    borderRadius: '999px',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    color: 'var(--color-primary-dark)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem'
                  }}>
                    <Icon size={14} color="var(--color-primary)" />
                    <span>{service.tag}</span>
                  </div>
                </div>
                <div className="service-card-content">
                  <span className="service-number">{service.number}</span>
                  <h3 style={{ fontSize: '1.35rem', marginBottom: '0.6rem' }}>{service.title}</h3>
                  <p style={{ margin: 0, fontSize: '0.95rem' }}>{service.text}</p>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      <ProcessSteps />
      <CtaSection />
    </>
  )
}
