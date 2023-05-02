<script>
    import About from '$lib/section/About.svelte'
    import WorkExp from '$lib/section/WorkExp.svelte'
    import Skills from '$lib/section/Skills.svelte'
    import Education from '$lib/section/Education.svelte'
    import Interests from '$lib/section/Interests.svelte'
    import References from '$lib/section/References.svelte'
    import Certificates from "$lib/section/Certificates.svelte";

    export let data;
</script>
<section class="col-md-9 card-wrapper pull-right">
    <div class="card background-card" style="min-height: 724px;"><h4 class="text-uppercase">Background</h4>
        <hr>
        <div class="background-details">
            <About basics={data.basics}/>
            <WorkExp work={data.work}/>
            <Skills skills={data.skills}/>
            <Education education={data.education}/>
            <Certificates certificates={data.certificates}/>
            <Interests interests={data.interests}/>
            <References references={data.references}/>
        </div>
    </div>
</section>