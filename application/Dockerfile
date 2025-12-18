FROM node:20-alpine
WORKDIR /application

# Instala o netcat para o check de saúde
RUN apk add --no-cache netcat-openbsd

COPY package*.json ./
RUN npm install

COPY . .

# REMOVA a linha ENV DATABASE_URL antiga. 
# Se o Next.js precisar dela apenas para passar pelo 'build', use esta:
ENV DATABASE_URL="postgresql://user_chess_print:aWHUVIvUH7u6tGQixyCGrJQotmX1MqKm@dpg-d4omnba4i8rc73f8aivg-a/chess_print"

RUN npm run build

RUN chmod +x ./entrypoint.sh
EXPOSE 3000

# Usar a forma de shell garante que as variáveis de ambiente sejam lidas
ENTRYPOINT ["/bin/sh", "./entrypoint.sh"]
