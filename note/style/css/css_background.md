# background 背景



## background color 顏色
```css
a.{
    /* 背景顏色 僅接收單一顏色*/
    background-color:#f9f9f9;  

    /* 背景顏色 漸層*/
    background: linear-gradient(to bottom, #f9f9f9 5%, #e9e9e9 100%);


}

```
linear-gradient()
第一個引數 方向
to top: 漸變從下到上。
to bottom: 漸變從上到下。
to left: 漸變從右到左。
to right: 漸變從左到右。
to top left: 漸變從右下角到左上角。
to top right: 漸變從左下角到右上角。
to bottom left: 漸變從右上角到左下角。
to bottom right: 漸變從左上角到右下角。
0deg: 從下到上（等同於 to top）。
90deg: 從左到右（等同於 to right）。
180deg: 從上到下（等同於 to bottom）。
270deg: 從右到左（等同於 to left）。

第二個之後引數 為 顏色及位置，可以二種顏色以上
顏色可以使用
#f9f9f9
rgb(249, 249, 249)
rgba(249, 249, 249, 1)
0 代表完全透明。
1 代表完全不透明。


