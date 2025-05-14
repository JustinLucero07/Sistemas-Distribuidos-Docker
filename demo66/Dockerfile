# Etapa 1: construir la app Angular
FROM node:18-alpine as build

# Establece el directorio de trabajo
WORKDIR /app

# Copiar package.json y package-lock.json primero para aprovechar la caché de Docker
COPY package.json package-lock.json ./

# Instalar Angular CLI globalmente
RUN npm install -g @angular/cli

# Instalar dependencias del proyecto
RUN npm install

# Copiar el resto del código fuente
COPY . .

# Construir la aplicación Angular en modo producción
RUN ng build --configuration production

# Etapa 2: servir con Nginx
FROM nginx:alpine

# Eliminar los archivos default
RUN rm -rf /usr/share/nginx/html/*

# Copiar archivos construidos desde Angular
COPY --from=build /app/dist/demo66/browser /usr/share/nginx/html

# Copiar configuración personalizada de Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
