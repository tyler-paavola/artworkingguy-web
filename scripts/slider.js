$(document).ready(function ($) {
    $('.services-slider').slick({
        dots: false,
        arrows: false,
        centerMode: true,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: false,
        variableWidth: true,
        responsive: [
        {
            breakpoint: 480,
            settings: {
                variableWidth: false,
                centerMode: false,
                slidesToShow: 1
            }
        }]
    });
});