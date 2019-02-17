@echo on

for /f "delims=" %%# in  ('"wmic path Win32_VideoController  get CurrentHorizontalResolution,CurrentVerticalResolution /format:value"') do (
  set "%%#">nul
)

echo %CurrentHorizontalResolution%
echo %CurrentVerticalResolution%
pause



#https://de.infobyip.com/detectdisplaysize.php