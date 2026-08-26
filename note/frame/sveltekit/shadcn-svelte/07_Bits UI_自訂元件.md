# 自訂元件

什麼時候你應該「直接使用」Bits UI？
shadcn-svelte 沒提供的元件：當你需要一個特定的無障礙互動（例如複雜的 Slider、Pin/OTP 驗證碼輸入框、ContextMenu 右鍵選單），而 shadcn 官方尚未收錄時。

要客製化高度特殊的 UI/UX：你不想被 shadcn 的 HTML 結構限制，想從零設計完全不同的 DOM 結構與過渡動畫，但又不想自己手寫繁重的 ARIA 鍵盤邏輯。

📋 總結
Bits UI = 無視覺、純邏輯、極致無障礙的 Svelte 互動組件庫。

shadcn-svelte = Bits UI + Tailwind CSS 的美麗成品。

## 若sveltekit專案，需要自寫元件，就使用 Bits UI ，加上 Tailwind，就是 shadcn-svelte的效果了。

```html
<script>
  import { Dialog as DialogPrimitive } from "bits-ui"; // 1. 匯入 Bits UI 的 Headless 元件
  import { cn } from "$lib/utils.js";                  // 2. 匯入 class 合併工具

  let { class: className, children, ...restProps } = $props();
</script>

<!-- 3. 把 Tailwind Class 套在 Bits UI 的元件上 -->
<DialogPrimitive.Content
  class={cn(
    "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 rounded-lg",
    className
  )}
  {...restProps}
>
  {@render children?.()}
</DialogPrimitive.Content>
```

這樣寫帶給你的 3 大好處：
品質齊平：鍵盤操作（Tab、Enter、Esc、方向鍵）與螢幕閱讀器（a11y）規範完全由 Bits UI 打底，品質直接達標。

無縫適應主題：因為使用了 bg-background、text-foreground、text-muted-foreground 等類別，這個新元件會自動支援你的亮暗模式與系統主題色！

維護權在你手中：程式碼完全屬於你，不用怕第三方元件庫未來停止維護或升級破壞性更新 (Breaking Changes)。


## 那麼  Bits UI 有哪些基礎元件?

https://www.bits-ui.com/
Bits UI 涵蓋了幾乎所有建構現代 Web 應用程式所需的 無障礙 Headless 元件。它的元件主要分為以下幾大類：