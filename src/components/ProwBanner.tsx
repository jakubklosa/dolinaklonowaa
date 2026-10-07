export default function ProwBanner() {
  return (
    <div className="prow-banner-inner" style={{ textAlign: 'center' }}>
      <a
        href="/prow.jpg"
        target="_blank"
        rel="noopener noreferrer"
        title="Kliknij, aby otworzyć tablicę informacyjną PROW w pełnym rozmiarze"
        style={{ display: 'inline-block', maxWidth: '100%', cursor: 'zoom-in' }}
      >
        <img
          src="/prow.jpg"
          alt="Europejski Fundusz Rolny na rzecz Rozwoju Obszarów Wiejskich - Dolina Klonowa"
          style={{
            width: '100%',
            height: 'auto',
            maxHeight: '340px',
            objectFit: 'contain',
            borderRadius: '4px',
            border: '1px solid #e2e8f0',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
            backgroundColor: '#ffffff',
            display: 'block'
          }}
        />
      </a>
      <p style={{ marginTop: '0.6rem', fontSize: '0.78rem', color: '#64748b' }}>
        Oficjalna tablica informacyjna PROW (kliknij, aby powiększyć)
      </p>
    </div>
  )
}