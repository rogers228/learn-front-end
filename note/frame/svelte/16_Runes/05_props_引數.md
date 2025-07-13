# props 引數


## 無引數的component
```html
<script>

  let count = $state(1)

  function increment() {
    count++;
  }

</script>

<button class="button" on:click={increment}>{count}</button>
```

## 帶引數的component
```html
<script>
  const { initialCount, label = "counts:" } = $props(); // 設定此 component 的引數, 可設定預設值
  let count = $state(initialCount);

  function increment() {
    count++;
  }

</script>

<button class="button" on:click={increment}>{label}:{count}</button>
```
