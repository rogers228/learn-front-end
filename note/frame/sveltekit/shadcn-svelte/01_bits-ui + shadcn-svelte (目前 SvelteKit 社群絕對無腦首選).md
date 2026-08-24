# bits-ui + shadcn-svelte (🔥 目前 SvelteKit 社群絕對無腦首選)


bits-ui 是一個開源無樣式的ui庫，提供樣式的參數接口。
shadcn-svelte 是一個cli工具，主要生成svelte組件，引用bits-ui的組件。
之後可以自由修改svelte組件裡面的tailwind樣式，不破壞組件功能。


## 完全掌握
1. 底層是tailwind 非黑盒子css
2. 是svelte元件，代碼給你，完全開放自主權

## 專注業務邏輯 UI解脫
我正在頭大，學會了使用tailwind 要開始寫元件，不知道何時才能寫到業務邏輯，遇到 shadcn-svelte + bits-ui 真是解救了我


## Bits UI (底層引擎)
負責最硬核的 DOM 狀態 與 無障礙 (ARIA)，
完全沒有 (Unstyled)。渲染出來只有純粹的 HTML 結構與 ARIA 屬性。
標準的 npm 套件 (bits-ui)


## shadcn-svelte (頂層外觀與工具)
代碼生成器
程式碼生成工具與參數設計，負責 視覺呈現與代碼輸出，使用tailwind,
不是 npm 套件，是將 .svelte 原始碼直接下載複製到你專案 src/lib/components/ui 

## 範例

npx shadcn-svelte@latest add dialog

將下載生成
src/lib/components/ui/dialog/dialog-content.svelte
```html
<!-- 這是 shadcn-svelte 生成在你的專案資料夾裡的程式碼 -->
<script>
  import { Dialog as DialogPrimitive } from "bits-ui"; // 1. 引入 Bits UI 的無樣式邏輯底層
  import { cn } from "$lib/utils.js";                  // 2. 用於合併 Tailwind Class 的工具

  let { class: className, children, ...restProps } = $props();
</script>

<!-- 3. 用 Bits UI 處理所有硬核功能， shadcn-svelte 則套上 Tailwind Class 負責外觀 -->
<DialogPrimitive.Content
  {...restProps}
  class={cn(
    "fixed left-[50%] top-[50%] z-50 translate-x-[-50%] translate-y-[-50%]",
    "bg-background p-6 shadow-lg duration-200 rounded-lg border",
    "data-[state=open]:animate-in data-[state=closed]:animate-out", // 透過 Bits UI 提供狀態判斷 Class
    className
  )}
>
  {@render children?.()}
</DialogPrimitive.Content>
```


## 為何要這樣設計？（架構的偉大之處）
把 UI 庫拆成這兩層，解決了傳統前端開發極為痛苦的 「樣式與邏輯綁死（Tight Coupling）」 難題：


## 安裝 初始化 shadcn-svelte
底層已經預設依賴 bits-ui，你只需要初始化 shadcn-svelte，它就會自動幫你設定好一切，完全不需要手動去安裝或設定 bits-ui。

```
npx shadcn-svelte@next init     最新版 不穩定
npx shadcn-svelte@latest init   最後穩定版本
```
Which color would you like to use as base color? > 選擇底色 (建議 Slate 或 Zinc)
Where is your global CSS file? > 預設 src/routes/layout.css


## 使用cli建立元件

```
npx shadcn-svelte@latest add button
```

成功建立了src/lib/components/ui/button/button.svelte, index.ts

請說明 button.svelte, index.ts



## 資源
shadcn-svelte 官方網站： https://www.shadcn-svelte.com/

shadcn-svelte components：https://www.shadcn-svelte.com/docs/components/button#size