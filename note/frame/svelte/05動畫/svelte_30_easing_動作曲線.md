https://svelte.dev/examples/easing

## 引用
import { quartIn } from 'svelte/easing';

## 曲線名稱
sineIn
quadIn
cubicIn
quartIn
quintIn
expoIn
circIn
backIn
elasticIn
bounceIn

sineOut
quadOut
cubicOut
quartOut
quintOut
expo
circOut
backOut
elasticOut
bounceOut

## templage  取用
<div in:fade ={{delay:50, duration:600, easing: cubicOut}}


