var mybutton = document.getElementById("topBtn");
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
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
function prealoader() {
  if ($('.preloader').length) {
    $('.preloader').fadeOut(500);
  }
}
jQuery(window).on('load', function () {
  (function ($) {
    prealoader();
  })(jQuery);
});
$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar-scroller");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});
AOS.init();
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});
$('.owl-footer').owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  animateOut: 'animate__lightSpeedOutLeft',
  animateIn: 'animate__lightSpeedInRight',
  autoplay: true,
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
