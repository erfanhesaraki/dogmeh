$(document).ready(function () {


    if($(window).width() < 768) {
       $(".main__Section-7__Item1").addClass("ProductWarranty");
     
    }    

 $('.SCat-Main > li').mouseenter(function () { 
   $('.SCat-Main > li').removeClass('show')
    $(this).addClass('show')

 });
    

$('#openMenu').click(function (e) { 
  // alert('hi erfan')
  $('.main__ShadowBox').css('transform', 'translateX(0%)' );
});
$('.phone__CtgBtn').click(function (e) { 
  // alert('hi erfan')
  $('.main__ShadowBox').css('transform', 'translateX(0%)' );
});

$('#openMenu').click(function (e) {
  $('.mainMenu').css('transform', 'translateX(0%)');
});
$('.phone__CtgBtn').click(function (e) {
  $('.mainMenu').css('transform', 'translateX(0%)');
});

$('#closeMenu').click(function (e) { 
  $('.main__ShadowBox').css('transform', 'translateX(100%)');
});

$('#closeMenu').click(function (e) { 
  $('.mainMenu').css('transform', 'translateX(100%)');
});
$('.main__ShadowBox').click(function (e) { 
  $('.main__ShadowBox').css('transform', 'translateX(100%)');
  $('.mainMenu').css('transform', 'translateX(100%)');
});


$('.search__ShadowBox').click(function (e) { 
  $('.CtgSearch').css('opacity', '1' , 'visibility', 'visible')
  $('.CtgSearch').removeClass('d-none')

});
$('.CtgSearch__closeIcon').click(function (e) { 
  $('.CtgSearch').css('opacity', '0' , 'visibility', 'hidden')
  $('.CtgSearch').addClass('d-none')
});

$(window).scroll(function() {
  let scrollTopValue = $(window).scrollTop();
  let windowWidth = $(window).width();
  if (scrollTopValue > 100 && windowWidth <= 992) {
    $('.control__Panel_Wrapper').removeClass('d-none');
  } else {
    $('.control__Panel_Wrapper').addClass('d-none');
  }
});






  $(".main__Slider").slick({
    dots: true,
    infinite: true,
    speed: 500,
    autoplaySpeed:3000 ,
    slidesToShow: 1,
    adaptiveHeight: true,
    fade: true,
    appendArrows:".append__Slider_Arrow",
    appendDots:".append__Slider_Dot",
    arrow:true,
  });

  $(".home__Product_List").slick({
    dots: false,
    infinite: true,
    adaptiveHeight: true,
    speed: 500,
    autoplaySpeed:500 ,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrow:true,
    responsive: [
      // {
      //   breakpoint: 1024,
      //   settings: {
      //     slidesToShow: 3,
      //     slidesToScroll: 3,
      //     infinite: true,
      //     dots: true
      //   }
      // },
      {
        breakpoint: 992,
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

  $('.ProductWarranty').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
  });




});
