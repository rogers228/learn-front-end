# $state 狀態

在應用層級的狀態，應使用store

在component層級中的狀態，使用$state

並且不需要訂閱即可以使用。

<button on:click={() => count++}>
  count is {count}
</button>
```