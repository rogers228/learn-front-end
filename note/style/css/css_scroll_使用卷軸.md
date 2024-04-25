css_div_使用卷軸_scroll

https://www.w3schools.com/cssref/css3_pr_overflow-y.php

```css
div {
  position: absolute; // 通常會搭配 absolute
  overflow-y: scroll; // y垂直方向 若資料超過高度時  自動顯示 scroll
  height: 20px;       // 通常搭配高度屬性

}
```


```css
.scroll_hidden{
/*  隱藏 scroll*/
  overflow: hidden;

}
```

## width 是否包含卷軸控制卷軸

```css
.div{

  box-sizing: content-box; /*  預設值  寬度將不包含卷軸  */
  box-sizing: border-box;  /*  寬度將包含邊框 及 卷軸  */
}
```



```js
document.body.classList.add('scroll_hidden');    //對body添加 scroll_hidden
document.body.classList.remove('scroll_hidden'); //對body移除 scroll_hidden
```