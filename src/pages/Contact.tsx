import { FormEvent, useState } from 'react'
import { Phone, Mail, MapPin, Send, Sparkles, CheckCircle } from 'lucide-react'
import CtaSection from '../components/CtaSection'

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sent'>('idle')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('sent')
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">
            <Sparkles size={14} />
            <span>Skontaktuj się z nami</span>
          </span>
          <h1>Zapraszamy do kontaktu z naszym ośrodkiem</h1>
        </div>
      </section>

      <section className="contact-info">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Masz pytania?</span>
            <h2>Chętnie odpowiemy na wszystkie Twoje pytania</h2>
          </div>
          <div className="contact-cards">
            <div className="contact-card">
              <div className="contact-card-icon">
                <Phone size={22} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Zadzwoń do nas</h3>
              <p style={{ margin: 0, fontWeight: 600, color: 'var(--color-primary-dark)', fontSize: '1.1rem' }}>
                609 959 997
              </p>
            </div>

            <div className="contact-card">
              <div className="contact-card-icon">
                <Mail size={22} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Napisz e-mail</h3>
              <p style={{ margin: 0, fontWeight: 600, color: 'var(--color-primary-dark)', fontSize: '1.05rem' }}>
                biuro@dolinaklonowa.com
              </p>
            </div>

            <div className="contact-card">
              <div className="contact-card-icon">
                <MapPin size={22} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Lokalizacja</h3>
              <p style={{ margin: 0, color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>
                55-200 Chwalibożyce, ul. Spokojna 3 (gm. Oława)
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-form-section" style={{ background: 'var(--color-surface-warm)' }}>
        <div className="container contact-form-grid">
          <div>
            <span className="eyebrow">Formularz kontaktowy</span>
            <h2>Skorzystaj z formularza, aby się z nami skontaktować</h2>
            <p style={{ fontSize: '1.02rem', lineHeight: '1.6' }}>
              Wypełnij formularz, a nasz zespół odpowie na Twoje zapytanie najszybciej jak to możliwe i pomoże dobrać idealny pakiet wypoczynkowy.
            </p>
            <div style={{ marginTop: '2rem' }}>
              <span className="eyebrow">Bądź z nami na bieżąco</span>
              <div style={{ marginTop: '0.75rem' }}>
                <a
                  href="https://www.facebook.com/profile.php?id=61565335438372"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline"
                >
                  Odwiedź nasz profil na Facebooku
                </a>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <label>
                Imię *
                <input type="text" name="firstName" placeholder="np. Jan" required />
              </label>
              <label>
                Nazwisko *
                <input type="text" name="lastName" placeholder="np. Kowalski" required />
              </label>
            </div>
            <label>
              Adres e-mail *
              <input type="email" name="email" placeholder="jan.kowalski@example.com" required />
            </label>
            <label>
              Wiadomość *
              <textarea name="message" rows={5} placeholder="Wpisz treść swojej wiadomości..." required />
            </label>
            <button type="submit" className="btn btn-primary">
              <Send size={16} />
              <span>Wyślij wiadomość</span>
            </button>
            {status === 'sent' && (
              <div className="form-success" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle size={18} />
                <span>Dziękujemy! Twoja wiadomość została pomyślnie wysłana.</span>
              </div>
            )}
          </form>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
