$(function() {
    $('.reviews').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        appendArrows:'.pre-and-next',
        prevArrow: '<button class="pre-next pre"></button>',
        nextArrow: '<button class="pre-next next"></button>',
        appendDots: '.for-dots',
        dotsClass: '.dots-for',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    });
})