var tabsIdioma = [
	{	"modalChildsTitle"	: "Ages",
		"childLabel"		: "Child",
		"ageLabel"			: "Years",
		"agePlaceholder"	: "Select Age"
	}
],
contigo = false;

var $menuTab1 = $('#menuTab1');
var $menuTab2 = $('#menuTab2');

var $tab1 = $('#tab1');
var $tab2 = $('#tab2');

var $ciudadHotelSalida = $('#ciudadHotelSalida');
var $ciudadHotelDestino = $('#ciudadHotelDestino');
var $fechaHotelSalida = $('#fechaHotelSalida');
var $fechaHotelRegreso = $('#fechaHotelRegreso');

var $depHotelCitySelected = $('#depHotelCitySelected');
var $retHotelCitySelected = $('#retHotelCitySelected');

var $fechaHotelSalidaDiv = $('#fechaHotelSalidaDiv');
var $fechaHotelRegresoDiv = $('#fechaHotelRegresoDiv');
var $fechaHotelSalidaSelected = $('#fechaHotelSalidaSelected');
var $fechaHotelRegresoSelected = $('#fechaHotelRegresoSelected');

var $cityInput3 = $('#cityInput3');
var $cityInput4 = $('#cityInput4');

var $citySelect3 = $('#citySelect3');
var $citySelect4 = $('#citySelect4');

var $hotelChild = $('#hotel-child');
var $submitFormHotel = $('#hBaf');
var $submitHotel = $('#submitHotel');

var cityKey1 = '', cityLabel1 = '';
var cityKey2 = '', cityLabel2 = '';

var dateHotelA, dateHotelB;
var selectedHotelAC1, selectedHotelAC2, selectedHotelAC1Aux, selectedHotelAC2Aux;
var numChilds=0, numChildsAux;
var childAges = new Array();

$citySelect3.click(function(){
       $(this).focusout();
       openCompraModal(airports_mlt,1,0,2,modalRegions_mlt,$cityInput3,$depHotelCitySelected);
});
$citySelect4.click(function(){
	$(this).focusout();
	if(cityKey1!=''){
		openCompraModal(depAirports_mlt,2,cityKey1,1,depRegions,$cityInput4,$retHotelCitySelected);
	} else {
		alert('Error!');
	}
});

function toogleTabs(tabActive){
	if(tabActive==1){
		$tab2.hide();
		$tab1.fadeIn();
		$menuTab2.removeClass('menuTab2Active');
		$menuTab1.addClass('menuTab1Active');
	} else {
		$tab1.hide();
		$tab2.fadeIn();
		$menuTab1.removeClass('menuTab1Active');
		$menuTab2.addClass('menuTab2Active');
	}
}
var tabActive = document.location.hash;
if(tabActive == '#vacations'){
	toogleTabs(2);
	tabNum = 2;
}
$menuTab1.click(function(){
	toogleTabs(1);
	tabNum = 1;
});
$menuTab2.click(function(){
	toogleTabs(2);
	tabNum = 2;
});

$ciudadHotelSalida.autocomplete({
	source: function( request, response ) {
				var matcher = new RegExp( $.ui.autocomplete.escapeRegex( request.term ), "i" );
				response( $.grep( airports_mlt, function( value ) {
						value = value.label || value.value || value;
						return matcher.test( value ) || matcher.test( normalize( value ) );
					})
				);
			},
   select: function(event, ui) {
   				iChooChooChooseYou(1,ui.item, $cityInput3, $depHotelCitySelected, $ciudadHotelSalida);
   				//console.log(ui.item.key);
   			}
}).data( "ui-autocomplete" )._renderItem = function( ul, item ) {
	var classPartner = (item.partner==1) ? 'partner_roundtrip' : 'partner_one-way';
	return $( "<li class='autocomplete-option'></li>" )
			.data( "item.autocomplete", item )
			.append( "<a class='"+classPartner+"'>" + item.label + "</a>" )
			.appendTo( ul );
};

$ciudadHotelDestino.autocomplete({
	source: function( request, response ) {
                       if (cityKey1 != '') {
                               var airports2= [];
                               var airportsDepart = findIndexByKeyValue(airports_mlt,'key',cityKey1);
                               for(y=0; y<airports_mlt[airportsDepart]['depart'].length; y++){
                                       for(z=0; z<airports.length;z++){
                                               if(airports_mlt[airportsDepart]['depart'][y] == airports[z].key){
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
                       }else {
                                       console.log('Error!');
                       }
       },
   select: function(event, ui) {
   				iChooChooChooseYou(2,ui.item, $cityInput4, $retHotelCitySelected, $ciudadHotelDestino);
   	},
	delay: 0,
	minLength: 0
}).focus(function(){
	window.setTimeout(function(){
		if ($ciudadHotelDestino.val().length == 0)
			$ciudadHotelDestino.autocomplete('search', '');
	});
}).click(function(){
	window.setTimeout(function(){
		if ($ciudadHotelDestino.val().length == 0)
			$ciudadHotelDestino.autocomplete('search', '');
	});
}).data( "ui-autocomplete" )._renderItem = function( ul, item ) {
	var classPartner = (item.partner==1) ? 'partner_roundtrip' : 'partner_one-way';
	return $( "<li class='autocomplete-option'></li>" )
			.data( "item.autocomplete", item )
			.append( "<a class='"+classPartner+"'>" + item.label + "</a>" )
			.appendTo( ul );
};

var allAgesTexted = 0;
$("#select-child li").click(function(){
       var inputsChildAge = '',
       		valSelect = $(this).attr("data-val");
       numChilds = valSelect;
       allAgesTexted = 0;
       $('#active_childs').removeClass('button_active_coupon');
	if(numChilds > 0 ){
		for(i=1; i<=numChilds; i++){
			$('#child-hotel-title span').html(tabsIdioma[0].modalChildsTitle);
			inputsChildAge += '<span><label for="ninoHotel0'+i+'">'+tabsIdioma[0].childLabel+' '+i+'</label>';
			inputsChildAge += '<select class="hotelDataChild" id="ninoHotel0'+i+'" name="ninoHotel0'+i+'">';
			inputsChildAge += '<option class="firstInputChild" value="0">'+tabsIdioma[0].agePlaceholder+'</option>';
			for(j=2; j<=18; j++){
		    	inputsChildAge += '<option value="'+j+'">'+j+' '+tabsIdioma[0].ageLabel+'</option>';
			}
		    inputsChildAge += '</select></span>';
		}
		$('#child-hotel_bg').fadeIn();
		$('#child-hotel_input').html(inputsChildAge);
		$('#child-hotel_input select').change(function(){
			console.log('--- :'+numChilds+': --------------------------------------');
			allAgesTexted=1;
			for(i=1, j=0; i<=numChilds; i++, j++){
				childAges[j] = $('#ninoHotel0'+i).val();
				if(childAges[j]==0){allAgesTexted=0;}
				console.log(childAges[j]);
			}
			console.log('Activo?:'+ allAgesTexted);
			if(allAgesTexted==1){
				$('#active_childs').addClass('button_active_coupon');
			} else {
				$('#active_childs').removeClass('button_active_coupon');
			}
		});
		$('#active_childs').click(function(){
			if(allAgesTexted==1){
				$('#child-hotel_bg').fadeOut();
				$('#changeHotelAges').fadeIn();
			}
		});
		$('#changeHotelAges').click(function(){
			$('#child-hotel_bg').fadeIn();
		});
		$('#icon_close_childs').click(function(){
			$('#child-hotel_bg').fadeOut();
			numChilds = 0;
			$hotelChild.val(numChilds);
			allAgesTexted = 0;
			$('#active_childs').removeClass('button_active_coupon');
			$('#changeHotelAges').fadeOut();
		});
		$(document).keyup(function(e) {
			if (e.keyCode == 27) {
				$('#child-hotel_bg').fadeOut();
			}
		});
	}
	if(numChilds == 0 ){
		$('#changeHotelAges').fadeOut();
	}
});
$submitFormHotel.submit(function(){
	return false;
});
$submitHotel.click(function(){
	var validaAlerta = '';
	var validaStatus = 1;
	var origen = $('#origin').val();
	var destination = $('#destination').val();
	var departureDate = $('#departureDate').val();
	var returnDate = $('#returnDate').val();
	var departureTime = $('#departureTime').val();
	var returnTime = $('#returnTime').val();
	var hotelPackage = $('input[name=tipHotelpaquete]:checked').val();
	var adultsNum = $('#hotelAdults').val();
	var hotelChild = $('#hotel-child').val();
	var stringURL = '';
	stringURL += 'http://www.aeromexicovacations.com/sitenav?tag=BOOK_COBRAND';
	stringURL += '&package='+hotelPackage;
	stringURL += '&airDisplayIndicator=P';
	if($('#origin').val() == ''){
        validaAlerta += "- Departure city is required \n";
        validaStatus = 0;
	}else{
		stringURL += '&origin='+origen;		
	}
	if($('#destination').val() == ''){
        validaAlerta += "- Destination city is required \n";
        validaStatus = 0;
	}else{
		stringURL += '&destination='+destination;		
	}
	if($('#departureDate').val() == ''){
        validaAlerta += "- Departure date is required \n";
        validaStatus = 0;
	}else{
		stringURL += '&departureDate='+departureDate;
	}
	stringURL += '&departureTime=00:01';
	if($('#departureDate').val() == ''){
          validaAlerta += "- Return date is required \n";
          validaStatus = 0;
	}else{
		stringURL += '&returnDate='+returnDate;
	}
	stringURL += '&returnTime=23:59';
	stringURL += '&cabinClass=C';
	stringURL += '&adultCount='+adultsNum;
	stringURL += '&childCount='+hotelChild;
	for(i=0; i<childAges.length; i++)
		stringURL += '&child['+i+'].age='+childAges[i];
	stringURL += '&coBrand=TEST';
	stringURL += '&fewestStops=false';
	stringURL += '&rfr=MEXQUICKBOOK';
	if (validaStatus == 0) alert(validaAlerta);
	else{
		//alert(stringURL);
		window.location.href = stringURL;
	}
	return false;
});
$fechaHotelSalida.click(function(){

	$(this).datepicker();
});
$fechaHotelSalida.datepicker({
	numberOfMonths: 2,
	dateFormat: 'D, M dd, yy',
	minDate: 0,
	maxDate: '+11m',
	showButtonPanel: true,
	onSelect: function(date) {
		dateHotelA = $(this).datepicker('getDate');
		dateHotelAm = new Date(dateHotelA.getTime());
		dateHotelAm.setDate(dateHotelAm.getDate());
		$('#departureDate').val((dateHotelAm.getMonth()+1)+'/'+dateHotelAm.getDate()+'/'+dateHotelAm.getFullYear());
		$fechaHotelRegreso.datepicker("option", "minDate", dateHotelAm);
		setTimeout(function() { $fechaHotelRegreso.focus(); }, 150);

		$fechaHotelSalidaDiv.hide();
		$fechaHotelSalidaSelected.html($(this).val()+'<a href="#" id="calendarIcon3" class="calendar-icon"></a>');
		$fechaHotelSalidaSelected.fadeIn();

		$('#calendarIcon3').click(function(){
			$fechaHotelSalidaSelected.hide();
			$fechaHotelSalidaDiv.fadeIn();
			$fechaHotelSalida.val('');
			$fechaHotelSalida.focus();
		});
		if($fechaHotelRegreso.val() >= $fechaHotelSalida.val()){
			$fechaHotelRegresoSelected.hide();
			$fechaHotelRegresoDiv.fadeIn();
			$fechaHotelRegreso.val('');
		}
	}
});
$fechaHotelRegreso.datepicker({
	numberOfMonths: 2,
	dateFormat: 'D, M dd, yy',
	minDate: 0,
	maxDate: '+11m',
	showButtonPanel: true,
	onSelect: function(date) {
		dateHotelB = $(this).datepicker('getDate');
		dateHotelBm = new Date(dateHotelB.getTime());
		dateHotelBm.setDate(dateHotelBm.getDate());
		$('#returnDate').val((dateHotelBm.getMonth()+1)+'/'+dateHotelBm.getDate()+'/'+dateHotelBm.getFullYear());

		$fechaHotelRegresoDiv.hide();
		$fechaHotelRegresoSelected.html($(this).val()+'<a href="#" id="calendarIcon4" class="calendar-icon"></a>');
		$fechaHotelRegresoSelected.fadeIn();
		$('#calendarIcon4').click(function(){
			$fechaHotelRegresoSelected.hide();
			$fechaHotelRegresoDiv.fadeIn();
			$fechaHotelRegreso.val('');
			$fechaHotelRegreso.focus();
		});
	}
});	

$(".switchToFrm2").click(function(){
	console.log("contigo", contigo);
	if(contigo === true){
		window.airports = window.airportsAux;
		contigo = false;
	}
	console.log("contigo", contigo);
	tabNum = 2;
	$(".flight-form").eq(0).animate({
		opacity: .5
	}, 300, function(){
		$(this).css({
			opacity: 1,
			display: 'none'
		});
		$(".flight-form").eq(1).css({
			display: 'block',
			opacity: .5
			
		});
		$(".flight-form").eq(1).animate({
			opacity: 1
		}, 300, function(){
		});
	});
});
$(".switchToFrm1").click(function(){
	console.log("contigo", contigo);
	if(contigo === true){
		window.airports = window.airportsAux;
		contigo = false;
		$(this).parent().find("li").addClass("active");
		$(this).removeClass("active");
	}
	console.log("contigo", contigo);
	tabNum = 1;
	$(".flight-form").eq(1).animate({
		opacity: .5
	}, 300, function(){
		$(this).css({
			opacity: 1,
			display: 'none'
		});
		$(".flight-form").eq(0).css({
			display: 'block',
			opacity: .5
			
		});
		$(".flight-form").eq(0).animate({
			opacity: 1
		}, 300, function(){
		});
	});
});

$(".switchContigo").click(function(a){
	a.preventDefault();
	tabNum = 1;
	$(".flight-form").eq(1).animate({
		opacity: .5
	}, 300, function(){
		$(this).css({
			opacity: 1,
			display: 'none'
		});
		$(".flight-form").eq(0).css({
			display: 'block',
			opacity: .5
			
		});
		$(".flight-form").eq(0).animate({
			opacity: 1
		}, 300, function(){
			console.log("contigo", contigo);
			if(contigo === false){
				contigo = true;
				$(this).parent().find("li").addClass("active");
				$(this).removeClass("active");
				window.airportsAux = window.airports;
				window.airports = window.airportsCTG;
			}
			console.log("contigo", contigo);
		});
	});
});