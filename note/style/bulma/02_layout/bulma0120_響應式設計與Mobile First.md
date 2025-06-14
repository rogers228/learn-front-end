# 響應式設計與Mobile First

輕鬆地實踐響應式
先設計手機版，再逐步擴充到平板與桌機版本。
這種方式反映出現在手機用戶為主流的使用習慣。

```css
/* 預設樣式：手機優先 */
.card {
  width: 100%;
}

/* 平板以上：加強樣式 */
@media screen and (min-width: 768px) {
  .card {
    width: 50%;
  }
}

/* 桌機以上 */
@media screen and (min-width: 1024px) {
  .card {
    width: 33.33%;
  }
}

```

太簡單了
```css for bulma
<div class="column is-full-mobile is-half-tablet is-one-third-desktop">
```

# 📐 響應式斷點（Breakpoints）

| 裝置        | min-width | Bulma 名稱   |
|-------------|-----------|--------------|
| 手機        | 無        | `mobile`     |
| 平板        | 768px     | `tablet`     |
| 桌機        | 1024px    | `desktop`    |
| 寬桌機      | 1216px    | `widescreen` |
| 超寬桌機    | 1408px    | `fullhd`     |

| 類別                         | 效果（在對應裝置上）  |
| -------------------------- | ----------- |
| `is-full-mobile`           | 滿版寬度（手機）    |
| `is-half-tablet`           | 50%（平板）     |
| `is-one-third-desktop`     | 33.33%（桌機）  |
| `is-two-thirds-widescreen` | 66.66%（寬桌機） |
| `is-one-quarter`           | 25%（所有裝置）   |
| `is-three-quarters`        | 75%         |
| `is-narrow`                | 寬度自適應內容大小   |


讓最後一欄自動換行又置中（進階技巧）
<div class="columns is-multiline is-centered">
  <div class="column is-full-mobile is-half-tablet">A</div>
  <div class="column is-full-mobile is-half-tablet">B</div>
  <div class="column is-full-mobile is-half-tablet">C</div>
</div>


quarters 季度，通常一季是四分之一年
| is-full           | 1
| is-three-quarters | 3/4
| is-two-thirds     | 2/3 
| is-half           | 1/2
| is-one-third      | 1/3
| is-one-quarter    | 1/4
| is-one-fifth      | 1/5


# Offset 偏移
占了二分之一，向右偏移四分之一，等同置中
```
is-half is-offset-one-quarter
```

# is-narrow
自適寬度，依據內容，以最狹窄為主

| .is-narrow           |  自適寬度
| .is-narrow-mobile    | 在手機時自適寬度
| .is-narrow-tablet    | 在平板時自適寬度
| .is-narrow-touch     | 在手機及平板時自適寬度
| .is-narrow-desktop   | 在桌機時自適寬度
| .is-narrow-widescreen  | 在寬螢幕時自適寬度
| .is-narrow-fullhd      | 在fullhd時自適寬度
