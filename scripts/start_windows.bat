@echo off
setlocal enabledelayedexpansion

cd /d "%~dp0\.."

echo [1/4] Checking Node.js...
where node >nul 2>nul
if errorlevel 1 (
  echo ERROR: Node.js is not installed or not in PATH.
  echo Please install Node.js LTS from https://nodejs.org/
  pause
  exit /b 1
)

echo [2/4] Node version:
node -v

echo [3/4] Installing dependencies...
call npm install
if errorlevel 1 (
  echo ERROR: npm install failed.
  pause
  exit /b 1
)

echo [4/4] Starting dev server...
echo Open the URL shown below in your browser ^(usually http://localhost:5173^).
call npm run dev

endlocal
