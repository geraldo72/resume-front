<script>

import Profile from '$lib/Profile.svelte'
import History from '$lib/History.svelte'
import { goto } from '$app/navigation'
import { page } from '$app/stores'

/** @type {import('./$types').PageData} */ export let data;

/** @type {string} */
let language
$: language = $page.url.searchParams.get('language') || 'en'

/**
 * @param {Event} event
 */
function switchLanguage(event) {
    const select = /** @type {HTMLSelectElement} */ (event.target)
    goto(`/?language=${select.value}`)
}
</script>
<body itemscope="itemscope" itemtype="http://schema.org/Person">
<div class="container-fluid">
    <div class="language-switcher text-end p-2">
        <select on:change={switchLanguage} bind:value={language}>
            <option value="en">English</option>
            <option value="pt">Português</option>
        </select>
    </div>
    <div class="row main clearfix"><a class="js-floating-nav-trigger floating-nav-trigger" href="#"><i
        class="icon-bars"></i><span class="close-icon">×</span></a>
        <nav class="floating-nav js-floating-nav">
            <ul class="list-unstyled">
                <li><a href="#about"><i class="mr-10 icon-board"></i>About</a></li>
                <li><a href="#work-experience"><i class="mr-10 icon-office"></i>Work Experiences</a></li>
                <li><a href="#skills"><i class="mr-10 icon-tools"></i>Skills</a></li>
                <li><a href="#education"><i class="mr-10 icon-graduation-cap"></i>Education</a></li>
                <li><a href="#interests"><i class="mr-10 icon-heart"></i>Interests</a></li>
                <li><a href="#references"><i class="mr-10 icon-thumbs-up"></i>References</a></li>
            </ul>
        </nav>
        <Profile basics={data.basics} languages={data.languages}/>
        <History {data}/>

    </div>
</div>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.6/js/bootstrap.min.js"></script>
<script>$(function () {
    var toggleFloatingMenu = function () {
        $('.js-floating-nav').toggleClass('is-visible');
        $('.js-floating-nav-trigger').toggleClass('is-open');
    };

    $(".background-card").css("min-height", window.screen.availHeight + "px");
    $("[data-toggle=tooltip]").tooltip();
    $('.js-floating-nav-trigger').on('click', function (e) {
        e.preventDefault();
        toggleFloatingMenu();
    });
    $('.js-floating-nav a').on('click', toggleFloatingMenu);

    $("#remaining-profiles").on('show.bs.collapse', function () {
        $('.js-profiles-collapse > i')
            .removeClass('icon-chevron-down')
            .addClass('icon-chevron-up');
    });

    $("#remaining-profiles").on('hidden.bs.collapse', function () {
        $('.js-profiles-collapse > i')
            .removeClass('icon-chevron-up')
            .addClass('icon-chevron-down');
    });
});
</script>
<script>WebFontConfig = {
    google: {families: ['Lato:300,400,700:latin']}
};
(function () {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
        '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
})();</script>
</body>