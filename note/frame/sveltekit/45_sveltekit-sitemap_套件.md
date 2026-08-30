# sveltekit-sitemap 套件
參數式的設計

1. 預設ssr請求時產生, ssg預先編譯產生
2. 可一次性 fetch CMS API 取得最小單位列表資料(含slug)
3. 支援多語系，可產生多語系url
4. 支援動態路由
5. 隨 CI/CD 全自動 SSG 打包


## ssg
本地編譯也能先看結果  啟動後造訪 http://localhost:4173/sitemap.xml

```ts
// src/routes/sitemap.xml/+server.ts
import { response } from 'sveltekit-sitemap';
import type { RequestHandler } from './$types';

// 核心：告訴 SvelteKit 在 npm run build 時預渲染此檔案
export const prerender = true;

export const GET: RequestHandler = async () => {
  const productIds = ['101', '102', '205'];

  return await response({
    origin: 'https://your-domain.com',
    paramValues: {
      '/products/[id]': productIds.map((id) => [id])
    }
  });
};
```

## 多語系

```ts
// src/routes/sitemap.xml/+server.ts
import { response } from 'sveltekit-sitemap';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ fetch }) => {
  // 定義網站支援的語言清單
  const languages = ['zh', 'en', 'ja'];
  
  // (可選) 撈取動態文章，如 /zh/blog/post-1, /en/blog/post-1
  // const posts = await fetchPosts();

  return await response({
    origin: 'https://your-domain.com',

    // 1. 設定多語系 (i18n) 預設值與預設語言
    i18n: {
      defaultLanguage: 'zh', // 預設語言
      languages: languages    // 支援的語言清單
    },

    // 2. 透過 paramValues 將 [lang] 動態參數展開
    paramValues: {
      // 自動將 src/routes/[lang]/... 下的所有頁面，與支援的語言做組合
      '/[lang]': languages.map((lang) => [lang]),

      // 如果有包含動態文章 /src/routes/[lang]/blog/[slug]
      '/[lang]/blog/[slug]': [
        ['zh', 'sveltekit-seo-guide'],
        ['en', 'sveltekit-seo-guide'],
        ['ja', 'sveltekit-seo-guide']
      ]
    },

    // 3. 排除不需要索引的頁面
    excludeRoutePatterns: [
      '^/admin.*',
      '^/api.*'
    ]
  });
};
```

## 動態路由
```ts
// src/routes/sitemap.xml/+server.ts
import { response } from 'sveltekit-sitemap';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ fetch }) => {
  // 1. 從你的 API 或資料庫撈取有限的 ID 清單 (例如 ['101', '102', '205'])
  // const products = await db.product.findMany({ select: { id: true } });
  const productIds = ['101', '102', '205', '309'];

  return await response({
    origin: 'https://your-domain.com',

    // 2. 告訴套件：遇到 /[id] 時，用這組 ID 陣列展開
    paramValues: {
      // 鍵名對應你的資料夾路徑結構：src/routes/products/[id]/+page.svelte
      '/products/[id]': productIds.map((id) => [id]) 
      // 編譯後會自動展開成：
      // - /products/101
      // - /products/102
      // - /products/205 ...
    }
  });
};
```



