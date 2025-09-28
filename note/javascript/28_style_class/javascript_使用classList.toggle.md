# 使用classList.toggle 取代 if_add_else_remove
避免冗長的 if else

```js
node.classList.toggle(className, is_shouldBeDisabled);
```

當 shouldBeDisabled 是 true 時： 相當於執行 node.classList.add(className);
當 shouldBeDisabled 是 false 時： 相當於執行 node.classList.remove(className);

等價於

```js
if (is_shouldBeDisabled) {
    node.classList.add(className);
} else {
    node.classList.remove(className);
}
```