如果你想在所有的 Request 進入頁面之前做處理（例如：檢查 Login Token、重寫 URL、注入全域狀態），SvelteKit 提供了一個叫 src/hooks.server.js 的檔案：

```js
// src/hooks.server.js
export async function handle({ event, resolve }) {
  // 1. 可以在這裡攔截 Request
  console.log("當前請求網址：", event.url.pathname);

  // 2. 繼續執行後續的 SvelteKit 渲染
  const response = await resolve(event);

  // 3. 可以在這裡修改 Header (例如設定 CORS 或 Cache-Control)
  response.headers.set('x-custom-header', 'sveltekit-edge');

  return response;
}
```

這就相當於你以前在 Cloudflare Worker 手寫的最外層 fetch() 事件 handler！