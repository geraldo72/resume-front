<script>
  import '../global.css'

  /** @type {import('./$types').PageData} */    export let data;
</script>
<svelte:head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.6/dist/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:300,400,700&amp;subset=latin" media="all">
  <title>Resume - {data.basics.name}</title>
</svelte:head>
<slot/>