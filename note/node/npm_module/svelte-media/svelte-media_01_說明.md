# svelte-media
切親svelte的媒體查詢，自動 reactive：當螢幕尺寸變動時，$media 會自動更新。

## 安裝
安裝為執行工具，非開發工具
npm install svelte-media

## 安裝後使用

建立自定的媒體查詢 object，key可自訂
```js
// media.js
import { createMedia } from 'svelte-media';

const mediaQueries = {
  mobile: "(max-width: 768px)",
  tablet: "(min-width: 769px) and (max-width: 1023px)",
  desktop: "(min-width: 1024px) and (max-width: 1215px)",
  widescreen: "(min-width: 1216px) and (max-width: 1407px)",
  fullhd: "(min-width: 1408px)",

    // 自定義組合斷點：tablet 以下
  uptoTablet: "(max-width: 1023px)",
};

export const media = createMedia(mediaQueries);  // readable store
```

使用在svelte，使用 $media.mobile 直接判斷
```html
<script>
  import { media } from "./media.js";
</script>

{#if $media.mobile}
  <p>目前是 Mobile</p>
{:else if $media.tablet}
  <p>目前是 Tablet</p>
{:else if $media.desktop}
  <p>目前是 Desktop</p>
{:else if $media.widescreen}
  <p>目前是 Widescreen</p>
{:else}
  <p>目前是 FullHD</p>
{/if}
```