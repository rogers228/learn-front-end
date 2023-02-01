# 傳遞引數給子component
https://svelte.dev/tutorial/declaring-props
這有點像是function 傳遞引數


## 使用匯出export 修飾詞
在子 component 的變數加上使用export修飾詞
代表匯出可以讓人引用，很像js, css的風格

## 使用匯入import 表達式
在父 component 匯入import子component
使用 component 即可添加引數


```svelte
<!-- child component -->
<script>
    export let answer;
    
    // export let answer = 'a mystery';  也可設定預設值
</script>

<p>The answer is {answer}</p>
```


```svelte
<!-- parent component -->
<script>
    import Nested from './Nested.svelte';
</script>


<Nested answer={42}/>

```

組件使用大駝峰來命名html標籤
tag的屬性寫法即代表引數 !!! 好用