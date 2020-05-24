@echo off
cd gikou2_win
echo %CD% >%2
for /f "tokens=*" %%i in ('..\usicommands.bat %1 ^| gikou.exe') do (
    echo.%%i | find /i "bestmove">nul && ( echo.%%i )
)
cd ..