<!-- 建立自訂事件 -->

<script>
    import Event from './Event.svelte';
    let completed = false;
</script>

createEvent

<Event on:completed={()=>completed=true}/>

{#if completed}
finished
{/if}