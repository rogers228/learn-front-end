# transition_轉場過渡_fade_淡入淡出
https://svelte.dev/tutorial/transition
svelte提供了更多的轉場過渡，只要在html標籤引入api 輕鬆就達成了。
簡單到不需要調整細節!!! 用就對了
transition:{mathod}
transition:{mathod}="{}"   大括號內部為表達式

```svelte
<script>
    import { fade } from 'svelte/transition';
    let visible = true;
</script>

<label>
    <input type="checkbox" bind:checked={visible}>
    visible
</label>

{#if visible}
    <p transition:fade>
        Fades in and out
    </p>
{/if}
```

## 全部的轉場過渡效果
fade 淡入淡出
blur 模糊
fly  移入移出
slide 內部滑出滑入
scale 縮放
draw 繪製
crossfade 交叉淡入淡出