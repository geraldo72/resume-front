<script>
    import md5 from "md5"

    export let basics;
    export let languages;

    function getGravatarURL(email) {
        // Trim leading and trailing whitespace from
        // an email address and force all characters
        // to lower case
        const address = String(email).trim().toLowerCase();

        // Create an MD5 hash of the final string
        const hash = md5(address);

        // Grab the actual image URL
        return `https://s.gravatar.com/avatar/${hash}?s=100&amp;r=pg&amp;d=mm`;
    }
</script>

<section class="col-md-3 card-wrapper profile-card-wrapper affix">
    <div class="card profile-card">
        <span class="profile-pic-container">
            <div class="profile-pic">
                <img alt="{basics.name}" class="media-object img-circle center-block"
                     data-src="holder.js/100x100" itemprop="image"
                     src="{getGravatarURL(basics.email)}">
            </div>
            <div class="name-and-profession text-center">
                <h3 itemprop="name"><b>{basics.name}</b></h3>
                <h5 class="text-muted" itemprop="jobTitle">{basics.label}</h5>
            </div>
        </span>
        <hr>
        <div class="contact-details clearfix">
            <div class="detail">
                <span class="icon"><i class="icon fs-lg icon-location"></i></span>
                <span class="info">{basics.location.city}, {basics.location.countryCode}</span>
            </div>
            <div class="detail">
                <span class="icon"><i class="icon fs-lg icon-mail"></i></span>
                <span class="info"><a class="link-disguise" href="mailto:{basics.email}"
                                      itemprop="email">{basics.email}</a></span>
            </div>
            <div class="detail">
                <span class="icon"><i class="icon fs-lg icon-link"></i></span>
                <span class="info">
                    <a href="{basics.website}" target="_blank">{basics.website}</a>
                </span>
            </div>
            <div class="detail">
                <span class="icon" title="Languages I speak"><i class="icon fs-lg icon-language"></i></span>
                <span class="info">
                    {#each languages as language,i}
                        {language.language}{#if languages.length > i + 1}{", "}{/if}
                    {/each}
                </span>
            </div>
        </div>
        <hr>
        <div class="social-links text-center">
            <div>
                {#each basics.profiles as profile,i}
                <a class="fs-2x social-link link-{profile.network} icon-{profile.network}"
                   data-original-title="{basics.name} on {profile.network}"
                   data-toggle="tooltip"
                   href="{profile.url}" target="_blank"
                   title=""></a>
                {/each}
            </div>
        </div>
    </div>
</section>