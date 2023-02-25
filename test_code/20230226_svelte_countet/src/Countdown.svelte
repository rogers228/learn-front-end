<script>
  import { onMount, afterUpdate, onDestroy} from 'svelte';
  export let countdown = 10;
  let timer = null
  $: displayValue = `00:${countdown.toString().padStart(2,'0')}`


  onMount(() => {
    timer = setInterval(() =>{countdown-=1}, 1000);
  });

  afterUpdate(()=>{
    if (countdown===0){
      if (timer){
        clearInterval(timer);
      }
    }
  });

  onDestroy(()=>{
    if (timer){
      clearInterval(timer);
    }
  });
</script>

<h2>{displayValue}</h2>
{#if (countdown === 0)}
  <span>time over!</span>
{/if}

<style>
  h2 {
    color: red;
  }
</style>