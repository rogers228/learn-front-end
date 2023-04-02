04_在style使用script的變數
https://svelte.dev/repl/f1c175281a494031a63b966fb8433bce?version=3.46.4


1. 在元素的上層使用 style:--hovercolor={variable} >
2. 在style引用 var(--hovercolor)

```svlete
<script>
    let size = 200;
    function up() {size += 5;}
    function down() {size -= 5;}
</script>

<section>
    <p>{size}</p>
    <button on:click={up}>up</button>
    <button on:click={down}>down</button>
</section>

<div style='--size:{size};'></div>

<style>
    div {
        width : calc( var(--size) * 1px );
        height : calc( var(--size) * 1px );
        background-color : green;
    }
</style>

```


