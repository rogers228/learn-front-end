# Responsive 響應式設計


# 核心規則：
未加前綴代表手機端，
加上前綴代表「螢幕寬度大於等於該尺寸時生效。


# 斷點前綴

md:w-1/2

sm 640px (40rem) @media (min-width: 640px) { ... } 大螢幕手機 (橫持)、小平板
md 768px (48rem)@media (min-width: 768px)  { ... } 標準平板 (iPad)
lg 1024px (64rem)@media (min-width: 1024px) { ... }筆記型電腦 (Laptop)
xl 1280px (80rem)@media (min-width: 1280px) { ... }桌上型顯示器 (Desktop)
2xl 1536px (96rem)@media (min-width: 1536px) { ... }大型或 4K 顯示器

❌ 常見錯誤思考（Desktop-First）

```html
<!-- 錯誤：試圖先寫大螢幕，再用 sm 指定小螢幕 -->
<div class="w-1/2 sm:w-full"></div>
```

⭕ 正確思考（Mobile-First）

```html
<!-- 正確：預設全寬 (手機)，768px (md) 以上變半寬，1024px (lg) 以上變 1/3 寬 -->
<div class="w-full md:w-1/2 lg:w-1/3"></div>
```


## 顯示隱藏

預設顯示，設定隱藏條件: max-md:hidden

```html
<!-- 僅在螢幕小於 768px (md) 時隱藏，768px 以上顯示 -->
<!-- 從0到最大 768px (md)    時隱藏，反之顯示 -->

<div class="max-md:hidden">
  手機版導覽選單
</div>
```


## 預設顯示 768以下隱藏
max-md:hidden

## 預設隱藏 768以上顯示

hidden md:block   
hidden md:flex


### 記憶小撇步（白話翻譯）

從 md (768px) 開始隱藏
最多到 md (768px) 以前都要隱藏。


## 自訂斷點尺寸
使用中括號

```html
<div class="min-[450px]:flex">...</div>
```


## 新增 或 修改 斷點變數

```css
/* src/app.css */
@import "tailwindcss";

@theme {
  /* 1. 擴充全新斷點 (會自動生成 3xl: 前綴) */
  --breakpoint-3xl: 120rem; /* 1920px */

  /* 2. 覆蓋現有斷點數值 */
  --breakpoint-sm: 30rem;   /* 將 sm 從 640px 改為 480px */
}
```


## 由小到大寫響應式

p-4 md:p-6 lg:p-10