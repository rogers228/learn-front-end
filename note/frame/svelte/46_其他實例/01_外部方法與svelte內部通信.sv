<script>
import { onMount } from 'svelte';
import { writable } from 'svelte/store';

const img_obj = writable({}); // store
let img; img_obj.subscribe((obj) => img = obj);  // subscribe 供模板 即時反應

onMount(() => {

    // global image_zoom object
    window.image_zoom = {
        is_show: false,
        url: '',
        scale: 1, // 100%
    };

    img_obj.set(window.image_zoom); // store 預設值

    // global function 可全域,  svelte外部調用
    // example: image_zoom({url: 'http://test'}); 引數位置可以隨意 調用時使用冒號
    window.image_zoom = function({is_show=true, scale=1, url=''}){ // 使用等號賦值 以利解構
        window.image_zoom = {is_show, url, scale }
        window.dispatchEvent(new CustomEvent('image_zoom_changed', { detail: window.image_zoom })); // 建立自訂事件 用來傳遞給svelte component
    }

    // svelte component 接收外部事件
    window.addEventListener('image_zoom_changed', (event) => {
        console.log('svelte: Global value changed:', event.detail);
        img_obj.set(event.detail); // 將外部 object 寫入 store 供svelte使用
    });
});

</script>

{#if img.is_show}
    <p>{img.is_show}</p>
{/if}
