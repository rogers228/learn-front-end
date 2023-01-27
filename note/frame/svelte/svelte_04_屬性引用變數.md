# html tag 屬性引用變數


```html
<script>
    let src = '/tutorial/image.gif';
</script>
<!-- 屬性引用變數 -->
<img src={src} alt="#"> 
```

## 省略屬性
如果變數名稱與屬性名稱相同，可以直接整略 屬性=

```html
<script>
    let src = '/tutorial/image.gif';
</script>
<!-- 屬性引用變數 -->
<img {src} alt="#"> 
```