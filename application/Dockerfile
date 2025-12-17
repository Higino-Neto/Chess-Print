FROM node:20-alpine

WORKDIR /application

COPY package*.json ./
RUN npm install

COPY . .

RUN chmod +x /app/entrypoint.sh

EXPOSE 3000

ENTRYPOINT ["/app/entrypoint.sh"]
