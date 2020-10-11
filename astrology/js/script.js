$(document).ready(function () {
  $('.hamburger-menu').click(function () {
    $('.navigation').toggleClass('change');
  });

  lightbox.option({
    wrapAround: true
  });

  $(window).scroll(function () {
    let position = $(this).scrollTop();

    if (position >= 350) {
      $('.gallery').addClass('change');
    } else {
      $('.gallery').removeClass('change');
    }
  });

  $('.writers-accordion').click(function (event) {
    if (event.target.id.split('-')[0] === 'button') {
      $('#book-1').attr('src', 'img/writers/' + event.target.id.split('-')[1] + '-book1.jpg');
      $('#book-2').attr('src', 'img/writers/' + event.target.id.split('-')[1] + '-book2.jpg');
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
