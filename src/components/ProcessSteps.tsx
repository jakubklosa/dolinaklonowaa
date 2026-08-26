import { Compass, ShieldCheck, HeartHandshake } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Compass,
    title: 'Dostosowanie',
    text: 'Słuchamy potrzeb naszych gości, aby każdy pobyt był spersonalizowany i przekraczał wszelkie oczekiwania.',
  },
  {
    number: '02',
    icon: HeartHandshake,
    title: 'Komfort',
    text: 'Tworzymy intymną, kameralną przestrzeń, w której każdy czuje się w pełni swobodnie, bezpiecznie i komfortowo.',
  },
  {
    number: '03',
    icon: ShieldCheck,
    title: 'Profesjonalizm',
    text: 'Nasz zespół dba o najwyższy standard obsługi i higieny, gwarantując spokój i pełen relaks.',
  },
]

export default function ProcessSteps() {
  return (
    <section className="process-section">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Nasze Standardy</span>
          <h2>Wyjątkowe podejście do każdego gościa</h2>
        </div>
        <div className="steps-grid">
          {steps.map((step) => {
            const Icon = step.icon
            return (
              <div className="step-card" key={step.number}>
                <span className="step-watermark">{step.number}</span>
                <span className="step-tag">KROK {step.number}</span>
                <div style={{ marginBottom: '0.75rem', color: 'var(--color-primary)' }}>
                  <Icon size={28} />
                </div>
                <h4>{step.title}</h4>
                <p>{step.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
