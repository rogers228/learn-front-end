# 在svelte使用sass

1. 在svelte使用sass，預設轉換為css，僅作用於自身component
2. 在svelte使用sass語法，將更方便開發。

## 安裝
npm install --save-dev svelte-preprocess
npm install --save-dev sass

## 查看
package.json
將多出
"sass": "^1.69.5",
"svelte-preprocess": "^5.0.4",

## 在svelte使用
<style lang="scss"></style>


## 使用vite做為開發服務器的設定
vite.config.js

```js
import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import sveltePreprocess from 'svelte-preprocess';

// https://vitejs.dev/config/
export default defineConfig({
  // plugins: [svelte()],
  plugins: [svelte({
    preprocess: sveltePreprocess(),
  })],
})

```
