# modal

https://bulma.io/documentation/components/modal/

跳出囗前景，使當前成為背景，目標成為前景，具有注視且不離開現況的感覺。

使用svelte來處理狀態，並使用聲明是寫法。 邏輯清楚明白，應棄用js操作DOM修改classList的方式。
就算js操作DOM修改classList寫得再好，日後也無法明白他到底要做什麼
<div class="modal" class:is-active={showModal}>


```html
<div class="modal is-active">
  <div class="modal-background"></div>
  <div class="modal-content">
    <!-- Any other Bulma elements you want -->
  </div>
  <button class="modal-close is-large" aria-label="close"></button>
</div>

```
modal
    modal-background
    modal-content"
    modal-close

## 控制
使用 is-active 加在 modal 裡
使用 is-clipped 加在 html 裡


```html svelte 並非最佳 尚無淡出動畫
<script>
  let showModal = false;
</script>

<!-- 觸發按鈕 -->
<button class="button is-primary" on:click={() => showModal = true}>開啟 Modal</button>

<!-- Modal -->
<div class="modal"
  class:is-active={showModal}>

  <div class="modal-background" on:click={() => showModal = false}></div>

  <div class="modal-content">
    <div class="box">
      <p>這是彈出視窗內容</p>
      <button class="button" on:click={() => showModal = false}>關閉</button>
    </div>
  </div>

  <button class="modal-close is-large" aria-label="close" on:click={() => showModal = false}></button>
</div>
```

```html svelte  使用 is-clipped 加在 html 裡
<script>
  let showModal = false;

  $: {
    if (showModal) {
      document.documentElement.classList.add('is-clipped');
    } else {
      document.documentElement.classList.remove('is-clipped');
    }
  }
</script>
```




```js  

    // 直接操作DOM的 classList 應棄用
    // 無法直接判讀 操作這些 class 要做什麼?
    // 寫得出來，但維護困難


    document.addEventListener('DOMContentLoaded', () => {
      // Functions to open and close a modal
      function openModal($el) {
        $el.classList.add('is-active');
      }

      function closeModal($el) {
        $el.classList.remove('is-active');
      }

      function closeAllModals() {
        (document.querySelectorAll('.modal') || []).forEach(($modal) => {
          closeModal($modal);
        });
      }

      // Add a click event on buttons to open a specific modal
      (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
        const modal = $trigger.dataset.target;
        const $target = document.getElementById(modal);

        $trigger.addEventListener('click', () => {
          openModal($target);
        });
      });

      // Add a click event on various child elements to close the parent modal
      (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
        const $target = $close.closest('.modal');

        $close.addEventListener('click', () => {
          closeModal($target);
        });
      });

      // Add a keyboard event to close all modals
      document.addEventListener('keydown', (event) => {
        if(event.key === "Escape") {
          closeAllModals();
        }
      });
    });     

```