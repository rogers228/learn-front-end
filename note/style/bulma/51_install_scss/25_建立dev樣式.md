# 建立dev scss 樣式

``` _dev.scss
.dev {
  .is-bright1 {
    background-color: #fffbcc !important; // 淡黃
    color: #900 !important;
    border: 2px dashed orange;
  }
}
```

``` main.scss
@use 'dev';                // 引入 _dev.scss（不用寫底線與副檔名）
```

```css 編譯後
.dev .is-bright1 {
  background-color: #fffbcc !important;
  color: #900 !important;
  border: 2px dashed orange;
}
```

## dev style 控制

當<body class="dev"> 時 .is-bright1 樣式生效

## 使用svelte

```html svelte
<script>
  let isDev = true;
</script>

<svelte:body class:dev={isDev} />
```

