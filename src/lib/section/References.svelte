<script>
    import SectionBase from "$lib/section/base/SectionBase.svelte";
    import Reference from "$lib/segment/Reference.svelte";
    export let references;
</script>

<SectionBase title="References" icon="thumbs-up" id="references">
    {#each references as item}
        <Reference
                name={item.name}
                message={item.reference}/>
    {/each}
</SectionBase>
