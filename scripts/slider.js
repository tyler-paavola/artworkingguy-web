$(document).ready(function ($) {
    $('.services-slider').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        responsive: [{
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 400,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });
});