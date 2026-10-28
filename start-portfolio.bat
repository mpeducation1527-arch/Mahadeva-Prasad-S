@echo off
title Mahadeva Prasad S - Portfolio Server
cd /d "%~dp0"
echo ========================================================
echo  Launching Mahadeva Prasad S Portfolio
echo  Concept: "Technology with Purpose"
echo ========================================================
echo.
echo Opening portfolio in browser at http://localhost:8000 ...
start http://localhost:8000
echo Starting local Python web server on port 8000...
python server.py
pause
