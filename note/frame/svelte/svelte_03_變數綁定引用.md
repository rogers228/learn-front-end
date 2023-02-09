

https://svelte.dev/tutorial/adding-data

不需要特別宣告 就能夠使用


```svelte
<script>
    let name = 'rogers'; //變數
</script>


<!-- 
html ui 引用javascript 變數  使用大括號 
大括號裡面為 js表達式
-->
<h1>Hello {name}!</h1>
```

## 大括號可以在任何位置，字串裡面也可以，其原理類似替換 replace