# Web Push Notification（網頁推送通知）

Web Push Notification（網頁推送通知）是一種通過瀏覽器向用戶推送即時消息的技術。它可以讓網站向用戶發送通知，即使用戶沒有打開網站也能收到消息，從而提高用戶參與度和回訪率。

讓pwa更像原生app

以下是 Web Push Notification 的一些重要特點和工作原理：

1. 即時性： Web Push Notification 具有即時推送消息的特性，可以使您的網站能夠即時向用戶推送消息，無需等待用戶打開網站或應用程式。
2. 跨平台： Web Push Notification 可以在支持 Push API 的各種瀏覽器和設備上運行，包括桌面瀏覽器、手機瀏覽器和平板電腦。
3. 用戶許可： 為了保護用戶隱私和安全，網站必須獲得用戶的許可才能向其推送通知。一旦用戶同意接收通知，網站就可以向其推送消息。
4. Push Service： Web Push Notification 依賴於 Push Service（推送服務）來實現消息的推送。當網站需要向用戶推送消息時，它會將消息發送給 Push Service，然後 Push Service 會負責將消息推送到用戶的瀏覽器或設備上。
5. 訊息格式： Web Push Notification 可以包含各種類型的訊息，如文字、圖片、連結等。您可以根據自己的需求和喜好來設計和定制通知的內容和格式。

總的來說，Web Push Notification 是一種非常強大的工具，可以讓您的網站更具互動性和即時性，並且可以提高用戶參與度和回訪率。通過合理使用 Web Push Notification，您可以向用戶推送有價值的消息和通知，從而提升用戶體驗和網站價值。


## 工作原理
1. 角色 1.pwa網站 2.瀏覽器 3.Push Service
2. 使用者瀏覽器詢問是否接受通知
3. pwa網站透過 Push Service 推送通知，不需要開啟瀏覽器即可接收通知

## Push API
Push API 是W3C制定的標準
https://caniuse.com/push-api