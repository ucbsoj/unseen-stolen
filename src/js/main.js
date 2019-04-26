import $ from "jquery"; // importing jQuery, you can delete if not needed
require("./lib/social"); // Twitter intent JS
var skrollr = require("skrollr");

//var s = skrollr.init();
setTimeout(function(){
    var s = skrollr.init({forceHeight: false});
}, 100);





//var imgReveal = $('#top-quote').offset().top;


$(document).ready(function(){

	$(".left-side, .top-side, .bottom-side, .right-side, .line-down-middle, #background-line-down-middle").addClass("active");

	$("#background-line-down-middle").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function(){
		$(this).css("transition", "none");
	});

});



$(document).scroll(function() {

  var scroll = $(document).scrollTop();

  console.log($("#headers-appear").offset().top, scroll);

  if(scroll > $("#headers-appear").offset().top){
    $("#headers-appear h3").addClass("active");
  }


  if (scroll > 300) {

  	$(".bg-img").css({"-webkit-filter": "blur(5px)","filter": "blur(5px)" })  

  } else {

  	$(".bg-img").css({"-webkit-filter": "blur(10px)","filter": "blur(10px)" })  
  
  }

  // if (scroll > imgReveal){

  // 	$(".bg-img").css({"-webkit-filter": "blur(0px)","filter": "blur(0px)" })  
  
  // } 


});

