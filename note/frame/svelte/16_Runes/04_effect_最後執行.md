# $effect 最後執行

當 store資料或狀態改變，
ui的變數 將被驅動被驅動，
而最後將執行...

原svelte4語法
```html
<script>
    $:{ // 不明所以，毫無語意

    }
</script>
```



```html
<script>
    $effect(() => { // 語意清楚

    });
</script>
```