$(function () {
  "use strict";

  //====== Magnific Popup

  $(".video-popup").magnificPopup({
    type: "iframe",
    // other options
  });

  //===== Magnific Popup

  $(".image-popup").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });

  // Go to Top

  // Scroll Event
  $(window).on("scroll", function () {
    var scrolled = $(window).scrollTop();
    if (scrolled > 300) $(".go-top").addClass("active");
    if (scrolled < 300) $(".go-top").removeClass("active");
  });

  // Click Event
  $(".go-top").on("click", function () {
    $("html, body").animate(
      {
        scrollTop: "0",
      },
      1200
    );
  });

  //=====  WOW active

  new WOW().init();

  //=====
});

// scroll to top

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

AOS.init();

const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar-scroller");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});


$('.owl-location').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  autoplay: true,
  navText: [
    '<i class="fa-solid fa-arrow-left-long"></i>',
    '<i class="fa-solid fa-arrow-right-long"></i>'
  ],
  dots: false,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 1
    }
  }
});

document.getElementById('playVid').onclick = function () {
  document.getElementById('vid').play();
};

function pauseVid() {
  document.getElementById('vid').pause();
}