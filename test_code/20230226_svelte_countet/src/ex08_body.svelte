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