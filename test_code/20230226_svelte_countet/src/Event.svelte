<script>
  import {onMount, createEventDispatcher} from 'svelte';

  // 建立一個事件派遣實例
  const dispatch = createEventDispatcher();

  onMount(()=>{
    // 三秒後 建立一個事件名為completed 其參數為此
    setTimeout(()=>{
      // 事件建立  名稱可以自訂  引數
      dispatch('completed', {'elapsedTime':3000})
    },3000)
  });

  // completed
</script>