# loop_遍歷data
在svelte遍歷data

data的格式是 array裡面每個item是object
loop使用
{#each cats as cat}
{/each}

```svelte
<script>
    // data的格式是 array裡面每個item是object
    // 缺點是key重複
    let cats = [
        { id: 'J---aiyznGQ', name: 'Keyboard Cat' },
        { id: 'z_AbfPXTKms', name: 'Maru' },
        { id: 'OUtn3pvWmpg', name: 'Henri The Existential Cat' }
    ];
</script>

<h1>The Famous Cats of YouTube</h1>

<ul>

    {#each cats as cat}
    <!-- {#each cats as cat, i}  帶 item, index  -->
        <li><a target="_blank" href="https://www.youtube.com/watch?v={cat.id}" rel="noreferrer">
            {cat.name}
        </a></li>
    {/each}
</ul>
```

## 整理如下
```svelte
<!-- loop item -->
{#each cats as cat}

<!-- loop item, index -->
{#each cats as cat, i}

<!-- loop item 指定哪一個key異動時更新-->
{#each things as thing (thing.name) }

```
