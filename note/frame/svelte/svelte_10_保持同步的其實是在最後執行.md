# 同步可執行表達式

```svelte
<script>
    let count = 0;

    function handleClick() {
        count += 1;
    }
    
    $: if (count >= 10) { // 同步修飾詞 表達式區塊
        alert('count is dangerously high!');
        count = 9;
    }
</script>

<button on:click={handleClick}>
    Clicked {count} {count === 1 ? 'time' : 'times'}
</button>
```

$: 同步修飾詞
保持同步的原理，其實是在最後, 執行表達式，並切更新html