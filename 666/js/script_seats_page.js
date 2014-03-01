window.onload = function(){
	(function(){
		var keys = $(".seat-map-keys").first(),
			text = $(".seat-map-invocation").first(),
			links = $(".seat-map-footer-links").first(),
			infoBox = $("#flight-list-infobox");
		text.after(keys);

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

		$(".seat-map-flights-list").each(function(){
			$(this).html("<span class='seat-map-text-info'>Additional information</span>");
		});
		$(".seat-map-flights-pax-name").after("<div class='seat-labels'><span class='num-seat-label'>Desired seat</span><span class='price-seat-label'>Seat fee</span></div>");
		$(".seat-map-planemap tr").each(function(a){
	        $(this).find("td").each(function(b){
	            var bTag = $(this).find("strong").first();
	            if(bTag.children().length > 0){
	                if(b === 0){
	                    bTag.html("<img src='https://s3.amazonaws.com/aeromexico/ancillaries/new_v_exitleft.png'>");
	                } else{
	                    bTag.html("<img src='https://s3.amazonaws.com/aeromexico/ancillaries/new_v_exitright.png'>");
	                }
	            }
	        });
	    });

		var buildInfoBox = function(){
	        var  date = function(a){
	                var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
	                    date = a.split("/"),
	                    ret = {};
	                ret["month"] = months[parseInt(date[1]) - 1];
	                ret["day"] = parseInt(date[0]);
	                return ret;
	            },
	            departings = [],
	            setPosition = function(){
	                var screenHeight = window.innerHeight,
	                    myScreen = screenHeight - $("#footer").height(),
	                    totalHeight = $("#cart-component").height(),
	                    scrollTop = $("body").scrollTop(),
	                    rootHeight = $("#ROOT").height();
	                if(myScreen < totalHeight){
	                    var top = window.innerHeight - $("#cnt_4").height();
	                    if(scrollTop >= (rootHeight - screenHeight - 150)){
	                        top -= 90;
	                        $("#cnt_4").css({
	                            "position": "fixed",
	                            "top": top + "px"
	                        });
	                    } else {
	                        $("#cnt_4").css({
	                            "position": "fixed",
	                            "top": top + "px"
	                        });
	                    }
	                }
	            },
	            shoppingCart = function(dep){
	                var sidebar = $("<div class='flight-info-sidebar'>"),
	                    head = '<div class="head"><h2><i></i>Flight Information</h2></div>',
	                    passengers = $(".component-section.cart-pax"). find("span"),
	                    passengersCount = "",
	                    passengersTitle = $("<h3 class='passenger'>");

	                passengers.each(function(a){
	                    if(a === 0 || a === 1)
	                        passengersCount += $(this).html();
	                });

	                passengersTitle.html(passengersCount);

	                sidebar.append(head);

	                $.each(dep, function(key, departing){
	                    var body = $("<div class='body'>"),
	                        title = $("<h3>"),
	                        stopOver = parseInt(departing.stopover),
	                        stopOverTitle = $("<h3 class='scale'>"),
	                        flights = $("<span class='flight-num'>");

	                    if(key === 0)
	                        title.attr("id","title-search");

	                    title.html(departing.actionTo);

	                    body.append(title);

	                    $.each(departing.destinations, function(index, destination){
	                        var airp = $("<ul class='airp'>"),
	                            dateTitle = $("<h3 class='date'>");

	                        dateTitle.html(destination.date);

	                        airp.append("<li><span>" + destination.from + "</span><span>" + destination.hourDep + "</span></li>");
	                        airp.append("<li class='middle'><i></i></li>");
	                        airp.append("<li><span>" + destination.to + "</span><span>" + destination.hourArr + "</span></li>");

	                        body.append(dateTitle);
	                        body.append(airp);
	                        
	                    });

	                    if(stopOver === 0 || stopOver < 0){
	                        stopOverTitle.html("Nonstop");
	                    } else if(stopOver == 1){
	                        stopOverTitle.html("1 layover");
	                    } else {
	                        stopOverTitle.html(stopOver + " layovers");
	                    }

	                    flights.html(departing.flightNumber);

                    	body.append(flights);
	                    body.append(stopOverTitle);

	                    sidebar.append(body);

	                });
					sidebar.append(passengersTitle);

	                sidebar.append(makePriceBox());

	                $("#cart-component").prepend(sidebar);
	            },
	            makePriceBox = function(){
                var box = $("<div class='total-price'>"),
                    ul = $("<ul>"),
                    price = "";
                $(".cartPrices").last().find(".price-type").each(function(){
                    var li = $("<li>"),
                        label = $(this).find("span").eq(0).html(),
                        amount = $(this).find(".price-value"),
                        tooglerText = $(this).find(".toggler a").first().html(),
                        toggler = $("<a href='#' class='view-details'>"),
                        togglerList = $(this).find('.price-element-details').first().clone(),
                        spanLabel = $("<span>"),
                        spanAmount = $("<span>");

                        if(amount.length > 0)
                            amount = $(this).find(".price-value").first().html();
                        else
                            amount = "";

                    toggler.append(tooglerText, "<span class='more-less'>&nbsp;+</span>");
                    spanLabel.append(label, toggler);
                    spanAmount.html(amount);
                    li.append(spanLabel, spanAmount, togglerList);
                        
                    ul.append(li);

                    toggler.click(function(a){
                        a.preventDefault();
                        var ol = $(this).parent().parent().find("ol").first(),
                            link = $(this),
                            span = $(this).find(".more-less");
                        if(ol.hasClass("hidden-low-prior")){
                            ol.removeClass("hidden-low-prior");
                            span.html("&nbsp;-");

                            setPosition();
                        } else{
                            ol.addClass("hidden-low-prior");
                            span.html("&nbsp;+");
                        }
                    });
                });
                $("#cart-total-price .prices-alternative > span").each(function(a){
                    if(a == 1) 
                        price += "<span class='amount'>" + $(this).html() + "</span>";
                    if(a == 0)
                        price += "<span class='currency'>" + $(this).html() + "</span>";
                });
                ul.append("<li><span>" + $("#total-price-label").html() + "</span><span>" + price + "</span></li>");
                box.append(ul);
                return box;
            };

	        $(".cart-departing, .cart-arriving").each(function(){
	            var destinations = [],
	                cities = $(this).find("li.city"),
	                dates = $(this).find("dd"),
	                datesCounter = 0,
	                titleDestination = $(this).find("h4").first().html(),
	                flightNumberNode = $(this).find("li.number").first(),

	                stopoverLen = cities.length - 2;

	            var flightNumber = flightNumberNode
	                    .andSelf()
	                    .contents()
	                    .filter(function() { 
	                        return this.nodeType === 3;
	                    })[1];
	            if(typeof flightNumber === "undefined"){
	                flightNumber = "";
	            } else {
	                flightNumber = $.trim(flightNumberNode.find("span").first().html() + flightNumber.textContent);
	            }

	            cities.each(function(b){
	                var city1 = $(this).clone(),
	                    city2 = cities.eq(b - 1).clone();

	                city1.children().remove();
	                city2.children().remove();

	                city1 = $.trim(city1.html()).substr(1,3);
	                city2 = $.trim(city2.html()).substr(1,3);
	                if(b > 0){
	                    var datesLen = date(dates.eq(datesCounter).html().split(" ")[2]),
	                        hour1 = dates.eq(datesCounter++).html().substr(0,7),
	                        hour2 = dates.eq(datesCounter++).html().substr(0,7);

	                    destination = {
	                        from: city2,
	                        to: city1,
	                        date: datesLen.day + ", " + datesLen.month,
	                        hourDep: hour1,
	                        hourArr: hour2
	                    }
	                    destinations.push(destination);
	                }
	            });

	            departing = {
	                stopover: stopoverLen,
	                destinations: destinations,
	                actionTo: titleDestination,
	                flightNumber: flightNumber
	            }
	            departings.push(departing);
	        });
	        
	        shoppingCart(departings);

	        $("#cart-component .flight-info-sidebar").append($("#fare-rules-anchor"));
	        $("#modify-search-trigger").addClass("modify");
	    },
	    structure = function(){
	    	if($(".flight-info-sidebar").length < 1){

	    		$(".seat-map-planemap").first().find(".seat-map-legend").each(function(){
				    var attr = $(this).attr("id");
				    if(typeof attr !== 'undefined' && attr !== false){
				        var seatNum = attr.split("-")[2],
				            div = $("<div class='seatmap-advice'>"),
				            content = $("<div class='seat-map-advice-content'>"),
				            label = $(".num-seat-label").first().html(),
				            availabilityLabel = "";

				        if($(this).hasClass("seat-map-seat-selectable") || $(this).hasClass('seat-map-seat-selectable-exit'))
				            availabilityLabel = "Aviable";
				        else
				            availabilityLabel = "Unaviable";

				        content.html("<p>" + label + " " + seatNum + "<br>" + availabilityLabel +"</p>");

				        div.append(content);
				        $(this).on('mouseover.seat', function(){
				            $(this).append(div);
				        });
				        $(this).on('mouseout.seat', function(){
				            $(this).find(".seatmap-advice").remove();
				        });
				    }
				});


	    		$("#cart-component .component-top").append($("#modify-search-trigger"));
	            buildInfoBox();
	            $("#title-search").append($("#modify-search-trigger"));
	    	}
			timerConstructor = setTimeout(function(){
				structure();
			}, 100);			
	    }

		var timerConstructor = setTimeout(function(){
			structure();
		}, 100);
	})();
}