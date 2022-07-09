// Header transition
window.onscroll = function() {
    let header = document.querySelector(".main-header");
    let sticky = document.querySelector(".hero-banner").offsetTop + 125;

    (window.pageYOffset > sticky) ? header.classList.add("isSticky"): header.classList.remove("isSticky");
}

// slider
$(document).ready(function(){
    $('.event-slider').slick({
        centerMode: true,
        arrows: false,
        dots: true,
        centerPadding: '0',
        slidesToShow: 3,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                centerMode: false,
                slidesToShow: 2
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1
              }
            }
          ]        
    });
  });