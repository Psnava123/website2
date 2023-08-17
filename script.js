
$(document).ready(function(){
    $('.news-slider').slick({
        dots: true,
        appendDots: $('.slide-dots'),
        dotsClass: 'slick-dots slider-dots',
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: true,
        arrows: false,
        // Add more options and customize as needed
    });


    const carLogosSlider = $('.car-logos-slider');
    
    carLogosSlider.slick({
        infinite:  true,
        slidesToShow: 5,
        slidesToScroll: 1,
        // Add more options and customize as needed
    })

    $('.prev-arrow').click(function() {
        carLogosSlider.slick('slickPrev')
    });

    $('.next-arrow').click(function() {
        carLogosSlider.slick('slickNext')
    });



    
$(document).ready(function() {
    const carLogosSlider = $('.small-slider');

    carLogosSlider.slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        // Add more options and customize as needed
    });

    $('.prev-arrow').click(function() {
        carLogosSlider.slick('slickPrev');
    });

    $('.next-arrow').click(function() {
        carLogosSlider.slick('slickNext');
    });
});


});
