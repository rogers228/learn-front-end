# each object

object是無順序的，故應先轉為二維陣列

//.js

```js
const languages = {
    en: 'Englist',
    zh: '中文简体',
    tw: '中文繁體',
};

function objSort2arr(originalObj) {
    const arr = [];
    const keys  = Object.keys(originalObj);
    for(let i = 0; i < keys.length; i++){
        const key = keys[i];
        const value = originalObj[key];
        arr.push([key, value]);
    }
    return arr;
}

export const languages2arr = objSort2arr(languages);
```

#再使用each
```svelte
<script>
    import { lang, languages2arr} from './language.js'
    {#each languages2arr as [key, value]}
        <div class='button'>{value}</div>
    {/each}
    
</script>

```


#若有使用動畫，應加上 each表達式裡 應加上id，動畫才會正常
```svelte
{#each languages2arr as [key, value] (key)}
    <div class='button inmenu'
        transition:slide|={{duration:800, easing:quintOut }}
        on:click={() => {update_lang(key)}}
        on:keydown={() => {update_lang(key)}}
        >
        {value}
    </div>
{/each}
```