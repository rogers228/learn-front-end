# tick_自動等待_不要更新過頭
https://svelte.dev/tutorial/tick


有時候執行程序的時機，很明確的要在dom更新之後，就使用tick，
等待聲明式語法更新之後執行，
等待dom更新後執行，



```js
    // 響應式語法
    // 當store改變後執行
    $: {
        do_something();
    }
```


```js
<script>
    // tick 方法
    // 會在 store改變後，等待 dom 渲染後執行，會在 store改變後
    import { onMount, tick } from 'svelte';
    async function updateCount(){
        await tick() // 確保畫面更新完畢
        // do_something...
    }
    
</script>
```