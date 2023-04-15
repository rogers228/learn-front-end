# html tag boolean屬性的綁定與傳入

html tag boolean屬性 例如readOnly
若有添加readOnly 則代表不可編輯
在svelte的使用如下

```svelte
<script>
    export let id = 'id'
    export let title = 'title';
    export let readOnly = false; <------------------
    let height = 40;
    let label_width =100;
</script>

<div class='row'
    style:height={height}px>
    
    <label for={id}
        style:height='{height}px'
        style:line-height='{height}px'
        style:width='{label_width}px'
        >{title}</label>
    
    <input type='text' id={id}
            autocomplete='off'
            placeholder={placeholder}
            {readOnly}   <---------------------
            bind:value={value}
            style:height={height-8}px
            style:width={width}px
            >
    
</div>
```

## component引用

```
<Text title='認證碼' id='usercode' width=180 placeholder='請輸入您的認證碼' bind:value={usercode} readOnly={true}/>

```