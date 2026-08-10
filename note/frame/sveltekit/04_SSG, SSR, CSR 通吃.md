# SSG, SSR, CSR 通吃

在 SvelteKit 中，要決定一個頁面要跑 SSG（預先編譯成 HTML） 還是 SSR（請求時動態渲染），只需要在 +page.server.js 或 +page.js 中加上開關即可：

sveltekit 預設採用 ssr，若須ssg可以設定。
也能關閉ssr與ssg採用傳csr渲染。
預設SSR 也就代表友善SEO。

# 1. 開啟預先 SSG (Prerender)

```js
// src/routes/products/[id]/+page.server.js

export const prerender = true; // 關鍵：告訴 SvelteKit 打包時直接產出靜態 HTML！

// 如果是動態路由 [id]，告訴建置器有哪些 ID 需要預先生成：
export async function entries() {
  return [
    { id: 'p1' },
    { id: 'p2' },
    { id: 'p3' }
  ];
}

export async function load({ params }) { ... }
```

2. 開啟純前端 SPA 模式（如果某些頁面完全不需要 SEO）

export const ssr = false; // 關閉 SSR/SSG，變成傳統純 Client 端 SPA 渲染