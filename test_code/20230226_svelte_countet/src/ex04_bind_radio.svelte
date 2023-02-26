<script>
    import {onMount} from 'svelte';
    let selected = 1;
</script>

<input type="radio" bind:group={selected} value={1} />
<input type="radio" bind:group={selected} value={2} />
<input type="radio" bind:group={selected} value={3} />
{selected}
<style>
    input{
        font-size: 30px
    }
</style>