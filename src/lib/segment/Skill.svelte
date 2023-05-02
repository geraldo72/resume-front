<script>
    export let title;
    export let keywords;
    export let level;
</script>
<li class="card card-nested card-skills">
    <div class="skill-level" data-toggle="tooltip" title="" data-placement="left" data-original-title={level}>
        <div class="skill-progress {level.toLowerCase()}"></div>
    </div>
    <div class="skill-info">
        <strong>{title}</strong>
        <div class="space-top labels">
            {#each keywords as keyword}
            <span class="label label-keyword"><p>{keyword}</p></span>
            {/each}
        </div>
    </div>
</li>