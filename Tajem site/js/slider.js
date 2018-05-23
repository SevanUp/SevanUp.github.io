$(document).ready(function() {
    $('.slider1').slick({
        infinite: true,
        slidesToScroll: 1,
        lazyLoad: 'ondemand',
        autoplaySpeed: 5000,
        autoplay: true,
        arrows: false,
        dots: true,
        responsive: [{
            breakpoint: 784, //это 920, почему-то если ставить 920, то начинается на 936-937
            settings: 'unslick'
        }]
    });
});

$(document).ready(function() {
    $('.slider2').slick({
        centerMode: true,
        slidesToShow: 3,
        centerPadding: '70px',
        infinite: true,
        dots: false,
        arrows: true,
        prevArrow: "<img class='slick-prev' src='img/back.png'>",
        nextArrow: "<img class='slick-next' src='img/forward.png'>",
        responsive: [{
            breakpoint: 436, //это 920, почему-то если ставить 920, то начинается на 936-937
            settings: {
                centerPadding: '0' //все элементы отстоят далеко друг от друга
            }
        }]
    });
});

$(window).on('resize', function() { //чтобы в обратном направлении к >920 слайдер опять появлялся
    if ($(window).width() < 784) {
        if ($('.slider1').hasClass('slick-initialized')) {
            $('.slider1').slick('unslick');
        }
        return
    }

    if (!$('.slider1').hasClass('slick-initialized')) {
        return $('.slider1').slick({
            infinite: true,
            slidesToScroll: 1,
            autoplaySpeed: 5000,
            autoplay: true,
            dots: true,
            arrows: false
        });
    }
});