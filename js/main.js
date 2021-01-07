$(function() {

  $('.menu__btn').on('click', function() {

    $('.header').toggleClass('header-active');

  });


  var mixer = mixitup('.gallery__content');

  $('.blog__slider').slick({
    dots: true,
    arrows: false,

  });
});