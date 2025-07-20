# class object

svelte 5 使用 class object

不再使用舊版的 class:
```html
<div class:className={variable_booleane} class:className={variable_booleane}>
```
更靠近原生html class


## 結構

{
    key: value,
    key: value,
    key: value,
}

{
    className: variable_booleane,
    className: variable_booleane,
    className: variable_booleane,
}

<div class={{className1: variable_booleane, className2: variable_booleane}}>