# 在html區塊使用if的規則

<!-- 聲明式樣板語法 -->
這個樣板語法，代表著這是聲明式語法，直接將結果寫出來。
與之相對的就是命令式，接收資料，改變資料，改變畫面，舊式的網頁開發命令。


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


