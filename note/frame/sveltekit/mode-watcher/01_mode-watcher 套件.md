# mode-watcher 套件


## 如何在 SvelteKit 中正確實作 Dark Mode？
SvelteKit 中最優雅且標準的做法是使用官方推薦的 mode-watcher 套件（由 shadcn-svelte 團隊開發，專門處理 Svelte 的深色模式管理與防止頁面閃爍 SSR Flash）。

防閃爍 (No Flash)：使用 mode-watcher 可以確保使用者在重新整理頁面時，不會出現「先白屏一下才變黑」的閃爍問題。


mode-watcher 這個套件的設計專一，它只認識 light 與 dark。
當你執行 setMode('dark') 時，套件內部只會幫你做這件事：<html class="dark">



## Step 1 安裝

npm install mode-watcher


## Step 2: 在全站根外框引入 <ModeWatcher/>

```html
<!-- src/routes/+layout.svelte -->
<script>
  import { ModeWatcher } from "mode-watcher";
  import "../app.css"; // 確保你的 CSS 樣式有引入

  let { children } = $props();
</script>

<!-- 放置 ModeWatcher，它會在瀏覽器端自動監聽並切換 <html class="dark"> -->
<ModeWatcher />

<main>
  {@render children()}
</main>
```

## Step 3: 製作深色模式切換按鈕 (Toggle Button)

``` html
<!-- src/lib/components/ThemeToggle.svelte -->
<script>
  import { toggleMode, mode } from "mode-watcher";
  import { Button } from "$lib/components/ui/button";
  import { Sun, Moon } from "lucide-svelte"; // 假設有使用 lucide 圖示
</script>

<Button onclick={toggleMode} variant="outline" size="icon">
  {#if $mode === 'dark'}
    <Sun class="h-5 w-5" />
  {:else}
    <Moon class="h-5 w-5" />
  {/if}
  <span class="sr-only">切換主題</span>
</Button>
```



## 做法A 直接使用語意顏色

優先使用語意化 Color：盡量使用 bg-background、bg-card、text-popover-foreground 等類別，這樣頁面顏色會非常統一，且具備頂級 UI 的調和感。

不需要特別寫 dark:

```css 定義基礎 語意顏色
@layer base {
  :root {
    --background: 0 0% 100%;    /* 預設亮色 背景 */
    --foreground: 222.2 84% 4.9%;
  }

  .dark {
    --background: 222.2 84% 4.9%; /* 暗色模式下的 背景 */
    --foreground: 210 40% 98%;
  }
}
```


```html
<!-- 自動支援亮/暗色，無需寫 dark: -->
<div class="bg-background text-foreground border-border border p-4 rounded-lg">
  <h3 class="text-lg font-bold">自動適應主題的標題</h3>
  <p class="text-muted-foreground">這段次要文字在亮色與暗色下都會呈現完美的對比度。</p>
</div>
```


## 做法 B：使用原生 Tailwind dark: 前綴（適合特殊客製化）

如果你有某個元件在暗色模式下想要完全不同的顏色設計，仍然可以自由疊加 Tailwind 原生的 dark: 前綴：

```html
<div class="bg-white text-gray-900 dark:bg-slate-900 dark:text-slate-100 p-4">
  特殊客製化區塊
</div>

```