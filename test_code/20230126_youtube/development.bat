@echo off
title development_for_youtube
cd /d C:\Users\USER\Documents\learn-front-end\test_code\20230126_youtube
set FLASK_APP=app
set FLASK_ENV=development
python310 -m flask run --port=8239
