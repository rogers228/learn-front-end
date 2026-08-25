# 頁面資料型別

將 +page.server.ts（後端）抓到的資料，加上型別，傳遞給 +page.svelte（前端組件） 來使用。


## 一、 核心概念：SvelteKit 的資料流 (Data Flow)

在 SvelteKit 中，頁面開發通常是前後端分離但高度整合的。你會看到兩個成對出現的檔案：

+page.server.ts（後端）：負責去資料庫撈資料、打 API、處理驗證。

+page.svelte（前端）：負責將撈到的資料渲染成 HTML UI。



## Step 1: 後端撈資料 (+page.server.ts)


在後端檔案中，你需要匯出一個名為 load 的非同步函式，並為它標註型別 PageServerLoad。

PageServerLoad：這是 SvelteKit 自動提供的型別，它告訴 TS：「這是一個 SvelteKit 後端 load 函式」，它會自動幫你補全 params（網址參數）、cookies、request 等物件的型別。


```ts
// src/routes/user/[id]/+page.server.ts
import type { PageServerLoad } from './$types';

// 定義一個內部使用的使用者型別（可選，但寫了更嚴謹）
interface UserProfile {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
  createdAt: string;
}

// 使用 PageServerLoad 標註 load 函式
export const load: PageServerLoad = async ({ params }) => {
  // 模擬從資料庫撈取資料
  const user: UserProfile = {
    id: params.id,
    name: 'Alex Chen',
    email: 'alex@example.com',
    role: 'admin',
    createdAt: '2026-01-15'
  };

  // 這裡回傳的物件會自動被 SvelteKit 推導型別
  return {
    user
  };
};

```

## Step 2: 前端接收並渲染 (+page.svelte)

在前端檔案中，SvelteKit 會把 load 函式回傳的物件，自動注入到名為 data 的 prop 中。我們使用 PageData 來標註它：

PageData：SvelteKit 會神奇地自動推導 +page.server.ts 裡 load 回傳的資料結構。

```ts
<!-- src/routes/user/[id]/+page.svelte -->
<script lang="ts">
  import type { PageData } from './$types';

  // 【Svelte 5 核心語法】
  // 1. 使用解構賦值取得 data
  // 2. 使用 { data: PageData } 進行 TypeScript 型別標註
  let { data }: { data: PageData } = $props();

  // 【Svelte 5 Rune 補充】
  // 如果你需要基於 data 建立衍生狀態（Derived State），可以使用 $derived
  let isAdmin = $derived(data.user.role === 'admin');
</script>

<main class="container">
  <h1>使用者詳細資料</h1>

  <div class="card">
    <h2>{data.user.name}</h2>
    <p><strong>Email:</strong> {data.user.email}</p>
    <p><strong>註冊日期:</strong> {data.user.createdAt}</p>
    
    <div class="status">
      <strong>權限：</strong>
      {#if isAdmin}
        <span class="badge admin">管理員</span>
      {:else}
        <span class="badge user">一般使用者</span>
      {/if}
    </div>
  </div>
</main>

````
