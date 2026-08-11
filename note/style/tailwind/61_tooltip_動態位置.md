

業界標準方案：Tailwind + Floating UI

Floating UI 的職責只有一個：「計算座標並自動避開螢幕邊界」。


``` html
<!-- Tooltip.svelte -->
<script>
  import { computePosition, flip, shift, offset } from '@floating-ui/dom';
  
  let { content, children } = $props();

  // Svelte 5 的 DOM 參考
  let referenceEl = $state();
  let tooltipEl = $state();
  let isVisible = $state(false);

  function updatePosition() {
    if (referenceEl && tooltipEl) {
      computePosition(referenceEl, tooltipEl, {
        placement: 'top', // 預設放上面
        middleware: [
          offset(8), // 與觸發按鈕距離 8px
          flip(),    // 若上方空間不夠，自動翻轉到下方
          shift({ padding: 8 }) // 若左右超出螢幕，自動平移回來，並保持 8px padding
        ]
      }).then(({ x, y }) => {
        // 將計算出的安全座標直接覆蓋
        Object.assign(tooltipEl.style, {
          left: `${x}px`,
          top: `${y}px`,
        });
      });
    }
  }

  function show() {
    isVisible = true;
    // 使用 requestAnimationFrame 確保 DOM 已渲染再計算
    requestAnimationFrame(updatePosition);
  }

  function hide() {
    isVisible = false;
  }
</script>

<!-- 觸發元素 -->
<div 
  bind:this={referenceEl}
  onmouseenter={show}
  onmouseleave={hide}
  onfocus={show}
  onblur={hide}
  class="inline-block"
>
  {@render children()}
</div>

<!-- Tooltip 本體 -->
{#if isVisible}
  <div
    bind:this={tooltipEl}
    class="absolute z-50 w-max rounded-md bg-slate-900 px-3 py-1.5 text-xs text-white shadow-xl"
  >
    {content}
  </div>
{/if}
```