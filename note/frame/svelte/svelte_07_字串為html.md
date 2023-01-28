# 字串為html
類似innerhtml的方法

## @html
在變數名稱前加上 @html前綴修飾符

```html
<script>
    let string = `this string contains some <strong>HTML!!!</strong>`;
</script>

<p>{@html string}</p>
```
