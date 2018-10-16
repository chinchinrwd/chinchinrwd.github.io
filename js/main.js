// $(window).scroll(function(){
//   var now = $(window).scrollTop();
//   if(now != 0){
//     $('nav').addClass('fixed');
//     $('#home').css('padding-top',$('nav').height())
//   }else{
//     $('nav').removeClass('fixed');
//     $('#home').css('padding-top','0')
//   }
// });
$(document).ready(function () {

  $('.anchor').on('click', function (event) {
      event.preventDefault();
      $('html, body').animate({
          scrollTop: Math.ceil($($.attr(this, 'href')).offset().top - 88)
      }, 600);
      $('.collapse').collapse('hide')
  });

  // $('.back').on('click', function (event) {
  //     event.preventDefault();
  //     $('html, body').animate({
  //         scrollTop: 0
  //     }, 600);
  // });
});


$(document).ready(function () {
    //initialize swiper when document ready
    var mySwiper = new Swiper ('#home_swiper', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      // If we need pagination
    pagination: {
        el: '#home_swiper .swiper-pagination',
      },
  
      // Navigation arrows
      navigation: {
        nextEl: '#home_swiper .swiper-button-next',
        prevEl: '#home_swiper .swiper-button-prev',
      },
  
      // And if we need scrollbar
      scrollbar: {
        el: '#home_swiper .swiper-scrollbar',
      }
    })
  });
  $(document).ready(function () {
    //initialize swiper when document ready
    var mySwiper = new Swiper ('#movie_time_swiper', {
      // Optional parameters
      speed:1000,
      slidesPerView: 4,
      spaceBetween: 40,
    
      direction: 'horizontal',
      loop: true,
      // If we need pagination
      navigation: {
        nextEl: '#movie_time_swiper .swiper-button-next-item',
        prevEl: '#movie_time_swiper .swiper-button-prev-item',
      },
      breakpoints: {
        768: {
          slidesPerView: 1,
          spaceBetween: 30,
        }
      }
     
    })
  });



  $(document).ready(function () {
    $('.nav-link').click(function (e) {
    e.preventDefault();
    $('.nav-link.active').removeClass('active');
    $(this).addClass('active');
     
    });
     
    });
  