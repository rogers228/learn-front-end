# style_class屬性_boolean-class
class做為一個html tag屬性當然可以使用表達式

```html
<div class = "{表達式}"
```

## 依照boolean狀態判斷class

```html
<div class="{variable === 'foo' ? 'selected' : ''}"
```

## svelte內建 class: api
boolean class, 簡化了boolean判斷

```svelte
<div class:selected = "{variable === 'foo'}"
```

## 語法
class:className = "{if true}"
className是寫在style的className

## 更為精簡的boolean表達式寫法
讓if true表達式，寫在script區段，命名為與className同名

```svelte
class:className = "{if true}"
```

改為
```svelte
<script>
className = ()?true:false
</script>
class:className = "{className}"
```

精簡為
```svelte
<script>
className = ()?true:false
</script>
class:className
```

## 語法
``` svelte
<div class:className(className_&_variable_boolean)
```
