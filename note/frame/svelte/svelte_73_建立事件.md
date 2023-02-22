# 建立事件

以下是在DOM建立事件

```svelte
<svelte:window on:hashchange ={() => hashValue=location.hash} />
```