$(document).ready(function(){
    $(".header-nav__btn").click(function(){
        $("#panel").slideToggle("slow");
        $(this).toggleClass("active");
    });
});

$(function() {
 $(".owl-carousel").owlCarousel({
 	items: 1,
 	loop:true,
 });
});