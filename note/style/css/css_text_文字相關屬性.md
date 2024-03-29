# 文字 font 相關

## 文字
```css
.a{
    font-family: "Helvetica", "Arial","LiHei Pro","黑體-繁","微軟正黑體", sans-serif; /* 字型 */
    font-size: 24px; /* 字體大小 */
    color: pink;     /* 文字顏色*/
}

```

## 微調
```css
.a{
    letter-spacing: 0.1em;  /* 字距*/
    font-weight: 600 ;      /* 字寬 600為粗體*/
    line-height: 100px;     /* 行高 */
}
```

## 美化
```css
.a{
    text-rendering: optimizelegibility;
}
```

## 抗鋸齒
```css
.a{
    -webkit-font-smoothing: antialiased; /* Chrome 和 Safari 抗鋸齒*/
    -moz-osx-font-smoothing: grayscale; /* macOS 抗鋸齒*/
}
```

## 底線
```css
.a{
    text-decoration: underline; /* 有底線*/
    text-decoration: none;      /* 無底線*/
}
```

## 靠邊
```css
.a{
    text-align: left;
    text-align: right;
    text-align: center;
}
```

## 不可選取
```css
.a{
    /* 文字不可選取  不會改變滑鼠圖示 */
    /* 適合div作為按鈕時，不選取以免破壞樣式 */
    user-select: none;
}
```
