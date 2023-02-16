# Motion_過渡_spring_彈性
https://svelte.dev/tutorial/spring

tweened補間方法有個硬特性，就是所補的間隔限制在初值與末值之間。
有另一個spring方法，它的間隔可以超越初值寂末值，用起來像彈簧一樣，會超過但是最終會回來末值


```svelte
<script>
    import { spring } from 'svelte/motion';

    let coords = spring({ x: 50, y: 50 }, {
        stiffness: 0.1, // 起始剛性0~1  越小越軟越慢反應   越大越硬越快歸位
        damping: 0.25   // 結束剛性0~1  越小越軟越慢反應   越大越硬越快歸位
    });

    let size = spring(10);
</script>


```