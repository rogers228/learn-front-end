# 建立 bulma scss 專案

它是一個純scss專案，用來產出css

## 資料夾架構
```
bulma_fs/
├── node_modules/         ← 套件安裝後產生的資料夾（自動產生）
├── package.json          ← 記錄相依套件與指令
├── package-lock.json     ← 鎖定相依套件版本（確保 build 一致性）
├── bulma.config.js        ← optional: 自訂載入模組
├── scss/                  ← 自己的 scss 非 bulma
│   ├── main.scss          ← 編譯入口
│   ├── _variables.scss    ← 覆寫 Bulma 的變數
│   ├── _custom.scss       ← 自訂擴充樣式
├── dist/
│   └── bulma-custom.css   ← 編譯後的 CSS 檔案
```

## 初始化專案並安裝 Bulma + Sass

建立專案資料夾 bulma_fs
cd /d C:\Users\user\Documents\Rogers\bulma_fs

npm init -y       變成一個Node.js 專案  -y 表示全部使用預設值 不用一個一個輸入，將產出 package.json

npm install bulma sass --save-dev  安裝 bulma 與 sass  --save-dev 代表開發環境用

完畢後會產生以下
bulma_fs/
├── node_modules/         ← 套件安裝後產生的資料夾（自動產生）
├── package.json          ← 記錄相依套件與指令
├── package-lock.json     ← 鎖定相依套件版本（確保 build 一致性）


## 在別台電腦重新clone
cd /d C:\Users\user\Documents\Rogers\bulma_fs
npm install   它會依據 package.json  來安裝相同的套件
