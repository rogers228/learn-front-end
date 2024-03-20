# 編譯選項

編譯build，將全部檔案打包編譯，用以後續部屬。
通常cmd命令是 npm run build，
它將執行 package.json 裡面的build 選項。

1. 直接修改 "build" 的值內容。 即可 
2. 使用命令亦可 npm run build --outDir dist

```package.json
{
  "name": "seagull",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
}
```

--outDir <dir>: 指定建置後的檔案輸出的目錄。
--base <path>: 指定建置時的基礎 URL 路徑。
--assetsDir <dir>: 指定靜態資源（如圖片、字型等）的目錄。
--assetsInlineLimit <limit>: 小於此大小的資源將被內嵌為 Data URI。
--cssCodeSplit: 啟用 CSS 代碼分割，將 CSS 提取到單獨的文件。
--minify: 啟用建置時的代碼壓縮。
--sourcemap: 生成 sourcemaps，方便在開發者工具中進行調試。
--ssr: 生成伺服器端渲染 (SSR) 所需的建置。
--clean: 在建置之前清除輸出目錄。