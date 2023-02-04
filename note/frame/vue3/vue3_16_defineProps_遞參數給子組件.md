# 傳遞參數給子組件
https://cn.vuejs.org/tutorial/#step-12

1. 在子組件應先聲明props的名稱及類型
    使用defineProps 不需要import

```vue
<script setup>

// 子組件裡聲明 props 裡有一個參數名為msg類型為string
const props = defineProps({
  msg: String
})
</script>
```

2. 在本組件中引用子組件
就是html tag寫法  參數 就是屬性的寫法

```vue
<script setup>
import { ref } from 'vue'
import ChildComp from './ChildComp.vue'

const greeting = ref('Hello from parent9')
</script>

<template>
  <ChildComp :msg="greeting"/>
</template>

</script>
```
