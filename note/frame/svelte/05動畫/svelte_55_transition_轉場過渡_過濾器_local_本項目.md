# transition_轉場過渡_過濾器_local_本項目

針對特殊效果svelte有開發過濾器，能夠有額外效果

## local
local 過濾, 僅對本項目有效，非全部項目，
看起來動畫效果會有細微的差異

```svelte
{#if showItems}
    {#each items.slice(0, i) as item}
        <div transition:slide|local>
            {item}
        </div>
    {/each}
{/if}
```