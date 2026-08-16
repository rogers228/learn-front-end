# Paraglide JS 簡介與核心機制

**Paraglide JS** 是由 inlang 團隊開發的現代化國際化（i18n）庫，專為現代前端框架（特別是 SvelteKit、Next.js 等）設計。它摒棄了傳統 Runtime i18n 套件的繁重做法，採用**編譯型（Compile-Time）**架構，提供極致的效能與開發體驗。

---

## 🎯 它要解決的事情（Pain Points）

傳統 i18n 套件（如 i18next、svelte-i18n）在現代 Web 開發中經常面臨以下痛點：

1. **打包體積膨脹 (Bundle Size)**：傳統做法會在 Runtime 載入整包 JSON 字典檔，包含許多當前頁面根本沒用到的翻譯。
2. **缺乏型別安全 (Type-Safety)**：使用字串 key（如 `t('user.welcome_message')`），打錯字或少傳參數時，編輯器無法即時警告，容易導致線上 Bug。
3. **執行期效能損耗 (Runtime Overhead)**：在瀏覽器或 SSR 階段需要透過 JSON 解析器與正則表達式（Regex）動態匹配與替換字串，增加 CPU 負擔。
4. **邊緣運算（Edge/SSR）不友善**：在 Cloudflare Workers 等限制記憶體與啟動速度的環境下，傳統 i18n 套件載入過重、設定繁瑣。
5. **路由膠水程式碼過多**：為了讓網址支援語系前綴（如 `/zh-TW/about`），開發者常常需要手動改寫路由資料夾或在 Worker/Server 端寫笨重的字串拼裝邏輯。

---

## 🛠️ 它處理的範圍

Paraglide JS 是一個**全套包辦**的多語系解決方案，覆蓋了前端國際化的三大核心層面：

* **UI 介面與文字標籤 (UI Labels)**：按鈕、表單提示、靜態標題、帶動態變數的段落文字等。
* **SEO 語系路由 (Localization Routing)**：自動處理 URL 前綴（例如 `/zh-TW/...` 與 `/en/...` 的對應與重定向）。
* **DOM 與 SSR 標籤自動化**：自動注入 HTML `<html lang="...">` 屬性與 SEO 必要的 `<link rel="alternate" hreflang="...">` 標籤。

---

## ⚡ 它的工作原理（How it Works）

Paraglide JS 的核心理念與 **Svelte** 非常相似——**「將負擔移至編譯期（Build-time）」**。

### 1. 字典編譯化（Compiler-Based）
* 在開發或打包階段，Paraglide 會監聽專案中的翻譯字典檔（如 `messages/zh-TW.json`）。
* 它**不會**直接把 JSON 送給瀏覽器，而是把每一句翻譯**編譯成一個獨立的純 JavaScript/TypeScript 函式**。

> **範例**：
> JSON 字典：`{ "welcome": "Hello {name}!" }`  
> 編譯後產出的原生 JS：  
> `export const welcome = (p) => "Hello " + p.name + "!";`

### 2. 極致的 Tree-Shaking
* 由於每句翻譯都是獨立的 JS 函式，打包工具（如 Vite）能精準分析出哪些翻譯函式沒有被呼叫，並在打包時**直接刪除未使用的翻譯**，實現最小打包體積。

### 3. SvelteKit 零膠水路由整合（`reroute` Hook）
* 透過 SvelteKit 的 `reroute` 與 `handle` 鉤子，Paraglide 能在背景自動映射 `/zh-TW/about` 到 `about` 頁面，開發者不需要建立龐大的 `[lang]` 資料夾，也不需要寫手動解析網址的膠水程式碼。

---

## 💡 總結優勢

* 🚀 **極速效能**：零 Runtime 解析負擔，純字串拼接，對 Cloudflare Workers / Edge 部署極度友善。
* 🛡️ **100% 型別安全**：像呼叫 JS 函式一樣使用翻譯（`m.welcome({ name: 'Alex' })`），享用 VS Code 自動補全與型別檢查。
* 📦 **體積最小**：完美的 Tree-Shaking，只打包當前頁面用得到的文字。




# 安裝

npx sv add paraglide

安裝過程中，CLI 會問你幾個問題：
你想要支援哪些語言標籤？
例如輸入：zh-TW, en（用逗號隔開）。

預設語言（Default Language）是什麼？
例如輸入：zh-TW。

CLI 自動完成了什麼？

執行完畢後，它會自動：

安裝 @inlang/paraglide-sveltekit。
在專案根目錄建立 messages/zh-TW.json 與 messages/en.json。
在 src/hooks.js（或 .ts）中配置好 reroute 與 handle 鉤子。
設定好 vite.config.ts 外掛。

## 第二步：設定翻譯字典 (Messages)

打開自動產生的 messages/ 資料夾，編輯你的翻譯字串：
messages/zh-TW.json
messages/en.json


## 第三步：在 Svelte 5 (Runes) 元件中使用

你的專案目錄完全不需要建立 [lang] 資料夾，正常寫 .svelte 頁面即可！

```html  src/routes/+page.svelte
<script>
  // 1. 引入 Paraglide 編譯產生的 messages 模組
  import * as m from '$lib/paraglide/messages.js';
  // 2. 引入 i18n 工具（用來切換語系與轉向網址）
  import { i18n } from '$lib/i18n.js';
  import { page } from '$app/state';
</script>

<main class="p-8 space-y-4">
  <!-- 使用純文字標籤 -->
  <h1 class="text-2xl font-bold">{m.home_title()}</h1>

  <!-- 使用帶有動態變數的文字 -->
  <p>{m.welcome_user({ name: 'Alex' })}</p>

  <!-- 按鈕 -->
  <button class="px-4 py-2 bg-blue-600 text-white rounded">
    {m.submit_button()}
  </button>

  <hr class="my-6" />

  <!-- 切換語言按鈕 (自動跳轉至對應的 SEO 網址，如 /zh-TW/ 或 /en/) -->
  <div class="flex gap-4">
    <a 
      href={i18n.resolveRoute(page.url.pathname, 'zh-TW')} 
      class="underline"
    >
      繁體中文
    </a>
    <a 
      href={i18n.resolveRoute(page.url.pathname, 'en')} 
      class="underline"
    >
      English
    </a>
  </div>
</main>
```