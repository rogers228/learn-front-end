# store 統一管理css variable

```js
// css_variable.js
import { writable } from 'svelte/store';

export const css_variable = writable({
    color_test: 'yellow'});
````

```svelte
<script>
  import { css_variable } from './css_variable.js';
  $: css = $css_variable // 當作別名
</script>

<style>
  p {
    background-color: var(--color_test);
  }
</style>

<!-- 在最外層div注入css變數方能繼承-->
<div 
  style:--color_test = {css.color_test}
  >

  <div class="layout_base">
    <div class="layout_g {$media.classNames}">
      <header>header</header>
      <footer>footer</footer>
    </div>
  </div>

</div>



```