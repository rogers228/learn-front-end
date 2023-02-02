# template data綁定至屬性
https://cn.vuejs.org/tutorial/#step-3

```html

<h1 class="title">Make me red</h1>
<!-- 雙引號裡面為字串  為css樣式-->
```


使用 v-bind: 綁定屬性
使用簡寫   : 綁定屬性   一個冒號: 等於v-bind:


```vue
<script setup>
const titleClass = ref('title')
</script>

<templage>
<h1 v-bind:class="titleClass">Make me red</h1>
<!-- 雙引號裡面為variable -->

<h1 :class="titleClass">Make me red</h1>

</templage>
```

