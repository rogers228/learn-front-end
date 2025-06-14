# section與container

bulma 中，class container、section 似乎是基本本布局，請說明?

## section（區塊）
用來區隔不同區塊，提供適當的上、下間距。（如 Header、Main、Footer）

## container （容器）
container 主要用來限制內容的最大寬度，防止內容在大螢幕上變得太寬，影響閱讀體驗。

. 自動設定 最大寬度，確保內容不會過寬。
. 內容 預設置中，但不會影響子元素的對齊方式（要用 has-text-centered）。
. 適用於 頂層結構，如 section 或 nav 內部。

## 常見使用

```html
<section class="section">
    <div class="container">
        內容
    </div>
</section>
```