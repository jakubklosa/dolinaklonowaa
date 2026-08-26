import { CheckCircle2, Sparkles } from 'lucide-react'
import CtaSection from '../components/CtaSection'

const values = [
  'Autentyczność w naszym podejściu do każdego gościa',
  'Najwyższa dbałość o jakość, ekologię i najmniejsze detale',
  'Indywidualne pakiety relaksacyjne skrojone na miarę',
]

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">
            <Sparkles size={14} />
            <span>Odkryj swoją oazę relaksu</span>
          </span>
          <h1>Dolina Klonowa – miejsce na niezapomniane wspomnienia</h1>
        </div>
      </section>

      <section className="about-intro">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Kim jesteśmy</span>
            <h2>Dolina Klonowa to luksusowy ośrodek relaksu dla każdego gościa</h2>
          </div>
          <div className="about-preview-grid">
            <div>
              <h3 style={{ fontSize: '1.35rem', lineHeight: '1.4', marginBottom: '1rem', color: 'var(--color-primary-dark)' }}>
                Naszym celem jest zapewnienie wyjątkowych doświadczeń gościom odwiedzającym Dolinę
                Klonową.
              </h3>
              <p>
                Dolina Klonowa to obiekt, który łączy nowoczesność z naturą, tworząc przestrzeń do
                wypoczynku i odnowy. Dzięki naszym starannie zaprojektowanym pokojom oraz różnorodnym
                usługom wellness, każdy może odnaleźć harmonię ciała i ducha w malowniczej scenerii.
              </p>
              <p style={{ marginTop: '0.75rem' }}>
                Nasze pokoje i spa są kluczowymi elementami, które czynią Dolinę Klonową idealnym
                miejscem do odpoczynku z dala od zgiełku miasta.
              </p>
            </div>
            <div className="about-image-wrap">
              <img 
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80" 
                alt="Wypoczynek i komfort w Dolinie Klonowej" 
                className="section-image"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mission-section" style={{ background: 'var(--color-surface-warm)' }}>
        <div className="container mission-grid">
          <div>
            <span className="eyebrow">Nasza misja</span>
            <h2>Komfort, regeneracja i spokój</h2>
            <p>
              Dążymy do stworzenia unikalnego miejsca na wsi, z dala od miejskiego hałasu, w
              którym nasi goście mogą odnaleźć spokój, odprężenie oraz radość z pobytu w sercu
              natury. Nasze usługi są zawsze dostosowane do indywidualnych potrzeb każdego
              klienta.
            </p>
          </div>
          <div>
            <span className="eyebrow">Nasze wartości</span>
            <h2>Trzy filary Doliny Klonowej</h2>
            <p>
              Wierzymy w autentyczność, jakość i indywidualne podejście do każdego gościa. Każde
              doświadczenie w Dolinie Klonowej jest dla nas priorytetem.
            </p>
            <ul className="feature-list">
              {values.map((value) => (
                <li key={value}>
                  <CheckCircle2 size={20} color="var(--color-primary)" />
                  <span>{value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="history-section">
        <div className="container history-grid">
          <div className="history-image-wrap">
            <img 
              src="https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=900&q=80" 
              alt="Malownicza przyroda i lasy Doliny Klonowej" 
              className="section-image"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <span className="eyebrow">Nasza historia</span>
            <h2>Tradycja, natura i ciągły rozwój</h2>
            <p>
              Dolina Klonowa powstała z pasji do tworzenia miejsca, które łączy komfort i naturę.
              Od momentu otwarcia, regularnie wdrażamy nowe usługi i udoskonalamy nasze wnętrza,
              aby zapewnić gościom wyjątkowe doświadczenia.
            </p>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
