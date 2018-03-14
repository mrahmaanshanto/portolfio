$(document).ready(function(){
    $("#testimonial-slider").owlCarousel({
        items:1,
        itemsDesktop:[1000,2],
        itemsDesktopSmall:[979,1],
        itemsTablet:[768,1],
        pagination:false,
        navigation:true,
        slideSpeed:1000,
        singleItem:true,
        transitionStyle:"goDown",
        navigationText:["",""],
        autoPlay:true
    });
});


$(document).ready(function(){
    // Cache the Window object
    $window = $(window);
                
   $('section[data-type="background"]').each(function(){
     var $bgobj = $(this); // assigning the object
                    
      $(window).scroll(function() {
                    
        // Scroll the background at var speed
        // the yPos is a negative value because we're scrolling it UP!                              
        var yPos = -($window.scrollTop() / $bgobj.data('speed')); 
        
        // Put together our final background position
        var coords = '50% '+ yPos + 'px';

        // Move the background
        $bgobj.css({ backgroundPosition: coords });
        
}); // window scroll Ends

 });    

}); 
/* 
 * Create HTML5 elements for IE's sake
 */

document.createElement("article");
document.createElement("section");




//for navigation
$(document).ready(function() {
        $(document).delegate('.open', 'click', function(event){
            $(this).addClass('oppenned');
            event.stopPropagation();
        })
        $(document).delegate('body', 'click', function(event) {
            $('.open').removeClass('oppenned');
        })
        $(document).delegate('.cls', 'click', function(event){
            $('.open').removeClass('oppenned');
            event.stopPropagation();
        });
    });

//portfolio shortening
$(function() {
        var selectedClass = "";
        $(".fil-cat").click(function(){ 
        selectedClass = $(this).attr("data-rel"); 
     $("#portfolio").fadeTo(100, 0.1);
        $("#portfolio div").not("."+selectedClass).fadeOut().removeClass('scale-anm');
    setTimeout(function() {
      $("."+selectedClass).fadeIn().addClass('scale-anm');
      $("#portfolio").fadeTo(300, 1);
    }, 300); 
         
    });
});