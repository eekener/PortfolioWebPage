
 
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
 
