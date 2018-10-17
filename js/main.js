
$(document).ready(function () {

  $('.anchor').on('click', function (event) {
      event.preventDefault();
      $('html, body').animate({
          scrollTop: Math.ceil($($.attr(this, 'href')).offset().top - 88)
      }, 600);
      $('.collapse').collapse('hide')
  });

});


$(document).ready(function () {
    //initialize swiper when document ready
    var mySwiper = new Swiper ('#home_swiper', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      autoplay: {
        delay: 5000,
      },
      
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
    var mySwiper = new Swiper ('#movie_time_swiper2', {
      // Optional parameters
      speed:1000,
      slidesPerView: 4,
      spaceBetween: 40,
      
      direction: 'horizontal',
      freeMode:true,
      
      // If we need pagination
      navigation: {
        nextEl: '#movie_time_swiper2 .swiper-button-next-item',
        prevEl: '#movie_time_swiper2 .swiper-button-prev-item',
      },
      breakpoints: {
        768: {
          slidesPerView: 1,
          spaceBetween: 30,
        }
      }
     
    })
    var mySwiper = new Swiper ('#movie_time_swiper1', {
      // Optional parameters
      speed:1000,
      slidesPerView: 4,
      spaceBetween: 40,

      direction: 'horizontal',
      freeMode:true,
      
      // If we need pagination
      navigation: {
        nextEl: '#movie_time_swiper1 .swiper-button-next-item',
        prevEl: '#movie_time_swiper1 .swiper-button-prev-item',
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
    $("#movie_time_swiper2").addClass('d-none');
    
    $('.filter').click(function (e) { 
      e.preventDefault();
      $('.filter.bg-danger').removeClass('bg-danger')
      $(this).addClass('bg-danger');
      if($(this).attr('data-filter') == 1){
        $('#movie_time_swiper2').addClass('d-none');
        $('#movie_time_swiper1').removeClass('d-none');
      }else{
        $('#movie_time_swiper1').addClass('d-none');
        $('#movie_time_swiper2').removeClass('d-none');
      }
      
    });
  });



  $(document).ready(function () {
    $('.nav-link').click(function (e) {
    e.preventDefault();
    $('.nav-link.active').removeClass('active');
    $(this).addClass('active');
     
    });
    $('#myModal').modal('hide');
    });

    // $('body').scrollspy({ target: 'nav' })
function get_information(){
  $.getJSON("/json/information.json",
    function (data) {
        console.log(data)
    }
  );
}

