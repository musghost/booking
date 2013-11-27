window.onload = function(){
    $("#booking-process").addClass("active");
        $("#booking-process li").each(function(a){
        $(this).addClass(((a + 1) % 2 === 0) ? "two" : "one");
    });
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
        var itineratiesA = [],
            itineratiesB = [],
            pass = $(".cart-pax span").eq(1).html(),
            date = function(a){
                var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
                    date = a.split("/"),
                    ret = {};
                ret["month"] = months[parseInt(date[1]) - 1];
                ret["day"] = parseInt(date[0]);
                return ret;
            };
        
        $("#cart_itinerariesDetails .cart-departing .cart_itinerariesDetails_itinerary .city").each(function(a){
            var itinerary = {},
                date = $(this).next().find("dd").first().html().split(" "),
                hour1 = date[0],
                date1 = date[2],
                trash = $(this).clone();
            trash.children().remove();

            var city1 = $.trim(trash.html());

            itinerary["date"] = date1;
            itinerary["hour"] = hour1;
            itinerary["city"] = city1.substr(1,3);
            console.log(date1, hour1, city1);

            itineratiesA.push(itinerary);
        });

        $("#cart_itinerariesDetails .cart-arriving .cart_itinerariesDetails_itinerary .city").each(function(a){
            var itinerary = {},
                date = $(this).next().find("dd").first().html().split(" "),
                hour1 = date[0],
                date1 = date[2],
                trash = $(this).clone();
            trash.children().remove();

            var city1 = $.trim(trash.html());

            itinerary["date"] = date1;
            itinerary["hour"] = hour1;
            itinerary["city"] = city1.substr(1,3);

            itineratiesB.push(itinerary);
        });

        $("#cart-component").prepend('<div class="flight-info-sidebar"><div class="head"><h2><i></i>Informaci&oacute;n de vuelo</h2></div><div class="total-price"><ul></ul></div></div>');

        var body = $("<div class='body'>"),
            today = new Date(),
            yr = today.getFullYear(),
            newSearch = $("#modify-search-trigger").clone(),
            h3 = $("<h3>");
        $("#modify-search-trigger").remove();
        newSearch.addClass("modify");
        h3.append("Voy", newSearch);


        body.append(h3);
        for (var i = 0; i < itineratiesA.length - 1; i++) {
            var hDate = '<h3 class="date">' + date(itineratiesA[i]["date"])["day"] + " " + date(itineratiesA[i]["date"])["month"] + ', ' + yr + '</h3>',
                ulAirp = $("<ul class='airp'>");

                ulAirp.append("<li><span>" + itineratiesA[i]["city"] + "</span><span>" + itineratiesA[i]["hour"] + "</span></li><li class='middle'><i></i></li><li><span>" + itineratiesA[i + 1]["city"] + "</span><span>" + itineratiesA[i + 1]["hour"] + "</span></li>");
                body.append(hDate, ulAirp);
        };
        if(itineratiesA.length > 2){
            body.append("<h3 class='scale'>" + (itineratiesA.length - 1) + " escalas</h3><h3 class='passenger'>" + pass + " pasajeros</h3>");
        } else{
            body.append("<h3 class='scale'>Sin escalas</h3><h3 class='passenger'>" + pass + " pasajeros</h3>");
        }

        var body2 = $("<div class='body'>"),
            today = new Date(),
            yr = today.getFullYear();
        body2.append("<h3>Vuelvo</h3>");
        for (var i = 0; i < itineratiesB.length - 1; i++) {
            var hDate = '<h3 class="date">' + date(itineratiesB[i]["date"])["day"] + " " + date(itineratiesB[i]["date"])["month"] + ', ' + yr + '</h3>',
                ulAirp = $("<ul class='airp'>");

                ulAirp.append("<li><span>" + itineratiesB[i]["city"] + "</span><span>" + itineratiesB[i]["hour"] + "</span></li><li class='middle'><i></i></li><li><span>" + itineratiesB[i + 1]["city"] + "</span><span>" + itineratiesB[i + 1]["hour"] + "</span></li>");
                body2.append(hDate, ulAirp);
        };
        if(itineratiesB.length > 2){
            body2.append("<h3 class='scale'>" + (itineratiesB.length - 1) + " escalas</h3><h3 class='passenger'>" + pass + " pasajeros</h3>");
        } else{
            body2.append("<h3 class='scale'>Sin escalas</h3><h3 class='passenger'>" + pass + " pasajeros</h3>");
        }

        body2.append('<ul class="info"><li><i class="mercury"></i><span>32º</span></li><li><i class="wind"></i><span>18<sub>km/h</sub></span></li><li><i class="water"></i><span>27%</span></li></ul>');
        $("#cart-component .flight-info-sidebar .head").first().after(body, body2);

        var ul = $("#cart-component .flight-info-sidebar .total-price ul").first(),
            price = "";

        $(".cartPrices").last().find(".price-type").each(function(){
            var li = $("<li>"),
                label = $(this).find("span").eq(0).html(),
                amount = $(this).find(".price-value");

                if(amount.length > 0)
                    amount = $(this).find(".price-value").first().html();
                else
                    amount = "";

                
            li.append("<span>" + label+ "</span>", "<span>" + amount + "</span>");
            ul.append(li);
        });

        $("#cart-total-price .prices-alternative > span").each(function(a){
            if(a == 1) return false;
            price += $(this).html();
        });

        ul.append("<li><span>" + $("#total-price-label").html() + "</span><span>" + price + "</span></li>");
    }
    
    var structure = function(){
        var lastLi = $("#booking-process li").last();
        if($("#dtcontainer-outbounds ul.airp").length < 1){
            $("#dtcontainer-outbounds table tr").each(function(a){
                $(this).find(".prices-amount").each(function(){
                    $(this).prepend("<span>$</span>");
                });
                if(a === 0){
                    var ths = $(this).find("th");
                    ths.eq(0).hide();
                    ths.eq(1).hide();
                    ths.eq(2).hide();
                    ths.eq(3).hide();
                    ths.eq(4).width("190px");
                } else{
                    var tds = $(this).find("td");
                    tds.eq(0).hide();
                    tds.eq(1).hide();
                    tds.eq(2).hide();
                    tds.eq(3).hide();
                    
                    var hour1 = tds.eq(2).find("span").html(),
                        hour2 = tds.eq(3).find("span").html(),
                        scale = $.trim(tds.eq(4).html());


                    tds.eq(4).html('<ul class="airp"><li><span>' + airports[0]["nodea"] + '</span><span>' + hour1 + '</span></li><li class="middle"><i></i></li><li><span>' + airports[0]["nodeb"] + '</span><span>' + hour2 + '</span></li></ul><h3 class="scale">Sin escalas</h3><a class="info-plus"><i></i><span>M&aacute;s informaci&oacute;n de vuelo</span></a>');
                }
            });
            $(".flight-info-sidebar").remove();
            buildInfoBox();
        }
        if($("#dtcontainer-inbounds ul.airp").length < 1){
            $("#dtcontainer-inbounds table tr").each(function(a){
                $(this).find(".prices-amount").each(function(){
                    $(this).prepend("<span>$</span>");
                });
                if(a === 0){
                    var ths = $(this).find("th");
                    ths.eq(0).hide();
                    ths.eq(1).hide();
                    ths.eq(2).hide();
                    ths.eq(3).hide();
                    ths.eq(4).width("190px");
                } else{
                    var tds = $(this).find("td");
                    tds.eq(0).hide();
                    tds.eq(1).hide();
                    tds.eq(2).hide();
                    tds.eq(3).hide();
                    
                    var hour1 = tds.eq(2).find("span").html(),
                        hour2 = tds.eq(3).find("span").html(),
                        scale = $.trim(tds.eq(4).html());


                    tds.eq(4).html('<ul class="airp"><li><span>' + airports[0]["nodea"] + '</span><span>' + hour1 + '</span></li><li class="middle"><i></i></li><li><span>' + airports[0]["nodeb"] + '</span><span>' + hour2 + '</span></li></ul><h3 class="scale">Sin escalas</h3><a class="info-plus"><i></i><span>M&aacute;s informaci&oacute;n de este vuelo</span></a>');
                }
            });
            $(".flight-info-sidebar").remove();
            buildInfoBox();
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