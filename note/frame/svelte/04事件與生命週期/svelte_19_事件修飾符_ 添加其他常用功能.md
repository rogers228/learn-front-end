# 使用事件修式符，可添加其他常用功能

```svelte
<script>
    function handleClick() {
        alert('no more alerts')
    }
</script>

<button on:click|once={handleClick}>
    Click me
</button>
```


once             僅執行一次
preventDefault   抑制預設行為