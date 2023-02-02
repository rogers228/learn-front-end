# 事件event

vue的事件值些寫在<template>裡
就像寫html
但它sfc裡有自己獨特的寫法，反正需要編譯他自創的

```html
<button onclick="test()"> do </button>
```

```vue
<script setup>
function test(){

}
</script>

<template>
    <!-- function 無引數時可以不用加上括號 -->
    <button v-on:click="test()"> do </button>

    <!-- event簡寫 -->
    <button @click="test()"> do </button>
    
</template>
```
