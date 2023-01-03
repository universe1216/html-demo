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

  ///===== Progress Bar

  if ($(".progress_line").length) {
    $(".progress_line").appear(
      function () {
        var el = $(this);
        var percent = el.data("width");
        $(el).css("width", percent + "%");
      },
      {
        accY: 0,
      }
    );
  }

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

function navFunction(x) {
  x.classList.toggle("change");
}

const btn = document.getElementById("btn");
const nav = document.getElementById("nav");
const navContent = document.getElementsByClassName("menulinks");

btn.addEventListener("click", () => {
  nav.classList.toggle("active");
  btn.classList.toggle("active");
});
