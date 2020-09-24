/* ====================================================
                        SERVICES
==================================================== */
$(function () {
  // animate on scroll
  new WOW().init();
});

/* ====================================================
                        WORK
==================================================== */
$(function () {
  $('#work').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',
    gallery: {
      enabled: true
    }
  });
});

/* ====================================================
                        TEAM
==================================================== */
$(function () {
  $('#team-members').owlCarousel({
    items: 3,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 2
      },
      768: {
        items: 3
      }
    }
  });
});

/* ====================================================
                        TESTIMONIALS
==================================================== */
$(function () {
  $('#customers-testimonials').owlCarousel({
    items: 1,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true
  });
});


/* ====================================================
                        NAVIGATION
==================================================== */
// Show/Hide transparent black navigation
$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() < 50) {
      // hide nav
      $('nav').removeClass('ww-top-nav');
      //   $('#back-to-top').fadeOut();
    } else {
      // show nav
      $('nav').addClass('ww-top-nav');
      //   $('#back-to-top').fadeIn();
    }
  });
});
// Smooth scrolling
$(function () {
  $('a.smooth-scroll').click(function (event) {
    event.preventDefault();

    var section = $(this).attr('href');

    $('html, body').animate(
      {
        scrollTop: $(section).offset().top - 64
      },
      1250,
      'easeInOutExpo'
    );
  });
});

// Top scroll
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
      $('.top-scroll').fadeIn();
    } else {
      $('.top-scroll').fadeOut();
    }
  });
});

/* ========== CLOSE MOBILE NAV ON CLICK ========== */

$(document).ready(function () {
  // when document loads completely.
  $(document).click(function (event) {
    // click anywhere
    var clickover = $(event.target); // get the target element where you clicked
    var _opened = $('.navbar-collapse').hasClass('show'); // check if element with 'navbar-collapse' class has a class called show. Returns true and false.
    if (_opened === true && !clickover.hasClass('navbar-toggler')) {
      // if _opened is true and clickover(element we clicked) doesn't have 'navbar-toggler' class
      $('.navbar-toggler').click(); // toggle the navbar; close the navbar menu in mobile.
    }
  });
});
