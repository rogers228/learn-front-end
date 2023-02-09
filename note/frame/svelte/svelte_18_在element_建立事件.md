# 在element建立事件
https://svelte.dev/tutorial/dom-events


```svelte
<script>
    let m = { x: 0, y: 0 };

    function handleMousemove(event) {
        m.x = event.clientX;
        m.y = event.clientY;
    }
</script>

<div on:mousemove={handleMousemove}>
    The mouse position is {m.x} x {m.y}
</div>

<style>
    div { width: 100%; height: 100%; }
</style>
```