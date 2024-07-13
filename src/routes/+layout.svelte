<script>
  import '../global.css'
  /** @type {import('./$types').PageData} */    export let data;
</script>
<svelte:head>
  <title>Resume - {data.basics.name}</title>
</svelte:head>
<slot/>