
請示範如何使用 svelte-inview 實作圖片「進入畫面才載入 (Lazy Load)」與流暢淡入動畫。

使用 svelte-inview 實作圖片懶載入（Lazy Loading）的核心概念是：預設不填入圖片的真實 src 網址（防止瀏覽器提早發送 HTTP 請求），直到元素捲入視窗後，才將網址指派給 <img>，並搭配 CSS 觸發淡入效果。

最推薦的做法是將這個邏輯封裝成一個可重複使用的 LazyImage.svelte 元件。

```html
<!-- src/lib/components/LazyImage.svelte -->
<script lang="ts">
  import { inview } from 'svelte-inview';

  // 使用 $props() 接收外部傳入的圖片資料與 Class
  let { src, alt = '', class: className = '' } = $props();

  // 1. 是否已進入視窗（控制是否開始發送請求下載圖片）
  let isInView = $state(false);
  
  // 2. 圖片檔案是否已完全下載完成（控制淡入動畫）
  let isLoaded = $state(false);

  const inviewOptions = {
    // 關鍵設定：進入視窗觸發一次後就自動銷毀 Observer，節省記憶體
    unobserveOnEnter: true,
    // 提早 100px 觸發：當使用者快要捲動到圖片時就開始預載，體驗更順暢
    rootMargin: '100px 0px'
  };
</script>

<div
  use:inview={inviewOptions}
  oninview_enter={() => (isInView = true)}
  class="relative overflow-hidden bg-slate-200 dark:bg-slate-800 rounded-xl {className}"
>
  <!-- 骨架屏 / Loading 占位符：圖片尚未載入完成時顯示 -->
  {#if !isLoaded}
    <div class="absolute inset-0 animate-pulse bg-slate-300 dark:bg-slate-700"></div>
  {/if}

  <!-- 
    只有當 isInView 為 true 時才將真實的 src 給予 img 標籤。
    onload 事件會在圖片網路請求完成並解碼後觸發 isLoaded = true
  -->
  {#if isInView}
    <img
      {src}
      {alt}
      onload={() => (isLoaded = true)}
      class={`
        w-full h-full object-cover transition-all duration-700 ease-out
        ${isLoaded ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-105 blur-sm'}
      `}
    />
  {/if}
</div>
```


```html

<!-- src/routes/+page.svelte -->
<script lang="ts">
  import LazyImage from '$lib/components/LazyImage.svelte';

  // 模擬一批高清圖片列表
  const images = [
    { id: 1, title: '壯麗雪山', url: 'https://picsum.photos/id/1018/800/600' },
    { id: 2, title: '森林小徑', url: 'https://picsum.photos/id/1015/800/600' },
    { id: 3, title: '寧靜湖泊', url: 'https://picsum.photos/id/1025/800/600' },
    { id: 4, title: '夕陽海岸', url: 'https://picsum.photos/id/1039/800/600' }
  ];
</script>

<main class="max-w-4xl mx-auto p-6 space-y-12">
  <h1 class="text-3xl font-bold mb-8">高清藝廊（圖片懶載入展示）</h1>

  <!-- 頂部防撞牆，提供足夠的滾動空間 -->
  <div class="p-8 bg-blue-50 rounded-xl text-slate-700">
    請向下捲動頁面。觀察當圖片靠近視窗時，如何先顯示骨架屏（Skeleton），下載完成後再平滑淡入與微微縮放。
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
    {#each images as img (img.id)}
      <div class="space-y-2">
        <!-- 直接呼叫 LazyImage 元件，給予固定高度避免 Layout Shift -->
        <LazyImage
          src={img.url}
          alt={img.title}
          class="w-full h-64 shadow-md hover:shadow-xl transition-shadow"
        />
        <p class="text-sm font-medium text-slate-600">{img.title}</p>
      </div>
    {/each}
  </div>
</main>
```