# template區塊裡使loop
https://cn.vuejs.org/tutorial/#step-7

在html tag 屬性裡面 使用v-for="item in list"
item為自訂名稱
list為一個array
通常list裡面的item為object, key會重複



```vue
<template>

  <ul>
    <li v-for="todo in todos" :key="todo.id">
      {{ todo.text }}
      <button @click="removeTodo(todo)">X</button>
    </li>
  </ul>
</template>
```