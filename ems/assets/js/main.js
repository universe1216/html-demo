$(function () {
  "use strict";

  // read more btn toggle

  $(document).ready(function () {
    $(".read-more").click(function () {
      $(this).text($(this).text() == "Read More" ? "Read Less" : "Read More");
    });
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

// Read More Read Less

// var dayselect = document.getElementById("dayselect");
// var selectedDay = document.querySelectorAll(".selectedday");
// for (var i = 0; i < selectedDay.length; i++)
//   selectedDay[i].addEventListener("click", function handleClick() {
//     var text = this.getAttribute("title");
//     dayselect.innerHTML = text;
//   });
