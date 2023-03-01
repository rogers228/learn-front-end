使用svelte在body建立事件
他會幫你註冊監聽事件， 當元件銷毀時也能幫你註銷事件
非常好用


```svelte
<script>
    function handleMouseenter(){
        console.log('handleMouseenter');
    }

    function handleMouseleave(){
        console.log('handleMouseleave');
    }
</script>

<svelte:body
    on:mouseenter={handleMouseenter}
    on:mouseleave={handleMouseleave}
/>

```