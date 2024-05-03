# 以字串執行函數

```js
// 定義一個帶有參數的函數
function greet(name) {
  console.log('Hello, ' + name + '!');
}

// 函數名稱以字串形式存儲
let functionName = 'greet';

// 以字串形式呼叫函數，並傳遞引數
window[functionName]('Alice');

```


```js
// 定義一個函數，接受一個物件作為參數
function greet(person) {
  console.log('Hello, ' + person.name + '!');
}

// 函數名稱以字串形式存儲
let functionName = 'greet';

// 以字串形式呼叫函數，並傳遞一個物件作為引數
window[functionName]({ name: 'Bob' });

```