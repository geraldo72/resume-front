<script>
    import moment from "moment";
    export let name;
    export let date;
    export let issuer;
    export let url;

    function formatDate(dateStr) {
        return moment(dateStr).format("MMM DD, YYYY")
    }
</script>
<li class="card card-nested">
    <div class="content">
        <p class="clear-margin" itemprop="certificate">
            <strong><a href={url} target="_blank">{name}</a>,&nbsp;</strong>{issuer}
        </p>
        <p class="text-muted"><small>Issued on: {formatDate(date)}</small></p>
    </div>
</li>