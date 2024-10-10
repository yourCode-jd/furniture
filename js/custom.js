$(document).ready(function () {
  // menu toggle
  $(".toggle_icon").click(function () {
    $("body").toggleClass("nav_open");
  });
  //
  $(".hero_banner").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    centerMode: false,
    focusOnSelect: true,
    rows: 0,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  });

  $(".testimonial_list").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    rows: 0,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});
