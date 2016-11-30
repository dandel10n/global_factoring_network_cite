$(document).ready(function(){
    $('.slick_slider').slick({
        dots: true,
        appendDots: $('.slick_dots'),
        arrows: true,
        nextArrow: $(".next_slide"),
        prevArrow: $(".prev_slide")
    });

    $('.slick_slider2').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: true,
        nextArrow: $(".next_slide2"),
        prevArrow: $(".prev_slide2")
    });
});