window.onload = function(){
    (function(){
        $("#passenger-accordion").before("<h3 class='capture'><i></i>Captura tus datos</h3>");
        $("#contact-info").prev().prepend("<i class='info icon'></i>");
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
        $(".component.flomes").append("<p>* Indica campos obligatorios</p>");

        $(".phone-fields .phone-number.field").each(function(){
            var selVal = $(this).find("select").first().val();
            $(this).find(".requiredIndicatorLabel").html(selVal);
        });
        $(".phone-number .requiredIndicatorLabel").each(function(){
            var text = $(this).html().trim();
            if(text === "home"){
                $(this).html("Casa");
            } else if(text === "mobile"){
                $(this).html("M&oacute;vil");
            } else if(text === "work"){
                $(this).html("Trabajo");
            }
        });
        var paragraph = $("<p class='disclaimer'>");
        paragraph.html("Puedes guardar los datos de pasajero en esta computadora, para que durante tu pr&oacute;xima reserva puedas completar la informaci&oacute;n de pasajeros con un s&oacute;lo click. Si deseas activarlo haz click en el recuadro.");
        $("#remember-me").prepend(paragraph);
        
    })();

    (function(){
        var  date = function(a){
                var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
                    date = a.split("/"),
                    ret = {};
                ret["month"] = months[parseInt(date[1]) - 1];
                ret["day"] = parseInt(date[0]);
                return ret;
            },
            departings = [],
            shoppingCart = function(dep){
                var sidebar = $("<div class='flight-info-sidebar'>"),
                    head = '<div class="head"><h2><i></i>Información de vuelo</h2></div>',
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
                        stopOverTitle = $("<h3 class='scale'>");

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
                        stopOverTitle.html("Sin escalas");
                    } else if(stopOver == 1){
                        stopOverTitle.html("1 escala");
                    } else {
                        stopOverTitle.html(stopOver + " escalas");
                    }

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

                            var myScreen = window.innerHeight - $("#footer").height(),
                                totalHeight = $("#cart-component").offset().top + $("#cart-component").height();

                            if(myScreen < totalHeight){
                                $("#cnt_4").css({
                                    "position": "relative"
                                })
                            }
                            
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

                stopoverLen = cities.length - 2;

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
                actionTo: titleDestination
            }
            departings.push(departing);
        });
        
        shoppingCart(departings);
        $("#modify-search-trigger").addClass("modify");
        $("#title-search").append($("#modify-search-trigger"));
        $("#cart-component .flight-info-sidebar").append($("#fare-rules-anchor"));
    })();
    
}