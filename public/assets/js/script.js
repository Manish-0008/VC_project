(function ($) {
  "use strict";
  var windowOn = $(window);


  $(document).ready(function () {
    $(".past-participants-slider").slick({
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="assets/images/slide_arrow_left.png" alt="Previous"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="assets/images/slide_arrow_right.png" alt="Next"></button>',
        responsive: [
            {
                breakpoint: 1200,
                settings: { slidesToShow: 3 }
            },
            {
                breakpoint: 992,
                settings: { slidesToShow: 2 }
            },
            {
                breakpoint: 576,
                settings: { slidesToShow: 1 }
            }
        ]
    });
});
  $(document).ready(function () {
    $(".partners-slider").slick({
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        prevArrow: '<button type="button" class="slick-prev"><img src="assets/images/slide_arrow_left.png" alt="Previous"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="assets/images/slide_arrow_right.png" alt="Next"></button>',
        responsive: [
            {
                breakpoint: 1200,
                settings: { slidesToShow: 3 }
            },
            {
                breakpoint: 992,
                settings: { slidesToShow: 2 }
            },
            {
                breakpoint: 576,
                settings: { slidesToShow: 1 }
            }
        ]
    });
});

  
 
})(jQuery);
