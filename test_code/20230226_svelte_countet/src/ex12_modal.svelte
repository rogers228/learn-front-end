<script>
  import { onMount } from 'svelte';
  export let title = 'modal-title';
  let isOpen = true;

  $: {
    // 開啟時鎖定body的scroll
    if (isOpen){
      document.body.classList.add('prevent-scroll');
    }else{
      document.body.classList.remove('prevent-scroll');
    }
  }
</script>
ex12

<div class="modal-wrapper">
  <div class="modal">
    <div class="model-head">
      <h3 class = "title">{title}</h3>
      <button type="button">&#10005;</button>
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