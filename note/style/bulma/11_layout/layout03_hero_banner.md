# Hero

Hero 寬度滿版，做為整個視覺區塊的背景、外框 ，高度可設定
Hero 負責外觀與氛圍、Container 負責內容與閱讀性。
有視覺訴求用 .hero，單純分區內容用 .section。整體網站排版就是 Hero 與 Section 的堆疊。

## 用法
.hero 是用來「撐滿整個畫面寬度」的容器，而 .container 是用來「限制內容寬度」的排版工具。這兩者搭配使用，剛好可以實現一個既能「視覺滿版」又「內容集中」的設計。

## class語法
常見的「頁首橫幅區塊（Hero Banner）」用來在網頁中展示重要訊息或視覺主題。
.hero  主容器
    .hero-head   頂部區塊  可放 logo、導覽列
    .hero-body   內容區塊
    .hero-foot   底部區塊


## Hero 的特點
預設是全寬（佔據整個橫向視窗）
可以設定為 整頁高（is-fullheight）
可使用 Bulma 提供的背景顏色：如 .is-primary、.is-info

```html
    <section class="hero is-info is-medium">
      <div class="hero-body">
        <div class="container has-background-grey-light">
          <p class="title">Info hero</p>
          <p class="subtitle">Info subtitle2</p>
        </div>
      </div>
    </section>
```

## 高度設定

| 類別                           | 高度說明                |
| ---------------------------- | ------------------- |
| `.is-small`                  | 小高度                 |
| `.is-medium`                 | 中高度（預設值）            |
| `.is-large`                  | 大高度                 |
| `.is-fullheight`             | **填滿整個螢幕高度**（100vh） |
| `.is-fullheight-with-navbar` | 填滿扣掉 `.navbar` 高度   |
