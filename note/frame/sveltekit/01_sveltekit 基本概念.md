# sveltekit 基本概念

讓你專心寫前端

部屬，與 後端


SvelteKit 已經不是傳統意義上的「純前端框架」，而是一個 「全棧元框架（Full-Stack Meta-Framework）」。

Svelte（純前端 UI 庫）：

負責處理 瀏覽器裡的 DOM 渲染、組件狀態、動畫、Event 處理。相當於 React 或 Vue 的角色。

SvelteKit（全棧應用框架）：

包在 Svelte 外層，負責 路由判斷、Server-side 抓資料、SSR 頁面渲染、API 端點 (BFF)、打包發布到 Cloudflare Workers。相當於 Next.js (對應 React) 或 Nuxt (對應 Vue)。

## 資料夾

static 專門放靜態資源
例如 robots.txt, sitemap.xml, manifest.json


## 檔案

.svelte-kit  是 sveltekit 的本地暫存資料，不可以進版控，若刪除他也會自動產生
.wrangler    是 Cloudflare的本地暫存資料，不可以進版控，若刪除他也會自動產生


Prettier 是一個程式碼美化編排工具 本身是一個獨立的 Node.js，不是編輯器的外掛，他能獨立使用。
.prettierignore  是設定那些  Prettier 忽略  不套用自動排版美化

.npmrc 是一個 npm設定檔，用來控制 npm install 等指令的運作方式與下載來源。




worker-configuration.d.ts  是由 Wrangler 自動生成 的 TypeScript 型別宣告檔。

npx wrangler types 命令會產生 worker-configuration.d.ts 
若修改了 wrangler.jsonc 就應該從新執行
