var express = require('express'); //引用 express

app.get('/', function(req, res) { //建立app  request  response
    res.send('Hello World! 3'); // response
    // res.render('base', { title: 'My App' });
});

app.listen(3000, function () {
    console.log(`Example app listening on 127.0.0.1:3000`);
});