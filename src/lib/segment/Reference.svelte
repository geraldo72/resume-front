<script>
    export let name;
    export let message;
</script>
<li class="card card-nested">
    <blockquote class="quote">
        <div class="mop-wrapper"><p>{message}</p></div>
    </blockquote>
    {name}
</li>
<style>
    .quote{
        font-size: 15px;
        margin-bottom: 5px;
    }
</style>