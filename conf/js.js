window.onload= function(){
    (function(){
        $("#booking-process").addClass("active");
        $("#booking-process li").each(function(a){
                $(this).addClass(((a + 1) % 2 === 0) ? "two" : "one");
            });
        var code = $(".view-itinerary-code span").eq(0).html();
        $("#flow-message-confirmationsuccess .flow-message-title").first().append("<p class='thanks'>Gracias por preferir Aeroméxico. Tu código de reservación es: <span class='code'>" + code + "</span></p>");    
        var custonHTML = $('<div id="custom-html">'),
            names = $('<div class="names">'),
            row1 = $("<div class='row'>"),
            row2 = $("<div class='row'>"),
            column1 = $("<div class='column'>"),
            column2 = $("<div class='column'>"),
            price = $("<div class='price'>"),
            ul = $("<ul>"),
            pass = $(".paxList h4");

        pass.each(function(a,b){
          names.append("<p>" + $(b).html() + "</p>");
        });
        $(".itinerary-info").each(function(a){
          var column = $("<div class='column'>");
          $(this).find(".itinerary-content").each(function(b){
            var date = $(this).find(".flight-summary-1 .flight-date").first().html(),
                origin = $(this).find(".flight-origin dt").html(),
                destination = $(this).find(".flight-destination dt").html(),
                departure = $(this).find(".departure-time .flight-time"),
                arrival = $(this).find(".arrival-time .flight-time"),
                text = "Voy";
            if((a + 1) % 2 == 0)
              text = "Vuelvo";
            column.append("<h3>" + text + "</h3>");
            column.append("<h4>Salida</h4>");
            column.append("<p>" + date + "</p>");
            column.append("<p><span>" + origin + "</span><span>" + departure.html() + "</span></p>");
            column.append("<h4>Llegada</h4>");
            column.append("<p>" + date + "</p>");
            column.append("<p><span>" + destination + "</span><span>" + arrival.html() + "</span></p>");
          });
          row1.append(column);
        });

        $(".payment-summary .payment-breakdown dt").each(function(a){
          var li = $("<li>");
          li.append("<span>" + $(this).html() + "</span>");
          li.append("<span>" + $(this).next().html() + "</span>");
          ul.append(li);
        });
        price.append(ul);
        row2.append(price);

        custonHTML.append(names);
        custonHTML.append(row1);
        custonHTML.append(row2);
        custonHTML.append("<p class='imp'><i></i>Los usuarios que reservan usando tarjetas de crédito que no son suyas, deben de llevar una copia de su tarjeta de crédito debidamente firmada por el propietario de la misma. Este requisito es para protección de posibles abusos de tarjetas de crédito. Es posible que apliquen cargos adicionales de equipaje. Mayor información www.aeromexico.com/cargosporservicio</p>");
        custonHTML.append('<div class="row grayback"><div class="tcolumn"><a href="#"><i class="imp"></i><span>Imprimir p&aacute;gina</span></a></div><div class="tcolumn"><a href="#"><i class="search"></i><span>Buscar nuevamente</span></a></div><div class="tcolumn"><a href="#"><i class="checkin"></i><span>Check-in en l&iacute;nea</span></a></div></div><div class="row"><div class="tcolumn"><img src="https://s3.amazonaws.com/aeromexico/booking/c1.png"><h3>Exceso de equipaje</h3><p>Adqui&eacute;relo con <strong>precio preferente</strong> y ahorra tiempo y dinero en el aeropuerto.</p><p class="link"><a href="#">M&aacute;s informaci&oacute;n</a></p></div><div class="tcolumn"><img src="https://s3.amazonaws.com/aeromexico/booking/c2.png"><h3>Ascenso a Premier</h3><p>Mejora tu experiencia de viaje a bordo de Clase Premier a <strong>precio promocional</strong>.</p><p class="link"><a href="#">M&aacute;s informaci&oacute;n</a></p></div><div class="tcolumn"><img src="https://s3.amazonaws.com/aeromexico/booking/c3.png"><h3>Hasta 2 KmP</h3><p>Por d&oacute;lar en todas tus compras, s&oacute;lo con tu tarjeta de cr&eacute;dito <strong>Aerom&eacute;xico Banamex</strong></p><p class="link"><a href="#">M&aacute;s informaci&oacute;n</a></p></div></div>');
        $("#flomes_1").after(custonHTML);
        $("#cnt_1_1_2_3").append('<div class="links"><div class="link"><a href="#"><div class="print"></div><p>Imprime tu factura</p></a></div><div class="link"><a href="#"><div class="policy"></div><p>Pol&iacute;tica de equipaje</p></a></div></div>');
        $(".pnrinfo, .flightsdetails, .paymentsummary, .bagfee").hide();
    })();
}