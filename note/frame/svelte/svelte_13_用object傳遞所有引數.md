# 用object傳遞所有引數
用object傳遞所有引數，是更好的方法。不需要每個變數去指定
使用...object, 就能傳遞obj裡面所有的key, value

```svelte
<!-- child component -->
<script>
    export let name;
    export let version;
    export let speed;
    export let website;
</script>

<p>
    The <code>{name}</code> package is {speed} fast.
    Download version {version} from <a href="https://www.npmjs.com/package/{name}">npm</a>
    and <a href={website}>learn more here</a>
</p>
```


```svelte
<!-- parent component -->
<script>
    import Info from './Info.svelte';

    const pkg = {
        name: 'svelte',
        version: 6,
        speed: 'blazing',
        website: 'https://svelte.dev'
    };
</script>

<Info {...pkg}/>
```
