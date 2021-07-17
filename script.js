$(document).ready(function(){     
     $('.js--section-features').waypoint(function(direction){       
        if(direction == "down"){

                $('.head-ani').removeClass('animate__animated');
                $('.head-ani').removeClass('animate__slideInDown');
            
        $('nav').addClass('sticky');
        $('nav').addClass('animate__animated');
        $('.mnav-ani').removeClass('animate__fadeInRight');
        $('.mnav-ani').removeClass('animate__delay-1s');
        $('nav').addClass('animate__wobble');        
        }
        else{
            $('nav').removeClass('sticky');
            $('nav').removeClass('animate__wobble');
        }
    },{
        offset: "70px;"
    } 
     ) ; 

   });

   

//////////////////////////////////////////////////// main buttons scroll 

    $(".js--scroll-to-plans").click(function(){
    $('html,body').animate({scrollTop: $(".js--section-plans").offset().top},1500);

});

    $(".js--scroll-to-start").click(function(){
    $('html,body').animate({scrollTop: $(".js--section-showhoe").offset().top},1500);

});


    // nav buttons scroll 
$(".del").click(function(){
    $('html,body').animate({scrollTop: $(".section-meals").offset().top},500);
});

$(".how").click(function(){
    $('html,body').animate({scrollTop: $(".section-steps").offset().top},500);
});

$(".city").click(function(){
    $('html,body').animate({scrollTop: $(".section-cities").offset().top},500);
});

$(".review").click(function(){
    $('html,body').animate({scrollTop: $(".section-testimonials").offset().top},500);
});




////////////////////////////////////////////////////////////// content fade in

$('.phone-mov').waypoint(function(direction){
    $('.phone-mov').addClass('animate__animated');
    $('.phone-mov').addClass('animate__fadeInLeft');

},{
    offset: "50%"
});

$('.js--wp-1').waypoint(function(direction){
    $('.js--wp-1').addClass('animate__animated');
    $('.js--wp-1').addClass('animate__fadeInUp');
},{
    offset: "50%"
});

$('.city-ani').waypoint(function(direction){
    $('.city-ani').addClass('animate__animated');
    $('.city-ani').addClass('animate__fadeInUp');
},{
    offset: "50%"
});




/////////////////////////////////////////////////////////////////////// header

// $('.sticky-ani').waypoint(function(direction){
//     $('.sticky-ani').addClass('animate__animated');
//     $('.sticky-ani').addClass('animate__swing');
// },{

// });

$('.head-ani').waypoint(function(direction){
    $('.head-ani').addClass('animate__animated');
    $('.head-ani').addClass('animate__slideInDown');
},{

});



$('.mnav-ani').waypoint(function(direction){
    $('.mnav-ani').addClass('animate__animated');
    $('.mnav-ani').addClass('animate__fadeInRight');
    $('.mnav-ani').addClass('animate__delay-1s');
},{
    
    offset:"50%"
});



$('.hero-text-box ').waypoint(function(direction){
    $('.hero-text-box ').addClass('animate__animated');
    $('.hero-text-box ').addClass('animate__fadeInUp');
    $('.hero-text-box ').addClass('animate__delay-1s');
},{
    
    offset:"100%"
});



//////////////////////////////////////////////////////////// Page headings

$('.nice').waypoint(function(direction){
    $('.nice').addClass('animate__animated');
    $('.nice').addClass('animate__bounce')
},{
    offset: "50%"
});

$('.howit').waypoint(function(direction){
    $('.howit').addClass('animate__animated');
    $('.howit').addClass('animate__bounce');
},{
    offset: "50%"
});

$('.happy').waypoint(function(direction){
    $('.happy').addClass('animate__animated');
    $('.happy').addClass('animate__bounce');
},{
    offset: "50%"
});

$('.in-city').waypoint(function(direction){
    $('.in-city').addClass('animate__animated');
    $('.in-city').addClass('animate__bounce');
},{
    offset: "50%"
});

$('.cant-live').waypoint(function(direction){
    $('.cant-live').addClass('animate__animated');
    $('.cant-live').addClass('animate__bounce');
},{
    offset: "50%"
});

// $('.mnav-ani').waypoint(function(direction){
//     $('.mnav-ani').removeClass('animate__animated');
//     $('.mnav-ani').removeClass('animate__fadeInRight');
//     $('.mnav-ani').removeClass('animate__delay-1s');
// },{
    
//     offset:"50%"
// });