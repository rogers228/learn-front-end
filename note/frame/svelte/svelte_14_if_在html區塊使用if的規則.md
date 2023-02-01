# 在html區塊使用if的規則

svelte可以使用在html區塊if表達式，為了簡潔，僅允許在最外層使用
{#if true}
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
{/if}

{#if !user.loggedIn}
    <button on:click={toggle}>
        Log in
    </button>
{/if}

```


