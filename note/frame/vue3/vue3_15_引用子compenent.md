# 引用子compenent
通常組件要拆分為細部
所以會引用成為自己的子組件

1. 在script import該檔案，通常使用相對路徑
2. 通常組件component命名為大駝峰
3. 在本組件 template中 直接寫為html標籤 名稱為組件名稱，大駝峰命名方式可區別html或component

```vue
<script setup>
import ChildComp from './ChildComp.vue'
  
</script>

<template>
  <!-- render child component -->
  <ChildComp />
</template>

```