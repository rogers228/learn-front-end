# template表達式使用雙花括號

專門寫html的渲染結果
表達式使用雙花括號, 綁定引用data

```vue
<template>
  <h1>{{ message }}</h1> 在template使用雙花括號裡面為表達式
  <p>count is:{{counter.count}}</p>
</template>
```