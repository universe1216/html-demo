$(function () {
    "use strict";

    // read more btn toggle

    $(document).ready(function () {
        $(".read-more").click(function () {
            $(this).text($(this).text() == 'Read More' ? 'Read Less' : 'Read More');
        });
    });



});

$('.grid').isotope({
    // options...
    itemSelector: '.grid-item',
    masonry: {
        columnWidth: 300
    }
});

// insta slider

const slider = tns({
    container: '.insta-slider',
    loop: true,
    items: 6,
    slideBy: '1',
    nav: false,
    controls: false,
    autoplay: true,
    speed: 400,
    autoplayButtonOutput: false,
    mouseDrag: true,
    lazyload: true,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 2,
        },

        768: {
            items: 3,
        },
        991: {
            items: 4,
        },
        1199: {
            items: 5,
        }
    }

});

// blog slider

const blogCarousel = tns({
    container: '.blog-slider',
    loop: true,
    items: 3,
    slideBy: '1',
    nav: true,
    controls: true,
    autoplay: true,
    speed: 400,
    autoplayButtonOutput: false,
    mouseDrag: true,
    controlsContainer: "#customize-controls",
    lazyload: true,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 1,
        },

        768: {
            items: 1,
        },
        991: {
            items: 1,
        }
    }
});

// testimonial slider

const testimonialCarousel = tns({
    container: '.testimonial-slider',
    loop: true,
    items: 3,
    slideBy: '1',
    nav: true,
    controls: true,
    autoplay: true,
    speed: 400,
    autoplayButtonOutput: false,
    mouseDrag: true,
    lazyload: true,
    controlsContainer: "#testimonial-controls",
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 1,
        },
        768: {
            items: 1,
        },
        991: {
            items: 1,
        }
    }
});

// services slider

const servicesCarousel = tns({
    container: '.services-slider',
    loop: true,
    items: 3,
    slideBy: '1',
    center: 'true',
    nav: false,
    controls: false,
    autoplay: true,
    speed: 400,
    autoplayButtonOutput: false,
    mouseDrag: true,
    lazyload: true,
    responsive: {
        0: {
            items: 1,
        },
        576: {
            items: 1,
        },
        768: {
            items: 2,
        },
        991: {
            items: 3,
        }
    }
});


$(function () {
    $(document).scroll(function () {
        var $nav = $(".navbar-scroller");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});

jQuery(function ($) {
    var path = window.location.href; $('.nav-item a').each(function () {
        if (this.href == path) {

            $(this).addClass('active');
        }
    });
});



// $(document).ready(function () {
//     setTimeout(function () {

//         $(window).scroll(function () {
//             var top_of_element = $(".carrier").offset().top + 800;
//             var bottom_of_element = $(".carrier").offset().top + $(".carrier").outerHeight() - 1000;
//             var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
//             var top_of_screen = $(window).scrollTop();

//             if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)) {
//                 $(".mockIt").css({
//                     "mix-blend-mode": "difference",
//                     "transition": "all 1s ease"
//                 });
//                 $(".hideIt").css({
//                     "display": "block",
//                     "opacity": "1",
//                     "transition": "all 1s ease"
//                 });

//             } else {
//                 $(".mockIt").css({
//                     "mix-blend-mode": "normal",
//                     "transition": "all 1s ease"
//                 });
//                 $(".hideIt").css({
//                     "display": "none",
//                     "opacity": "0",
//                     "transition": "all 1s ease"
//                 });
//             }
//         });
//     }, 200);
// });


AOS.init();

//Get the button
const mybutton = document.getElementById("topBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 200 ||
        document.documentElement.scrollTop > 200
    ) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


// $('.parallax-window').parallax({imageSrc: '/path/to/image.jpg'});


// Isotope Active Masonry Gallery
$('.gallery-items').imagesLoaded(function () {
    // Add isotope on click filter function
    $('.gallery-filter li').on('click', function () {
        $(".gallery-filter li").removeClass("active");
        $(this).addClass("active");
        var selector = $(this).attr('data-filter');
        $(".gallery-items").isotope({
            filter: selector
            , animationOptions: {
                duration: 750
                , easing: 'linear'
                , queue: false
                ,
            }
        });
        return false;
    });
    $(".gallery-items").isotope({
        itemSelector: '.single-item'
        , layoutMode: 'masonry'
        ,
    });
});

// Animations
var contentWayPoint = function () {
    var i = 0;
    $('.animate-box').waypoint(function (direction) {
        if (direction === 'down' && !$(this.element).hasClass('animated')) {
            i++;
            $(this.element).addClass('item-animate');
            setTimeout(function () {
                $('body .animate-box.item-animate').each(function (k) {
                    var el = $(this);
                    setTimeout(function () {
                        var effect = el.data('animate-effect');
                        if (effect === 'fadeIn') {
                            el.addClass('fadeIn animated');
                        }
                        else if (effect === 'fadeInLeft') {
                            el.addClass('fadeInLeft animated');
                        }
                        else if (effect === 'fadeInRight') {
                            el.addClass('fadeInRight animated');
                        }
                        else {
                            el.addClass('fadeInUp animated');
                        }
                        el.removeClass('item-animate');
                    }, k * 200, 'easeInOutExpo');
                });
            }, 100);
        }
    }, {
        offset: '85%'
    });
};
$(function () {
    contentWayPoint();
});

// YouTubePopUp
// $("a.vid").YouTubePopUp();

// const counterUp = window.counterUp.default

// const callback = entries => {
// 	entries.forEach( entry => {
// 		const el = entry.target
// 		if ( entry.isIntersecting && ! el.classList.contains( 'is-visible' ) ) {
// 			counterUp( el, {
// 				duration: 2000,
// 				delay: 16,
// 			} )
// 			el.classList.add( 'is-visible' )
// 		}
// 	} )
// }

// const IO = new IntersectionObserver( callback, { threshold: 1 } )

// const el = document.querySelector( '.counter-section' )
// IO.observe( el )

// counter section

var a = 0;
$(window).scroll(function () {

    var oTop = $('#counter').offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
        $('.counter-value').each(function () {
            var $this = $(this),
                countTo = $this.attr('data-count');
            $({
                countNum: $this.text()
            }).animate({
                countNum: countTo
            },

                {

                    duration: 2000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $this.text(this.countNum);
                        //alert('finished');
                    }

                });
        });
        a = 1;
    }

});

jQuery(function ($) {
    var path = window.location.href; $('.nav-item a').each(function () {
        if (this.href == path) {

            $(this).addClass('active');
        }
    });
});


