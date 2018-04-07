(function ($) {
 "use strict";
		
	$("a,section,div,span,li,input[type='text'],input[type='button'],tr,button").on("click", function(){
		if ($(this).hasClass("closecanvas")) { 
			$("body").removeClass("offcanvas-stop-scrolling");
		}
	});
	  
})(jQuery);