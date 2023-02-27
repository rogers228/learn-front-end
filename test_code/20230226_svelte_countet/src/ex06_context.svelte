<script>
    import {setContext} from 'svelte';
    import Profile from './Profile.svelte';
    const user = setContext('user', {
        name: 'allen',
        age: 20
    });
</script>

<Profile />