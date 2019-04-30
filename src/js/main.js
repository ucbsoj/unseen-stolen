import $ from "jquery"; // importing jQuery, you can delete if not needed
require("./lib/social"); // Twitter intent JS


$(document).ready(function(){

	$(".left-side, .top-side, .bottom-side, .right-side, .line-down-middle, #background-line-down-middle").addClass("active");

	$("#background-line-down-middle").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function(){
		$(this).css("transition", "none");
	});

});



$(document).scroll(function() {

  var scroll = $(document).scrollTop();

  if(scroll > $("#headers-appear").offset().top-600){
    $("#headers-appear h3").addClass("active");
  }

});

