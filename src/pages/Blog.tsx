import { Sparkles, BookOpen } from 'lucide-react'
import CtaSection from '../components/CtaSection'

export default function Blog() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">
            <Sparkles size={14} />
            <span>Strefa Inspiracji</span>
          </span>
          <h1>Blog Doliny Klonowej</h1>
          <p style={{ maxWidth: '640px', margin: '0.75rem auto 0', fontSize: '1.05rem' }}>
            Przewodniki po strefie wellness, tajniki leśnych rytuałów spa oraz aktualności z życia naszego ośrodka w Chwalibożycach.
          </p>
        </div>
      </section>

      <section style={{ padding: '4rem 0' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '680px' }}>
          <div
            style={{
              background: 'var(--color-surface)',
              padding: '3rem 2rem',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--color-border)',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            <div
              style={{
                width: '56px',
                height: '56px',
                margin: '0 auto 1.25rem',
                background: 'var(--color-accent-soft)',
                color: 'var(--color-primary)',
                borderRadius: '999px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <BookOpen size={26} />
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>Wkrótce nowe artykuły</h3>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6', margin: 0 }}>
              Pracujemy nad serią wyjątkowych wpisów o aromaterapii, regeneracji w naturze i najciekawszych atrakcjach Doliny Historycznej. Zapraszamy wkrótce!
            </p>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
