# debug 除錯

請說明完整的 sveltekit debug 機制，
之前我使用svelte 他是 clinet，使用vite 本地開發，使用瀏覽器chrome console debug 非常容易。
現在sveltekit 全端框架，有 +server.ts 運行在server，顯然不能用瀏覽器 debug，在本地開發sveltekit，請說明完整的debug機制?


## 「全端 SvelteKit」，最大的不同就是 程式碼分成了兩個執行環境：


1. Server 端（伺服器）：執行在你的 Terminal (Node.js 過程) 或 Cloudflare Miniflare 模擬器中（例如 +page.server.ts, +server.ts, hooks.server.ts）。

2. Client 端（瀏覽器）：執行在 Chrome 瀏覽器中（例如 +page.svelte 內部的 < script >）。

3. Isomorphic（兩者皆會執行）：例如未加 .server 的 +page.ts，它在 SSR 時會在 Server 執行一次，水合（Hydration）後在 Client 又執行一次。


## 一、 伺服器端 Debug（+server.ts / +page.server.ts）

伺服器端的程式碼 絕對不會 出現在 Chrome 的 F12 Console 裡，因為它在網頁傳給瀏覽器之前就已經執行完了。

1. Terminal 終端機日誌（最常用、最直接）
只要在 +page.server.ts 或 +server.ts 寫 console.log()，訊息就會印在你執行 npm run dev 的那個 Terminal（cmd / PowerShell / VS Code Terminal） 視窗裡：

```js
// src/routes/api/user/+server.ts
export const GET = async ({ url }) => {
  console.log('伺服器收到請求！Query:', url.searchParams.get('id'));
  // 👈 這行訊息會直接印在你的 Terminal 中！
  return new Response('OK');
};
```


## 二、 瀏覽器端 Debug（+page.svelte）
在 .svelte 檔案中的 < script > 或 HTML 模板，絕大部分可以在 Chrome 開發者工具（F12） 處理。

Svelte 5 的魔術 Debug 標籤：$inspect()

```html
<script>
  let count = $state(0);
  let user = $state({ name: 'Alex', age: 20 });

  // 🎯 每當 count 或 user 改變，Chrome Console 會立刻自動印出 Log！
  $inspect(count, user);

  // 甚至可以自訂響應時的動作：
  $inspect(user).with((type, val) => {
    if (type === 'update') {
      console.warn('User 資料被修改了！最新內容:', val);
    }
  });
</script>

<button onclick={() => count++}>Count: {count}</button>
<button onclick={() => user.age++}>Age +1</button>
```


## 三、 SvelteKit 全端特有：error() 錯誤監控與頁面
在 Server 端發生錯誤時（例如資料庫斷線、API 404/500），SvelteKit 提供了一套優雅的捕捉機制，不會讓伺服器直接 Crash。

###　1. 拋出語意化錯誤 error()
```js
// +page.server.ts
import { error } from '@sveltejs/sveltekit';

export const load = async ({ fetch }) => {
  const res = await fetch('/api/user');

  if (!res.ok) {
    // 拋出 SvelteKit 標準錯誤，這會自動被 SvelteKit 的 +error.svelte 捕捉
    error(404, { message: '找不到該使用者的資料' });
  }

  return { user: await res.json() };
};
```

### 2. 全域錯誤監控處置 handleError (src/hooks.server.ts)
如果你想攔截全站所有未捕捉的 Server 端 Error（例如系統 Crash、未知 Bug），可以在 hooks.server.ts 使用 handleError：

```js
// src/hooks.server.ts
import type { HandleServerError } from '@sveltejs/sveltekit';

export const handleError: HandleServerError = ({ error, event }) => {
  // 可以在這裡把全站未預期的伺服器錯誤收集並印出詳細的 Stack Trace
  console.error('🔥 全域伺服器崩潰攔截:', error);
  console.error('觸發的網址:', event.url.pathname);

  return {
    message: '伺服器發生內部錯誤，工程師處理中。'
  };
};
```
