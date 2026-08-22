# 取得 path 驅動 ui


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