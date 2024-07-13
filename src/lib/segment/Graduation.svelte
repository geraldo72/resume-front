<script>
    import moment from "moment";
    export let degree;
    export let type;
    export let institution;
    export let initDate;
    export let endDate;
    export let url;
    function formatDate(dateStr) {
        return moment(dateStr).format("MMM, YYYY")
    }
</script>
<li class="card card-nested">
    <div class="content">
        <p class="clear-margin relative"><strong>{degree},&nbsp;{type}, </strong><a target="_blank" href={url}>{institution}</a></p>
        <p class="text-muted"><small>{formatDate(initDate)} - {formatDate(endDate)}</small></p>
    </div>
</li>