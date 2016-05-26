$(document).foundation();
// declare global
var slider_array = new Array();

$(document).ready(function(){
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });

    $('body').on('click', '.show-reveal-galery', function () {
        var revealRef = $(this).data('reveal-ref');

        $('#'+revealRef).append('<a class="close-reveal-modal" aria-label="Close">&#215;</a>');
        $('#'+revealRef).foundation('reveal', 'open');
    });

    $('body').on('click', '#sendMail', function () {
        window.open('mailto:test@example.com?subject=subject&body=body');
    });

    $("a.factories_link").click(function() {
        $('#factory-illustration').css('left', '50%');
    });

    $('#actu-slider').bxSlider({
        auto: true,
        autoHover: true,
        controls: false,
        autoControls: false,
        pause: 5000,
        pager: false,
    });

    var bxLeft = $('#benefit-slider-left').bxSlider({
        mode: 'vertical',
        auto: true,
        autoHover: false,
        controls: true,
        autoControls: false,
        pause: 5000,
        pager: false,
    });

    var bxCenter = $('#benefit-slider-center').bxSlider({
        mode: 'vertical',
        auto: true,
        autoHover: false,
        controls: true,
        autoControls: false,
        pause: 5000,
        pager: false,
        directions: 'prev',
    });

    var bxRight = $('#benefit-slider-right').bxSlider({
        mode: 'vertical',
        auto: true,
        autoHover: false,
        controls: true,
        autoControls: false,
        pause: 5000,
        pager: false,
    });

    $('#rightBtn').bind('click', function(){
        bxLeft.goToNextSlide();
        bxCenter.goToNextSlide();
        bxRight.goToNextSlide();
    });

    $('#leftBtn').bind('click', function(){
        bxLeft.goToPrevSlide();
        bxCenter.goToPrevSlide();
        bxRight.goToPrevSlide();
    });

    $('#galery-title-left').bind('click', function(){
        $('#galery-title-right').removeClass('galery-title-r-active');
        $(this).addClass('galery-title-l-active');
        $('#galery-l-content').show();
        $('#galery-r-content').hide();
    });

    $('#galery-title-right').bind('click', function(){
        $('#galery-title-left').removeClass('galery-title-l-active');
        $(this).addClass('galery-title-r-active');
        $('#galery-l-content').hide();
        $('#galery-r-content').show();
    });
});

$(document).on('opened.fndtn.reveal', '[data-reveal]', function () {
    $(document).foundation('reflow');
});

$(window).resize(function () {
    // Fermeture du menu tablette / mobile en version desktop
    if (window.innerWidth >= '1024') {
        if ($(window).scrollTop() >= $("#pre-header").position().top) {
            $(".floatbar").show();
        }
    }
    else if (window.innerWidth < 1024) {
        $(".floatbar").hide();
    }
});

$(window).scroll(function () {
    if ($(window).scrollTop() >= ($("#logo-header").height()) && window.innerWidth >= 1024) {
        $(".floatbar").show();
    }
    else {
        $(".floatbar").hide();
    }

    if ($(window).scrollTop() == 0) {
        $('#factory-illustration').css('left', '100%');
    };

    if (checkvisible(('#content'))) {
        $('#factory-illustration').css('left', '50%');
    }

});

function checkvisible( elm ){
    var vpH = $( window ).height(), // Viewport Height
        st = $( window ).scrollTop(), // Scroll Top
        y = $( elm ).offset().top, // element top
        h = $( elm ).outerHeight(); // element height

    return ( ( y + h > st ) && ( y - st < vpH ) );
}