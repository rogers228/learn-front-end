<script>
  import Root_style from './Root_style.svelte'
  import { media } from './responsive.js';
</script>

<Root_style>
  <div class="layout_base">
    <div class="layout_g {$media.classNames}">
      <header>header</header>
      <footer>footer</footer>
    </div>
  </div>
</Root_style>

<style>
  .layout_base{
    background-color: blue;
    width: 100%; height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .layout_g{
    background-color: var(--color_test);
    min-width: 50px; min-height: 50px;
  }
  .media-small{
    width: 100%;
  }
  .media-large{
    width: 95%;
  }
  .media-limit{
    width: 1150px;
  }
</style>
