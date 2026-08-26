# ==========================================
# Etap 1: Budowanie aplikacji (Builder)
# ==========================================
FROM node:20-alpine AS builder

WORKDIR /app

# Kopiowanie definicji zależności
COPY package*.json ./

# Instalacja zależności
RUN npm ci || npm install

# Kopiowanie pozostałych plików źródłowych
COPY . .

# Budowanie wersji produkcyjnej do katalogu /app/dist
RUN npm run build

# ==========================================
# Etap 2: Serwowanie przez lekki Nginx
# ==========================================
FROM nginx:alpine

# Kopiowanie dedykowanej konfiguracji Nginx dla SPA (React Router)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Kopiowanie zbudowanych plików statycznych z etapu builder
COPY --from=builder /app/dist /usr/share/nginx/html

# Otwarcie portu 80
EXPOSE 80

# Uruchomienie Nginxa w trybie foreground
CMD ["nginx", "-g", "daemon off;"]
