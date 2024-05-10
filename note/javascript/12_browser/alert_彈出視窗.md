
```js
alert("非建立者無法刪除!"); // ok
```

```js
function showConfirm() {
  const result = confirm("Do you want to continue?"); // yse or no
  if (result) {
    alert("You clicked Yes.");
  } else {
    alert("You clicked No.");
  }
}
```