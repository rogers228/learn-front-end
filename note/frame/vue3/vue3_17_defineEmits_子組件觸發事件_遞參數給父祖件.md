# 子組件觸發父組件事件
https://cn.vuejs.org/tutorial/#step-13

onResponse是如果接收成功的話會執行當中的事件


由下往上觸發父組件的事件，就能夠傳遞子組件的參數
也就是說由下往上傳遞參數

```vue
<!-- 子組件 -->
<script setup>
// 建立發射器
// 當父祖件發生on response 事件時觸發
const emit = defineEmits(['response']) 

// 設定發射器參數
// 發射response 事件時， 第一個參數props為 'hello from child'
// 就可以由父祖件接收
emit('response', 'hello from child')
</script>
<template>
  <h2>Child component</h2>
</template
```


```vue
<!-- 父祖件-->
<script setup>
import { ref } from 'vue'
import ChildComp from './ChildComp.vue'

const childMsg = ref('No child msg yet')
</script>

<template>

 當on response事件觸發時，接收第一個引數為msg
  <ChildComp @response="(msg) => childMsg = msg"/>


  <p>{{ childMsg }}</p>
</template>

```