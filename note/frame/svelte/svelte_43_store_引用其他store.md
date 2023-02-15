# store_引用其他store
https://svelte.dev/tutorial/derived-stores
store 也可以引用其他store的variable
只要使用derived方法即可

第一個引數為預設值，即可帶入其他store
第二個引數為start function, 也可以直接使用表達式箭頭函數

```js
import { readable, derived } from 'svelte/store';

export const time = readable(new Date(), function start(set) {
    const interval = setInterval(() => {
        set(new Date());
    }, 1000);

    return function stop() {
        clearInterval(interval);
    };
});

const start = new Date();

export const elapsed = derived(
    time,
    t => Math.round((t - start) / 1000)


    // derived方法
    // 第一個引數為預設值，即可帶入其他store 此處帶入time
    // 第二個引數為start function, 也可以直接使用表達式箭頭函數
    // 此處使用單行箭頭函數  t是指名引數 代表 elapsed的value 也就是 time
    // 此處用了許多語法糖  是簡寫但 讀性差
);

```

