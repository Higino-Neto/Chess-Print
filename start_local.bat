@echo off

start cmd /k "cd API && call .venv/Scripts/activate && uvicorn src.main:app --reload"

start cmd /k "cd application && npm run dev"

start cmd /k "node application/database/sync.js"

pause
