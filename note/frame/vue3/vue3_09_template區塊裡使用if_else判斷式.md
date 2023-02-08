# template區塊裡使用if_else判斷式
在template區塊裡面也可以使用判斷式

<h1 v-if="variable"> 判斷if true


```php
<script setup>
import { ref } from 'vue'

const awesome = ref(true)

function toggle() {
  awesome.value = !awesome.value
}
</script>

<template>
  <button @click="toggle">toggle</button>

  <h1 v-if="awesome">Vue is awesome!</h1>
  <h1 v-else>Oh no 😢</h1>
</template>
```