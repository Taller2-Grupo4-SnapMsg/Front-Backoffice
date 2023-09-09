# Establecer la imagen base
FROM node:14-alpine

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar el package.json y el package-lock.json al directorio de trabajo
COPY package*.json ./

# Instalar las dependencias
RUN npm install

RUN npm install @mui/joy

# Copiar todos los archivos de la aplicación al directorio de trabajo
COPY . .

# Construir la aplicación
RUN npm run build

# Exponer el puerto en el que corre la aplicación (puede variar según tu configuración)
EXPOSE 3000

# Comando para ejecutar la aplicación cuando el contenedor se inicia
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "3000"]