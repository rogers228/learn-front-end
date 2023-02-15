# store_僅讀取
https://svelte.dev/tutorial/readable-stores
使用 readable 方法僅能使用set 不能使用updaate 方法

```js

import { readable } from 'svelte/store';

// readable 方法
// 第一個引數為預設值
// 第二個引數為 statr起始函數  或  啟動表達式  可以附加作用
// 以下範例 是將 time(store)的set方法當作引數 傳遞給 表達式使用
// return 是在最後添加一個作用將 interval 清除
// 將作用寫在return 是一種合法技巧，僅在強調最後，寫在return上方也是一樣

export const time = readable(new Date(), function start(set) {
    const interval = setInterval(() => {
        set(new Date());
    }, 1000);

    return function stop() {
        clearInterval(interval);
    };
});



```