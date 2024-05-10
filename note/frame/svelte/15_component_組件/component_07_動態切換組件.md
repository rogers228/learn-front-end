<script>
    import FirstComponent from './FirstComponent.svelte';
    import SecondComponent from './SecondComponent.svelte';

    let showFirst = true;
    let firstComponentProps = { message: "Hello from FirstComponent" };
    let secondComponentProps = { count: 5 };

    function toggleComponent() {
        showFirst = !showFirst;
    }
</script>

<button on:click={toggleComponent}>切換組件</button>

<svelte:component this={showFirst ? FirstComponent : SecondComponent} {...(showFirst ? firstComponentProps : secondComponentProps)} />



<svelte:component this={component} {...obj}
第一引數 component 必須先引用
第二引數 為obj , 裡面的key value將帶入 component
