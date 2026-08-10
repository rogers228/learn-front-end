# 

cn() 是一個能「自動清理 Tailwind 樣式衝突」的防護函數。

它結合了 clsx（邏輯開關） 與 tailwind-merge（樣式覆蓋），讓你用 Svelte 狀態切換 Class 時，絕不發生樣式打架。

cn() 必需，因為tailwind 輸出不能保證 class 順序。



## 1.安裝
npm install tailwind-merge clsx


## 2. 建立 src/lib/utils.ts 工具檔

cn 就是 Class Names 的縮寫。

``` src/lib/utils.ts

import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```


## 3.範例

```
<script lang="ts">
  import { cn } from '$lib/utils';

  let isActive = $state(false);
  let { class: customClass } = $props(); // 外面傳進來的 class
</script>

<button 
  class={cn(
    "px-4 py-2 text-white bg-blue-600", // 1. 基礎樣式
    isActive && "bg-emerald-500",      // 2. 狀態開關 (true 時自動覆蓋為綠色)
    customClass                         // 3. 外部傳入 (優先度最高，可蓋掉前面所有樣式)
  )}
>
  按鈕
</button>
```

```html
<!-- ❌ 混用寫法：閱讀時眼花繚亂 -->
<button class={cn(
  "base-style",
  isSuccess ? "bg-emerald-500" : "bg-gray-200", // 三元
  isDisabled && "opacity-50",                   // && 開關
  className                                     // 外部
)}>

<!-- ⭕ 統一物件寫法：結構極度齊整，一目瞭然 -->
<button class={cn(
  "base-style",
  {
    "bg-emerald-500": isSuccess,
    "bg-gray-200": !isSuccess, // 二選一的另一面，簡潔寫成反向條件即可
    "opacity-50 cursor-not-allowed": isDisabled
  },
  className
)}>
```