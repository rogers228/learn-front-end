# 綁定被動尺寸
https://svelte.dev/tutorial/dimensions

通常畫面改變時，客戶端的element尺寸會跟隨改變，svelte可以將被動尺寸回寫至variable
類似input 綁定時將value回寫variable

```
<script>
    let w;
    let h;
    let size = 42;
    let text = 'edit me';
</script>

<input type=range bind:value={size}>
<input bind:value={text}>

<p>size: {w}px x {h}px</p>

<div bind:clientWidth={w} bind:clientHeight={h}>
    <span style="font-size: {size}px">{text}</span>
</div>

<style>
    input { display: block; }
    div { display: inline-block; }
    span { word-break: break-all; }
</style>
```