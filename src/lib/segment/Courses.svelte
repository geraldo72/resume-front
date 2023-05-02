<script>
    export let courses;
</script>
<div class="card card-nested">
    <strong>Courses</strong>
    <ul class="space-top">
        {#each courses as {code, name, duration, certLink}}
            <li>
                <span >{#if code != null}{code} - {/if}{name}</span>
                {#if certLink != null}
                    <small><a target="_blank" href="{certLink}">Certificate</a></small>
                {:else}
                {/if}
                {#if duration != null}
                    <span class="text-muted"><small><i class="icon-clock mr-5"></i>{duration} {duration>1?"hours":"hour"}</small></span>
                {/if}
            </li>
        {/each}
    </ul>
</div>
<style>
    p {
        margin-bottom: 2px;
    }
</style>