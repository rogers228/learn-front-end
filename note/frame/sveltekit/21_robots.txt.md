# robots.txt

robots.txt 如何建立

## 固定方式

直接建立在 static/robots.txt


## 動態生成

建立 api 路由

src/routes/robots.txt/+server.ts：

``` ts  src/routes/robots.txt/+server.ts
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ url }) => {
    const isProduction = url.hostname === 'ispc-core2.pages.dev';

    // 正式環境規則
    const productionRules = `
User-agent: *
Allow: /

Sitemap: ${url.origin}/sitemap.xml
`.trim();

    // 測試環境規則（全站封鎖）
    const stagingRules = `
User-agent: *
Disallow: /
`.trim();

    const body = isProduction ? productionRules : stagingRules;

    return new Response(body, {
        headers: {
            'Content-Type': 'text/plain',
            'Cache-Control': 'max-age=0, s-maxage=3600'
        }
    });
};
```