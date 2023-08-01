# 建立乾淨的svelte

1. 使用github desktop 建立專案資料夾
2. cd /d C:\Users\user\Documents\Rogers\MS_45_backstage  移動到專案資料夾
3. npm init              初始化npm 這將建立 package.json
4. npm install svelte    安裝svelte套件  這將建立 package-lock.json 及 node_modules資料夾

5. npm install rollup-plugin-svelte @rollup/plugin-node-resolve @rollup/plugin-commonjs  --save-dev
6. 建立 rollup.config.mjs 
7. 建立 src 資料夾 裡面建立main.js, app.svelte
8. 建立 static 資料夾



# 編譯
將scr資料夾內所有的svelte編譯至static
npx rollup -c -w    使用 npx rollup 打包 -c使用rollup.config.mjs配置 -w監控打包
npx rollup -c       使用 npx rollup 打包 -c使用rollup.config.mjs配置

