<script>
    import SectionBase from "$lib/section/base/SectionBase.svelte";
    export let basics;
</script>

<SectionBase title="About" icon="board" id="about">
    <div class="card card-nested">
        <div class="content mop-wrapper" itemprop="description"><p>{basics.summary}</p>
        </div>
    </div>
</SectionBase>