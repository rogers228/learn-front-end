#將函數加入全局

```js
function myFunction() {
  console.log('This is a utility function.');
}

// 使其在全局範圍中可用
window.myFunction = myFunction;
```