# store_雙向綁定
https://svelte.dev/tutorial/store-bindings


store variable也能夠實現雙向綁定
也就是說由ui(input value)來更新 store variable

方式也是一樣

```php

<input bind:value={$name}>

```
