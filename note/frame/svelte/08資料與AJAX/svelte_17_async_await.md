# 異步處理
https://svelte.dev/tutorial/await-blocks
js使用async, await之後，直接在template寫聲明式 async, await語法即可
太棒了

```svelte
<script>
    async function getRandomNumber() {
        const res = await fetch(`/tutorial/random-number`);
        const text = await res.text();

        if (res.ok) {
            return text;
        } else {
            throw new Error(text);
        }
    }

    let promise = getRandomNumber();

    function handleClick() {
        promise = getRandomNumber();
    }
</script>

<button on:click={handleClick}>
    generate random number
</button>

<!-- replace this element -->
{#await promise}
    <p>...waiting</p>
{:then number}
    <p>The number is {number}</p>
{:catch error}
    <p style="color: red">{error.message}</p>
{/await}

```