<!-- ajax in component -->
<script>
    import {api} from './ex10_api.js'
    const labels = ['React','Vue','Svelte'];
    let selected = labels[0];
    $: [response, controller] = api(selected.toLowerCase());

</script>

{#each labels as label}
    <button
        on:click={()=>selected=label}
        class:active={selected===label}
        >
        {label}
    </button>
{/each}

{#await response}
    <span>Looding...</span>
{:then data}

    {#each data.items as item (item.id)}
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <a href="{item.html_url}">Repo Link</a>
    {/each}

{:catch error}
    <span>{error}</span>
{/await}

<style>
    button{
        margin-right: 30px;
    }
    .active{
        background-color: red;
    }

</style>