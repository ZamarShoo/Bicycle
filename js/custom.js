setTimeout(()=>popupThanks.hidden = true, 0);


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


$(function(){
  $("#input-number").mask("+7 (999) 999-99-99", {placeholder: " "});
});

$(function(){
  $("#input-num").mask("+7 (999) 999-99-99", {placeholder: " "});
});

function mask() {$(function(){
  $("#cellForm").mask("+7 (999) 999-99-99", {placeholder: " "});
});}

function noMask() {$(function(){
  $("#cellForm").unmask();
});}

function callForm(type, needMask) {
  if(needMask == mask) { mask() } else { noMask() }
  document.getElementById('cellForm').placeholder=`${type}`;
}

function popupClose() {
  setTimeout(()=>popupThanks.hidden = true, 2000);
}

function popupOpen() {
  setTimeout(()=>popupThanks.hidden = false, 000);
  popupClose();
}