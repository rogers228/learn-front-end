# proxy
代理

代理一個變數，並且可以定義該變數被如何處理對待時  可以加上自訂的邏輯
舉例 
```js
let a = 0 //設定變數並賦予初始值

a = 4 // a被  設定 set 為  4
b = a // a被  取得 get

```

也可以稱為變數的事件

## 標準語法

```js
const proxy = new Proxy({}, {
  get: (obj, prop) => { ... }, // 使用箭頭函數
  set: (obj, prop, value) => { ... },
  // more props here
});
```