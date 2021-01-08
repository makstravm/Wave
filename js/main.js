$(function() {

  $('.menu__btn, .menu a').on('click', function() {
    $('.header').toggleClass('header-active');

  });

  $(".menu a").on("click", function(event) {
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
});