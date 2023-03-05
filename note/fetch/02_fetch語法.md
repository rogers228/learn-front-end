# 語法
https://eyesofkids.gitbooks.io/javascript-start-from-es6/content/part4/ajax_fetch.html

## 基本語法
fetch().then().catch()

```js
fetch('http://abc.com/', {method: 'get'})
.then(function(response) {
    //處理 response
}).catch(function(err) {
    // Error :(
})
````
裡面為函數方法，若使用箭頭函數 省略function關鍵字


## 使用箭頭函數顯得更簡單
res與err為指名引數，res為response
```js
fetch(request).then((res)=>{

}).catch((err)=>{
    //
})
```

## 引數直接寫在裡面
```js
fetch('./sample.json', {
    method: 'GET',
    mode: 'cors',
    redirect: 'follow',
    headers: new Headers({
        'Content-Type': 'text/json'
    })
}).then(function(response) {
  //處理 response
})
// 引數直接寫在裡面 語法太大 不容易除錯
```

## 引數獨立讓語法更清晰
fetch(request)中的request獨立出來再引用，可以讓語法清晰
```js

const req = new Request(url, {prop})
// Request函數裡有2個引數
// 第一個為url
// 第二個為option  prop object 內部可容納更多引數獲選項
// 例如{method: 'GET', cache: 'reload'}

````
## 全部Request option
method: GET, POST, PUT, DELETE, HEAD。
url: 要求的網址。
headers: 與要求相關的Headers物件。
referrer - no-referrer, client或一個網址。預設為client。
mode - cors, no-cors, same-origin, navigate。預設為cors。Chrome(v47~)目前的預設值是same-origin。
credentials - omit, same-origin, include。預設為omit。Chrome(v47~)目前的預設值是include。
redirect - follow, error, manual。Chrome(v47~)目前的預設值是。manual。
integrity - Subresource Integrity(子資源完整性, SRI)的值
cache - default, no-store, reload, no-cache, 或 force-cache
body: 要加到要求中的內容。注意，method為GET或HEAD時不使用這個值。

## 使用headers範例
```js
const httpHeaders = { 'Content-Type' : 'image/jpeg', 'Accept-Charset' : 'utf-8', 'X-My-Custom-Header' : 'fetch are cool' }
const myHeaders = new Headers(httpHeaders)
const req = new Request(URL, {headers: myHeaders})
```


## response object
then方法裡面的第一個匿名引數為response
他是一個物件，內容如下

type: basic, cors
url: 回應網址
useFinalURL: 布林值，代表這個網址是否為最後的網址(也可能是重新導向的網址)
status: 狀態碼 (例如: 200, 404, 500...)
ok: 代表成功的狀態碼 (狀態碼介於200-299)
statusText: 狀態碼的文字 (例如: OK)
headers: 與回應相關的Headers物件

他有一些方法如下，最常用的是json()與text()
arrayBuffer()
blob()
formData()
json()
text()

```js
.then((res) => variable = res)
```