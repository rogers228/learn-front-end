<script>
  import { onMount } from 'svelte';
  import { fade, scale } from 'svelte/transition'
  import { modal, close } from './ex12_modal'
  export let title = 'modal-title';

  function handleKeydown(e){
    // console.log('handleKeydown')
    // console.log('e.keyCode:', e.keyCode)
    if (e.keyCode === 81){ // q
      close()
    }
  }


</script>
<svelte:body on:keydown = {handleKeydown} />

<div class="modal-wrapper" transition:fade on:click={(e) => {
  // console.log('e.target:', e.target);
  // console.log('e.currentTarget:', e.currentTarget)
  if (e.target === e.currentTarget) {
    close()
  }
  }}>
  <div class="modal" transition:scale={{delay: 200}}>
    <div class="model-head">
      <h3 class = "title">{title}</h3>
      <button type="button" on:click={() => close()}>&#10005;</button>
    </div>
    <slot>
      Description
    </slot>
  </div>

</div>

<!-- 

-->
<style>
  .modal-wrapper {
    position: fixed;
    width:100%; height : 100%;
    top:0; left:0; right:0; bottom:0;
    background-color: rgba(25,25,25,0.77); 
  }
  .modal{
    width: 55%;
    max-width: 300px;
    padding: 25px 15px;
    max-height: 72vh;
    margin: 9% auto;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 1px 3px 9px rgba(25,25,25,0.2);
    overflow-y:auto;
  }

  .model-head{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
  .title{
    margin: 0;
  }

  button{
    appearance: none;
    border: 0;
    background-color: transparent;
    margin: 0;
  }

  :global(.prevent-scroll){
    overflow-y: hidden;
  }

</style>