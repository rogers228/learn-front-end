## Bulma Flexbox

Bulma 的 Flexbox 工具類別是建立在原生 CSS Flexbox 概念上，**讓你不必自己寫複雜的 CSS，就能用


## flex 父元素
.is-flex
<div class="is-flex">
  <!-- 這裡是 Flex 容器內的子元素 -->
</div>
等同css
display: flex;

## 主軸方向（Flex Direction) 父元素
.is-flex-direction-row          水平從左到右 預設方向：
.is-flex-direction-row-reverse  水平反向
.is-flex-direction-column       垂直從上到下
.is-flex-direction-column-reverse   垂直反向

## 對齊主軸（Justify Content） 父元素
.is-justify-content-flex-start   靠左對齊
.is-justify-content-center       水平置中
.is-justify-content-flex-end     靠右對齊
.is-justify-content-space-between   左右對齊中間平均分配
.is-justify-content-space-around    左右邊加一半間距平均分配
.is-justify-content-space-evenly    完全平均分配

## 對齊交叉軸(副軸)（Align Items）父元素
.is-align-items-flex-start  元素上對齊
.is-align-items-center      元素垂直置中
.is-align-items-flex-end    元素下對齊
.is-align-items-stretch     元素撐滿容器高度（預設）

## 換行與不換行  父元素
.is-flex-wrap-wrap  元素可換行
.is-flex-wrap-nowrap    不換行
.is-flex-wrap-wrap-reverse  反方向換行

## 彈性子元素（Grow / Shrink / Basis） 子元素
.is-flex-grow-0 不放大
.is-flex-grow-1 可以放大
.is-flex-shrink-0   不縮小
.is-flex-shrink-1   可以縮小

## 對齊單一子元素（Align Self） 子元素
.is-align-self-auto         預設
.is-align-self-flex-start   對齊上方
.is-align-self-center   垂直置中
.is-align-self-flex-end 對齊下方
.is-align-self-stretch  撐滿高度


# 響應式支援
所有的父層類別（例如 is-flex、is-justify-content-*）和子層類別（例如 is-align-self-*）都可以加上斷點：
<div class="is-flex-direction-column-mobile is-flex-direction-row-tablet">
    
mobile（手機）
tablet（平板）
touch（平板＋手機）
desktop (桌機)
widescreen (寬螢幕)
fullhd (全彩)
