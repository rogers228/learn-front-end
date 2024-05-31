# 在templaate 使用註解  

使用 html 標準註解， 編譯後將自動移除

```svelte
<script>
    let name = "Alice";
</script>

<main>
    <!-- 這是一個註解，不會出現在編譯後的 HTML 中 -->
    <h1>Hello {name}!</h1>
</main>

```