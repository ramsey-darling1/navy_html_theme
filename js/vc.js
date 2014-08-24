/**
 *Some scripts for Visual Compass site
 *@rdarling
 *
 */

/*smooth click links*/
jQuery(function() {
  jQuery('a[href*=#]:not([href=#])').click(function() {
	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	  var target = jQuery(this.hash);
	  target = target.length ? target : jQuery('[name=' + this.hash.slice(1) +']');
	  if (target.length) {
		jQuery('html,body').animate({
		  scrollTop: target.offset().top
		}, 1000);
		return false;
	  }
	}
  });
});

$(document).ready(function() {
	
	$(".init-content .icon-left-circled").click(function() {
		$(".extra-left").removeClass("absolute clear no-width");
		$(".init-content").addClass("absolute clear no-width");
	});

	$(".init-content .icon-right-circled").click(function() {
		$(".extra-right").removeClass("absolute clear no-width");
		$(".init-content").addClass("absolute clear no-width");
	});

	$(".extra-left .icon-right-circled").click(function() {
		$(".init-content").removeClass("absolute clear no-width");
		$(".extra-left").addClass("absolute clear no-width");
	});

	$(".extra-right .icon-left-circled").click(function() {
		$(".init-content").removeClass("absolute clear no-width");
		$(".extra-right").addClass("absolute clear no-width");
	});

});