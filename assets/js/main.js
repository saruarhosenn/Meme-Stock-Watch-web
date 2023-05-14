(function ($) {
  "use strict";
  /* ======= Sticky Menu ======= */
  var windows = $(window);
  var sticky = $(".sticky-header");
  windows.on("scroll", function () {
    var scroll = windows.scrollTop();
    if (scroll < 250) {
      sticky.removeClass("stick");
    } else {
      sticky.addClass("stick");
    }
  });

  /* ===== Counter Up JS ===== */
  $(".counter").counterUp({
    delay: 10,
    time: 1000,
  });

  /* ===== Testimonial Silder JS ===== */
  $(".testimonial-slider").owlCarousel({
    loop: true,
    items: 2,
    margin: 90,
    nav: true,
    autoplay: true,
    autoplaySpeed: 2000,
    autoplayTimeout: 6000,
    responsiveClass: true,
    autoplayHoverPause: true,
    navSpeed: 2000,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 2,
        margin: 90,
      },
    },
  });

  /* ===== Wow JS ===== */
  new WOW().init();
})(jQuery);
