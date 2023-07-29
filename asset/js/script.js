$(document).ready(function () {

  $(".header__button__inner").hover(
    function () {
      $(".header__button__out").removeClass("hidden");
    },
    function () {
      $(".header__button__out").addClass("hidden");
    }
  );

  $(".main__Slider").slick({
    dots: true,
    infinite: true,
    speed: 3000,
    autoplaySpeed:3000 ,
    slidesToShow: 1,
    adaptiveHeight: true,
    fade: true,
    appendArrows:".append__Slider_Arrow",
    appendDots:".append__Slider_Arrow",
    arrow:true,
  });

  $(".home__Product_List").slick({
    dots: false,
    infinite: true,
    speed: 3000,
    autoplaySpeed:500 ,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrow:true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
 
  });

  $(".home__Plugins_List").slick({
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,

          dots: false,
        },
      },
    ],
  });
});
