# Motion_過渡_tweened_補間
https://svelte.dev/tutorial/tweened


tweened() 補間方法

```svelte

<script>
    import { tweened } from 'svelte/motion';
    import { cubicOut } from 'svelte/easing';

    const progress = tweened(0, {
        delay: 0,
        duration: 400,
        easing: cubicOut
    });

    // tweened方法，
    // 第一個引數為出值
    // 第二個引數為詳細設定object
    // dealy 毫秒
    // duration 補間數量
    // easing 計算方式  cubicOut(越有越慢，越沒有越快)
</script>

```