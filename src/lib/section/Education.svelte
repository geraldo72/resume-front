<script>
    import SectionBase from "$lib/section/base/SectionBase.svelte";
    import Graduation from "$lib/segment/Graduation.svelte";

    export let education;
</script>

<SectionBase icon="graduation-cap" id="education" title="Education">
    {#each education as item}
        <Graduation
                degree={item.area}
                type={item.studyType}
                institution={item.institution}
                initDate={item.startDate}
                endDate={item.endDate}
                url={item.url}
        />
    {/each}
</SectionBase>