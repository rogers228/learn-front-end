# card_卡片

https://bulma.io/documentation/components/card/

靈活的將組件組合，使其看起來像一個整體卡片，豐富且專業

適合用在 商品資訊 使用者資訊 公告。

他已經具有良好的樣式，例如白底，陰影，圓角，
標準化的 header / content / footer 區域，
並且容易擴充，使其看起來像一個整體，豐富且專業


```html
<div class="card">
  <header class="card-header">
    <p class="card-header-title">
      卡片標題
    </p>
    <button class="card-header-icon" aria-label="more options">
      <span class="icon">
        <i class="fas fa-angle-down" aria-hidden="true"></i>
      </span>
    </button>
  </header>

  <div class="card-content">
    <div class="content">
      卡片主要內容
      <br>
      <time datetime="2025-06-21">2025/06/21</time>
    </div>
  </div>

  <footer class="card-footer">
    <a href="#" class="card-footer-item">查看</a>
    <a href="#" class="card-footer-item">分享</a>
  </footer>
</div>
```

card 主容器
    card-header
        card-header-title
        card-header-icon
    card-content
    card-footer
        a.card-footer-item