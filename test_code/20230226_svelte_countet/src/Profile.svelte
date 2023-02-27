<script>
    import {getContext} from 'svelte';
    const user = getContext('user');
</script>

<h2> {user.name} </h2>
<p> {user.age} </p>