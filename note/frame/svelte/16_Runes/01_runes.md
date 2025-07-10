# Runes

Runes 是一個語法糖，使用$開不需要import
Runes 是 svelte5 以後才有
使用時需

```html
<script>
    @use runes;
    import { store_bookmarks } from './store_bookmarks.js';
    import { get } from 'svelte/store';
</script>
```
他用來取代 store的 subscribe, unsubscribe, onDestroy



例如在svelte4裡有大量的 subscribe, unsubscribe, onDestroy
```html
<script>
    import { onMount, onDestroy } from 'svelte';
    import { store_bookmarks } from './store_bookmarks.js';

    let s_bookmarks;
    const u_bookmarks = store.subscribe(val => s_bookmarks = val); //大量的 subscribe, unsubscribe
    onDestroy(() => {
    u_bookmarks();
    });

</script>
```

在svelte5只需要
```html
<script>
    @use runes; // ✅ Svelte 5 Runes 語法啟用
    import { get } from 'svelte';
    import { store_bookmarks } from './store_bookmarks.js';

    const s_bookmarks = $drived(() => get(store_bookmarks)); // 僅聲明 即subscribe 且自動 unsubscribe

</script>
```