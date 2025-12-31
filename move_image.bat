@echo off
copy /Y "fyp.png" "public\fyp.png"
if %errorlevel% neq 0 echo Copy failed > public\copy_error.txt
dir public > public\dir_output.txt
echo Done
