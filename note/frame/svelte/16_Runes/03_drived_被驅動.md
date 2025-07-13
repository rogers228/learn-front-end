#  $drived 被驅動

設定一個變數，是被一個 store 驅動
，設定後將自動subscribe, unsubscribe 太方便了


```html
<script>


```html
<script>
  let count = $state(0);
</script>

  import { option_logic, set_option_logic } from './store_options.js';

  // subscribe store
  // svelte 5 不必手動取消訂閱了
  const s_option_logic = $derived($option_logic);

  $effect(() => {
    console.log('目前邏輯為:', s_option_logic);
  });

</script>

<div>{s_option_logic}</div>
```