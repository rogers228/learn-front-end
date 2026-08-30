# 取得 path 驅動 ui

sveltekit 建議使用路由系統，將不需要自寫path解析

該路由的頁面。就是由自己的檔案開始


```html

<script>
  import { page } from '$app/state';

  // Svelte 5 直接使用 page.url.pathname（不需要加 $ 前綴）
  let isArticlePage = $derived(page.url.pathname.includes('/article/'));
</script>

{#if isArticlePage}
  <aside>文章頁面專用側邊欄</aside>
{/if;
```