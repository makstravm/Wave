$(function () {

  $('.menu__btn, .menu a').on('click', function () {
    $('.header').toggleClass('header-active');

  });

  $(".menu a, .logo, .footer__link, .go-top").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1000);
  });


  var mixer = mixitup('.gallery__content');

  $('.blog__slider').slick({
    dots: true,
    arrows: false,

  });

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 100) {
      $(".header__top, .go-top").addClass("--active");
    } else {
      $(".header__top, .go-top").removeClass("--active");
    }
  });
});