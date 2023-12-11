# 選擇具有特定屬性的元素

特別適合用在由框架自動產出者


```html
    <div class="a" data-v-25c6ef82="">
    </div>
```



```css

    /* class = "a" 且and 具有屬性data-v-25c6ef82*/
    .a[data-v-25c6ef82] {

    }

    /* class = "a" 且and 具有屬性data-v-25c6ef82 且值="value"*/
    .a-wrap[data-v-25c6ef82="value"]{

    }
```