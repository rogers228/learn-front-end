# head主要的精神是由個別元件來控制head，以達到個別頁面的seo優化

```svelte
<script>
    const title = 'svelte good!';
</script>

<svelte:head>
    <title>{title}</title>
</svelte:head>
```