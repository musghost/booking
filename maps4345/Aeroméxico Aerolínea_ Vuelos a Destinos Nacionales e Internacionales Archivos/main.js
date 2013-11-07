(function(){ 
  	if (navigator.appName == 'Microsoft Internet Explorer'){
	        var ua = navigator.userAgent;
	        var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
	        if (re.exec(ua) != null)
	            rv = parseFloat( RegExp.$1 );
	        else rv = "";

	    if(rv<=9){
	      $("input[type='text']").each(function(){
	        $(this).focus(function () {
	                if ($(this).val() === $(this).attr('placeholder'))
	                    $(this).val('');
	            });
	        $(this).blur(function () {
	                if ($(this).val() == '')
	                    $(this).val($(this).attr('placeholder'));
	            }).blur();
	      });
	    }
	    if(rv == 7){
	      $("#ft-code").click(function(){
	        $(".flight-form .select .input").hide();
	        $("#icon_close").click(function(){
	          $(".flight-form .select .input").show();
	        });
	      });
	    }
	}
})();
//Dropdowns
(function(){
	var valueSelects = function(){
		  var adult = $("#ft-adult"),
			child = $("#ft-child"),
			baby = $("#ft-baby"),
			numAdult = adult.val(),
			numChild = child.val(),
			numBaby = baby.val(),
			leftAdult = 8 - numAdult;
		child.prev().find("li").each(function(a){
			if(a > leftAdult)
				$(this).css("display", "none");
			else
				$(this).removeAttr("style");
		});
		if(numChild > leftAdult){
			child.val(0);
			var span = child.prev().prev(),
				li = child.prev().find("li").first();
			span.html(li.html());
		}
		baby.prev().find("li").each(function(a){
			if(a > leftAdult || a > numAdult || a > 8 - (parseInt(numAdult) + parseInt(numChild)))
				$(this).css("display", "none");
			else
				$(this).removeAttr("style");
		});
		if(numBaby > leftAdult || numBaby > numAdult || numBaby > 8 - (parseInt(numAdult) + parseInt(numChild))){
			baby.val(0);
			var span = baby.prev().prev(),
				li = baby.prev().find("li").first();
			span.html(li.html());
		}
	}
	valueSelects();
	$(".select span").click(function(a){
		a.stopPropagation();
		var list = $(this).next();
		if(!list.hasClass("active")){
			$(".select ul").removeClass("active");
			list.addClass("active");
		} else{
			list.removeClass("active");
		}
	});
	$(".select li").click(function(a){
		var content = $(this).html(),
			val = $(this).data("val");
		$(this).parent().prev().html(content);
		$(this).parent().next().val(val);
		valueSelects();
		numCupons = addCupons();
	});
	$("body, html").click(function(){
		$(".select ul").removeClass("active");
		$(".countries ul").removeClass("active");
	});
	$(".countries a").first().click(function(a){
		a.preventDefault();
		a.stopPropagation();
		var ul = $(".countries ul");
		if(!ul.hasClass("active")) ul.addClass("active");
		else ul.removeClass("active");
	});
	$(".countries ul li").mouseover(function(){
		$(this).prepend("<i></i>");
	});
	$(".countries ul li").mouseout(function(){
		$(this).find("i").remove();
	});
})();


(function(){
	var left = $(".carousel .left"),
		right = $(".carousel .right"),
		items = $(".carousel .item"),
		counter = $(".slide_contador"),
		count_promo = counter.length,
		count = items.length,
		current = 0,
		time = 7000;
	var rotationRight = function(){
		var next = 0;

		if(current + 1 >= count) next = 0;
		else next = current + 1;

		items.eq(current).animate({
			opacity: .3
		}, 500, function(){
			$(this).removeClass("visible");
			items.eq(next).css('opacity', '.4');
			items.eq(next).addClass("visible");
			items.eq(next).animate({
				opacity: 1
			}, 500, function(){
				current = next;
				slider = setTimeout(function (){
					rotationRight();
				}, time);
			});
		});
	},
	rotationLeft = function(){
		var next = 0;

		if(current - 1 < 0) next = count - 1;
		else next = current - 1;

		items.eq(current).animate({
			opacity: .3
		}, 500, function(){
			$(this).removeClass("visible");
			items.eq(next).css('opacity', '.4');
			items.eq(next).addClass("visible");
			items.eq(next).animate({
				opacity: 1
			}, 500, function(){
				current = next;
				slider = setTimeout(function (){

					rotationRight();
				}, time);
			});
		});
	};

	slider = setTimeout(function(){
		rotationRight();
	}, time);

	left.click(function(a){
		a.preventDefault();
		clearTimeout(slider);
		rotationLeft(a);
	});
	right.click(function(a){
		a.preventDefault();
		clearTimeout(slider);
		rotationRight(a);
	});
	if(count_promo > 0){
		$(".buttons").remove();
	}
})();
$(".offer_terms").click(function(a){ a.stopPropagation(); });