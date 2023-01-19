new WOW().init();

$(document).ready(function() {
    $(".servicesOne").mouseenter(function() {
        $("#services").css({
            "background-image": "url('https://images.pexels.com/photos/3970330/pexels-photo-3970330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
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
            "background-image": "url('https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
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
            "background-image": "url('https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
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