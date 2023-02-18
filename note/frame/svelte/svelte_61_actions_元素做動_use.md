# actions_元素做動_use
https://svelte.dev/tutorial/actions

他可以定義一個html element的動作
使用api為use:
使用方式為在element tag的屬性

```html
<div use:functionName on:outclick={() => (showModal = false)}></div>
```

他的工作原理是讀取元素時，執行這個方法，
function 通常由外部獨立js，固需引用
這樣一來就由外部js來做發揮了，有更多無限發揮的可能。

```svelte
<script>
import { functionName } from "./outside.js"
</script>
```

該function (其實僅是一個mathod) 的第一個匿名引數固定為Node，代表使用他的element,
```js
export function functionName(node) {
}
```

## 範例說明
https://svelte.dev/tutorial/actions
此範例是在讀取box element，時執行clickOutside方法，裡面做了3件事
1. 定義一個handle，固定第一個匿名引數為事件，如果事件來自node(box),就為box自訂一個事件名為outclick(執行showModal = false 寫在表達式)

2. 對最外層document 添加事件監聽 click事件發生時，執行handle
3. 最後設定destroy()銷毀時要一道銷毀 

他運用了use: api 搭配js技巧，達到了看似box的outside click效果
