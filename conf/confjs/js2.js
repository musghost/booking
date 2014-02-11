var confirmation_page_function = function () {
        $("#booking-process").addClass("active");
        $("#booking-process li").each(function(a){
                $(this).addClass(((a + 1) % 2 === 0) ? "two" : "one");
                if(a === 4) $(this).attr('class', 'stepFuture  prevFuture stepFuture_prevFuture one');
                if(a === 5) $(this).attr('class', 'stepCurrent lastStep prevFuture stepCurrent_prevFuture stepCurrent_lastStep two');
                if(a === 6) $(this).remove();
            });
}