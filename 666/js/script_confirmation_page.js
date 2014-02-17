var confirmation_page_function = function () {
		(function(){
	        //Booking processs
	        var current = false;
	        $("#booking-process").addClass("active");
	        $("#booking-process li").each(function(a){
	            $(this).addClass(((a + 1) % 2 === 0) ? "two" : "one");
	            if(a === 4) $(this).attr('class', 'stepFuture  prevFuture stepFuture_prevFuture one');
                if(a === 5) $(this).attr('class', 'stepCurrent lastStep prevFuture stepCurrent_prevFuture stepCurrent_lastStep two');
                if(a === 6) $(this).remove();
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
}