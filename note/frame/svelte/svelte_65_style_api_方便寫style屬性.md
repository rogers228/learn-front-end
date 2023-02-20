# style_api_方便寫style屬性
直接編寫style屬性，內部是採用字串拼接的方式，
svlete提供了sylye: api 寫法更好寫，統一寫法


以下為使用style屬性表達式的寫法,
表達式立面是以純字串編寫css樣式
```svelte
<p style="color: {color}; --opacity: {bgOpacity};">This is a paragraph.</p>
```

可以改為sylye api寫法

```svelte
    <p
        style:color
        style:--opacity = {bgOpacity}
    >
```

上方color = {color} 相同名稱，則可簡寫color即可
