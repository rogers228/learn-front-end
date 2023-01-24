import os
from flask import (Flask, render_template)

mydir = os.path.dirname(os.path.abspath(__file__)) # 當前路徑
app = Flask(__name__,
    template_folder=mydir, # template設定為當前
    static_folder= 'static')  # static 設定為當前

@app.route("/")
def index():
    # return 'hello flask2'
    return render_template('index.j2')

@app.route("/test1")
def test1():
    # return 'hello flask'
    return render_template('test1.j2')

@app.route("/test2")
def test2():
    # return 'hello flask'
    return render_template('test2.j2')

# cd /d C:\Users\USER\Documents\learn-front-end\test_code\20221223_react
# set FLASK_APP=app
# set FLASK_ENV=development
# python310 -m flask run --port=8239
# 安裝多版本python時 將python.exe 複製一個改名為 python310.exe 來執行
