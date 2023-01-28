# 數據即時響應ui
你只要在component中，幾乎不用做多餘的事，就能直接即時響應
其實他在編譯後會建立超多的js程式 這些事就交給框架了

使用者只要專心業務邏輯即可

```html
<script>
    let count = 0;

    function incrementCount() {
        count += 1;
    }
</script>

<button on:click={incrementCount}>
    Clicked {count} {count === 1 ? 'time' : 'times'}
</button>
```