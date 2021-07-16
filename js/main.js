$(document).ready(function(){
    //слайдер в секции top
    $('.slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2500
    });
    //слайдер в секции works
    $('.works__slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="works__arrow prev-arrow"><img src="images/slide-left.svg" alt=""></button>',
        nextArrow: '<button type="button" class="works__arrow next-arrow"><img src="images/slide-right.svg" alt=""></button>',
        autoplay: true,
        responsive: [
            {   
                breakpoint: 993,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    autoplay: false,
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    //отключение перехода у ссылок
    $('a').on('click', function(prevent){
        prevent.preventDefault();
    });
    //бургер-меню
    $('.menu__btn').on('click', function(){
        $('.menu__list').slideToggle();
    });
    //выпадающие под-меню в бургер-меню
    $('.drop-down').on('click', function(){
        $(this).children('.drop-down__list').slideToggle(1);
    });
    //поворот стрелочек, когда под-меню открывается
    $('.drop-down').on('click', function(){
        $(this).children('.arrow-rotate').toggleClass('arrow-rotate-active');
    });
});

