# 插件 typography

@plugin '@tailwindcss/typography';


prose 類別（由官方插件 @tailwindcss/typography 提供）

幫未知的 HTML / Markdown 內容自動上好漂亮的排版樣式


## 工作方式
Tailwind CSS 的 Core 理念是「重置所有 HTML 標籤（Preflight）」，也就是 <h1>、<p>、<ul>、<a> 預設看起來都像沒有任何樣式的純文字。

Markdown文章內容是由 CMS（後台）傳進來的是純粹的 HTML 字串：
```
<h1>文章標題</h1>
<p>這是一段帶有 <a href="#">連結</a> 的內文...</p>
```
你無法直接給這些由 Markdown 轉譯出來的 HTML 標籤加上 Tailwind 類別。

prose 類別的作用，就是作為一個「樣式範圍容器（Style Scope Boundary）」。你只要在外層 wrapper 加上 class="prose"，它就會利用 CSS 的後代選擇器，自動為內部所有的 <h1>、<p>、<a>、<code>、<ul> 套用黃金比例的字級、行高、間距與色彩！


原理 1：當你在外層標籤加上 .prose 時，插件編譯出來的 CSS 結構大致如下（實際編譯出的 CSS 檔）：

```
/* 插件內部產生的 CSS 原理範例 */
@layer utilities {
  .prose {
    color: var(--tw-prose-body);
    max-width: 65ch; /* 最佳閱讀字數寬度 */
  }

  /* 針對 prose 內部的標籤進行樣式控制 */
  .prose h1 {
    font-size: 2.25em;
    margin-top: 0;
    margin-bottom: 0.888em;
    line-height: 1.111;
    font-weight: 800;
  }

  .prose p {
    margin-top: 1.25em;
    margin-bottom: 1.25em;
    line-height: 1.75;
  }

  .prose a {
    color: var(--tw-prose-links);
    text-decoration: underline;
    font-weight: 500;
  }
}
```


原理 2：基於 CSS 變數的主題與 Dark Mode
prose 內部高度依賴 CSS Variables 來控制主題色。這意味著你可以隨時透過 CSS 變數或修飾符翻轉顏色：

預設情況下，prose 會自動設定一套優雅的灰階與字體顏色。

當搭配 dark:prose-invert 時，插件會自動將內部所有變數（如 --tw-prose-body、--tw-prose-headings）覆蓋為適合深色背景的高對比度顏色。



## 使用方式

npm install -D @tailwindcss/typography

``` layout.css   app.css
@import "tailwindcss";

/* 引入 Typography 插件 */
@plugin "@tailwindcss/typography";

/* （可選）如果想在 @theme 中覆蓋或客製化預設樣式 */
@theme {
  /* 自訂全域色彩或字型，prose 也會跟著自動讀取 */
}
```


```
<main class="min-h-screen bg-slate-50 p-8 dark:bg-slate-950 transition-colors">
  <div class="mx-auto max-w-4xl rounded-2xl bg-white p-8 shadow-sm dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
    
    <!-- 🌟 核心重點：外層加上 prose 與 dark:prose-invert 🌟 -->
    <article class="prose dark:prose-invert max-w-none prose-a:text-sky-500 hover:prose-a:text-sky-600 prose-img:rounded-xl">
      {@html articleHtml}
    </article>

  </div>
</main>
```

# prose 的進階微調類別 (Utility Modifiers)
(1) 調整文章字級尺寸
prose-sm：適合側邊欄小註解或小卡片文章。
prose-baseprose-lg / prose-xl / prose-2xl


(2) 消除最大寬度限制

預設的 prose 帶有 max-width: 65ch（大約 65 個英文字元的最佳閱讀長度），如果你希望它填滿父容器的寬度，必須加上：
max-w-none（例如 class="prose max-w-none"）。

prose-a:text-sky-500 > 將文章內所有的 連結 <a> 設為藍色。
prose-img:rounded-2xl > 將文章內所有的 圖片 <img> 自動加上大圓角。
prose-headings:font-bold  將所有的 標題 (h1~h6) 設為粗體。
prose-code:before:content-none 移除預設加在內文 <code> 前後的反引號 (`)



## 所以
prose   啟用預設 Typography 樣式（以 16px / 1rem 為基準）
prose-sm    小號字體（適合側邊欄、小卡片、註解）
prose-base  標準字體（與 prose 預設尺寸相同）
prose-lg    大號字體（適合閱讀體驗為主的部落格）
prose-xl    特大號字體
prose-2xl   超大號字體
max-w-none  【必備組合】 移除預設的 max-width: 65ch（字數限制），讓文章填滿父容器


dark:prose-invert   【必備】深色模式反轉，將文字、連結、邊框自動轉為高對比亮色
prose-slate 套用 Slate 灰階色系 (偏冷藍灰)
prose-gray  套用 Gray 灰階色系 (標準中性灰)
prose-zinc  套用 Zinc 灰階色系 (金屬灰)
prose-neutral   套用 Neutral 灰階色系 (純粹中性灰)
prose-stone 套用 Stone 灰階色系 (偏暖大地色)


prose-headings: h1 ~ h6 所有標題    prose-headings:font-black prose-headings:tracking-tight
prose-h1:   <h1> 標題 prose-h1:text-sky-500
prose-h2:   <h2> 標題 prose-h2:border-b prose-h2:pb-2
prose-h3:   <h3> 標題 prose-h3:text-lg
prose-h4:   <h4> 標題 prose-h4:text-base
prose-p:    <p> 段落  prose-p:text-justify (文字對齊)
prose-a:    <a> 連結  prose-a:text-sky-500 hover:prose-a:underline
prose-strong:   <strong> 粗體 prose-strong:text-sky-600
prose-em:   <em> 斜體 prose-em:text-slate-400
prose-lead: .lead 引言大字  prose-lead:text-xl prose-lead:text-slate-600

prose-code: <code> (行內程式碼)
    prose-code:rounded prose-code:bg-slate-100 prose-code:px-1
prose-pre:  <pre> (多行程式碼區塊)
    prose-pre:bg-slate-900 prose-pre:shadow-lg

prose-blockquote:   <blockquote> 引言區塊
    prose-blockquote:border-l-sky-500 prose-blockquote:bg-sky-50/50
prose-hr:   <hr> 分隔線
    prose-hr:border-dashed prose-hr:border-slate-300


prose-ul:   <ul> 無序清單   prose-ul:list-disc
prose-ol:   <ol> 有序清單   prose-ol:list-decimal
prose-li:   <li> 清單項目   prose-li:marker:text-sky-500 (改清單小圓點顏色)


prose-img:          <img> 圖片    prose-img:rounded-2xl prose-img:shadow-md
prose-video:        <video> 影片  prose-video:rounded-xl
prose-figure:       <figure> 圖表容器   prose-figure:mx-auto
prose-figcaption:   <figcaption> 圖片說明   prose-figcaption:text-center prose-figcaption:text-xs

prose-table:    <table> 表格  prose-table:border-collapse
prose-thead:    <thead> 表頭區塊    prose-thead:bg-slate-100
prose-th:   <th> 標題儲存格  prose-th:text-left prose-th:font-bold
prose-td:   <td> 資料儲存格  prose-td:p-3

```html
<article class="
  prose prose-slate max-w-none dark:prose-invert
  
  /* 連結與標題微調 */
  prose-a:text-sky-500 hover:prose-a:text-sky-600 prose-a:no-underline hover:prose-a:underline
  prose-headings:scroll-mt-20
  
  /* 圖片與引用塊加圓角/邊框 */
  prose-img:rounded-2xl prose-img:shadow-md
  prose-blockquote:border-l-sky-500 prose-blockquote:bg-slate-50 dark:prose-blockquote:bg-slate-800/50
  
  /* 移除程式碼預設的反引號 */
  prose-code:before:content-none prose-code:after:content-none
  prose-code:rounded prose-code:bg-slate-100 prose-code:px-1.5 prose-code:py-0.5 dark:prose-code:bg-slate-800
">
  <!-- Markdown 或 CMS 渲染的內容 -->
</article>
```