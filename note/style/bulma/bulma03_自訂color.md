# bulma 自訂 color

https://bulma.io/documentation/features/color-palettes/

## 主要顏色 primary

只需要設定一個品牌主要顏色，它就會衍生一整套相關顏色16種。
以及色調21種。

$primary: hsl(171, 100%, 41%);

hsl HSL 是由 色相 (Hue)、飽和度 (Saturation)、亮度 (Lightness)


## 基本

| --bulma-primary     |主要顏色，適用於按鈕、標題、重點元素 (is-primary)|
| --bulma-primary-base| 同上
| --bulma-primary-rgb | 用於 rgba(var(--bulma-primary-rgb), 0.5) 來製作透明度變化
| --bulma-primary-h   | 色相值 (hue)，可用於 HSL 顏色計算
| --bulma-primary-s   | 飽和度 (saturation)，用於動態調整顏色
| --bulma-primary-l   | 亮度 (lightness)，用於動態變亮/變暗


## 🌟 亮暗變化 (Light/Dark) 

| --bulma-primary-light           | 較淺版本，適合背景 (.box、.card)、邊框 (border-color)
| --bulma-primary-light-invert    | primary-light 的對比色，適合 text-color
| --bulma-primary-dark            | 較深版本，適合 hover 狀態 (.button:hover)、標題
| --bulma-primary-dark-invert     | primary-dark 的對比色，適合 text-color


## 🌙 適用於不同模式 (Soft/Bold)   
| --bulma-primary-soft        | 適用於深色模式的顏色，背景色 (body、.section)
| --bulma-primary-bold        | 適用於亮色模式的顏色，可用於重點按鈕
| --bulma-primary-soft-invert | soft 模式的對比色
| --bulma-primary-bold-invert | bold 模式的對比色


## 🎨 其他變數  
| --bulma-primary-invert      | 主要顏色的對比色，適用於按鈕文字 (color)
| --bulma-primary-on-scheme   | 適合應用於 scheme-main (頁面主要背景色)

## 以下css是自動產生的 不需要編寫

當你改變了主要顏色 primary ，其他顏色會依據主色來調整，非常聰明。

```css
.button {
  background-color: var(--bulma-primary); /* 主要顏色 */
  color: var(--bulma-primary-invert); /* 確保文字有對比度 */
}

.button:hover {
  background-color: var(--bulma-primary-dark); /* 深一點 */
}

.title {
  color: var(--bulma-primary-dark); /* 標題 會深一點 */
}

.box {
  background-color: var(--bulma-primary-light); /* 使用較淺色 */
  border: 1px solid var(--bulma-primary-dark);
  color: var(--bulma-primary-light-invert);
}

body.dark-mode {
  background-color: var(--bulma-primary-soft); /* 變體適應深色模式 */
  color: var(--bulma-primary-soft-invert);
}

```

# 21個的色調

生成 21種色調，它是同一個主要顏色  由深到淺，由濃到淡，主要是讓使者能夠輕易地，對整個網站調整主色的深淺濃淡

--bulma-primary-00
--bulma-primary-05
...
--bulma-primary-95
--bulma-primary-100

--bulma-primary-00-invert
--bulma-primary-05-invert


微小的色調差距 確實可以讓整體設計看起來更加和諧、專業，甚至能帶來 視覺層次感，讓網站的每個部分都顯得自然且不突兀。特別是 淺色的微調，如果不小心調得太大，會讓顏色看起來不協調，這也是為什麼有些網站看起來特別優雅的原因，往往是這些細微的變化。

Bulma 提供的這 21 種色調變化正是為了解決這個問題，讓你可以 輕鬆找到合適的色調，無需從零開始調色，並且能夠準確控制顏色的 明暗與飽和度，避免顏色看起來過於平淡或突兀。

這樣的顏色管理大大提升了設計的靈活性和視覺一致性，對開發者來說也更省心，可以專注於網站的功能和體驗。希望這個功能能幫助你在設計中達到更完美的效果！🎨✨