# 雙向綁定
https://svelte.dev/tutorial/text-inputs
https://svelte.dev/tutorial/numeric-inputs

通常綁定是指variable與ui綁定，當variable改變時ui也就跟者改變，
但是variable的改變通常也需要靠ui來操作，通常是input

也就是說variable也要跟input ui綁定，就成了雙向綁定
它能達到input改變 variable跟著改變 ui跟改變

若無雙向綁定api則需要靠事件處理達成效果
但因為這是常見的需求，就由框架處理了


```svelte
<script>
    let name = 'world';
</script>

<input bind:value={name}>

<h1>Hello {name}!</h1>

```

使用事件寫法
```svelte
<script>
    let name = 'world';
    
    function handel(event){
        name = event.target.value
    }
    
</script>

<input on:input = {handel}>

<h1>Hello {name}!</h1>

```