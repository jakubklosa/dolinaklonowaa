# Dolina Klonowa – Frontend (React)

Odtworzony od zera frontend (React 18 + TypeScript + Vite + React Router) odzwierciedlający
strukturę i treści strony dolinaklonowa.com: Strona główna, O nas, Usługi, Blog, Kontakt.

To nowy, niezależny kod (nie eksport silnika WordPress/page-buildera oryginalnej strony).

## Uruchomienie lokalne (Standardowe)

```bash
npm install
npm run dev
```

Aplikacja wystartuje pod `http://localhost:3000`.

## Uruchomienie za pomocą Dockera (Lokalnie)

### 1. Za pomocą Docker Compose (Najprościej):
```bash
docker compose up --build -d
```
Aplikacja będzie dostępna pod adresem `http://localhost`.

### 2. Za pomocą czystego Dockera:
```bash
# Zbudowanie obrazu
docker build -t dolina-klonowa:latest .

# Uruchomienie kontenera
docker run -d -p 80:80 --name dolina-klonowa dolina-klonowa:latest
```

## Automatyczny Pipeline GitHub Actions (CI/CD)

W repozytorium w katalogu `.github/workflows/docker-ci-cd.yml` znajduje się gotowy pipeline CI/CD:

1. **Test & Build**: Przy każdym Pull Requeście lub Pushu na branch `main`/`master` sprawdza poprawność kodu i typów TypeScript (`npm run build`).
2. **Docker Build & Push**: Automatycznie buduje wieloetapowy, zoptymalizowany obraz Docker i publikuje go do rejestru **GitHub Container Registry (GHCR)**:
   ```
   ghcr.io/<twoj-username>/dolinaklonowa:latest
   ```
3. **Deploy (Opcjonalnie)**: Pipeline zawiera gotowy szablon wdrożenia na własny serwer VPS przez SSH (wystarczy dodać sekrety `VPS_HOST`, `VPS_USERNAME`, `VPS_SSH_KEY` w ustawieniach repozytorium GitHub: *Settings -> Secrets and variables -> Actions*).

## Sposoby na hosting

- **Dowolny VPS (Hetzner, OVH, DigitalOcean, Linode, AWS EC2):**
  Zainstaluj Docker i uruchom:
  ```bash
  docker run -d -p 80:80 --restart unless-stopped ghcr.io/<twoj-username>/dolinaklonowa:latest
  ```
- **Platformy PaaS (Coolify / Portainer / Render / Railway / CapRover):**
  Wskaż repozytorium z dołączonym `Dockerfile` lub bezpośrednio obraz z GHCR.
- **Google Cloud Run / AWS ECS / Azure Container Apps:**
  Wskaż zbudowany kontener z rejestru kontenerów.

## Struktura

```
src/
├── main.tsx            ← punkt wejścia, routing
├── App.tsx             ← layout + trasy
├── index.css           ← design system (kolory, typografia, komponenty)
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── CtaSection.tsx
│   └── ProcessSteps.tsx
└── pages/
    ├── Home.tsx
    ├── About.tsx        (O nas)
    ├── Services.tsx     (Usługi)
    ├── Blog.tsx
    └── Contact.tsx      (Kontakt)
```

## Do zrobienia

- Podmienić placeholdery obrazów (`.history-image`, `.service-image`) na realne zdjęcia obiektu.
- Podłączyć formularz kontaktowy (`src/pages/Contact.tsx`) do prawdziwego backendu/wysyłki e-mail.
- Uzupełnić sekcję Blog realnymi wpisami.
- Podmienić favicon (`public/favicon.png`).
