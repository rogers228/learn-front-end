<!-- 
此為component僅負責ui渲染
data api 邏輯移到store

on:click={()=>$selected=label}
-->
<script>
    import { repos, setSelected, selected} from './ex11_store.js';
    const labels = ['React','Vue','Svelte'];
</script>

{#each labels as label}
    <button on:click={()=>setSelected(label)}
        class:active={$selected===label}>
        {label}</button>
{/each}

{#if $repos.status==='loading'}
    <span>Loading...</span>
{:else if $repos.status==='loaded'}
    {#each $repos.items as item (item.id)}
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <a href="{item.html_url}">Repo Link</a>
    {/each}
{:else if $repos.status==='error'}
    <span>{$repos.error}</span>
{/if}


<style>
    button{
        margin-right: 30px;
    }
    .active{
        background-color: red;
    }
</style>