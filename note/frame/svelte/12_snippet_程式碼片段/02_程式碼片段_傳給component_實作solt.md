# 程式碼片段_插入component_實作solt

取代 slot

``` html  layout.svelte
<script>
    let { labels, bookmarks, footer } = $props()

</script>

<section>

    <div>
        <div>
            {#if labels} {@render labels()} {/if}
        <div>
    </div>

    <div>
        <div>
            {#if bookmarks} {@render bookmarks()} {/if}
        <div>
    </div>

</section>

```

```html app.svelte
<script>
    import Layout from './layout.svelte';
</script>


<Layout>
  {#snippet labels()}
    ...
  {/snippet}

  {#snippet bookmarks()}
    ...
  {/snippet}

</Layout>
```


## 判斷式渲染 語法糖
```html
{#if labels}
    {@render labels()}
{/if}

可用以下取代
{@render labels?.()}

```