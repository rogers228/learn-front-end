# 說明
- 建立簡單乾淨的svelte app
- svelte主要工作為最終編譯為js
- 無法獨立運作，需搭配html及dev server

## 資料夾與檔案說明
```
svelte_project  svelte專案資料夾
/src            源碼資料夾
----main.js     進入點
----app.svelte  app component
/static         編譯資料夾
rollup.config.mjs   編譯配置
.gitignore          git忽略配置
```
## 使用
1. 或使用github desktop 建立專案資料夾，將svelte_project內全選複製貼上至專案資料夾
3. npm init              初始化npm 這將建立 package.json
4. npm install svelte    安裝svelte套件  這將建立 package-lock.json 及 node_modules資料夾
5. npm install rollup-plugin-svelte @rollup/plugin-node-resolve @rollup/plugin-commonjs  --save-dev    安裝打包套件

# 編譯
將scr資料夾內所有的svelte編譯至static
npx rollup -c -w    使用 npx rollup 打包 -c使用rollup.config.mjs配置 -w監控打包
npx rollup -c       使用 npx rollup 打包 -c使用rollup.config.mjs配置