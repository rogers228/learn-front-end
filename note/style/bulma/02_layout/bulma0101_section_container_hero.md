# section與container

| 類別           | 功能說明         | 類似 HTML/CSS 功能             |
| ------------ | ------------ | -------------------------- |
| .section   | 區塊分段 + 上下間距    | `padding: 3rem 1.5rem`     |
| .container | 固定寬度並水平置中      | `max-width + margin:auto`  |
| .hero      | 全寬橫幅區塊（可加顏色） | `width: 100% + background` |
<!-- | .title     | 主標題樣式              | `font-size + font-weight`  |
| .subtitle  | 副標題樣式              | `font-size (較小)`           | -->

## section（區塊）
用來區隔不同區塊，提供適當的上、下間距。（如 Header、Main、Footer）

## container （容器）
container 主要用來限制內容的最大寬度，防止內容在大螢幕上變得太寬，影響閱讀體驗。

. 自動設定 最大寬度，確保內容不會過寬。
. 通常會放在 navbar, hero, section、footer 裡面
. 內容 預設置中，但不會影響子元素的對齊方式（要用 has-text-centered）。

### 控制 container 最大上限
預設情況下，.container 只會在 桌機斷點以上 才套用「最大寬度限制」，
也就是說在手機和平板寬度時，.container 會是 100% 寬（不限制）。
當螢幕寬度達到 widescreen 和 fullhd 斷點後，
.container 的最大寬度會依斷點階段逐漸放寬。
| Class 名稱                       | 最大寬度限制說明                     | 適用時機      |
| ------------------------------ | ---------------------------- | --------- |
| `.container`（預設）               | 最大寬度：`1152px`                | 一般使用      |
| `.container.is-widescreen`     | 最大寬度：`1344px`（適用於 1216px↑）   | 寬螢幕       |
| `.container.is-fullhd`         | 最大寬度：`1472px`（適用於 1408px↑）   | 4K 顯示器或投影 |
| `.container.is-max-desktop`    | 最大寬度：和桌機視口一樣（1024px）         | 限制不讓內容太寬  |
| `.container.is-max-widescreen` | 最大寬度：和 widescreen 一樣（1216px） | 中等限制      |



## hero — 全寬橫幅區塊（通常放在最上方）
## 常見使用

```html
<section class="section">
    <div class="container">
        內容
    </div>
</section>
```


```html
<section class="hero is-primary">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">主標題</h1>
      <h2 class="subtitle">副標題</h2>
    </div>
  </div>
</section>
```