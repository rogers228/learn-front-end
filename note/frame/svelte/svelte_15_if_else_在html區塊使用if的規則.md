# 在html區塊使用if的規則
https://svelte.dev/tutorial/else-blocks
svelte可以使用在html區塊if else表達式，為了簡潔，僅允許在最外層使用
{#if true}
{:else if}
{:else}
{/if}


```svelte
<script>
    let user = { loggedIn: false };

    function toggle() {
        user.loggedIn = !user.loggedIn;
    }
</script>

{#if user.loggedIn}
    <button on:click={toggle}>
        Log out
    </button>
{:else}
    <button on:click={toggle}>
        Log in
    </button>
{/if}

```


```svelte
{#if x > 10}
    <p>{x} is greater than 10</p>
{:else if 5 > x}
    <p>{x} is less than 5</p>
{:else}
    <p>{x} is between 5 and 10</p>
{/if}
```html