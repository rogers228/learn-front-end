<!-- bind:this 
綁定自己或綁定自己的屬性
-->

<script>
    import {onMount} from 'svelte';
    let canvas;
    let width
    onMount(()=>{
        console.log(width);
    });

</script>

<!-- 不只可以綁定element還可以直接綁定element的屬性
經常應用到各式高級的element例如 audio, video
 -->
<canvas bind:this={canvas} bind:clientWidth={width}></canvas>

