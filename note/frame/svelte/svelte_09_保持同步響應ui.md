# 保持同步響應
https://svelte.dev/tutorial/reactive-declarations
有時候不同的component需要保持連動, 同步。
既然svelte是讓你好做，那就來看他怎麼做

## $: 同步修飾詞
同步修飾詞 $: 是錢號($)及冒號(:)組成的修飾詞
他真的變態，一點都不直觀，反正他只是文字檔需要再編譯過，隨他怎麼取，只要不重複即可
他只是追求簡潔
你可以把她想為 同步變數

同步變數 a = b
只要等號右邊的值有異動，a就會改變，並且引用a的ui也會跟者連動，使其保持響應同步

```svelte
<script>
    let count = 0;
    $: doubled = count * 2; //同步修飾詞
    
    function handleClick() {
        count += 1;
    }

</script>

<button on:click={handleClick}>
    Clicked {count} {count === 1 ? 'time' : 'times'}
</button>
<p>{count} doubled is {doubled}</p>
```

