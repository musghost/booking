//http://manoderecha.net/md/index.php/task/74129

var paragraph = $("<p class='disclaimer'>");
paragraph.html("Puedes guardar los datos de pasajero en esta computadora, para que durante tu pr&oacute;xima reserva puedas completar la informaci&oacute;n de pasajeros con un s&oacute;lo click. Si deseas activarlo haz click en el recuadro.");
$("#remember-me").prepend(paragraph);
/*
paragraph.html("You can save passenger's data in this computer, next time you can complete form only by a click. If you want it, check the option.");
*/


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
                        h3.html("Nonstop");
                    } else if(scaleInt === 1){
                        h3.html(scaleInt + " layover");
                    } else {
                        h3.html(scaleInt + "layovers")
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

