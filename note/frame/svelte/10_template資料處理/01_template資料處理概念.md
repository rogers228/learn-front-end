# template資料處理概念
這跟win form設計有很大的差異

## 老是錯誤
在網路中一定會有讀取資料的狀態，
故在處理資料前，一定要先處理狀態，
根據狀態在萊處理資料，

例如
```svelte
<p>{data}</p>
```
乍看沒錯，但這一定噴error，因為資料總是會比畫面慢來，data不存在的狀態僅存在了0.幾秒，故噴錯。
故一定要先處理狀態，正確如下

```svelte
{#if loaded}
    <p>{data}</p>
{/if}
```

## 取得資料的同時建立狀態
所以，在sctipt中要資料時，就要根據資料是否取得，來建立狀態，最後
資料與狀態，一起給template使用，先判斷狀態再顯示資料。