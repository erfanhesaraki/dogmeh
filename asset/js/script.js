$(document).ready(function(){
    $('.main__Slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        fade:true,
      });  
      
    

      $('.home__Product_List').slick({
        dots: false,
        infinite: true,
        speed: 200,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: false,
            }
          },
          {
            breakpoint: 768,
            settings: {
              infinite: true,
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 576,
            settings: {
              infinite: true,
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }

        ]
      });
                      
      $('.home__Plugins_List').slick({
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
            }
          },
          {
            breakpoint: 768,
            settings: {
              infinite: true,
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
        

        ]
      });
                      
      
  });
      
