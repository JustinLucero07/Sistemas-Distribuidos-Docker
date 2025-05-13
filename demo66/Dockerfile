# Etapa 1: construir la app Angular
FROM node:18-alpine as build

WORKDIR /app

COPY package*.json ./

# Instalar Angular CLI globalmente
RUN npm install -g @angular/cli

# Instalar dependencias del proyecto
RUN npm install

# Copiar el resto del código fuente
COPY . .

# Construir en modo producción
RUN ng build --configuration production

# Etapa 2: servir con Nginx
FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

# Copiar archivos construidos desde la etapa anterior
COPY --from=build /app/dist/demo66/browser /usr/share/nginx/html

EXPOSE 80
