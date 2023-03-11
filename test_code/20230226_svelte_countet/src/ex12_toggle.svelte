<script>
    import {open} from './ex12_modal.js'
    import Ex12_content from './ex12_content.svelte'

</script>

<button on:click={() => open('您現在正在進行一個危險的動作', {warning: '不要'}, Ex12_content)}>
    Open
</button>
