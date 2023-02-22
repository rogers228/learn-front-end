# 建構svelte專案
https://svelte.dev/blog/svelte-for-new-developers


## 前提
1. 安裝node，請參閱node說明
2. 編輯器，這裡使用Sublime Text

## 建立專案資料夾
在此稱為 dir-project
為C:\Users\user\Documents\Rogers\test_svelte

## 移動到專案夾
```
cd /d C:\Users\user\Documents\Rogers\test_svelte
```

## 建立從template建立svelte
在此稱my-svelte-project
```
npx degit sveltejs/template 20230221_svelte

or

npm create vite@latest my-svelte-project -- --template svelte
```
上行命令會在dir-project中，建一個my-svelte-project資料夾

## 移動到my-svelte-project
```
cd my-svelte-project
或使用絕對路徑
cd /d C:\Users\user\Documents\Rogers\test_svelte\my-svelte-project
```

## 安裝該svelte專案的npm相關套件
```
npm install
```
這會建立一個node_modules資料夾

## 開啟dev server
```
cd /d C:\Users\user\Documents\Rogers\test_svelte\my-svelte-project
npm run dev
```
這可以使用瀏覽器在本地端開啟你的專案
有任何修改，它將自動更新

## 編譯你的專案
```
cd /d C:\Users\user\Documents\Rogers\test_svelte\my-svelte-project
npm run build
```
編譯前請先關閉dev 開發server
這會編譯你的專案，產生一個dist資料夾,裡面為靜態資料

## 部屬
將靜態文件部屬至server，這部分就不屬於前端的部分了
