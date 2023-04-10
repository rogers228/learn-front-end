# solt插槽_子組件傳遞參數給父組件
https://svelte.dev/tutorial/slot-props

有時候必須由子組件傳遞狀態給父組件

子組件設定prop Hoverable
```svelte
<slot hovering={hovering}></slot>
```
以上第一個hovering為組件的引數名稱
第二個在大括號表達式裡面的為variable, 要傳遞的引數值，不需要相同名稱


```svelte

```

父層接收子組件參數，使用let: api 宣告變數
```svelte
<Hoverable let:hovering={active}>
    <div class:active>
        {#if active}
            <p>I am being hovered upon.</p>
        {:else}
            <p>Hover over me!</p>
        {/if}
    </div>
</Hoverable>
```
以上
let:hovering={active}
接收子組件參數hovering 指名為active
之後的都可以使用active