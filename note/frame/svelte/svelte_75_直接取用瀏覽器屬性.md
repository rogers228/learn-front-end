```svelte
<!-- 直接取用window瀏覽器api
若使用原生js將需要寫監聽事件，卸載監聽，變數存取 -->

<script>
    let innerWidth;
    $: console.log(innerWidth);

</script>


以下程式碼為：使用svlete window瀏覽器 element 將window innerWidth屬性綁定到變數innerWidth
直接取用window瀏覽器api給svelte
若使用原生js將需要寫監聽事件，卸載監聽，變數存取


<svelte:window bind:innerWidth={innerWidth}/>
```