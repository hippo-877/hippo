@echo off
setlocal enabledelayedexpansion

cd /d "%~dp0\.."
title SoC AI Platform - Windows Launcher

set "DEV_HOST=127.0.0.1"
set "DEV_PORT=5173"

echo ==============================================
echo SoC AI Platform - Local Dev Launcher (Windows)
echo ==============================================
echo Project Dir: %cd%
echo Target URL : http://%DEV_HOST%:%DEV_PORT%
echo.

echo [1/6] Checking Node.js...
where node >nul 2>nul
if errorlevel 1 (
  echo ERROR: Node.js is not installed or not in PATH.
  echo Please install Node.js LTS from https://nodejs.org/
  goto :fail
)

echo [2/6] Checking npm...
where npm >nul 2>nul
if errorlevel 1 (
  echo ERROR: npm is not available in PATH.
  echo Please reinstall Node.js LTS and reopen terminal.
  goto :fail
)

echo [3/6] Node/NPM versions:
node -v
npm -v

echo.
echo [4/6] Installing dependencies...
echo (This may take a while on first run.)
call npm install --no-fund --no-audit
if errorlevel 1 (
  echo.
  echo ERROR: npm install failed.
  echo Tip: check network/proxy and run this script from CMD/PowerShell to view full logs.
  goto :fail
)

echo.
echo [5/6] Dependencies ready.

echo [6/6] Starting dev server...
echo Expected URL: http://%DEV_HOST%:%DEV_PORT%
start "" "http://%DEV_HOST%:%DEV_PORT%"
call npm run dev -- --host %DEV_HOST% --port %DEV_PORT% --strictPort
set EXIT_CODE=%errorlevel%

echo.
echo Dev server exited with code %EXIT_CODE%.
echo If this was unexpected, run in CMD/PowerShell and copy the full error output.
goto :end

:fail
set EXIT_CODE=1
echo.
echo Launcher failed. Please read the error above.

:end
echo.
echo Press any key to close this window...
pause >nul
exit /b %EXIT_CODE%
