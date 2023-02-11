# loop_使用_each_else
這很好用each else
沒資料時要怎麼表示

```
    {#each photos as photo}
        <figure>
            <img src={photo.thumbnailUrl} alt={photo.title}>
            <figcaption>{photo.title}</figcaption>
        </figure>
    {:else}
        <!-- this block renders when photos.length === 0 -->
        <p>loading...</p>
    {/each}
```