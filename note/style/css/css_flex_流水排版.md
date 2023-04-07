# flex 流水排版
是目前最熱門的排版方式，熟練後能夠更容易排出您要的版型

## 連結
卡斯伯的 Blog教學 https://www.casper.tw/css/2017/07/21/css-flex/
https://medium.com/%E7%8B%97%E5%A5%B4%E5%B7%A5%E7%A8%8B%E5%B8%AB/css-flexbox-%E4%BC%B8%E7%B8%AE%E8%87%AA%E5%A6%82%E7%9A%84%E6%8E%92%E7%89%88-%E5%9F%BA%E7%A4%8E%E8%A7%80%E5%BF%B5-85ffe3ae44b3
青蛙遊戲練習 https://flexboxfroggy.com/

## 分為外容器與內元件，就是具有父子關係
container 外容器
items      內元件

## container 外容器

## display 布局 (container 外容器)
display: flex  流水排版

## flex-direction 主軸 (container 外容器)
flex-direction: row水平 | row-reverse水平反向 | column垂直 | column-reverse垂直反向; 
主軸方向(相對90度就是次軸)





## flex-wrap 是否換行
flex-wrap: nowrap | wrap | wrap-reverse; 換行模式  不換行 換行  換行時反轉

## flex-flow 同時設定 以上2個
flex-flow: <'flex-direction'> || <'flex-wrap'>  為以上兩個的縮寫  可同時設定兩個屬性

## justify-content 沿主軸排列方式
justify-content:
    flex-start |start |left    靠起始  左
    flex-end   |end   |right   靠末端  右
    center 置中| 
    space-between 靠兩側(兩側無間隙)| 
    space-around  分散(兩側有一點間隙約內部間隙的一半)
    space-evenly  分散平均間隙(兩側間隙與內部間隙相同)


## align-items 沿次軸排列方式
align-items:
    flex-start |start |self-start 靠起始|
    flex-end   |end   |self-end   靠末端|
    center     置中|
    baseline   基線對齊   |    
    first baseline
    last baseline
    stretch;  拉伸跟隨以最大的item


## align-content 換行後的項目 沿次軸排列方式
換行後沿次軸有2個以上的項目，才看得出效果
選項同justify-content
align-content: flex-start | flex-end | center | space-between | space-around |           stretch;  次軸對齊(對多個元素進行調整)
                靠起始       靠末端     置中      靠兩側最大間隙  分散平均間隙(兩側有間隙)   拉伸跟隨以最大的item



## items 內元件

flex-grow: 元件所伸展 預設值為0
flex-shrink: 元件是否伸縮  1縮放(預設值)，0不縮放。
flex-basis: 元件的基準值，可使用不同的單位值。
flex:  <flex-grow> <flex-shrink> <flex-basis>
align-self: 次軸的對齊 可以再次調整


## order 自訂排序
有時候在container 外容器 設定reverse 反轉並不滿足需求，更需要的是各別設定順序,
這時候在items 內元件 可以各別設定order
工作原理是將自己排在哪一個index (value)之後
```css
.item-class{
    order: value(after what index) 可以為負數
}
```

## align-self 自訂沿次軸排列方式
可以針對內元件個別項目進行個別設定，選項同align-items
```css
.the-one-item-class{
    align-self: self-end;
}
```


垂直排列
display: flex;
flex-direction: column;
justify-content: flex-start;

水平排列
display: flex;
flex-direction: row;
justify-content: flex-start;