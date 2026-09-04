# Svelte 5 搭配 Tailwind TV 完成高效能動態變數傳遞

在現代內容驅動型網站（如 SDUI、島嶼架構或 Headless CMS）中，UI 不僅要有規範好的設計系統（Design System），還需要能彈性響應來自後台或 Runtime 的任意動態參數（如自訂主題色、動態寬度或比例）。本專題將探討如何優雅地處理這些動態需求。


## 1. 為何要傳遞動態變數？
傳統 Tailwind CSS 的工作原理是在編譯期（Build Time）掃描程式碼中的靜態 Class Name 並生成 CSS。但在以下情境中，靜態 Class 會遇到瓶頸：

無窮盡的動態數值：CMS 後台讓創作者自由選擇任意 Hex 色碼（如 #f43f5e），或是自訂邊距與寬度（如 342px）。

避免 Tailwind Class 膨脹與失效：若在前端使用字串拼接（如 class="bg-[${color}]"），Tailwind 的 Purge 引擎無法在編譯期預測這些字串，導致樣式遺失；或者產生過多一次性的 JIT 類名。

數據驅動 UI (Server-Driven UI)：前端 UI 架構必須作為「積木」，隨時接受伺服器傳來的 JSON 數據並即時轉化為正確的視覺樣式。

透過 CSS 原生變數 (Custom Properties)，我們可以完美銜接「靜態 Tailwind 結構」與「動態 Runtime 數據」。


## 2. 原理與高效能
這個架構的高效能建立在 Svelte 5 的 Signal 機制 與 原生 CSS 變數解析引擎 的結合：

```
[ Svelte 5 Props (Runes) ]
          │
          ▼ style:--bg-color={bgColor}
[ HTML DOM Node ] ──► (微視更新 setProperty)
          │
          ▼ 讀取 CSS 變數
[ Tailwind / TV Class ] ──► bg-[var(--bg-color)]
```

高效能的核心關鍵：
Svelte 5 的 DOM 級微視更新 (Fine-grained Reactivity)：
Svelte 5 使用 style:--var-name={value} 指令時，編譯器會利用 Signals 機制，在變數更新時僅精準觸發 el.style.setProperty('--var-name', value)。不會重新拼接整個 style 字串，也不會引發整個元件的 Re-render。

零 JS 運算負擔：
樣式計算完全交由瀏覽器的原生 CSS 引擎處理，不需要在 JavaScript 端計算 Style 物件或頻繁替換 Class 列表。


## 3. 使用預設值，讓 SSR 階段安全執行
在 SSR（伺服器端渲染）階段，最怕遇到數據未定義（undefined）導致畫面閃爍（FOUC）或樣式跑版。本架構採用了雙重防禦機制：

第一道防線：CSS 端的保底預設值 var(--var, fallback)
Tailwind 的 Arbitrary Values 語法支援原生 CSS 的預設值寫法：bg-[var(--bg-color,#ffffff)]。

SSR 階段：即使 HTML 渲染當下 style 尚未注入或變數為 undefined，瀏覽器在解析 CSS 時會自動套用 #ffffff 保底，確保首屏畫面絕對不會壞掉。

Svelte 自動清除：當 Svelte 的變數為 undefined 時，Svelte 會自動從 DOM 上移除該 CSS 屬性，此時 CSS 變數機制會瞬間切換回保底值。

第二道防線：Svelte 5 $props() 的 JS 預設值
在 Svelte 5 的 Runes 宣告中，直接設定預設 fallback，確保在 SSR 直出 HTML 字串時，就已經帶有合理的預設值。


## 4. 實際範例
結合 tailwind-variants (tv) 封裝視覺結構與 Variants，並透過 Svelte 5 的 style: 指令動態傳遞參數：

元件程式碼：IslandCard.svelte

```html
<script lang="ts">
  import { tv } from 'tailwind-variants';

  // 1. 使用 Tailwind Variants (tv) 封裝組件結構與 Slots
  const cardStyle = tv({
    slots: {
      base: 'rounded-xl p-6 shadow-md transition-all border border-slate-200 bg-[var(--bg-color,#ffffff)] text-[var(--text-color,#0f172a)]',
      title: 'text-xl font-bold tracking-tight text-[var(--title-color,inherit)]',
      body: 'mt-2 text-sm leading-relaxed opacity-90'
    },
    variants: {
      shadow: {
        sm: { base: 'shadow-sm' },
        md: { base: 'shadow-md' },
        lg: { base: 'shadow-lg' }
      }
    },
    defaultVariants: {
      shadow: 'md'
    }
  });

  // 2. Svelte 5 Runes 接收 Props（含預設值定義）
  let { 
    bgColor, 
    textColor,
    titleColor,
    shadow = 'md',
    children
  }: { 
    bgColor?: string; 
    textColor?: string; 
    titleColor?: string;
    shadow?: 'sm' | 'md' | 'lg';
    children?: import('svelte').Snippet;
  } = $props();

  // 解構 tv 的 slots
  const { base, title, body } = cardStyle({ shadow });
</script>

<!-- 3. Markup：tv 處理結構，style: 指令注入 Runtime CSS 變數 -->
<div 
  class={base()} 
  style:--bg-color={bgColor}
  style:--text-color={textColor}
>
  <h2 class={title()} style:--title-color={titleColor}>
    動態島嶼組件
  </h2>
  
  <div class={body()}>
    {#if children}
      {@render children()}
    {:else}
      <p>這是預設的內文區塊，完全響應動態 CSS 變數傳遞。</p>
    {/if}
  </div>
</div>
```

使用範例：+page.svelte

```html
<script lang="ts">
  import IslandCard from '$lib/components/IslandCard.svelte';
  
  // 模擬從 CMS 或 API 拿到的動態資料
  let cmsConfig = $state({
    primaryColor: '#0f172a',
    cardBg: '#f0f9ff',
    customTitleColor: '#0284c7'
  });
</script>

<!-- 情境 A：完全使用自訂 CMS 顏色 -->
<IslandCard 
  bgColor={cmsConfig.cardBg}
  textColor={cmsConfig.primaryColor}
  titleColor={cmsConfig.customTitleColor}
>
  <p>這張卡片的背景與文字顏色來自 CMS 後台設定！</p>
</IslandCard>

<!-- 情境 B：未傳入顏色時，自動安全降級為 CSS / JS 預設值 (SSR 安全) -->
<IslandCard shadow="lg">
  <p>未傳入任何動態顏色，完美套用預設的白色背景與預設字色。</p>
</IslandCard>
```

## sveltkit css變數命名 應統一由 layout.css 主導

`
1. sveltkit css變數命名 應統一由 layout.css 主導，不會分散各處。
2. svelte 僅處理注入變數值 style:--card-bg={bgColor}
3. tailwind 取用，及預設值 bg-[var(--card-bg, #ffffff)]

```css
/* layout.css */
:root {
  /* ==========================================
   * 1. 全域系統變數 (System Theme)
   * ========================================== */
  --sys-primary: #3b82f6;

  /* ==========================================
   * 2. 組件動態變數 (Component Dynamic Slots)
   * 統一提供給 Svelte 進行 style: 注入
   * ========================================== */
  /* Card Component */
  --card-bg: #ffffff;
  --card-title-color: #0f172a;

  /* Banner Component */
  --banner-height: 400px;
  --banner-overlay: rgba(0, 0, 0, 0.5);
}
```