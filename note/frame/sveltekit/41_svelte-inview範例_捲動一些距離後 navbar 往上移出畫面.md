# svelte-inview 

請給我一個sveltekit  svelte-inview範例 捲動一些距離後 navbar 往上移出畫面

# 範例 npm
npm install svelte-inview

## 範例
這個範例會示範如何使用 svelte-inview 搭配 CSS Transition 實作「頁面向下捲動一段距離後，Navbar 自動往上移出畫面；往回捲動時又優雅滑入」的常見效果。

我們在頁面頂端放一個幾乎無感（height: 1px）的偵測標記 DOM，當它離開視窗時，就知道使用者已經開始向下捲動了。


在 Svelte 5 中，事件屬性請使用 oninview_enter 與 oninview_leave

```html  +page.svelte

<script lang="ts">
  import { inview } from 'svelte-inview';

  // 控制 Navbar 是否隱藏的狀態
  let isNavHidden = $state(false);

  // svelte-inview 設定檔
  const inviewOptions = {
    // 當哨兵點離視窗頂端 80px 時觸發（代表向下滾動了 80px）
    rootMargin: '-80px 0px 0px 0px'
  };
</script>

<!-- 
  1. 偵測用的「頂端哨兵點 (Sentinel Element)」
  - 放置在頁面最上方，當它在視窗內，代表靠近頂端 (Nav 顯示)。
  - 當它被捲出視窗，代表向下捲動超過了 80px (Nav 隱藏)。
-->
<div
  use:inview={inviewOptions}
  oninview_enter={() => (isNavHidden = false)}
  oninview_leave={() => (isNavHidden = true)}
  class="absolute top-0 left-0 h-1 w-full pointer-events-none"
></div>

<!-- 
  2. 固定頂部的 Navbar
  - 使用 fixed top-0 固定
  - 動態套用 -translate-y-full Class 往上推出畫面
-->

<!--
absolute    position: absolute; 絕對定位，脫離一般 HTML 文檔流，不佔用任何頁面排版空間。
top-0   top: 0px;   緊貼父容器（或頁面）的最頂端。
left-0  left: 0px;  緊貼父容器（或頁面）的最左側。
h-1 height: 0.25rem; (4px)  設定極薄的高度（4px），作為一條極細的觸發感應線。
w-full  width: 100%;    寬度填滿整個螢幕（100%），確保不論從哪邊滾動都能精準感應。
pointer-events-none pointer-events: none;   滑鼠與觸控事件穿透！完全無視滑鼠點擊、懸停或觸控。
-->

<header
  class="fixed top-0 left-0 w-full h-16 bg-slate-900/90 text-white backdrop-blur-md z-50 transition-transform duration-300 ease-in-out flex items-center justify-between px-6 shadow-lg"
  class:-translate-y-full={isNavHidden}
>
  <div class="text-xl font-bold tracking-wide">BrandLogo</div>
  <nav class="flex gap-6">
    <a href="#features" class="hover:text-blue-400 transition-colors">特色介紹</a>
    <a href="#about" class="hover:text-blue-400 transition-colors">關於我們</a>
    <a href="#contact" class="hover:text-blue-400 transition-colors">聯絡我們</a>
  </nav>
</header>

<!-- 3. 長頁面內容測試區 -->
<main class="pt-24 px-6 max-w-4xl mx-auto min-h-[200vh] text-slate-800 space-y-12">
  <section class="p-8 bg-slate-100 rounded-xl shadow-sm">
    <h1 class="text-3xl font-bold mb-4">歡迎來到我們的網站</h1>
    <p class="text-lg text-slate-600">請嘗試向下捲動頁面，觀察頂部的 Navbar 如何優雅地向上隱藏。</p>
  </section>

  <div class="h-[600px] bg-slate-50 border-2 border-dashed border-slate-200 rounded-xl flex items-center justify-center text-slate-400">
    向下捲動展示區...
  </div>

  <section id="features" class="p-8 bg-blue-50 rounded-xl">
    <h2 class="text-2xl font-bold mb-2">流暢的用戶體驗</h2>
    <p>當使用者閱讀內容時隱藏選單，可以提供更大的閱讀空間！</p>
  </section>
</main>
```



這個設計的亮點在哪裡？
效能極佳：
我們完全沒有監聽任何 scroll 事件，也不需要動態獲取 window.scrollY 的數值，所有位移判斷都交由瀏覽器的原生 IntersectionObserver 底層處理。

動畫由 GPU 加速：
Navbar 的隱藏動作是利用 Tailwind 的 -translate-y-full (transform: translateY(-100%))，這是 GPU 合成圖層屬性，不會引發 Layout Reflow，滾動體驗 60fps 非常流暢。

可自由調控閾值：
只要修改 rootMargin: '-80px 0px 0px 0px' 裡面的數字（例如改為 -150px），就能輕鬆定義「使用者要捲動多深，Navbar 才開始隱藏」。




