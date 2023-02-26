<script>
    import {onMount} from 'svelte';
    let ischecked = false;
    $: console.log(ischecked);
</script>

<input type="checkbox" bind:checked={ischecked} />

<style>
    input{
        font-size: 30px
    }
</style>