# 使用computed()計算ref_reactive

ref()與 reactive()是讓variable即時更新的方法
但 variable 需要再次計算時
不要在template中 使用{} 表達式寫邏輯

應該要在script中，使用computed()+ 箭頭函數，進行計算



```vue
const a = ref(variable)
const b = reactive(obj)

const c =

```
