#!/bin/sh

# Extrai o HOST da URL (ex: dpg-xxxx.render.com)
# Isso remove o protocolo e a senha, sobrando apenas o endereço do banco
DB_HOST=$(echo $DATABASE_URL | sed -e 's|.*@||' -e 's|/.*||' -e 's|:.*||')
DB_PORT=5432

echo "Aguardando banco de dados em $DB_HOST:$DB_PORT..."

# Tenta conectar no host real fornecido pelo Render
while ! nc -z $DB_HOST $DB_PORT; do
  echo "Banco de dados indisponível no host $DB_HOST - dormindo..."
  sleep 2
done

echo "Banco de dados detectado! Iniciando aplicação..."

# Inicia o Next.js
npm start
