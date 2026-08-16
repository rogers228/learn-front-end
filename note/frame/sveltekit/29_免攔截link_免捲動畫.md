# 免攔截link 自動錨點動畫

攔截的工作由sveltekit自動處理，平滑動畫由css處理

```html

<!-- +page.svelte -->
<header class="fixed top-0 left-0 w-full h-16 bg-slate-900 text-white z-50">
  <nav class="flex gap-4 p-4">
    <!-- 
      全部使用最標準的 HTML <a> 標籤！
      1. SvelteKit 會自動攔截，絕不刷新頁面 (SPA Navigation)。
      2. 遇到 #hash，會自動滑動跳轉到對應 ID 區塊。
      3. 跨頁面如 /about#team 也完全支援！
    -->
    <a href="#features">特色功能</a>
    <a href="#pricing">方案價格</a>
    <a href="/about#team">關於我們 (跨頁錨點)</a>
    <a href="https://google.com" target="_blank">外站連結 (自動放行)</a>
  </nav>
</header>

<main class="pt-20 px-6 space-y-32">
  <section id="features" class="scroll-mt-20">
    <h2>特色功能區塊</h2>
  </section>

  <section id="pricing" class="scroll-mt-20">
    <h2>方案價格區塊</h2>
  </section>
</main>


```


# SvelteKit 搭配 Tailwind CSS  自動捲動平滑動畫

在 SvelteKit 搭配 Tailwind CSS 的專案中，使用 scroll-behavior: smooth 與 scroll-margin-top 非常簡單，只需要 「1 個全域設定」 加上 「標準 HTML 標籤與 Tailwind Class」 即可。

開啟專案中的全域 CSS 檔案
（通常是 src/routes/layout.css 或 src/app.css），在 html 標籤上加入平滑滾動設定：


scroll-mt-20


```css
@import "tailwindcss";

/* 1. 全域開啟 HTML 平滑滾動 */
@layer base {
  html {
    @apply scroll-smooth;
  }
}
```



```html
<!-- src/routes/+page.svelte -->
<script lang="ts">
  // 完全不需要引入任何 JS 滾動套件或監聽事件！
</script>

<!-- 1. 固定頂部的 Navbar (高度為 64px / h-16) -->
<header class="fixed top-0 left-0 w-full h-16 bg-slate-900 text-white z-50 flex items-center px-6">
  <nav class="flex gap-6">
    <!-- 標準 <a> 標籤，SvelteKit 自動處理同源與 #hash -->
    <a href="#features" class="hover:text-blue-400 transition-colors">特色功能</a>
    <a href="#pricing" class="hover:text-blue-400 transition-colors">方案價格</a>
    <a href="#faq" class="hover:text-blue-400 transition-colors">常見問題</a>
  </nav>
</header>

<!-- 2. 主要內容區塊 -->
<main class="pt-20 px-6 max-w-4xl mx-auto space-y-32 pb-32">

  <!-- 
    重點：加上 scroll-mt-20 (等於 scroll-margin-top: 5rem / 80px)
    Navbar 高度是 64px (h-16)，設定 80px (scroll-mt-20) 
    可以確保滾動停止時，標題上方留有 16px 的舒適呼吸空間，絕對不被 Header 蓋住！
  -->
  <section id="features" class="scroll-mt-20 p-6 bg-slate-100 rounded-xl">
    <h2 class="text-2xl font-bold mb-4">特色功能</h2>
    <p class="text-slate-600">這裡是最強大的特色功能介紹內容...</p>
    <div class="h-64 mt-4 bg-slate-200 rounded"></div>
  </section>

  <section id="pricing" class="scroll-mt-20 p-6 bg-slate-100 rounded-xl">
    <h2 class="text-2xl font-bold mb-4">方案價格</h2>
    <p class="text-slate-600">選擇最適合您的訂閱方案...</p>
    <div class="h-64 mt-4 bg-slate-200 rounded"></div>
  </section>

  <section id="faq" class="scroll-mt-20 p-6 bg-slate-100 rounded-xl">
    <h2 class="text-2xl font-bold mb-4">常見問題</h2>
    <p class="text-slate-600">這裡解答您的所有疑問...</p>
    <div class="h-64 mt-4 bg-slate-200 rounded"></div>
  </section>

</main>
```