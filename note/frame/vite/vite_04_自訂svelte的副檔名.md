# 自訂svelte的副檔名
https://github.com/sveltejs/vite-plugin-svelte/blob/main/docs/config.md#extensions
\*.svelte 相對比較長 有拚錯的疑慮  可以直接使用 \*.sv

以下是使用vite做為開發服務器的設定

```js
// svelte.config.js

import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
export default {
    // Consult https://svelte.dev/docs#compile-time-svelte-preprocess
    // for more information about preprocessors
    preprocess: vitePreprocess(),

    // 2023/11/10 副檔名 增加 sv
    extensions: ['.svelte', 'sv'],
}
```
