<script>
    export let name;
    export let keywords;
</script>
<li class="card card-nested">
    <strong>{name}</strong>
    <div class="space-top labels">
        {#each keywords as keyword}
            <span class="label label-keyword"><p>{keyword}</p></span>
        {/each}
    </div>
</li>