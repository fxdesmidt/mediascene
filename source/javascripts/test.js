$(document).foundation();

$(window).load(function() {

    Muse.Utils.transformMarkupToFixBrowserProblemsPreInit();/* body */
    Muse.Utils.prepHyperlinks(true);/* body */
    Muse.Utils.initWidget('#slideshowu731', function(elem) { $(elem).data('widget', new WebPro.Widget.ContentSlideShow(elem, {heroFitting:'fillFrameProportionally',autoPlay:true,displayInterval:3500,slideLinkStopsSlideShow:false,transitionStyle:'fading',lightboxEnabled_runtime:false,shuffle:false,transitionDuration:500,enableSwipe:true,elastic:'fullWidth',resumeAutoplay:true,resumeAutoplayInterval:3000,playOnce:false})); });/* #slideshowu731 */
    Muse.Utils.initWidget('.MenuBar', function(elem) { return $(elem).museMenu(); });/* unifiedNavBar */
    Muse.Utils.initWidget('#pamphletu957', function(elem) {
        new WebPro.Widget.ContentSlideShow(
            elem,
            {
                contentLayout_runtime:'stack',
                event:'mouseover',deactivationEvent:'none',
                autoPlay:true,displayInterval:3000,transitionStyle:'vertical',
                transitionDuration:500,hideAllContentsFirst:false,shuffle:false,
                enableSwipe:true,resumeAutoplay:true,resumeAutoplayInterval:3000,
                playOnce:false
            }
        );
    });/* #pamphletu957 */

    Muse.Utils.initWidget('#pamphletu1037', function(elem) {
        new WebPro.Widget.ContentSlideShow(
            elem,
            {
                contentLayout_runtime:'stack',
                event:'click',
                deactivationEvent:'none',
                autoPlay:false,
                displayInterval:3000,
                transitionStyle:'fading',
                transitionDuration:500,
                hideAllContentsFirst:false,
                shuffle:false,
                enableSwipe:true,
                resumeAutoplay:true,
                resumeAutoplayInterval:3000,
                playOnce:false
            }
        );
    });/* #pamphletu1037 */
    Muse.Utils.initWidget('#pamphletu641', function(elem) { new WebPro.Widget.ContentSlideShow(elem, {contentLayout_runtime:'stack',event:'mouseover',deactivationEvent:'none',autoPlay:true,displayInterval:3000,transitionStyle:'vertical',transitionDuration:500,hideAllContentsFirst:false,shuffle:false,enableSwipe:true,resumeAutoplay:true,resumeAutoplayInterval:3000,playOnce:false}); });/* #pamphletu641 */
    $('#u519-bw').registerPositionScrollEffect([{"in":[-Infinity,960.95],"speed":[null,1]},{"in":[960.95,Infinity],"speed":[null,1]}]);/* scroll effect */
    Muse.Utils.resizeHeight()/* resize height */
    $('#u2057').registerPositionScrollEffect(
        [
            {"in":[-Infinity,960.95],"speed":[-0.5,1]},
            {"in":[960.95,Infinity],"speed":[0,1]}
        ]
    );/* scroll effect */
    $('#u508').registerOpacityScrollEffect([{"fade":50,"in":[-Infinity,864],"opacity":0},{"in":[864,864],"opacity":0},{"fade":50,"in":[864,Infinity],"opacity":70}]);/* scroll effect */

    Muse.Utils.initWidget('#slideshowu1539', function(elem) { $(elem).data('widget', new WebPro.Widget.ContentSlideShow(elem, {autoPlay:true,displayInterval:3500,slideLinkStopsSlideShow:false,transitionStyle:'fading',lightboxEnabled_runtime:false,shuffle:false,transitionDuration:500,enableSwipe:true,elastic:'off',resumeAutoplay:true,resumeAutoplayInterval:3000,playOnce:false})); });/* #slideshowu1539 */
    Muse.Utils.initWidget('#slideshowu1713', function(elem) { $(elem).data('widget', new WebPro.Widget.ContentSlideShow(elem, {autoPlay:true,displayInterval:3500,slideLinkStopsSlideShow:false,transitionStyle:'fading',lightboxEnabled_runtime:false,shuffle:false,transitionDuration:500,enableSwipe:true,elastic:'off',resumeAutoplay:true,resumeAutoplayInterval:3000,playOnce:false})); });/* #slideshowu1713 */
    Muse.Utils.initWidget('#slideshowu1772', function(elem) { $(elem).data('widget', new WebPro.Widget.ContentSlideShow(elem, {autoPlay:true,displayInterval:3500,slideLinkStopsSlideShow:false,transitionStyle:'fading',lightboxEnabled_runtime:false,shuffle:false,transitionDuration:500,enableSwipe:true,elastic:'off',resumeAutoplay:true,resumeAutoplayInterval:3000,playOnce:false})); });/* #slideshowu1772 */
    Muse.Utils.initWidget('#slideshowu1821', function(elem) { $(elem).data('widget', new WebPro.Widget.ContentSlideShow(elem, {autoPlay:true,displayInterval:3500,slideLinkStopsSlideShow:false,transitionStyle:'fading',lightboxEnabled_runtime:false,shuffle:false,transitionDuration:500,enableSwipe:true,elastic:'off',resumeAutoplay:true,resumeAutoplayInterval:3000,playOnce:false})); });/* #slideshowu1821 */
    // c'est pour afficher une modale des articles
    /*Muse.Utils.initWidget('#pamphletu1683', function(elem) {
        new WebPro.Widget.ContentSlideShow(
            elem,
            {
                contentLayout_runtime:'stack',
                event:'click',
                deactivationEvent:'none',
                autoPlay:false,
                displayInterval:3000,
                transitionStyle:'fading',
                transitionDuration:500,
                hideAllContentsFirst:false,
                shuffle:false,
                enableSwipe:true,
                resumeAutoplay:true,
                resumeAutoplayInterval:3000,
                playOnce:false
            }
        );
    });*//* #pamphletu1683 */
    Muse.Utils.initWidget('#tab-panelu1307', function(elem) { return new WebPro.Widget.TabbedPanels(elem, {event:'click',defaultIndex:0}); });/* #tab-panelu1307 */
    Muse.Utils.initWidget('#pamphletu1137', function(elem) { new WebPro.Widget.ContentSlideShow(elem, {contentLayout_runtime:'stack',event:'mouseover',deactivationEvent:'none',autoPlay:true,displayInterval:3000,transitionStyle:'horizontal',transitionDuration:500,hideAllContentsFirst:false,shuffle:false,enableSwipe:true,resumeAutoplay:true,resumeAutoplayInterval:3000,playOnce:false}); });/* #pamphletu1137 */
    Muse.Utils.initWidget('#widgetu1937', function(elem) { new WebPro.Widget.Form(elem, {validationEvent:'submit',errorStateSensitivity:'high',fieldWrapperClass:'fld-grp',formSubmittedClass:'frm-sub-st',formErrorClass:'frm-subm-err-st',formDeliveredClass:'frm-subm-ok-st',notEmptyClass:'non-empty-st',focusClass:'focus-st',invalidClass:'fld-err-st',requiredClass:'fld-err-st',ajaxSubmit:true}); });/* #widgetu1937 */
    Muse.Utils.fullPage('#page');/* 100% height page */
    Muse.Utils.showWidgetsWhenReady();/* body */
    Muse.Utils.transformMarkupToFixBrowserProblems();/* body */

    $('body').on('click', '.show-reveal-galery', function () {
        var revealRef = $(this).data('reveal-ref');

        $('#'+revealRef).append('<a class="close-reveal-modal" aria-label="Close">&#215;</a>');
        $('#'+revealRef).foundation('reveal', 'open');
    });
});

$(document).on('opened.fndtn.reveal', '[data-reveal]', function () {
    $(document).foundation('reflow');
});

$(window).resize(function () {
    // Fermeture du menu tablette / mobile en version desktop
    if (window.innerWidth >= '1024') {
        if ($(window).scrollTop() >= $("#page").position().top) {
            $(".floatbar").show();
        }
    }
    else if (window.innerWidth < 1024) {
        $(".floatbar").hide();
    }
});

$(window).scroll(function (event) {
    if ($(window).scrollTop() >= $("#page").position().top && window.innerWidth >= 1024) {
        $(".floatbar").show();
    }
    else {
        $(".floatbar").hide();
    }
});