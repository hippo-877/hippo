@echo off
setlocal enabledelayedexpansion

cd /d "%~dp0\.."
title SoC AI Platform - Windows Launcher

echo ==============================================
echo SoC AI Platform - Local Dev Launcher (Windows)
echo ==============================================
echo Project Dir: %cd%
echo.

echo [1/5] Checking Node.js...
where node >nul 2>nul
if errorlevel 1 (
  echo ERROR: Node.js is not installed or not in PATH.
  echo Please install Node.js LTS from https://nodejs.org/
  goto :fail
)

echo [2/5] Checking npm...
where npm >nul 2>nul
if errorlevel 1 (
  echo ERROR: npm is not available in PATH.
  echo Please reinstall Node.js LTS and reopen terminal.
  goto :fail
)

echo [3/5] Node/NPM versions:
node -v
npm -v

echo.
echo [4/5] Installing dependencies...
call npm install
if errorlevel 1 (
  echo.
  echo ERROR: npm install failed.
  echo Tip: check network/proxy and run this script from CMD/PowerShell to view full logs.
  goto :fail
)

echo.
echo [5/5] Starting dev server...
echo Open the URL shown below in your browser ^(usually http://localhost:5173^).
call npm run dev
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
