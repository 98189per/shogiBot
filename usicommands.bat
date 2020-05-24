@echo off
Set _sfen=%~1
echo usi
echo isready
echo usinewgame
echo position sfen %_sfen%
echo go byoyomi 5000
ping -n 5 127.0.0.1 >NUL