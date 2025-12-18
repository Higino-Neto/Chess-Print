#!/bin/sh

# Extrair host e porta da DATABASE_URL
# Se a URL for postgres://user:pass@host:5432/db, isso vai pegar o 'host'
DB_HOST=$(echo $DATABASE_URL | sed -e 's|.*@||' -e 's|/.*||' -e 's|:.*||')
DB_PORT=5432

echo "Waiting for database at $DB_HOST:$DB_PORT..."

# Tenta conectar na porta 5432 (Postgres)
while ! nc -z $DB_HOST $DB_PORT; do
  echo "Database is unavailable - sleeping"
  sleep 2
done

echo "Database is up - starting application"

# Inicia a aplicação
npm start
