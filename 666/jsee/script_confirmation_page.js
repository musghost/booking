var confirmation_page_function = function () {
        $("#booking-process").addClass("active");
        $("#booking-process li").each(function(a){
                $(this).addClass(((a + 1) % 2 === 0) ? "two" : "one");
                if(a === 4) $(this).attr('class', 'stepFuture  prevFuture stepFuture_prevFuture one');
                if(a === 5) $(this).attr('class', 'stepCurrent lastStep prevFuture stepCurrent_prevFuture stepCurrent_lastStep two');
                if(a === 6) $(this).remove();
            });
        $(".component.bagfee").after('<div class="row grayback"><div class="tcolumn"><a href="#"><i class="imp"></i><span>Imprimir p&aacute;gina</span></a></div><div class="tcolumn"><a href="#"><i class="search"></i><span>Buscar nuevamente</span></a></div><div class="tcolumn"><a href="#"><i class="checkin"></i><span>Check-in en l&iacute;nea</span></a></div></div><div class="row"><div class="tcolumn"><img src="https://s3.amazonaws.com/aeromexico/booking/c1.png"><h3>Exceso de equipaje</h3><p>Adqui&eacute;relo con <strong>precio preferente</strong> y ahorra tiempo y dinero en el aeropuerto.</p><p class="link"><a href="#">M&aacute;s informaci&oacute;n</a></p></div><div class="tcolumn"><img src="https://s3.amazonaws.com/aeromexico/booking/c2.png"><h3>Ascenso a Premier</h3><p>Mejora tu experiencia de viaje a bordo de Clase Premier a <strong>precio promocional</strong>.</p><p class="link"><a href="#">M&aacute;s informaci&oacute;n</a></p></div><div class="tcolumn"><img src="https://s3.amazonaws.com/aeromexico/booking/c3.png"><h3>Hasta 2 KmP</h3><p>Por d&oacute;lar en todas tus compras, s&oacute;lo con tu tarjeta de cr&eacute;dito <strong>Aerom&eacute;xico Banamex</strong></p><p class="link"><a href="#">M&aacute;s informaci&oacute;n</a></p></div></div>');
}