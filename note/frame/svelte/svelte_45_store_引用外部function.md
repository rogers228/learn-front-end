# 引用外部function
使用es6寫法，將function指定名稱為匿名箭頭函數寫法即可


```js
import { writable } from 'svelte/store';

export const hashProp = writable(null);

// 以下為fucntion getHash()改為 指名匿名箭頭函數寫法，並冠上export，即可匯出。
export const getHash = () => {
    // 取得網址參數
    // #號後方為參數 
    // #page=model&stage=selecter
    // console.log(appstate);
    let obj = {};
    let urlString = window.location.href;
    if (urlString.indexOf('#') == -1){ // 網址不存在 # 符號
        // pass
    }
    else{
        let paramString = urlString.split('#')[1];
        let params_arr = paramString.split('&');
        for (let i = 0; i < params_arr.length; i++) {
           let pair = params_arr[i].split('=');
           obj[pair[0]] = pair[1];
        }
    }
    // console.log(obj);
    return obj;
};
```

```svelte
<script>
    import {hashProp, getHash} from './router.js'

    function handle_hashchange(){
        hashProp.set(getHash());
        console.log($hashProp);
    }

</script>

<svelte:window 
    on:hashchange={handle_hashchange}
    on:DOMContentLoaded={handle_hashchange}
/>
```