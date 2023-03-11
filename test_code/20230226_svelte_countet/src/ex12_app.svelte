<script>
    import Model from './ex12_modal.svelte'
    import {modal} from './ex12_modal.js'
    import Toggle from './ex12_toggle.svelte'

    let name = 'World'
</script>

<h1>hello {name} !</h1>
<button>1</button>
<button>2</button>
<button>3</button>
<button>4</button>
<Toggle />

{#if $modal.status === 'opened'}
    <Model title={$modal.title} >
        <svelte:component this={$modal.component} {...$modal.params}/>
    </Model>
{/if}