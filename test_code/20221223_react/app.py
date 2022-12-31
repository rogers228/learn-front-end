from flask import (Flask, render_template)

app = Flask(__name__, template_folder='11_template')

@app.route("/")
def index():
    # return 'hello flask'
    return render_template('base.j2')


# cd /d C:\Users\USER\Documents\learn-front-end\test_code\20221223_react
# set FLASK_APP=app
# set FLASK_ENV=development
# python310 -m flask run --port=8239
# 安裝多版本python時 將python.exe 先改名為 python310.exe
