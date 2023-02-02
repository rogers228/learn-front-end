# reactive()

reactive()函數，是使用javascript proxy方式達成

僅需要將等號右邊的值用reactive()函數或ref()函數 包起來即可

ref() 用在單一變數 string, number
引用時 應使用.value

reactive() 用在容器變數 array objecr set...
直接飲用

宣告時使用const是因為 預設不可以修改，實際vue在改變值時，是會建立複本，修改複本而已

```vue
<script setup> <!-- setup 為Composition寫法-->

import { ref, reactive } from 'vue'
  const message = ref('Hello World!')
  message.value = 'Changed' //修改 ref 需使用.value
  
  const counter = reactive({
    count: 0
  })
  counter.count = 5  //修改 reactive 直接修改


</script>

<template>
  <h1>{{ message }}</h1> 在template使用雙花括號裡面為表達式
  <p>count is:{{counter.count}}</p>
</template>
```