export default function ProwBanner() {
  return (
    <div className="prow-banner-inner">
      <div className="prow-logos-row">
        {/* Flaga UE */}
        <div className="prow-logo-box">
          <svg viewBox="0 0 100 66" className="prow-flag-svg" role="img" aria-label="Flaga Unii Europejskiej">
            <rect width="100" height="66" fill="#003399" rx="2"/>
            <g fill="#FFCC00" transform="translate(50,33) scale(0.65)">
              {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
                <polygon
                  key={deg}
                  points="0,-28 2.5,-21 9,-21 4,-17 6,-10 0,-14 -6,-10 -4,-17 -9,-21 -2.5,-21"
                  transform={`rotate(${deg})`}
                />
              ))}
            </g>
          </svg>
        </div>

        {/* LGD BOWH */}
        <div className="prow-logo-box">
          <svg viewBox="0 0 100 100" className="prow-bowh-svg" role="img" aria-label="LGD Stowarzyszenie BOWH">
            <circle cx="50" cy="50" r="46" fill="#7a2b25" stroke="#4a1512" strokeWidth="3"/>
            <circle cx="50" cy="50" r="41" fill="none" stroke="#d4af37" strokeWidth="1.5" strokeDasharray="3,2"/>
            <text x="50" y="44" fill="#ffffff" fontSize="16" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">BOWH</text>
            <text x="50" y="58" fill="#e8d5b5" fontSize="8" fontFamily="sans-serif" textAnchor="middle">L.G.D. 2008</text>
            <text x="50" y="74" fill="#ffffff" fontSize="6.5" fontFamily="sans-serif" textAnchor="middle">BRZESKO-OŁAWSKA</text>
          </svg>
        </div>

        {/* LEADER */}
        <div className="prow-logo-box">
          <svg viewBox="0 0 100 100" className="prow-leader-svg" role="img" aria-label="Logo LEADER">
            <rect width="100" height="100" fill="#ffffff" stroke="#1b5e20" strokeWidth="3" rx="4"/>
            <rect x="50" width="50" height="100" fill="#1b5e20" rx="2"/>
            <path d="M22 80 C35 60, 40 40, 50 15 C60 40, 65 60, 78 80" stroke="#ffd600" strokeWidth="7" fill="none" strokeLinecap="round"/>
            <circle cx="50" cy="45" r="9" fill="#ffd600" />
            <text x="50" y="93" fill="#ffffff" fontSize="11" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle" letterSpacing="1">LEADER</text>
          </svg>
        </div>

        {/* PROW 2014-2020 */}
        <div className="prow-logo-box">
          <svg viewBox="0 0 120 100" className="prow-program-svg" role="img" aria-label="Program Rozwoju Obszarów Wiejskich">
            <path d="M15 80 Q60 50 105 80" stroke="#388e3c" strokeWidth="8" fill="none" strokeLinecap="round"/>
            <path d="M25 88 Q60 62 95 88" stroke="#1976d2" strokeWidth="6" fill="none" strokeLinecap="round"/>
            <path d="M60 20 L75 55 L45 55 Z" fill="#d32f2f"/>
            <path d="M50 35 L70 35 L60 15 Z" fill="#ffd600"/>
            <text x="60" y="96" fill="#1b5e20" fontSize="7" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">PROW 2014-2020</text>
          </svg>
        </div>
      </div>

      <div className="prow-text-content">
        <h3 className="prow-title-blue">
          „Europejski Fundusz Rolny na rzecz Rozwoju Obszarów Wiejskich: Europa inwestująca w obszary wiejskie”.
        </h3>
        <p className="prow-italic-lead">
          Operacja pn.: <strong>„Rozpoczęcie działalności wysokiej jakości usług spa w powstającym obiekcie świadczącym kameralne usługi noclegowe w Chwalibożycach gm. Oława”</strong>
        </p>
        <p className="prow-italic-desc">
          mająca na celu podjęcie działalności gospodarczej w zakresie prowadzenia usług noclegowych i poprawy kondycji fizycznej na obszarze LGD Brzesko-Oławskiej Wsi Historycznej poprzez zakup niezbędnego sprzętu oraz samozatrudnienie,
        </p>
        <p className="prow-bold-funding">
          współfinansowana jest ze środków Unii Europejskiej w ramach poddziałania „Wsparcie na wdrażanie operacji w ramach strategii rozwoju lokalnego kierowanego przez społeczność” Programu Rozwoju Obszarów Wiejskich na lata 2014-2020.
        </p>
        <p className="prow-value">
          Wartość operacji: <strong>100 000 zł.</strong>
        </p>
        <p className="prow-subtext">
          Operacja realizowana w ramach strategii rozwoju lokalnego kierowanego przez społeczność wdrażanej przez LGD Stowarzyszenie „Brzesko-Oławska Wieś Historyczna”.
        </p>
      </div>
    </div>
  )
}
