$(function () {
  "use strict";

  //====== Magnific Popup

//   $(".video-popup").magnificPopup({
//     type: "iframe",
//     // other options
//   });

//   //===== Magnific Popup

//   $(".image-popup").magnificPopup({
//     type: "image",
//     gallery: {
//       enabled: true,
//     },
//   });

  // scroll to top

  //Get the button
//Get the button
var mybutton = document.getElementById("topBtn");

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

  // function navFunction(x) {
  //   x.classList.toggle("change");
  // }

  // const btn = document.getElementById("btn");
  // const nav = document.getElementById("nav");
  // const navContent = document.getElementsByClassName("menulinks");

  // btn.addEventListener("click", () => {
  //   nav.classList.toggle("active");
  //   btn.classList.toggle("active");
  // });
  
// const navColor = document.getElementById("topHeader");

// // When the user scrolls down 30px from the top of the document, show the button
// window.onscroll = function () {
//   scrollChange();
// };

// function scrollChange() {
//   if (
//     document.body.scrollTop > 300 ||
//     document.documentElement.scrollTop > 300
//   ) {
//     navColor.style.backgroundColor = "#000";
//   } else {
//     navColor.style.backgroundColor = "rgba(0,0,0,0.3)";
//   }
// }


  var owl = $('.owl-carousel');
        owl.owlCarousel({
            loop: true,
            nav: true,
            animateOut: 'animate__fadeOutDown',
            animateIn: 'animate__fadeInDown',
            margin: 0,
            items: 4,
            navText: [
                '<i class="fa-solid fa-angle-left"></i>',
                '<i class="fa-solid fa-angle-right"></i>'
            ],
            responsive: {
                0: {
                    items: 1
                },
                500: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });
        owl.on('mousewheel', '.owl-stage', function(e) {
            if (e.deltaY > 0) {
                owl.trigger('next.owl');
            } else {
                owl.trigger('prev.owl');
            }
            e.preventDefault();
        });
});


function prealoader() {
        if ($('.preloader').length) {
            $('.preloader').fadeOut(500);
        }
    }
    // Window Load event
    jQuery(window).on('load', function() {
        (function($) {
            prealoader();
    })(jQuery);
});


 $(function() {
    $(document).scroll(function() {
      var $nav = $(".navbar-scroller");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });

