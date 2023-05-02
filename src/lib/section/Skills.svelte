<script>
    import SectionBase from "$lib/section/base/SectionBase.svelte";
    import Skill from "$lib/segment/Skill.svelte";

    export let skills;
</script>

<SectionBase icon="tools" id="skills" title="Skills">
    {#each skills as skill}
        <Skill title={skill.name} keywords={skill.keywords} level={skill.level}/>
    {/each}
</SectionBase>