$(document).ready(function() {
    $('.orderBy').niceSelect();



// start CatNav__item__Arrow


  $(".CatNav__item__Arrow").click(function(e){
    e.preventDefault(); 
    let $subMenu = $(this).siblings(".CatNav__item__SubMenu");
    let $arrowIcon = $(this).find(".fa-chevron-down");
    $subMenu.slideToggle("slow");
    $subMenu.css('display', 'flex');
    $arrowIcon.toggleClass('TogTransform');
    $(this).parent().toggleClass('TogBtnB');
});

// end CatNav__item__Arrow


// $(".product-Right__SlideDown").click(function(e){
//   e.preventDefault(); 
//   let $subMenu = $(this).find(".product-Right__content");
//   let $arrowIcon = $(this).find(".fa-chevron-down");
//   $subMenu.slideToggle("slow");
//   $subMenu.css('display', 'flex');
//   $arrowIcon.toggleClass('TogTransform');
//   $(this).parent().toggleClass('TogBtnB');
// });






  });


  
    


    


    



  
