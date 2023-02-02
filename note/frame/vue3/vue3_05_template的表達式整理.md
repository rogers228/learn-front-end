# template的表達式

```vue
  <button @click="hideCompleted = !hideCompleted">       在屬性= 中雙引號內部為字串   裡面為表達式
    {{ hideCompleted ? 'Show all' : 'Hide completed' }}  在text 中使用雙誇號         裡面為表達式
  </button>
```