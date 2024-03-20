# manifest.json

1. PWA 漸進式 Web 應用程式 需要一個manifest.json(PWA應用程序資訊檔)
2. 通常存放與index.html同位置
3. PWA應用程序資訊檔 manifest.json 他是一個通用標準，用來定義PWA的資訊，可以在各大行動裝置瀏覽器適用，內容例如安裝圖示

https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json
https://developer.mozilla.org/zh-TW/docs/Web/Manifest

https://medium.com/front-end-augustus-study-notes/pwa-minifest-6943b5fc65a9

manifest.json
```json
{
  "name": "My Progressive Web App",
  "short_name": "MyPWA",
  "description": "This is a sample Progressive Web App.",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#007bff",
  "icons": [
      {
        "src": "icon/lowres.webp",
        "sizes": "48x48",
        "type": "image/webp",
      },
      {
        "src": "icon/lowres",
        "sizes": "48x48",
      },
      {
        "src": "icon/hd_hi.ico",
        "sizes": "72x72 96x96 128x128 256x256",
      },
      {
        "src": "icon/hd_hi.svg",
        "sizes": "72x72",
      }
  ]
}
```

## 部屬
在html head 添加 manifest 連結 即可
```html
<link rel="manifest" href="/manifest.json" />
```

## 檢查
使用chrome 開發者工具的選項中找到 Application tab，側邊第一個為 Manifest,
裡面包含很多資訊可以檢視