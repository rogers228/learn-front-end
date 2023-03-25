'''
<script>
  let fruits = ['apple', 'banana', 'orange'];
</script>

<ul>
  {#each fruits as fruit, index}
    <li>{index + 1}. {fruit}</li>
  {/each}
</ul>
'''