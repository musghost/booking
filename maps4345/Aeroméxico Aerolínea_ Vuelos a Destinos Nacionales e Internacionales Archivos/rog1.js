
var cityInput1 = $("#cityInput1");
var cityInput2 = $("#cityInput2");

var ciudadSalida = $('#ciudadSalida');
var ciudadDestino = $('#ciudadDestino');

var citySelect1 = $('#citySelect1');
var citySelect2 = $('#citySelect2');

var depCitySelected = $('#depCitySelected');
var retCitySelected = $('#retCitySelected');

var mdlRegion = 1;
var modalOpen = false;
var modalCompra = $('#modal-compra');

var cityKey1 = '', cityLabel1 = '';
var cityKey2 = '', cityLabel2 = '';

var depAirports = [];
var depRegions = [];

var tabNum = 1;
var typeOWActive = 0;
var flagCalendar = 0;

var accentMap = {"á": "a","é": "e","í": "i","ó": "o","ú": "u"};
var normalize = function( term ) {var ret = "";for ( var i = 0; i < term.length; i++ ) {ret += accentMap[ term.charAt(i) ] || term.charAt(i);}return ret;};
var sort_by = function(field, reverse, primer){ var key = function (x) {return primer ? primer(x[field]) : x[field]};  return function (a,b) { var A = key(a), B = key(b); return (A < B ? -1 : (A > B ? 1 : 0)) * [1,-1][+!!reverse];}}

$(".empty").val("");
var lastBtn = $("#main .services fieldset .button").last(),
	url = $(".flight-form a").last().attr("href"),
	a = $("<a>");
	a.attr("href", url);
	a.addClass("button");
	a.html("Check-in");
	lastBtn.after(a);
	lastBtn.remove();

function findIndexByKeyValue(obj, key, value){
    for (var i = 0; i < obj.length; i++) {
        if (obj[i][key] === value)
            return i;
    }
    return null;
}
function iChooChooChooseYou(selectID, item, citySelect, citySelected, cityInput){
	citySelect.hide();
	citySelected.html(item.label+'<a href="#" class="close-icon close-icon-'+selectID+'">×</a>');
	citySelected.fadeIn();
	if(selectID == 1){
		cityKey1 = item.key;
		if(tabNum == 1)
			$('#sector1_o').val(cityKey1);
		if(tabNum == 2)
			$('#origin').val(cityKey1);
			var airportsAux = findIndexByKeyValue(airports,'key',cityKey1);
			depAirports = [];
			depRegions = [];
			for(y=0; y<airports[airportsAux]['depart'].length; y++){
				for(z=0; z<airports.length; z++){
					if(airports[airportsAux]['depart'][y] == airports[z].key){
						depAirports.push(airports[z]);
						regionAux = findIndexByKeyValue(depRegions,'regionKey',parseInt(airports[z].region));
						if(regionAux == null){ 
							mdlRegionAux = findIndexByKeyValue(modalRegions,'regionKey',parseInt(airports[z].region));
							var obj = {
								"regionKey": modalRegions[mdlRegionAux].regionKey,
								"regionName": modalRegions[mdlRegionAux].regionName
							};
							depRegions.push(obj);
						}
					}
				}
			}
			depRegions.sort(sort_by('regionKey', false));
	}
	if(selectID == 2){
		cityKey2 = item.key;
		if(tabNum == 1)
			$('#sector1_d').val(cityKey2);
		if(tabNum == 2)
			$('#destination').val(cityKey2);
	}
	$('.close-icon').click(function(){
		citySelected.hide();
		citySelect.fadeIn();
		//cityInput.val('');
		//console.log('selectID :: '+selectID);
	});
	$('.close-icon-1').click(function(){
		//citySelected.hide();
		if(tabNum == 1){
			$('#sector1_o').val('');
			$('#sector1_d').val('');
		} else {
			$('#origin').val('');
			$('#destination').val('');
		}
		cityKey1 = '';
		cityKey2 = '';
		//ciudadSalida.focus();
	});
	$('.close-icon-2').click(function(){
		//ciudadDestino.focus();
		cityKey2 = '';
		if(tabNum == 1){
			$('#sector1_d').val('');
		} else {
			$('#destination').val('');
		}
		cityKey2 = '';
		//ciudadSalida.focus();
	});
}
function loadModalCities(airportsArray, region, selectID, citySelect, citySelected){
	var modalPartnersHTML = '<span class="partner_roundtrip">'+modalLabels[0].modalPartnerOW+'</span><span class="partner_one-way">'+modalLabels[0].modalPartnerRT+'</span>';
	var countryAux ='';
	var airportsTemp= [];
	var countCities = 20;
	$('#citiesModal').empty();
	var htmlModalCities = '';
	htmlModalCities += '<div class="break_modal"><ul>';
	if(selectID == 1){
		airportsTemp = airportsArray;
	}
	if(selectID == 2){
		if(tabNum == 1)
			airportsTemp = depAirports;
		if(tabNum == 2)
			airportsTemp = depAirports_mlt;
		airportsTemp.sort(sort_by('country', false));
	}
	for(x=0; x<airportsTemp.length; x++){
		if(airportsTemp[x].region == region){
			if(countryAux != airportsTemp[x].country && airportsTemp[x].region !== 1){
			        countryAux = airportsTemp[x].country;
			        countCities = countCities - 3;
			        if(countCities<0){
			            htmlModalCities += '</ul></div><div class="break_modal">';
			            countCities=20;
			        }
			        htmlModalCities += '</ul><ul><li><span class="countryTitle">'+airportsTemp[x].country+'</span></li>';
			}
			partnerClass = (airportsTemp[x].partner === 1) ? 'partner_roundtrip' : 'partner_one-way';
			htmlModalCities += '<li><a href="#" class="cityModal '+partnerClass+'" title="'+airportsTemp[x].label+'" rel="'+airportsTemp[x].key+'">'+airportsTemp[x].label+'</a></li>';
			countCities--;
	        if(countCities<0){
	            htmlModalCities += '</ul></div><div class="break_modal"><ul>';
				countCities=20;
	            if(airportsTemp[x].region !== 1){
	            	htmlModalCities += '<li><span class="countryBreak"></span></li>';
	            	countCities= countCities-3;
	            }
	        }
		}
	}
	htmlModalCities += '</ul></div>';
	$('#citiesModal').html(htmlModalCities); 

	$('#modal-compra-partners').html(modalPartnersHTML);
$('.cityModal').click(function(){
               cityLabel1 = $(this).attr('title');
               if(selectID == 1){
                       cityKey1 = $(this).attr('rel');
                       if(tabNum == 1)
                               $('#sector1_o').val(cityKey1);
                       if(tabNum == 2)
                               $('#origin').val(cityKey1);
                       
                       //console.log($('#sector1_o').val());
                       var airportsAux = findIndexByKeyValue(airportsArray,'key',cityKey1);
                       depAirports = [];
                       depAirports_mlt = [];
                       depRegions = [];
                       for(y=0; y<airportsArray[airportsAux]['depart'].length; y++){
                               for(z=0; z<airports.length; z++){
                                       if(airportsArray[airportsAux]['depart'][y] == airports[z].key){
                                               if(tabNum == 1)
                                                       depAirports.push(airports[z]);
                                               if(tabNum == 2)
                                                       depAirports_mlt.push(airports[z]);
                                               regionAux = findIndexByKeyValue(depRegions,'regionKey',parseInt(airports[z].region));
                                               if(regionAux == null){ 
                                                               mdlRegionAux = findIndexByKeyValue(modalRegions,'regionKey',parseInt(airports[z].region));
                                                               var obj = {
                                                                       "regionKey": modalRegions[mdlRegionAux].regionKey,
                                                                       "regionName": modalRegions[mdlRegionAux].regionName
                                                               };
                                                               depRegions.push(obj);
                                               }
                                       }
                               }
                       }
                       depRegions.sort(sort_by('regionKey', false));

               }
		if(selectID == 2){
			cityKey2 = $(this).attr('rel');
			if(tabNum == 1)
				$('#sector1_d').val(cityKey2);
			if(tabNum == 2)
				$('#destination').val(cityKey2);
			//$('#sector1_d').val(cityKey2);
			//console.log($('#sector1_d').val());
		}
		$('#modal-compra').removeClass('modal-compra');
		citySelect.hide();
		citySelected.html(cityLabel1+'<a href="#" id="closeIcon" class="close-icon close-icon-'+selectID+'">×</a>');
               citySelected.fadeIn();
               closeCompraModal();
               $('.close-icon-1').click(function(){
                       $('#sector1_o').val('');
                       $('#sector1_d').val('');
                       cityKey1 = '';
                       cityKey2 = '';
               });
               $('.close-icon-2').click(function(){
                       $('#sector1_d').val('');
                       cityKey2 = '';
               });

               $('.close-icon').click(function(){
                       citySelected.hide();
                       citySelect.fadeIn();
               });
	});
}
function closeCompraModal(){
	$('#modal-compra-bg').removeClass('modal-compra-bg');
	$('#citiesModal').empty();
	$('#modal-compra-partners').empty();
	var windowWidth = $(window).width();
	var windowHeight = $(window).height();
	modalCompra.animate({
			width:0,
			height:0,
			opacity: 0,
			left: windowWidth/2,
			right: windowHeight/2,
			top: windowHeight / 2
	});
	modalOpen = false;
}
function openCompraModal(airportsArray, selectID, airportKey, mdlRegion, modalRegions, citySelect, citySelected){
	$('#modal-compra-bg').addClass('modal-compra-bg');
	$('#modal-compra-header').html('<h3>'+modalLabels[0].modalTitle+'<div id="modal-close"><a href="#" id="closeModalCompra" >×</a></div></h3>');
	modalOpen = true;
	var modalRegionHTML = '';
	var mdlActual = '';
	var windowWidth = $(window).width(); var windowHeight = $(window).height();
	var left = windowWidth / 2 - 360; var top = windowHeight / 2 - 250;
	var w = 720; var h = 500;
	modalCompra.css({left:windowWidth/2, top:windowHeight/2});
    modalCompra.animate({
    	width:w,
    	height:h,
    	left:left,
    	top:top,
    	opacity: 1
	}, 400, function() {
		loadModalCities(airportsArray, mdlRegion, selectID, citySelect, citySelected);
		modalRegionHTML = '<h4>'+modalLabels[0].modalRegion+'</h4>';
		modalRegionHTML += '<ul>';
		for(x=0; x<modalRegions.length; x++){
			mdlActual = (mdlRegion==modalRegions[x].regionKey) ? 'region_select' : '';
			modalRegionHTML += '<li><a href="#" id="mdlRegion_'+modalRegions[x].regionKey+'" title="'+modalRegions[x].regionTitle+'" rel="'+modalRegions[x].regionKey+'" class="regionModal '+mdlActual+'">'+modalRegions[x].regionName+'</a></li>';
		}
		modalRegionHTML += '</ul>';
		$('#modal-compra-region').html(modalRegionHTML);
		$('.regionModal').click(function(){
			$('#mdlRegion_'+mdlRegion).removeClass('region_select');
			$(this).addClass('region_select');
			mdlRegion = $(this).attr('rel');
			//console.log(mdlRegion);
			loadModalCities(airportsArray,mdlRegion, selectID, citySelect, citySelected);
		});
		$('#closeModalCompra').click(function(){
			closeCompraModal();
		});
	});
}
citySelect1.click(function(){
	$(this).focusout();
	openCompraModal(airports, 1,0,1,modalRegions, cityInput1, depCitySelected);
});
citySelect2.click(function(){
	$(this).focusout();
	var cityKey1 = $('#sector1_o').val();
	if(cityKey1!=''){
		openCompraModal(depAirports, 2,cityKey1,1,depRegions, cityInput2, retCitySelected);
	} else {
		alert(errorForm[4]);
	}
});
$('#modal-compra-bg').click(function(){closeCompraModal();});
$(document).keyup(function(e) {
	if (e.keyCode == 27) {
		if(modalOpen)
			closeCompraModal();
		if ($('#sector1_d').val() != '') {
			retCitySelected.hide();
			ciudadDestino.val('');			
			cityInput2.fadeIn();
			ciudadSalida.focus();
		}
		if ($('#sector1_o').val() != '') {
			depCitySelected.hide();
			cityInput1.fadeIn();
			ciudadSalida.val('');
			ciudadSalida.focus();
			flagCalendar = 0;
		}
	}
});
ciudadSalida.autocomplete({
	position: { my: "left top", at: "left-20 top+30", collision: "flip" },
	source: function( request, response ) {
				var matcher = new RegExp( $.ui.autocomplete.escapeRegex( request.term ), "i" );
				response( $.grep( airports, function( value ) {
						value = value.label || value.value || value;
						return matcher.test( value ) || matcher.test( normalize( value ) );
					})
				);
			},
   select: function(event, ui) {
   				iChooChooChooseYou(1,ui.item, cityInput1, depCitySelected, ciudadSalida);
   				ciudadDestino.focus();
   			},
   	appendTo: "#cityInput1"
}).data( "ui-autocomplete" )._renderItem = function( ul, item ) {
	var classPartner = (item.partner==1) ? 'partner_roundtrip' : 'partner_one-way';
	return $( "<li class='autocomplete-option'></li>" )
			.data( "item.autocomplete", item )
			.append( "<a class='"+classPartner+"'>" + item.label + "</a>" )
			.appendTo( ul );
};
ciudadDestino.autocomplete({
	position: { my: "left top", at: "left-20 top+30", collision: "flip" },
	source: function( request, response ) {
			if (cityKey1 != '') {
				var airports2= [];
				var airportsDepart = findIndexByKeyValue(airports,'key',cityKey1);
				for(y=0; y<airports[airportsDepart]['depart'].length; y++){
					for(z=0; z<airports.length;z++){
						if(airports[airportsDepart]['depart'][y] == airports[z].key){
							var obj = {
								key: airports[z].key,
								label: airports[z].label,
								country: airports[z].country,
								partner: airports[z].partner
							};
							airports2.push(obj);
							//console.log(airports2[airportsDepart]['depart'][y]);
						}
					}
					
				}
				var matcher = new RegExp( $.ui.autocomplete.escapeRegex( request.term ), "i" );
				response( $.grep( airports2, function( value ) {
						value = value.label || value.value || value;
						return matcher.test( value ) || matcher.test( normalize( value ) );
					})
				);
			} else {
				//console.log('Error!');
			}
	},
   select: function(event, ui) {
   				iChooChooChooseYou(2,ui.item, cityInput2, retCitySelected, ciudadDestino);
   				if(flagCalendar == 0)
   				$("#fechaSalida").focus();
   				//console.log(ui.item.key);
   			},
	delay: 0,
	minLength: 0,
	appendTo: cityInput2
}).focus(function(){
	window.setTimeout(function(){
		if (ciudadDestino.val().length == 0)
			ciudadDestino.autocomplete('search', '');
	});
}).click(function(){
	ciudadDestino.val('');
	window.setTimeout(function(){
		if (ciudadDestino.val().length == 0)
			ciudadDestino.autocomplete('search', '');
	});
}).data( "ui-autocomplete" )._renderItem = function( ul, item ) {
	var classPartner = (item.partner==1) ? 'partner_roundtrip' : 'partner_one-way';
	return $( "<li class='autocomplete-option'></li>" )
			.data( "item.autocomplete", item )
			.append( "<a class='"+classPartner+"'>" + item.label + "</a>" )
			.appendTo( ul );
};
var months = new Array("JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC");
$("#fechaSalida").datepicker({
	numberOfMonths: 2,
	dateFormat: 'D, M dd, yy',
	minDate: 0,
	maxDate: '+11m',
	minLength: 0,
	delay: 0,
	showButtonPanel: true,
	onSelect: function(date) {
		dateA = $(this).datepicker('getDate');
		var day = "" + dateA.getDate();
		day = (day.length < 2) ? "0" + day : day;
		$('#depDay').val(day);
		var month = "" + (dateA.getMonth() + 1);
		month = (month.length < 2)? "0" + month : month;
		$('#depMonth').val(months[dateA.getMonth()]);
				if ($('#depDesp'))$('#depDesp').val(dateA.getFullYear()+"-"+ month +"-"+day);
		/*if ($('#depDesp'))$('#depDesp').val(dateA.getFullYear()+"-"+(dateA.getMonth()+1)+"-"+day);*/
		dateAm = new Date(dateA.getTime());
		dateAm.setDate(dateAm.getDate());
		 if(typeOWActive == 0){
                       $("#fechaRegreso").datepicker("option", "minDate", dateAm);
                       setTimeout(function() { $('#fechaRegreso').focus(); }, 150);
               }
		$("#fechaSalidaDiv").hide();
		$('#fechaSalidaSelected').html($("#fechaSalida").val()+'<a href="#" id="calendarIcon1" class="close-icon close-icon-2">×</a>');
		$('#fechaSalidaSelected').fadeIn();
		flagCalendar = 1;
		$('#calendarIcon1').click(function(){
			$('#fechaSalidaSelected').hide();
			$('#fechaSalidaDiv').fadeIn();
			$('#depDay').val('');
			$('#depMonth').val('');
			$('#fechaSalida').val('');
			$('#fechaSalida').focus();
			flagCalendar = 0;
		});
		if($("#fechaRegreso").val() >= $("#fechaSalida").val()){
			$('#fechaRegresoSelected').hide();
			$('#fechaRegresoDiv').fadeIn();
			$('#fechaRegreso').val('');
		}
	}
});
$("#fechaRegreso").datepicker({
	numberOfMonths: 2,
	dateFormat: 'D, M dd, yy',
	minDate: 0,
	maxDate: '+11m',
	showButtonPanel: true,
	onSelect: function(date) {
		dateB = $(this).datepicker('getDate');
		var day = "" + dateB.getDate();
		day = (day.length < 2) ? "0" + day : day;
		$('#retDay').val(day);
		var month = "" + (dateB.getMonth() + 1);
		month = (month.length < 2)? "0" + month : month;
		//$('#retMonth').val(month);
		$('#retMonth').val(months[dateB.getMonth()]);
		//if ($('#retDesp'))$('#retDesp').val(dateB.getFullYear()+"-"+(dateB.getMonth()+1)+"-"+day);
		if ($('#retDesp'))$('#retDesp').val(dateB.getFullYear()+"-"+month+"-"+day);
		$("#fechaRegresoDiv").hide();
		$('#fechaRegresoSelected').html($(this).val()+'<a href="#" id="calendarIcon2" class="close-icon close-icon-2">×</a>');
		$('#fechaRegresoSelected').fadeIn();
		$('#calendarIcon2').click(function(){
			$('#fechaRegresoSelected').hide();
			$('#fechaRegresoDiv').fadeIn();
			$('#retDay').val('');
			$('#retMonth').val('');
			$(this).val('');
			$(this).focus();
		});
	}
});	
$('.modalajax').click(function(e) {
	e.preventDefault();
	var href = $(e.target).attr('href');
	var title = $(e.target).attr('title');
	if (href.indexOf('#') != 0) {
		$.get(href, function(data) {
			$('#modal-close').html('<a href="#" class="close">&times;</a>')
			$('#modal-title').html(title);
			$('#modal-body-ajax').load(href + ' .ammodal');
			$("#modal-from-dom").animate({
				top: "50%",
				opacity:1
			}, 400, function(){
				$(this).addClass("active");
				$(this).attr("style", "");
				$("body").append('<div class="modal-backdrop"></div>');
			});
		});
	}
});	
var numCupons = addCupons();
var inputsCheck = false;
$("#ft-adult,#ft-child,#ft-baby").change(function(){ numCupons = addCupons(); });
$('#add_coupon,#ft-code').click(function(){
    	$('#coupons_bg').fadeIn('slow');
    	$("#ft-couponAux").focus();
    	$('#ft-couponAux').removeClass('couponFocus');				
    	$('#ft-couponAux').removeClass('couponError');   		
		for(i=1; i<=numCupons; i++){
    			$('#couponNumber'+i).removeClass('couponFocus');				
    			$('#couponNumber'+i).removeClass('couponError');   						
		}
    	inputsCheck = true;
    	if($('#ft-couponAux').val() == ''){
    		inputsCheck = false;
    	}
		for(i=1; i<=numCupons; i++){
			if($('#couponNumber'+i).val()==''){
    			inputsCheck = false;
    		}    						
		}
	if (inputsCheck == true){
	    	$('#active_coupons').removeClass('button_inactive_coupon');
	    	$('#active_coupons').addClass('button_active_coupon');
	} else {
	    	$('#active_coupons').removeClass('button_active_coupon');    	
	    	$('#active_coupons').addClass('button_inactive_coupon');	  	
	}
});
$('#icon_close').click(function(){
	$('#modal-compra-bg').removeClass('modal-compra-bg');
	$('#coupons_bg').fadeOut();
	$('#ft-couponAux').val('');
	$('#ft-code').val('');
	for(i=1; i<=numCupons; i++){
		$('#couponNumber'+i).val('');    						
	}
	inputsCheck = false;
});
$('#active_coupons').click(function(){
	var i = 1;
	inputsCheck == true
	if($('#ft-couponAux').val() == ''){
		$('#ft-couponAux').removeClass('couponFocus');
		$('#ft-couponAux').addClass('couponError');
		inputsCheck = false;
	}
	for(i=1; i<=numCupons; i++){
		if($('#couponNumber'+i).val()==''){
			$('#couponNumber'+i).removeClass('couponFocus');				
			$('#couponNumber'+i).addClass('couponError');
			inputsCheck = false;
		}    						
	}
	if(inputsCheck == true){
		$('#coupons_bg').fadeOut();
		var ft_coupon = $('#ft-couponAux').val();
		$('#ft-code').val(ft_coupon);
	   	$('#active_coupons').removeClass('button_inactive_coupon');    	
	   	$('#active_coupons').addClass('button_active_coupon');
	} else {
	    $('#active_coupons').removeClass('button_active_coupon');    	
	    $('#active_coupons').addClass('button_inactive_coupon');	  	
	}
});
$('#typeOW').click(function(){
       $('#fechaRegresoSelected').hide();
       $('#fechaRegresoDiv').fadeIn();
       $('#retDay').val('');
       $('#retMonth').val('');
       $('#fechaRegresoDiv').addClass('select_date_disabled');
       $('#fechaRegreso').css('color','#777');
       $('#fechaRegreso').val(' ----------------------------------------------');
       $('#fechaRegreso').attr('disabled','disabled');
       typeOWActive = 1;
});
$('#typeRT').click(function(){
       $('#fechaRegresoDiv').removeClass('select_date_disabled');
       $('#fechaRegreso').css('color','#003263');
       $('#fechaRegreso').val('');
       $('#fechaRegreso').removeAttr('disabled');
       $("#fechaRegreso").datepicker("option", "minDate", dateAm);
       typeOWActive = 0;
       if(!Modernizr.input.placeholder){
               $('input[placeholder]').placeholder();
       }
});
addDateFlightView();
$(document).on('click', '.close, .modal-backdrop', function(a){
	a.preventDefault();
	$(".modal-backdrop").animate({
		opactity: 0
	}, 400, function(){
		$(this).remove();
	});
	$("#modal-from-dom").animate({
		opacity: 0
	}, 400, function(){
		$(this).removeClass("active");
		$(this).attr("style","");
	});
});
$(".cuadroAviso").each(function(){
  $(this).attr("readonly", "true")
});