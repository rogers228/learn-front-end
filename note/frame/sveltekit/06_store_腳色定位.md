# sveltekit 的 stroe 定位


伺服器端（Server/Edge）： 依靠 load() 函數與 Context API 處理資料流，不使用自訂 Store。

## 前端（Client/Browser）： 

自由使用 Store（或 Svelte 5 的 $state Runes）來處理頁面的動態互動與全域 UI 狀態。

例如 購物車 深淺主題顏色
