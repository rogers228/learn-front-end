# 建立乾淨的svelte

1. 使用github desktop 建立專案資料夾，或自行建立
2. cd /d C:\Users\user\Documents\Rogers\MS_45_backstage  移動到專案資料夾
3. npm init              初始化npm 這將建立 package.json
4. npm install svelte    安裝svelte套件  這將建立 package-lock.json 及 node_modules資料夾

5. npm install rollup-plugin-svelte @rollup/plugin-node-resolve @rollup/plugin-commonjs  --save-dev
6. 建立 rollup.config.mjs 
7. 建立 src 資料夾 裡面建立main.js, app.svelte
8. 建立 static 資料夾

## 6.建立 rollup.config.mjs

```
import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
    input: 'src/main.js',                   // 輸入來源
    output: {
        sourcemap: true,                    // js原碼地圖
        name: 'home',                   // 名稱(依專案修改)
        file: 'public/build/bundle.js', // 編譯打包至何處(依專案修改)
        format: 'iife',
    },
    plugins: [
        svelte(),
        resolve(),
        commonjs(),
    ],
};

// cmd 編譯打包
// cd /d C:\Users\user\Documents\Rogers\MS_21_home
// npx rollup -c -w  持續監控打包
// npx rollup -c
```

## 編譯
將scr資料夾內所有的svelte編譯至static
npx rollup -c -w    使用 npx rollup 打包 -c使用rollup.config.mjs配置 -w監控打包 
npx rollup -c       使用 npx rollup 打包 -c使用rollup.config.mjs配置



