https://www.runoob.com/jsref/met-element-addeventlistener.html
https://www.runoob.com/jsref/dom-obj-event.html

為元素添加事件
document.getElementById("myBtn").addEventListener("click", myFunction);

function myFunction() {
    document.getElementById("demo").innerHTML = "Hello World";
}



傳送參數時，需使用匿名函式
document.getElementById("myBtn").addEventListener("click", function() {
    myFunction(p1, p2);
});



```html
<!DOCTYPE html>
<html lang="zh-Hant">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>簡單的 Web API</title>
</head>
<body>
    <h1>Fetch API 測試</h1>
    <button id="fetchButton">取得資料</button>
    <script>
        document.getElementById('fetchButton').addEventListener('click', () => {
            fetch('api.php?api_key=ghijk&pdid=ZFHxgESDRiG0&lang=tw')
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        });
    </script>
</body>
</html>
```