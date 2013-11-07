//Dropdowns
(function(){
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


//Carousel
(function(){
	var left = $(".carousel .left"),
		right = $(".carousel .right"),
		items = $(".carousel .item"),
		count = items.length,
		current = 0;

	left.click(function(a){
		a.preventDefault();
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
			});
		});
	});
	right.click(function(a){
		a.preventDefault();
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
			});
		});	
	});
})();