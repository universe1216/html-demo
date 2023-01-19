new WOW().init();

$(document).ready(function() {
    $(".servicesOne").mouseenter(function() {
        $("#services").css({
            "background-image": "url('../images/service1.jpg')",
            "background-size": "cover",
            "transition": "0.6s ease"
        });
    });
    $(".servicesOne").mouseleave(function() {
        $("#services").css({
            "background": "black",
            "background-size": "cover",
            "transition": "0.6s ease"
        });
    });
    $(".servicesTwo").mouseenter(function() {
        $("#services").css({
            "background-image": "url('../images/service2.jpg')",
            "background-size": "cover",
            "transition": "0.6s ease"
        });
    });
    $(".servicesTwo").mouseleave(function() {
        $("#services").css({
            "background": "black",
            "background-size": "cover",
            "transition": "0.6s ease"
        });
    });
    $(".servicesThree").mouseenter(function() {
        $("#services").css({
            "background-image": "url('../images/service3.jpg')",
            "background-size": "cover",
            "transition": "0.6s ease"
        });
    });
    $(".servicesThree").mouseleave(function() {
        $("#services").css({
            "background": "black",
            "background-size": "cover",
            "transition": "0.6s ease"
        });
    });
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