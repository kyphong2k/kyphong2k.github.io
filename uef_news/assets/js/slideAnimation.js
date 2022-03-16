const prevBtn = document.querySelectorAll(".prev-slide-btn");
const nextBtn = document.querySelectorAll(".next-slide-btn");
// first category
$(document).ready(function(){
    $('.category-1').owlCarousel({
        loop:true,
        margin: 10,
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
        margin: 10,
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
    var owl2 = $('.category-2');
    owl2.owlCarousel();
    // Go to the next item
    $('.prev-slide-btn-2').click(function() {
        owl2.trigger('prev.owl.carousel');
    })
    // Go to the previous item
    $('.next-slide-btn-2').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl2.trigger('next.owl.carousel');
    })
})

//third category
$(document).ready(function(){
    $('.category-3').owlCarousel({
        loop:true,
        margin: 10,
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
    var owl3 = $('.category-3');
    owl3.owlCarousel();
    // Go to the next item
    $('.prev-slide-btn-3').click(function() {
        owl3.trigger('prev.owl.carousel');
    })
    // Go to the previous item
    $('.next-slide-btn-3').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl3.trigger('next.owl.carousel');
    })
})

//fourth category
$(document).ready(function(){
    $('.category-4').owlCarousel({
        loop:true,
        margin: 10,
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
    var owl4 = $('.category-4');
    owl4.owlCarousel();
    // Go to the next item
    $('.prev-slide-btn-4').click(function() {
        owl4.trigger('prev.owl.carousel');
    })
    // Go to the previous item
    $('.next-slide-btn-4').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl4.trigger('next.owl.carousel');
    })
})

// event-slide-box
$(document).ready(function(){
    $('.event-box').owlCarousel({
        loop:true,
        margin: 20,
        nav:false,
        autoplay: true,
        autoplaytime: 3000,
        responsive:{
            0:{
                items:1
            },
            740:{
                items:2
            },
            1000:{
                items:3
            }
        }
        })
    var owl5 = $('.event-box');
    owl5.owlCarousel();
    // Go to the next item
    $('.prev-slide-event').click(function() {
        owl5.trigger('prev.owl.carousel');
    })
    // Go to the previous item
    $('.next-slide-event').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl5.trigger('next.owl.carousel');
    })
})
//post-details__slide-img

$(document).ready(function(){
    $('.post-details__slides').owlCarousel({
        loop:true,
        margin: 20,
        nav:false,
        autoplay: true,
        autoplaytime: 3000,
        responsive:{
            0:{
                items:1
            },
            740:{
                items:1
            },
            1000:{
                items:1
            }
        }
        })
    var owl = $('.post-details__slides');
    owl.owlCarousel();
})

// event-details__slide-img
$(document).ready(function(){
    $('.post-event__slides').owlCarousel({
        loop:true,
        margin: 20,
        nav:false,
        autoplay: true,
        autoplaytime: 3000,
        responsive:{
            0:{
                items:1
            },
            740:{
                items:1
            },
            1000:{
                items:1
            }
        }
        })
    var owl = $('.post-details__slides');
    owl.owlCarousel();
})