# store 改寫為 load() _ $props()

## 資料獲取模式改變，load() and $props()
+page.server.ts 資料在server端拿到，使用 load() return obj
page.svelte 直接取用資料使用 let { data } = $props();
$props() 是一個魔法，他會讀取相同route的 +page.server.ts 的 loaad() 結果?

以上我的理解正確嗎?