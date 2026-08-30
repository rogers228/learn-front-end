# Data Fetching 資料抓取

SvelteKit 的設計哲學是 「把 Data Loader 的權責還給路由（Route-driven Data Flow）」:

路由發起: SvelteKit 中，「資料抓取（Data Fetching）與路由是高度綁定且自動生命週期管理的」


# Data Loader

+page.ts / +page.server.ts：這是專門發起資料抓取的地方。

SvelteKit 會在渲染頁面組件（+page.svelte）之前，優先執行同層級的資料載入檔（Data Loader）。

## 流程
1. 路由觸發 > 2. 執行 load 函數抓取資料 > 3. 資料準備完成 > 4. 將資料灌入 +page.svelte 進行渲染。


# SSR & CSR

SSR 優先與單頁應用（SPA）無縫銜接，SvelteKit 的 load 函數設計具備雙重執行環境的觀念：

首次進入網站 (Initial Load / SSR)：
load 函數會在伺服器端執行，直接抓取資料並將資料與 HTML 綁定在一起回傳給瀏覽器。這樣搜尋引擎（SEO）能抓到資料，使用者也能瞬間看到完整內容。

站內切換頁面 (Client-side Navigation)：
當使用者在網站內部點擊連結切換頁面時，load 函數會在瀏覽器端（或發起背景 API 請求）執行，實現無刷新流暢切換。

你寫一次 load 邏輯，SvelteKit 會自動幫你處理好 SSR 與前端切換的切換機制。

# 資料流

請參閱 03_資料流.md

loader: load() return 後即結束，無狀態，不需要使用store儲存
組件即可取用: let { data } = $props();

{Database/API}> {+page.server.ts}} > {+page.svelte}


# Server Loader (+page.server.ts) vs Universal Loader (+page.ts)

## A. +page.server.ts (Server Load) —— 90% 情況的首選

觀念：只在伺服器端執行，絕對不會洩漏程式碼到前端。
適用場景：
需要直接存取資料庫（Database）、Redis 或私有微服務。
需要使用敏感的金鑰（API Key、Secret Token）。
需要讀取 HTTP-only Cookies（例如驗證使用者 Session/JWT）。

## B. +page.ts (Universal Load)
觀念：在伺服器端與瀏覽器端都會執行。

適用場景：
呼叫公開的第三方 API（不需要隱藏 API Key）。
需要使用瀏覽器原生的 API（例如存取 window 或前端的內存快取）。
僅做純前端的資料轉換或動態 Import。

# 資料抓取可用範圍，同時加載

當頁面層級變深時（例如：根目錄 Layout > App Layout > Dashboard 頁面），
SvelteKit 提供了非常優秀的資料加載機制：Layout Data 繼承：上層 +layout.server.ts 抓取的資料（如使用者個人資料），下層所有頁面都可以直接存取，不需要重複抓取。

平行加載 (Parallel Loading)：若一個頁面同時有 +layout.server.ts 與 +page.server.ts，SvelteKit 會同時（平行）發起這兩個 Loader 的資料請求，而不是等上層抓完才抓下層，大大縮短載入時間。

# 智慧觸發

自動依賴追蹤：如果你的 load 函數使用了 fetch('/api/user') 或 URL 參數（如 params.id），
當 URL 參數改變時，SvelteKit 會自動重新觸發 load。

主動重刷 (Invalidation)：當使用者在頁面進行了新增/修改/刪除操作（Mutation）後，你可以告訴 SvelteKit：「請幫我重新執行這個頁面的 load 函數」，畫面就會自動更新為最新的資料，而不需要手動維護複雜的前端 Local State。