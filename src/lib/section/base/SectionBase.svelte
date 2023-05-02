<script>
    export let title;
    export let icon;
    export let id;
</script>

<div class="detail" {id}>
    <div class="icon"><i class="fs-lg icon-{icon}"></i><span
            class="mobile-title">{title}</span></div>
    <div class="info"><h4 class="title text-uppercase">{title}</h4>
        <div class="content">
            <ul class="list-unstyled clear-margin">
                <slot/>
            </ul>
        </div>
    </div>
</div>