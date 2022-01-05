const prevBtn = document.querySelectorAll(".prev-slide-btn");
const nextBtn = document.querySelectorAll(".next-slide-btn");
// const slideHeight = document.querySelector(".box-news__slides");

// const slideNav = document.querySelectorAll(".moving-slide-btn");
// slideNav.style = 
// $(window).bind('resize', function(){
//     console.log($('.box-news__content-img').css('height'))
//     const slideHeight = $('.box-news__content-img').css('height');
//     $(".moving-slide-btn").height($('.box-news__content-img').css('height'));
// })

// first category
$(document).ready(function(){
    $('.category-1').owlCarousel({
        loop:true,
        margin: 0,
        nav:false,
        autoplay: true,
        autoplaytime: 3000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
        })
    var owl = $('.category-1');
    owl.owlCarousel();
    // Go to the next item
    $('.prev-slide-btn-1').click(function() {
        owl.trigger('prev.owl.carousel');
    })
    // Go to the previous item
    $('.next-slide-btn-1').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl.trigger('next.owl.carousel');
    })
})

// seconde category
$(document).ready(function(){
    $('.category-2').owlCarousel({
        loop:true,
        margin: 0,
        nav:false,
        autoplay: true,
        autoplaytime: 3000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
        })
    var owl = $('.category-2');
    owl.owlCarousel();
    // Go to the next item
    $('.prev-slide-btn-2').click(function() {
        owl.trigger('prev.owl.carousel');
    })
    // Go to the previous item
    $('.next-slide-btn-2').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl.trigger('next.owl.carousel');
    })
})

//third category
$(document).ready(function(){
    $('.category-3').owlCarousel({
        loop:true,
        margin: 0,
        nav:false,
        autoplay: true,
        autoplaytime: 3000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
        })
    var owl = $('.category-3');
    owl.owlCarousel();
    // Go to the next item
    $('.prev-slide-btn-3').click(function() {
        owl.trigger('prev.owl.carousel');
    })
    // Go to the previous item
    $('.next-slide-btn-3').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl.trigger('next.owl.carousel');
    })
})

//fourth category
$(document).ready(function(){
    $('.category-4').owlCarousel({
        loop:true,
        margin: 0,
        nav:false,
        autoplay: true,
        autoplaytime: 3000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
        })
    var owl = $('.category-4');
    owl.owlCarousel();
    // Go to the next item
    $('.prev-slide-btn-4').click(function() {
        owl.trigger('prev.owl.carousel');
    })
    // Go to the previous item
    $('.next-slide-btn-4').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl.trigger('next.owl.carousel');
    })
})