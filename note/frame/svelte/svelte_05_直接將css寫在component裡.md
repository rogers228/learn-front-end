# 直接將css寫在component裡

通常css為獨立檔案，在svelte裡，可以選擇直接寫在component裡，集中管理。他編譯後將會產生獨立的css，不同的檔案就算命名相同，也不會互相干擾，他將會自動重新命名。

```svelte
<p>This is a paragraph.</p>

<style>
    p {
        color: purple;
        font-family: 'Comic Sans MS', cursive;
        font-size: 2em;
    }
</style>
```


## 可選擇使用樣式
你可以選擇適用舊方式 css 也是很好用。
如果使用scss其實也是很好用。

