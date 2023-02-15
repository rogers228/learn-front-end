# Stores概念
https://svelte.dev/tutorial/writable-stores
簡單來說就是引用其他js


stores字面為商店
stelte是使用component sft單一文檔為主，但component以外的狀態呢，它就稱為stores 暫定翻譯為店面.

store它是一個object
可以使用 subscribe(訂閱) 方法，只要store的值一改變它就能通知其他組件，類似原生javascript proxy.

## 建立store
直接建立一個.js
```js
import { writable } from 'svelte/store';
// stores.js
// 使用writable(可讀寫方法) 設定count為 可讀寫的store(店面) 並賦予預設值為0
// 這意味著應可有 讀取法法 及 寫入方法 
// 加上export 修飾詞及個讓其他人引用

export const count = writable(0); // 設定store
```


## 寫入更新方法 有2種
set, update
```php
    import { count } from './stores.js';

    function reset() {
        count.set(0);             //使用set方法 引數為值, 直接設定值
    }

    function increment() {
        count.update(n => n + 1); //使用update方法 引數為表達式,指定引數為value

        //此箭頭函數為單行箭頭函數 省略 引數括號,省略花括號, return
        // 以下為正常寫法
        // count.update((n) => {
        //     return n+1
        // });
    }
```

## 其他component訂閱 (引用)

```php
    import { count } from './stores.js';
    let countValue;

    count.subscribe((value)={      //使用subscribe訂閱方法，引數為表達式,指定引數為value
        countValue = value         //將訂閱的值指定給 variable
    });
```

## 總結
variable設定為writable store後，就可以使用set, update, subscribe 方法

