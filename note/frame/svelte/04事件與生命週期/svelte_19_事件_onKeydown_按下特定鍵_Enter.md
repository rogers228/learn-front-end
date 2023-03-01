# onKeydown_按下特定鍵_Enter


```
<script>
    function handleKeydown(event) { //引數有 event
        if (event.key === 'Enter') {
            const text = event.target.value;
            if (!text) return; // 單行if 簡潔
            // ...
        }
</script>

<input on:keydown={handleKeydown}>
<!-- 事件function 不需要引數 固定第一個引數為event -->
```