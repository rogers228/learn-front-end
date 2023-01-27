# 引用其他component

可以將其他component(svelte檔)，匯入引用

```html
<script>
    // 匯入component 為大駝峰命名
    // 
    import Nested from './Nested.svelte';
</script>

<p>This is a paragraph.</p>

<!-- component使用html標籤 為大駝峰 封閉單一標籤 -->
<Nested/>
```