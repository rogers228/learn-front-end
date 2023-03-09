golbal css variable

```svelte
<style>
    :global(:root){
       --header-color: purple
    }
</style>
```


use
```css
  h1 {
         color: var(--header-color);
  }

```