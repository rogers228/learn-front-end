# box-sizing

元素長度的計算方式


```css
.a{
    /*  預設值   僅以內容為主 */
    box-sizing: content-box;
}
```


```css
.a{
    /*  包含邊框  更加方便  */

    box-sizing: border-box;
    
    /* 包含 padding(內邊距) border(框線寬度) 我的寬度就是 200*/
    width : 200px;

    /* margin 外邊距離是不包含的*/

}
```