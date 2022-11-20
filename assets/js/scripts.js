$(document).ready(function(){
     //mobile-menu
     $('.mobile-icon').click(function(){
        $('.menu-items').slideToggle()
       });


    //carousel
    $('.slider').owlCarousel({
        items:1,
        loop:true,
        autoplay:true,
        autoplayTimeout:3000,
        nav:true,
    });


});