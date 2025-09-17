# 自訂動畫function
它可以自訂css效果，輕鬆達到多重效果，大多採用 CSS Transform

## CSS動畫-2D Transform
https://ithelp.ithome.com.tw/articles/10200713

## svelte 動畫曲線
https://svelte.dev/examples/easing


```js
<script>
  import { cubicOut } from 'svelte/easing';

  // 自訂一個從左邊飛入並同時淡出的動畫
  // 第一參數固定為 node Svelte 會自動傳入這個 DOM 元素
  // 第二個參數是 參數 object, 內部可以任意多個參數，並且可以設定預設值，寫法同javascript

  // cubicOut 使用 Svelte 內建的動畫曲線 需import

  function flyAndFade(node, { delay=0, duration=400, easing=cubicOut, x=-100, opacity = 0 }) {

    // 取得none元素的最終渲染style 中的 transform 值，若無時('none') 轉換為 '' 有則取出，以利後續使用
    const existingTransform = getComputedStyle(node).transform.replace('none', '');

    //回傳一個 time 點所對應的  固定屬性的 object 代表動畫的片段 function
    // delay,    // 延遲時間
    // duration, // 持續時間，參數 與 key 為相同名稱時，可以省略 (同 duration: duration)
    // easing    // 使用 Svelte 內建的動畫曲線

    // 此函數內 ' t, u ' 不須宣告，由svelte提供
    // t 代表一個線性的時間片段，數值為 0~1 不受easing 的控制，例如：透明度使用 t
    // u 代表一個時間片段，會受 easing 的控制 ，例如： 滑動使用 u
    // 若動畫執行 in 時`,  t,u 為0~1 的順序
    // 若動畫執行 out 時`, t,u 為1~0 的順序
    
    return { 
      delay,    // 延遲時間
      duration, // 持續時間，參數 與 key 為相同名稱時，可以省略 (同 duration: duration)
      easing,     // 使用 Svelte 內建的動畫曲線 
      css: (t, u) => {
        // 根據 t 值計算當前的 x 位置和透明度
        const progress = 1 - t;
        const transformX = x * progress;
        const currentOpacity = 1 - progress * (1 - opacity);

        // 回傳一個 CSS 轉換字串
        return `
          transform: ${existingTransform} translateX(${transformX}px);
          opacity: ${currentOpacity};
        `;
      }
    };
  }
</script>
```