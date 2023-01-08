
$(function() {
  $(document).scroll(function() {
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

// Read More Read Less

