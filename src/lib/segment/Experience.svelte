<script>
    import moment from "moment";
    export let title;
    export let company;
    export let startDate;
    export let endDate;
    export let description;
    export let highlights;

    function formatDate(dateStr) {
        return moment(dateStr).format("MMM, YYYY")
    }
    function calculateDuration(initDate,endDate){
        var duration = moment.duration(moment(endDate).diff(initDate,"months"),"month")
        return (duration.years()<1?'':`${duration.years()} ${duration.years()>1?'years':'year'}`)+` ${duration.months()} ${duration.months()>1?'months':'month'}`
    }
</script>
<li class="card card-nested clearfix">
    <div class="content">
        <p class="clear-margin relative">
            {#if endDate == null}
                <i class="icon-circle current-event"
                   rel="tooltip"
                   title="Currently Working"
                   data-placement="left"></i>
            {/if}
            <strong>{title}</strong>,&nbsp;{company}
        </p>
        <p class="text-muted">
            <small>
                <span class="space-right">{formatDate(startDate)} - {endDate ? formatDate(endDate) : "Present"}</span><span><i
                    class="icon-clock mr-5"></i>{calculateDuration(startDate,endDate)}</span>
            </small>
        </p>
        <div class="mop-wrapper space-bottom">
            <p>{description}</p>
        </div>
        {#if highlights != null}
            <ul>
                {#each highlights as item}
                    <li class="mop-wrapper">
                        <p>{item}</p>
                    </li>
                {/each}
            </ul>
        {/if}
    </div>
</li>