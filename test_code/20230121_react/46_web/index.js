// base
const path = require('path');

// express
var express = require('express'); //引用 express
var app = express(); // 建立app

// pug模板

var pug = require('pug');
app.set('view engine', 'pug'); //設定模板引擎
app.set('views', path.join(__dirname, 'template'));
app.locals.pretty = true; // html美化

app.get('/', function(req, res) { //建立app  request  response
    // res.send('Hello World! 3'); // response
    res.render('index', { title: 'My App', message: 'Hello World' });

});

app.listen(3000, function () {
    console.log(`Example app listening on 127.0.0.1:3000`);
});