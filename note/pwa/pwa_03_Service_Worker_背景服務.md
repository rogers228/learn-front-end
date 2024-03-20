# Service Worker

1. 他是一個瀏覽器背景中運行的 JavaScript 腳本
2. 他是pwa的關鍵技術之一
3. 他可以攔截和處理網絡請求
4. 他可以預先載入 Preloadi
4. 他可以靜態文件暫存於本機，離線時優先讀取暫存檔

https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API
https://developer.mozilla.org/zh-CN/docs/Web/API/Service_Worker_API/Using_Service_Workers
https://medium.com/@b09112332/%E8%AA%8D%E8%AD%98service-worker-f2d2e74bd3c0

## 必須條件
1. 僅限使用https
2. 它是獨立於網站之外的另一線程
3. 沒有this 只有slef
4. 無法訪問DOM

## 事件
install  安裝 注册成功完成之后触发
activate 啟用
message  訊息



## Workbox 
Service Worker 強大但太過底層，可以使用google chrome 所提供的workbox 工具箱
來設定常用的 Service Worker，較為簡單

https://developer.chrome.com/docs/workbox/



