# store_建立自訂方法的集合
https://svelte.dev/tutorial/custom-stores

我們已經知道商店是一個外部js的variable, 它會有set, update, 也能夠讓人引用
我們還能這些方法集中起來，就像class裡有function, method, 寫在同一個js即可
它有固定的寫法，這應該僅框架看得懂


```js

import { writable } from 'svelte/store';

function createCount() { 
    // 建立一個函數  他會回傳所有方法

    // 以下是一個特殊寫法
    // 從結果來看，就是將一個匿名且帶有三種方法的object 設定為store
    const {subscribe, set, update} = writable(0);

    // 回傳一個object, 
    // 內容為很多項目
    // 項目為指名方法，key=名稱, value=方法表達式
    //  若kdy為 subscribe(訂閱) 則不需要方法
    return {
        subscribe,
        increment: () => update(n => n + 1),
        decrement: () => update(n => n - 1),
        reset: () => set(0)
    };

    // 宣告一個count 帶有 訂閱屬性(subscribe) 及三種指名方法(increment, decrement, reset)
    // 並且冠 export 修飾詞 可讓其他人訂閱引用
    export const count = createCount();
}

```