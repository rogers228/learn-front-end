# actions_元素做動_use_可帶參數及更新

actions方法是可以代參數的，將參數帶入執行
一但參數狀態改變了呢?
svelte 可以使用update()方法及指名引數，來更新參數


## 範例說明

以下為script方法及template引用

```php
export function longpress(node, duration) {
```

```html
<button use:longpress={duration}
```

以下為更新方法

```js
return {
    // 使用update方法
    // 其中第一個參數為為指名引數，代表新值
    // 也就是duration 的 new value
    update(newDuration) {
        duration = newDuration; //更新 duration
    },
    // ...
};
```
