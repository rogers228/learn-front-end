# 綁定自己_this
在template中指定本身element為variable

等同在javascript中使用 canvas = getElementByid(id)

https://svelte.dev/tutorial/bind-this

```
<canvas
    bind:this={canvas}
    width={32}
    height={32}
></canvas>

```

代表html cavas 目前這個元素等同 script中的canvas
不需要在script指定getElementByid
