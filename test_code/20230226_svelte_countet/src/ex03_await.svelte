<script>
  let api = fetch('https://api.github.com/users/rogers228').then(res=>(res.json()));
</script>

{#await api}
  <span>Looding...</span>
{:then respons}
  <img alt="img" src={respons.avatar_url} />
  <h2>{respons.name}</h2>
  <p>{respons.bio}</p>

{:catch error}
  <span>{error}</span>
{/await}
