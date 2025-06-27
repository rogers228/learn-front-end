#

## 查看bulma版本

package.json
```
{
  "name": "bulma_fs",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": "",
  "devDependencies": {
    "bulma": "^1.0.4",   <------- 目前專案 bulma 版本
    "sass": "^1.89.2"
  }
}

```


## 查詢最新版本

npm show bulma version


## 更新

若欲升級 bulma

npm update bulma   就能取得最新版（不會影響你自訂的 SCSS），然後重新執行 npm run build 產生新的 CSS。

升級 Bulma 時，你自己寫的 scss 不會被移除或修改。