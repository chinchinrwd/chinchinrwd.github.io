
$(document).ready(function () {
    //aos.js
    AOS.init({
        delay: 100,
        placement:'bottom-bottom'
    });
    //錨點滑動
    //先宣告才不會在mobile跑掉
    var nav_height = $('.navbar').height();

    $('.anchor').on('click', function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: Math.ceil($($.attr(this, 'href')).offset().top - nav_height)
        }, 500);
        $('.collapse').collapse('hide')
    });

});
window.addEventListener('load', AOS.refresh);
$(document).ready(function () {
    //initialize swiper when document ready
    var mySwiper = new Swiper('#home_swiper', {
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
    var mySwiper = new Swiper('#movie_time_swiper2', {
        // Optional parameters
        speed: 1000,
        slidesPerView: 4,
        spaceBetween: 40,
        loop: true,
        direction: 'horizontal',
        freeMode: true,

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
    var mySwiper = new Swiper('#movie_time_swiper1', {
        // Optional parameters
        speed: 1000,
        slidesPerView: 4,
        spaceBetween: 40,
        loop: true,
        direction: 'horizontal',
        freeMode: true,

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
    $(('#movie_time_swiper2')).addClass('d-none');
    $('.filter').click(function (e) {
        e.preventDefault();
        var val = $(this).attr('data-filter');
        $('.filter.bg-danger').removeClass('bg-danger')
        $(this).addClass('bg-danger');
        $(val).addClass('d-none');
        if (val == '#movie_time_swiper2') {
            $('#movie_time_swiper1').removeClass('d-none');
        } else {
            $('#movie_time_swiper2').removeClass('d-none');
        }

    });
    
});



// $('body').scrollspy({ target: 'nav' })
// function get_information() {
//     $.getJSON("/json/information.json",
//         function (data) {
//             console.log(data)
//         }
//     );
// }

