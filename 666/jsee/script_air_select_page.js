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

    $(".flight-info").each(function(a){
        if(a === 0) $(this).prepend("<span class='step'>A</span>");
        else $(this).prepend("<span class='step'>B</span>");
    });
    $(".flight-info h2").eq(0).html("Opciones del vuelo de salida");
    $(".flight-info h2").eq(1).html("Opciones del vuelo de regreso");
    var airports = [];
    $(".flight-info dl").each(function(){
        var dds = $(this).find("dd").clone();
        dds.children().remove();
        var cityA = $.trim(dds.eq(0).html()),
            cityB = $.trim(dds.eq(1).html()),
            rute = {};
        rute["nodea"] = cityA.substr(1,3);
        rute["nodeb"] = cityB.substr(1,3);
        airports.push(rute);
    });

    var buildInfoBox = function(){
        var  date = function(a){
                var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
                    date = a.split("/"),
                    ret = {};
                ret["month"] = months[parseInt(date[1]) - 1];
                ret["day"] = parseInt(date[0]);
                return ret;
            },
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
                        stopOverTitle.html("Sin escalas");
                    } else if(stopOver == 1){
                        stopOverTitle.html("1 escala");
                    } else {
                        stopOverTitle.html(stopOver + " escalas");
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
        $("#modify-search-trigger").addClass("modify");
    }
    
    var structure = function(){
        var lastLi = $("#booking-process li").last();
        if($("#dtcontainer-multicity ul.airp").length < 1){
            $("#dtcontainer-multicity table tr").each(function(a){
                $(this).find(".prices-amount").each(function(){
                    $(this).prepend("<span>$</span>");
                });
                if(a === 0){
                    var ths = $(this).find("th");
                    
                    ths.slice(2,8).hide();
                } else{
                    var tds = $(this).find("td");

                    
                    tds.slice(2,8).hide();
                    
                    var hour1 = tds.eq(3).find("span").eq(1).html(),
                        hour2 = tds.eq(4).find("span").eq(1).html(),
                        airport1 = tds.eq(3).find("span").eq(0).html(),
                        airport2 = tds.eq(4).find("span").eq(0).html(),
                        scale = $.trim(tds.eq(5).html()),
                        scaleInt = parseInt(scale);

                    var ul = $("<ul class='airp'>"),
                        h3 = $('<h3 class="scale">');

                    ul.html('<li><span>' + airport1 + '</span><span>' + hour1 + '</span></li><li class="middle"><i></i></li><li><span>' + airport2 + '</span><span>' + hour2 + '</span></li>');

                    if(scaleInt === 0 || scaleInt < 0){
                        h3.html("Sin escalas");
                    } else if(scaleInt === 1){
                        h3.html(scaleInt + " escala");
                    } else {
                        h3.html(scaleInt + "escalas")
                    }
                    
                    if($(this).attr("id") === 'flight-advisory-both-row'){
                        $(this).remove();
                        return;
                    }
                
                    tds.eq(1).prepend(ul, h3);
                    $(this).find("a").each(function(){
                        var linkContent = $(this).html();
                        $(this).addClass('info-plus').html("<i></i><span>Additional information (" + linkContent + ")</span>");
                    });
                }
            });
        }
        if($("#dtcontainer-outbounds ul.airp").length < 1){
            $("#dtcontainer-outbounds table tr").each(function(a){
                $(this).find(".prices-amount").each(function(){
                    $(this).prepend("<span>$</span>");
                });
                if(a === 0){
                    var ths = $(this).find("th");
                    ths.eq(1).hide();
                    ths.eq(2).hide();
                    ths.eq(3).hide();
                    ths.eq(4).hide();
                    ths.eq(5).hide();
                    ths.eq(0).width("190px");
                } else{
                    var tds = $(this).find("td");
                    tds.eq(5).hide();
                    tds.eq(4).hide();
                    tds.eq(1).hide();
                    tds.eq(2).hide();
                    tds.eq(3).hide();
                    
                    var hour1 = tds.eq(2).find("span").html(),
                        hour2 = tds.eq(3).find("span").html(),
                        scale = $.trim(tds.eq(4).html()),
                        scaleInt = parseInt(scale);

                    var ul = $("<ul class='airp'>"),
                        h3 = $('<h3 class="scale">');

                    ul.html('<li><span>' + airports[0]["nodea"] + '</span><span>' + hour1 + '</span></li><li class="middle"><i></i></li><li><span>' + airports[0]["nodeb"] + '</span><span>' + hour2 + '</span></li>');
                    if(scaleInt === 0 || scaleInt < 0){
                        h3.html("Sin escalas");
                    } else if(scaleInt === 1){
                        h3.html(scaleInt + " escala");
                    } else {
                        h3.html(scaleInt + "escalas")
                    }
                    if($(this).attr("id") === 'flight-advisory-outbound-row'){
                        $(this).remove();
                        return;
                    }
                
                    tds.eq(0).prepend(ul, h3);
                    var linkContent = $(this).find("a").html();
                    $(this).find("a").addClass('info-plus').html("<i></i><span>M&aacute;s informaci&oacute;n de vuelo (" + linkContent + ")</span>");
                }
            });
            $("#cart-component .component-top").append($("#fare-rules-anchor"), $("#modify-search-trigger"));
            $(".flight-info-sidebar").remove();
            buildInfoBox();
            $(".flight-info-sidebar")
                .first()
                .append($("#fare-rules-anchor"));
            $("#title-search").append($("#modify-search-trigger"));
        }
        if($("#dtcontainer-inbounds ul.airp").length < 1){
            $("#dtcontainer-inbounds table tr").each(function(a){
                $(this).find(".prices-amount").each(function(){
                    $(this).prepend("<span>$</span>");
                });
                if(a === 0){
                    var ths = $(this).find("th");
                    ths.eq(1).hide();
                    ths.eq(2).hide();
                    ths.eq(3).hide();
                    ths.eq(4).hide();
                    ths.eq(5).hide();
                    ths.eq(0).width("190px");
                } else{
                    var tds = $(this).find("td");
                    tds.eq(5).hide();
                    tds.eq(4).hide();
                    tds.eq(1).hide();
                    tds.eq(2).hide();
                    tds.eq(3).hide();
                    
                    var hour1 = tds.eq(2).find("span").html(),
                        hour2 = tds.eq(3).find("span").html(),
                        scale = $.trim(tds.eq(4).html()),
                        scaleInt = parseInt(scale);

                    var ul = $("<ul class='airp'>"),
                        h3 = $('<h3 class="scale">');

                    ul.html('<li><span>' + airports[0]["nodeb"] + '</span><span>' + hour1 + '</span></li><li class="middle"><i></i></li><li><span>' + airports[0]["nodea"] + '</span><span>' + hour2 + '</span></li>');
                    if(scaleInt === 0 || scaleInt < 0){
                        h3.html("Sin escalas");
                    } else if(scaleInt === 1){
                        h3.html(scaleInt + " escala");
                    } else {
                        h3.html(scaleInt + "escalas")
                    }


                    if($(this).attr("id") === 'flight-advisory-inbound-row'){
                        $(this).remove();
                        return;
                    }
                
                    tds.eq(0).prepend(ul, h3);
                    var linkContent = $(this).find("a").html();
                    $(this).find("a").addClass('info-plus').html("<i></i><span>M&aacute;s informaci&oacute;n de vuelo (" + linkContent + ")</span>");
                }
            });

            
            $("#cart-component .component-top").append($("#fare-rules-anchor"), $("#modify-search-trigger"));
            $(".flight-info-sidebar").remove();
            buildInfoBox();
            $(".flight-info-sidebar")
                .first()
                .append($("#fare-rules-anchor"));
            $("#title-search").append($("#modify-search-trigger"));

        }
        if($("#dtcontainer-both ul.airp").length < 1){
            $("#dtcontainer-both table tr").each(function(a){
                $(this).find(".prices-amount").each(function(){
                    $(this).prepend("<span>$</span>");
                });
                if(a === 0){
                    var ths = $(this).find("th");
                    ths.eq(1).hide();
                    ths.eq(2).hide();
                    ths.eq(3).hide();
                    ths.eq(4).hide();
                    ths.eq(5).hide();
                    ths.eq(0).width("190px");
                } else{
                    var tds = $(this).find("td");
                    tds.eq(5).hide();
                    tds.eq(4).hide();
                    tds.eq(1).hide();
                    tds.eq(2).hide();
                    tds.eq(3).hide();
                    
                    var hour1 = tds.eq(2).find("span").html(),
                        hour2 = tds.eq(3).find("span").html(),
                        scale = $.trim(tds.eq(4).html()),
                        scaleInt = parseInt(scale);

                    var ul = $("<ul class='airp'>"),
                        h3 = $('<h3 class="scale">');

                    ul.html('<li><span>' + airports[0]["nodea"] + '</span><span>' + hour1 + '</span></li><li class="middle"><i></i></li><li><span>' + airports[0]["nodeb"] + '</span><span>' + hour2 + '</span></li>');
                    if(scaleInt === 0 || scaleInt < 0){
                        h3.html("Sin escalas");
                    } else if(scaleInt === 1){
                        h3.html(scaleInt + " escala");
                    } else {
                        h3.html(scaleInt + "escalas")
                    }
                    
                    if($(this).attr("id") === 'flight-advisory-both-row'){
                        $(this).remove();
                        return;
                    }
                
                    tds.eq(0).prepend(ul, h3);
                    var linkContent = $(this).find("a").html();
                    $(this).find("a").addClass('info-plus').html("<i></i><span>M&aacute;s informaci&oacute;n de vuelo (" + linkContent + ")</span>");
                }
            });
        }
        if(!lastLi.hasClass("one") && !lastLi.hasClass("two")){
            var lItems = $("#booking-process li");
            lItems.removeClass("one two");
            lItems.each(function(a){
                $(this).addClass(((a + 1) % 2 === 0) ? "two" : "one");
            });
        }
        timerConstructor = setTimeout(function(){
            structure();
        }, 300);
    },
    timerConstructor = setTimeout(function(){
        structure();
    }, 300);

    (function(){
        $(".seats-remaining").each(function(){
            var num = $(this).html().split(" ")[0];
            $(this).html("!S&oacute;lo quedan " + num + "!")
        });
        $("#customhtmlDisclosure").prepend("<i></i>");
    })();

    (function(){
        $(".ancillary-component").find(".ancillary-item").each(function(a){
            var id = $(this).attr("id");
            $(this).find(".ancillary-image").after("<div class='ancillary-icon ancillary-icon-" + id + "'><i></i></div>");
        });
    })();
}