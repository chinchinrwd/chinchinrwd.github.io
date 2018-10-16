$(document).ready(function () {
    //initialize swiper when document ready
    var mySwiper = new Swiper ('#home .swiper-container', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      // If we need pagination
    pagination: {
        el: '#home .swiper-pagination',
      },
  
      // Navigation arrows
      navigation: {
        nextEl: '#home .swiper-button-next',
        prevEl: '#home .swiper-button-prev',
      },
  
      // And if we need scrollbar
      scrollbar: {
        el: '#home .swiper-scrollbar',
      }
    })
  });
  $(document).ready(function () {
    //initialize swiper when document ready
    var mySwiper = new Swiper ('#movie_time .swiper-container', {
      // Optional parameters
      speed:1000,
      slidesPerView: 4,
      spaceBetween: 30,
    
      direction: 'horizontal',
      loop: true,
      // If we need pagination
      navigation: {
        nextEl: '#movie_time .swiper-button-next-item',
        prevEl: '#movie_time .swiper-button-prev-item',
      },
  
     
    })
  });