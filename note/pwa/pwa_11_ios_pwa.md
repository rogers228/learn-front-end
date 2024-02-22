# ios pwa

ios使用pwa 條件

1. 使用 https
2. 具有 manifest.json
3. manifest.json 具有 name 或short_name 屬性
4. manifest.json 顯示屬性應設定為獨立、全螢幕和最小使用者介面 Display property should set to standalone, fullscreen and minimal-ui
5. 使用Service Worker 並註冊了 fetch 事件處理程序

6. 在html head設定相關

https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html#//apple_ref/doc/uid/TP40002051-CH3-SW3

```html
    <head>
        <meta charset='utf-8'>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'>
        <meta name="author" content="rogers Lu">
        <title>PNSS</title>

        <link rel="apple-touch-icon" href="static/png/fly.png"> <!--圖示 -->

        <link rel="apple-touch-icon" href="touch-icon-iphone.png"> <!--圖示設定 -->
        <link rel="apple-touch-icon" sizes="152x152" href="touch-icon-ipad.png">
        <link rel="apple-touch-icon" sizes="180x180" href="touch-icon-iphone-retina.png">
        <link rel="apple-touch-icon" sizes="167x167" href="touch-icon-ipad-retina.png">

        <link rel="apple-touch-startup-image" href="/static/png/fly.png">  <!--啟動圖片 -->

        <meta name="apple-mobile-web-app-title" content="YEOSHE PNSS">
        <meta name="apple-mobile-web-app-capable" content="yes"> <!--獨立模式 App -->
        <meta name="apple-mobile-web-app-status-bar-style" content="black"> <!-- translucent or black-->
    </head>
```
