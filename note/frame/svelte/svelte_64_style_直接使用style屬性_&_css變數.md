# style_直接使用style屬性_&_css變數
https://svelte.dev/tutorial/inline-styles

直接在html element tag中使用style屬性，雖然傳統的做法強烈建議不要直接使用style，而使使用class方法，
但是svelte建議可以直接使用，原因
1. html 屬性可直接綁定variable, 不必擔心多來源修改問題,不須要再多建立class
2. 更靈活的動畫，必須使用js驅動單獨的style屬性
3. sfc架構下，不應該再由外部來控制component


## 透過style綁定 可以達到variable傳遞給css變數
```svelte
<p style="color: {color}; --opacity: {bgOpacity};">This is a paragraph.</p>
```
上方 --opacity 是定義css變數，代表--opacity賦值為script bgOpacity變數


```svelte
<style>
    p {
        font-family: "Comic Sans MS", cursive;
        background: rgba(255, 62, 0, var(--opacity));
    }
</style>
```

## 傳遞variable至css
script variable可以傳遞到template區段，透過css變數也可以傳遞到style區段，透過var方法取用css變數

