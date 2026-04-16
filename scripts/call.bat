@echo off
REM Get the path to git.exe
for /f "delims=" %%G in ('where git') do (
    set "GIT_CMD_PATH=%%G"
    goto found
)

echo Git not found!
exit /b 1

:found
REM Extract the Git installation path
set "GIT_ROOT=%GIT_CMD_PATH:cmd\git.exe=%"
set "BASH_PATH=%GIT_ROOT%bin\bash.exe"

REM Get the current script path and name
set "SCRIPT_DIR=%~dp0"
set "SCRIPT_NAME=%~n0.sh"
set "SH_FILE=%SCRIPT_DIR%%SCRIPT_NAME%"

REM Execute the bash script
"%BASH_PATH%" "%SH_FILE%"
