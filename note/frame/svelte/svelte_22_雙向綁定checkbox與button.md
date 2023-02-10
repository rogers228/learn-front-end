# 雙向綁定checkbox與button
https://svelte.dev/tutorial/checkbox-inputs

常用場景，有閱讀合約勾選已同意，方可進入

```svelte
<script>
    let yes = false;
</script>

<label>
    <input type=checkbox bind:checked={yes}>
    Yes! Send me regular email spam
</label>

{#if yes}
    <p>Thank you. We will bombard your inbox and sell your personal details.</p>
{:else}
    <p>You must opt-in to continue. If you're not paying, you're the product.</p>
{/if}

<button disabled={!yes}>
    Subscribe
</button>
```