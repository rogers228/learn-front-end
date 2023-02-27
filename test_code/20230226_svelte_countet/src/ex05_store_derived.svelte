<script>
    import {writable, readable, derived} from 'svelte/store';

    const list = readable(['Do homework', 'sleep', 'programming']);
    const ids = writable([1, 2]);

    // derived很像 python zip 超級複雜!!
    // 能加入方法
    const selectedList = derived([list, ids], ([list, ids], set) =>{
        set(list.filter((val, i)=>ids.includes(i)))
    });
</script>

{$selectedList}