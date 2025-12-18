#!/bin/sh

DB_HOST_NAME=${DB_HOST:-localhost}

echo "Waiting for database at $DB_HOST_NAME:3306..."

while ! nc -z $DB_HOST_NAME 3306; do
  echo "Database is unavailable - sleeping"
  sleep 2
done

echo "Database Ready!"

echo "Sincronizing tables..."
node database/sync.js

echo "Starting Next.js in Production mode..."
npm start -- -H 0.0.0.0
