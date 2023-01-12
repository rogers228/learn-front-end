@echo off
rem 修改cmd 視窗標題
title development_for_react
rem 同步 template
cd /d C:\Users\USER\Documents\learn-front-end\test_code\20230121_react\11_template
python sync_template.py
cd /d C:\Users\USER\Documents\learn-front-end\test_code\20230121_react\46_web
echo on
node index.js