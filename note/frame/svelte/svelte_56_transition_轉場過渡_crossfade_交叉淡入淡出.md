# transition_轉場過渡_crossfade_交叉淡入淡出
https://svelte.dev/tutorial/deferred-transitions

這個轉場效果用在移動位置，element從a點移動到b點，
移動的過程路徑，完全由svelte自動計算，適合讓人家知道跑去哪裡


```php
<script>
    import { crossfade } from 'svelte/transition';
```