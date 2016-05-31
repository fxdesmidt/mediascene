$(document).ready(function(){
    var slickCommonOpts = {
        autoplay: true,
        slidesToShow: 1,
        adaptiveHeight: false,
        pauseOnHover: false,
        pauseOnFocus: false,
        pauseOnDotsHover: false,
        vertical: true,
        waitForAnimate: false,
    };

    var slickOptsHoudain = slickCommonOpts;

    slickOptsHoudain.prevArrow = $(".previous-houdain");
    slickOptsHoudain.nextArrow = $(".next-houdain");

    $(".slider-galery").slick(slickOptsHoudain);

    $('.galery-img').bind('click', function(){
        var revealRef = $(this).data('reveal-ref');

        $('#'+revealRef).show();
        $('#reveal-custom-bg').show();
    });

    $('.close-reveal, .close-span, #reveal-custom-bg').bind('click', function(){
        $('.reveal-custom').hide();
        $('#reveal-custom-bg').hide();
    });
});
