$(document).ready(function(){
    // Initialize all sliders
    $('.slider-1').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true
    });
    
    $('.slider-2').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        arrows: true
    });
    
    $('.slider-3').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: true
    });
    
    // Responsive adjustments for sliders
    function handleSliderResize() {
        if ($(window).width() < 768) {
            $('.product-slider').slick('unslick');
            $('.product-slider').slick({
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                autoplay: true
            });
        } else {
            $('.product-slider').slick('unslick');
            $('.slider-1, .slider-2, .slider-3').slick({
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                arrows: true
            });
        }
    }
    
    // Run on load and resize
    handleSliderResize();
    $(window).resize(handleSliderResize);
});