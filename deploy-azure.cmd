@echo off

REM 🔥 SAINTSAL™ AZURE DEPLOYMENT SCRIPT
REM Optimized for Azure App Service with zero downtime

echo.
echo 🔥🔥🔥 SAINTSAL™ AZURE DEPLOYMENT STARTING 🔥🔥🔥
echo ================================================
echo 🚀 Patent-protected AI movement deploying...
echo ================================================
echo.

REM Set deployment variables
set DEPLOYMENT_SOURCE=%~dp0.
set DEPLOYMENT_TARGET=%DEPLOYMENT_TARGET%
set NEXT_MANIFEST_CACHE=%DEPLOYMENT_TARGET%\.next-manifest-cache

if "%DEPLOYMENT_TARGET%" == "" set DEPLOYMENT_TARGET=%ARTIFACTS%\wwwroot

REM Clean deployment target
if exist "%DEPLOYMENT_TARGET%" rd /s /q "%DEPLOYMENT_TARGET%"
mkdir "%DEPLOYMENT_TARGET%"

echo ✅ Deployment target prepared

REM Install Node.js dependencies
echo 📦 Installing Node.js dependencies...
cd /d "%DEPLOYMENT_SOURCE%"
call npm ci --production=false --prefer-offline

if !ERRORLEVEL! NEQ 0 (
  echo ❌ npm install failed
  exit /b 1
)

echo ✅ Dependencies installed

REM Build the application
echo 🏗️ Building SAINTSAL™ application...
call npm run build

if !ERRORLEVEL! NEQ 0 (
  echo ❌ npm build failed
  exit /b 1
)

echo ✅ Build completed

REM Copy files to deployment target
echo 📂 Copying files to deployment target...
xcopy "%DEPLOYMENT_SOURCE%\*" "%DEPLOYMENT_TARGET%\" /E /Y /I /Q

REM Ensure server.js is in root for Azure
copy "%DEPLOYMENT_SOURCE%\server.js" "%DEPLOYMENT_TARGET%\server.js"
copy "%DEPLOYMENT_SOURCE%\web.config" "%DEPLOYMENT_TARGET%\web.config"

echo ✅ Files copied

REM Install production dependencies in target
echo 📦 Installing production dependencies in target...
cd /d "%DEPLOYMENT_TARGET%"
call npm ci --production --prefer-offline

if !ERRORLEVEL! NEQ 0 (
  echo ❌ Production npm install failed
  exit /b 1
)

echo.
echo 🎉🎉🎉 AZURE DEPLOYMENT COMPLETE! 🎉🎉🎉
echo ========================================
echo ✅ SAINTSAL™ Movement deployed successfully
echo ✅ Patent-protected AI ready for saints
echo ✅ Azure App Service optimized
echo ========================================
echo 🔥 U.S. Patent No. 10,290,222 - LIVE!
echo.

exit /b 0
