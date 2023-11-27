## css_classname_and_or

```css
.class_a, .class_b {
  
  /* a or b */
  /* 尋找tag中class 同時擁有 a或b*/
  /* 注意a與b 中間使用  逗號空格 */ 

}

.class_a.class_b {
  /* a and b */
  /* 尋找tag中class 同時擁有 a及b */
  /* 注意a與b 沒有任何空格  */ 
}
```



```css
/* 索引為1開始*/
/* class x 底下的 第n個div*/

```css
.x div:nth-child(3){

}

/* class x 底下的 第3個div 底下第2個 div*/
.x div:nth-child(3) div:nth-child(2)

```