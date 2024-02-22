# vite-plugin-watch

https://www.npmjs.com/package/vite-plugin-watch

## 安裝
```
npm i -D vite-plugin-watch 等同下方

npm install vite-plugin-watch --save-dev

--save-dev 代表僅安裝於開發環境  生產環境將不會安裝
```

## 查看
package.json
將多出
"vite-plugin-watch": "^0.2.0"

## 使用

```js
import { defineConfig } from "vite"
import { watch } from "vite-plugin-watch"

export default defineConfig({
  plugins: [ 
    watch({
      pattern: "app/{Data,Enums}/**/*.php",
      command: "php artisan typescript:transform",
    }),
  ],
})
```

## pattern語法
```
app/  特定資料夾
{Data,Enums} 多個特定資料夾
/**/ 任意資料夾
*.php 任意檔名，特定類型
```