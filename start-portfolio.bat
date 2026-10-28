@echo off
title Mahadevaprasad S - Portfolio Server
cd /d "%~dp0"
echo ========================================================
echo  Launching The Developer's Digital Atelier
echo  Mahadevaprasad S - Personal Portfolio
echo ========================================================
echo.
echo Opening portfolio in browser at http://localhost:8000 ...
start http://localhost:8000
echo Starting local web server on port 8000...
python server.py
pause
