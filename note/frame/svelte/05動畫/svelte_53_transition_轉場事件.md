# transition_轉場事件
https://svelte.dev/tutorial/transition-events

有轉場，當然也能夠監聽轉場的事件

```svelte

<p
    transition:fly="{{ y: 200, duration: 2000 }}"
    on:introstart="{() => status = 'intro started'}"
    on:outrostart="{() => status = 'outro started'}"
    on:introend="{() => status = 'intro ended'}"
    on:outroend="{() => status = 'outro ended'}"
>
    Flies in and out
</p>
```