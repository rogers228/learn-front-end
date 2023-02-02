# 使用computed()計算ref_reactive
https://cn.vuejs.org/tutorial/#step-8

ref()與 reactive()是讓variable即時更新的方法
但 variable 需要再次計算時
不要在template中 使用{} 表達式寫邏輯

應該要在script中，使用computed()+ 箭頭函數，進行計算



```vue
<script setup>
    const a = ref(variable)
    const b = reactive(obj)

    const c = computed(() =>{
        ...
        retrun c
    })
</script>
```


```vue
<script setup>
    import { ref, computed } from 'vue'

    let id = 0

    const newTodo = ref('')
    const hideCompleted = ref(false)
    const todos = ref([
      { id: id++, text: 'Learn HTML', done: true },
      { id: id++, text: 'Learn JavaScript', done: true },
      { id: id++, text: 'Learn Vue', done: false }
    ])

    const filteredTodos = computed(() => {
      return hideCompleted.value
        ? todos.value.filter((t) => !t.done)
        : todos.value
    })

    function addTodo() {
      todos.value.push({ id: id++, text: newTodo.value, done: false })
      newTodo.value = ''
    }

    function removeTodo(todo) {
      todos.value = todos.value.filter((t) => t !== todo)
    }
</script>

<template>
  <form @submit.prevent="addTodo">
    <input v-model="newTodo">
    <button>Add Todo</button>
  </form>
  <ul>
    <li v-for="todo in filteredTodos" :key="todo.id">
      <input type="checkbox" v-model="todo.done">
      <span :class="{ done: todo.done }">{{ todo.text }}</span>
      <button @click="removeTodo(todo)">X</button>
    </li>
  </ul>
  <button @click="hideCompleted = !hideCompleted">
    {{ hideCompleted ? 'Show all' : 'Hide completed' }}
  </button>
</template>

<style>
.done {
  text-decoration: line-through;
}
</style>
```