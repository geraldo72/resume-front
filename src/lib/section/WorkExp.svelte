<script>
    import Experience from "$lib/segment/Experience.svelte";
    import SectionBase from "$lib/section/base/SectionBase.svelte";

    export let work;
</script>

<SectionBase icon="office" id="work-experience" title="Work Experience">
    {#each work as work}
        <Experience
                title={work.position}
                company={work.company}
                description={work.summary}
                startDate={work.startDate}
                endDate={work.endDate}
                highlights={work.highlights}/>
    {/each}
</SectionBase>