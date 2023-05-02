<script>
    import SectionBase from "$lib/section/base/SectionBase.svelte";
    import Certificate from "$lib/segment/Certificate.svelte";

    export let certificates;
</script>
<SectionBase icon="profile" id="certificates" title="Certificates">
    {#each certificates as item}
        <Certificate
                name={item.name}
                issuer={item.issuer}
                url={item.url}
                date={item.date}/>
    {/each}
</SectionBase>