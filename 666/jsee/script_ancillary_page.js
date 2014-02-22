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

    var buildInfoBox = function(){
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
        
        $("#cart-component .flight-info-sidebar").append($("#fare-rules-anchor"));
        $("#modify-search-trigger").addClass("modify");
    }
    
    $("#cart-component .component-top").append($("#modify-search-trigger"));
    buildInfoBox();
    $("#title-search").append($("#modify-search-trigger"));

    var structure = function(){
        var lastLi = $("#booking-process li").last();
        if(!lastLi.hasClass("one") && !lastLi.hasClass("two")){
            var lItems = $("#booking-process li");
            lItems.removeClass("one two");
            lItems.each(function(a){
                $(this).addClass(((a + 1) % 2 === 0) ? "two" : "one");
            });
        }
        if($(".flight-info-sidebar").length < 1){
            $("#cart-component .component-top").append($("#modify-search-trigger"));
            buildInfoBox();
            $("#title-search").append($("#modify-search-trigger"));
        }

        (function(){
            $(".ancillary-content").each(function(){

                if($(this).find(".ancillary-info").length < 1){
                    
                    var ancillaryClass = "ancillary-content-",
                    title = $(this).find(".ancillary-name").first(),
                    paragraph = $("<p class='ancillary-info'>");

                    if($(this).hasClass(ancillaryClass + "AMC")){
                        paragraph.html("Con cobertura horas antes de volar, durante tu viaje y hasta 12 horas después del regreso que incluye beneficios como Gastos m&eacute;dicos, Muerte accidental, P&eacute;rdida de equipaje, Demora de equipaje, Servicios de Asistencia m&eacute;dica, legal y en viajes. <a target='_blank' href='http://www.aeromexico.com/mx/tu-vuelo/comprando-tu-vuelo/aeromexico-seguro.html'>Leer más.</a>");

                    } else if($(this).hasClass(ancillaryClass + "AMK")){
                        paragraph.html("Una experiencia única al alcance de todos, sólo con una llamada consigue servicios exclusivos en el destino al que te dirijas. <a target='_blank' href='http://www.aeromexico.com/mx/productos/concierge.html'>Leer más.</a>");

                    } else if($(this).hasClass(ancillaryClass + "DPM")){
                        paragraph.html("Tu pase incluye 2 entradas gratis para espect&aacute;culos u obras de teatro y 2x1 en salas VIP. Adem&aacute;s obtienes descuentos para conciertos, cines, restaurantes, hoteles y m&aacute;s. <a href='http://www.aeromexico.com/mx/productos/aeromexico-discount-pass.html' target='_blank'>Leer más.</a>");

                    } else if($(this).hasClass(ancillaryClass + "CO2")){
                        paragraph.html("Participa, tu donación contribuye a conservar la Selva Maya. <a target='_blank' href='http://www.aeromexico.com/mx/productos/vuela-verde.html'>Leer más.</a>");

                    } else if($(this).hasClass(ancillaryClass + "BG_PCS")){
                        paragraph.html("Ahorra tiempo y dinero. Cómpralo ahora a un precio preferencial.");

                    }
                    title.after(paragraph);

                }
            });
            $(".ancillary-price dd").each(function(){
                var pricesAll = $(this).find(".prices-all").first();

                pricesAll
                    .next()
                    .html("");
                pricesAll
                    .children()
                    .first()
                    .contents()
                    .filter(function() {
                        return this.nodeType === 3;
                    })
                    .remove();
            });

        })();

        timerConstructor = setTimeout(function(){
            structure();
        }, 300);
    }
    var timerConstructor = setTimeout(function(){
        structure();
    }, 300);

}