
 
jQuery(document).ready(function() {
 
var offset = 800;
 
var duration = 200;
 
jQuery(window).scroll(function() {
 
if (jQuery(this).scrollTop() > offset) {
 
jQuery(".arrowbutton").fadeIn(duration);
 
} else {
 
jQuery(".arrowbutton").fadeOut(duration);
 
}
 
});
 
 
 
jQuery(".arrowbutton").click(function(event) {
 
event.preventDefault();
 
jQuery("html, body").animate({scrollTop: 0}, duration);
 
return false;
 
})
 
});
 

/* Scroll buttons*/

$('.js--scroll-to-about').click(function(){
   $('html, body').animate({scrollTop: $('.js--section-about').offset().top},1000); 
});

$('.js--scroll-to-below').click(function(){
   $('html, body').animate({scrollTop: $('.js--section-about').offset().top},1000); 
});

$('.js--scroll-to-services').click(function(){
   $('html, body').animate({scrollTop: $('.js--section-services').offset().top},1000); 
});

$('.js--scroll-to-myser').click(function(){
   $('html, body').animate({scrollTop: $('.js--section-services').offset().top},1000); 
});

$('.js--scroll-to-top').click(function(){
   $('html, body').animate({scrollTop: $('.js--section-top').offset().top},1000); 
});

/* NAVBAR APPEARING ANIMATION*/

(function ($) {
  $(document).ready(function(){

    

   
    $(function () {
        var windowHeight = $(window).height();
        $(window).scroll(function () {

                 
            if ($(this).scrollTop() > windowHeight) {
                $('.navigate').fadeIn(200);
            } else {
                $('.navigate').fadeOut(200);
            }
        });
    });

});
  }(jQuery));



/* SMOOTH SCROLL */

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });