# 編譯css

## 添加編譯命令

```json  package.json
  "scripts": {
    "build": "sass --load-path=node_modules scss/main.scss dist/bulma-custom-full.css --no-source-map && python add_banner.py"
  },
```

## 執行
npm run build   將執行編譯命令

## 參數說明


--no-source-map  不產生 .css.map 檔案

--style=compressed   壓縮成最小化版本（所有空格、換行、省略）。
--style=expanded     具有良好縮排與可讀性（預設開發用）

--quiet-deps         關閉來自 node_modules/ 的警告訊息