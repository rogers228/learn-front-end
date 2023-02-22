<script>
    import { onMount } from 'svelte';
    import { s_layout1 } from './state.js';
    let hashValue;
    function hashChange(){
        hashValue = location.hash;
    };

    onMount(() => hashChange());

</script>

<svelte:window on:hashchange ={hashChange} />

<div>{hashValue}</div>

{#if $s_layout1 == 1}
    <div>layout_1 is {$s_layout1}</div>
{/if}

{#if $s_layout1 == 2}
    <div>yes! layout_1 is {$s_layout1}</div>
{/if}
