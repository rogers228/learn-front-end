var express = require('express'); //引用
var mustacheExpress = require('mustache-express'); //引用模板
var app = express(); // 建立app

//設定模板引擎
app.engine('mustache', mustacheExpress()); //註冊
app.set('view engine', 'mustache');
app.set('views', __dirname + '/templates');

//設定模板

app.get('/', function(req, res) { //建立app  request  response
    // res.send('Hello World! 2'); // response
    res.render('base', { title: 'My App' });
});


app.listen(3000, function () {
    console.log(`Example app listening on 127.0.0.1:3000`);
});

//使用 nodemon index.js 執行