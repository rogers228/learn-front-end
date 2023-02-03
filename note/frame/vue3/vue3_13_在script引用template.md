# 在script引用template

要使用script操作模板非常簡單

1. 在script 建立一個空參照 const variable = ref(null)
2. 模板的element 中 增添屬性 ref="variable" 即綁定variable參照


```vue
<script setup>
    import { ref, onMounted } from 'vue'

    const p = ref(null)
    onMounted(() => {
      // 此时组件已经挂载。
      // 直接操作dom
      p.value.textContent = 'hi'
    })
</script>

<template>
  <p ref="p">hello</p>
</template>
```
