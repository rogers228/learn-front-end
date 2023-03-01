# transition_轉場過渡_分別設定in-and-out
https://svelte.dev/tutorial/in-and-out

svelte也可分分別設定進場及出場的效果
api為 in:name  out:name

```svelte

<script>
    import { fade, fly } from 'svelte/transition';
    let visible = true;
</script>

<label>
    <input type="checkbox" bind:checked={visible}>
    visible
</label>

{#if visible}
    <p in:fly="{{ y: 200, duration: 2000 }}" out:fade>
        Flies in, fades out
    </p>
{/if}
```