<script>
    import SectionBase from "$lib/section/base/SectionBase.svelte";
    import Interest from "$lib/segment/Interest.svelte";
    export let interests;
</script>

<SectionBase title="Interests" id="interests" icon="heart">
    {#each interests as item}
    <Interest name={item.name} keywords={item.keywords}/>
    {/each}
</SectionBase>