import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
    input: 'src/main.js',                   // 輸入來源
    output: {
        sourcemap: true,                    // js原碼地圖
        name: 'backstage',                  // 名稱(依專案修改)
        file: 'static/svlete_backstage.js', // 編譯打包至何處(依專案修改)
        format: 'iife',
    },
    plugins: [
        svelte(),
        resolve(),
        commonjs(),
    ]
};

// cmd 編譯打包
// cd /d C:\Users\user\Documents\Rogers\MS_45_backstage
// npx rollup -c