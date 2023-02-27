# Context概念

Context 也是一種store, 相對於store, 它經常用在以下情景
1. 資料幾乎無變動，例如user使用者, theme主題
2. 跨元件溝通，不需要傳遞參數，直接取用找最近的


子元件
```php
<script>
    import {getContext} from 'svelte';
    const user = getContext('user');
</script>

<h2> {user.name} </h2>
<p> {user.age} </p>
```

主元件
```php
<script>
    import {setContext} from 'svelte';
    import Profile from './Profile.svelte';
    const user = setContext('user', {
        name: 'allen',
        age: 20
    });
</script>

<Profile />
```