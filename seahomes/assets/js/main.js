
$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar-scroller");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});

// Go to Top

// scroll to top

//Get the button
var mybutton = document.getElementById("topBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 800 ||
    document.documentElement.scrollTop > 800
  ) {
    mybutton.style.opacity = "1";
    mybutton.style.display = "block";
  } else {
    mybutton.style.opacity = "0";
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

Splitting();
AOS.init();
function navFunction(x) {
  x.classList.toggle("change");
}
const btn = document.getElementById("btn");
const nav = document.getElementById("nav");
btn.addEventListener("click", () => {
  nav.classList.toggle("active");
  btn.classList.toggle("active");
});
document.getElementById('playVid').onclick = function () {
  document.getElementById('vid').play();
};
function pauseVid() {
  document.getElementById('vid').pause();
}
$('.owl-members').owlCarousel({
  loop: true,
  margin: 20,
  nav: true,
  navText: [
    '<i class="fa-solid fa-arrow-left"></i>',
    '<i class="fa-solid fa-arrow-right"></i>'
  ],
  dots: false,
  center: true,
  autoplay: true,
  items: 2
});
$('.owl-slider').owlCarousel({
  loop: true,
  margin: 20,
  nav: true,
  navText: [
    '<i class="fa-solid fa-arrow-left"></i>',
    '<i class="fa-solid fa-arrow-right"></i>'
  ],
  dots: false,
  center: true,
  autoplay: false,
  items: 1
});
const move = document.querySelector('.box');
const moveTwo = document.querySelector('.boxTwo');
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  const val = scrolled * 0.2;
  move.style.transform = `translateX(${-0.05 * val}%)`;
  moveTwo.style.transform = `translateX(${0.05 * val}%)`;
});
var myVid = document.querySelector('.video-thumb');
window.addEventListener('scroll', () => {
  var scrolled = window.scrollY - myVid.clientHeight;
  var val = scrolled * 0.25;
  myVid.style.transform = `scale(${-0.09 * val}%)`;
  myVid.style.borderRadius = `${0.06 * val}%`;
});

