# 原理

1. transform: translate(-50%, -50%);
將定位中心點移動至本身元素的中心

2. 
position: fixed; 定位以螢幕為主
top: 50%; left: 50%; 將元素移動至畫面的中央，
預設的移動中心是元素的左上角，會導致偏一邊，故使用transform: translate(-50%, -50%);


```css
#expiration {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100vw;
    height: 40px;;
    background-color: #cccc00;
    z-index: 350;
}
```