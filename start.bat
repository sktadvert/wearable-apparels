@echo off
set PATH=C:\Users\dell\nodejs;%PATH%
cd /d C:\Users\dell\Desktop\Claude\Wearable_Apparels\site
if defined PORT (
  npx next dev --port %PORT%
) else (
  npx next dev --port 3000
)
