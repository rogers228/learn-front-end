#

使用:global() 如下
svelte就不會處理class了

```svelte
<style>
  button{
    appearance: none;
    border: 0;
    background-color: transparent;
    margin: 0;
  }

  :global(.prevent-scroll){
    overflow-y: hidden;
  }

</style>
```