	window.onload = function(){
		(function(){
	        //Booking processs
	        var current = false;
	        $("#booking-process").addClass("active");
	        $("#booking-process li").each(function(a){
	            $(this).addClass(((a + 1) % 2 === 0) ? "two" : "one");
	        });
	        $("#booking-process li").each(function(a){
	            if(current){
	                if($(this).hasClass("stepPast")) 
	                    $(this)
	                        .removeClass("stepPast")
	                        .addClass("stepFuture");
	                if($(this).hasClass("stepPast_prevPast")) 
	                    $(this)
	                        .removeClass("stepPast_prevPast")
	                        .addClass("stepFuture_prevFuture");
	                if($(this).hasClass("prevPast")) 
	                    $(this)
	                        .removeClass("prevPast")
	                        .addClass("prevFuture");
	            }
	            if($(this).hasClass("stepCurrent"))
	                current = true;
	         });
	     })();
        $("#trip-type").prepend("<li><h3>Where and when are you traveling?</h3></li>");
        $("#promo_code").attr("placeholder", "Promo code");
	}