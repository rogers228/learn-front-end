localStorage.setItem(key, value)
localStorage.getItem(key)
localStorage.removeItem(key)

if (localStorage.getItem("infiniteScrollEnabled") === null) {
  //...
}


```js
function get_local(key, defaultValue = '') {
    // 讀取 localStorage
    const value = localStorage.getItem(key);
    return value !== null ? value : defaultValue;
}

function set_local(key, value = '') {
  localStorage.setItem(key, value)
}

```