@echo off
setlocal
cd /d "%~dp0"

set "NODE_HOME="
for /d %%D in ("%LOCALAPPDATA%\Microsoft\WinGet\Packages\OpenJS.NodeJS.LTS_Microsoft.Winget.Source_8wekyb3d8bbwe\node-v*-win-x64") do set "NODE_HOME=%%~fD"
if exist "%NODE_HOME%\npm.cmd" set "PATH=%NODE_HOME%;%PATH%"

where npm >nul 2>nul
if errorlevel 1 (
  echo Node.js and npm were not found. Install Node.js LTS, then run this file again.
  pause
  exit /b 1
)

call npm run build
if errorlevel 1 (
  echo The production build failed.
  pause
  exit /b 1
)

call npm run preview -- --host 127.0.0.1
if errorlevel 1 (
  echo The production preview exited with an error.
  pause
  exit /b 1
)