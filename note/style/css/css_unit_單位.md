# 單位

## 絕對單位

px 像素

## 相對單位

em   相對於父元素的百分比
rem  相對於根(root)元素的百分比
100% 跟隨父元素  (不包含卷軸)

```css
H1 {font-size: 2.5em} 2.5倍
```
vw   相對於螢幕寬度的百分比   (包含卷軸)
vh   相對於螢幕高度的百分比   (包含卷軸)
vmin  看vw或wh 誰最小
vmax  看vw或wh 誰最大


## 手機
lvw, lvh：最大可視區(不含工具列)
svw, svh：最小可視區(含工具列)
dvw, dvh：動態判斷可視區，自動切換為lv* or sv*

https://blog.yuyansoftware.com.tw/2022/12/css-viewport-units-large-small-dynamic/


## js取得元素 或 目前元素
offsetWidth 取得元素的寬度（包含 padding 和 border）
offsetHeight 取得元素的高度（包含 padding 和 border）
clientWidth 取得元素的寬度（含padding 不含 border）較少用
clientHeight 取得元素的高度（含padding 不含 border）較少用
