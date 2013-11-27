	window.onload = function(){
		$("#booking-process").addClass("active");
        $("#booking-process li").each(function(a){
            $(this).addClass(((a + 1) % 2 === 0) ? "two" : "one");
        });
        $("#trip-type").prepend("<li><h3>¿A d&oacute;nde y cu&aacute;ndo viajas?</h3></li>");
        $("#promo_code").attr("placeholder", "Cod. de prom.");
	}