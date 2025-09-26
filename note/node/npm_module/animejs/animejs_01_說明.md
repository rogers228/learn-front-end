# animejs 動畫
https://animejs.com/documentation/getting-started/installation

弭補svelte 對在場動畫(非過度) 支援的不足，輕鬆建立動畫

## 安裝
npm install animejs

## 使用

建立動畫
```js  transition.js
import { animate } from 'animejs';

export const anime_logo = () => {
    animate("#logo", {
      keyframes: [
        { scale: 1.05, y: 5 },
        { scale: 1,    y: 0},
      ],
      duration: 400,
      playbackEase: 'out(3)',
      // reversed: true,
    });
};
```

svelte使用

```
<script>
  import { anime_logo } from './transition.js';
  anime_logo();

```
