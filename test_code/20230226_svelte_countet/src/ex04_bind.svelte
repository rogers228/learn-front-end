<script>
    import {onMount} from 'svelte';
    let name = 'world';
    $: console.log(name);

    onMount(()=>{
        setTimeout(()=>{name+='!!!!!'},2000)
    });
</script>

<input type="text" bind:value={name} />

<style>
    input{
        font-size: 30px
    }
</style>