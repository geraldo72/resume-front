<script>
  import '../global.css'
  export const prerender = true;
  /** @type {import('./$types').PageData} */    export let data;
</script>
<svelte:head>
  <title>Resume - {data.basics.name}</title>
</svelte:head>
<slot/>