# media 媒體查詢 自動提升到最頂

```css
#layout_header {
  background-color: pink;
  min-height: 60px;
}

@media (max-width: 768px) {
  #layout_header {
    width: 100%;
  }
}
```

以上是css結果，@media 媒體查詢 應在最上方，
sass使用 include 若有 @media 將自動提升層級至最頂



```scss
@mixin size_small{
    @media(max-width: #{$MEDIA_SMALL_WIDTH}){
        width: 100%;
        @content;
    }
}

#layout_header{
    background-color: if($SCSS_debug, pink, #FFFFFF);
    min-height: 60px;

    @include size_small
}
```

以上理論應成為
```
#layout_header{
    background-color: if($SCSS_debug, pink, #FFFFFF);
    min-height: 60px;

    @media(max-width: 768px){
        width: 100%;
    }
}
```


經過提升層級成為以下，方符合css規範
```css
#layout_header {
  background-color: pink;
  min-height: 60px;
}

@media (max-width: 768px) {
  #layout_header {
    width: 100%;
  }
}
```
