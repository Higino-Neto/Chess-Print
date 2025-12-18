FROM node:20-alpine
WORKDIR /application

RUN apk add --no-cache netcat-openbsd

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

RUN chmod +x ./entrypoint.sh
EXPOSE 3000
ENTRYPOINT ["./entrypoint.sh"]
