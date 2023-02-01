# 同步陣列

```svelte
<script>
    let numbers = [1, 2, 3, 4];

    function addNumber() {
        numbers.push(numbers.length + 1); //直接在陣列添加，svelte 卻不能觸發同步
        numbers = numbers; //只好再等於一次自己，好蠢

        // 或者使用es6寫法 等於時添加
        numbers = [...numbers, numbers.length + 1];
    }

    $: sum = numbers.reduce((t, n) => t + n, 0);
</script>

<p>{numbers.join(' + ')} = {sum}</p>

<button on:click={addNumber}>
    Add a number
</button>
```