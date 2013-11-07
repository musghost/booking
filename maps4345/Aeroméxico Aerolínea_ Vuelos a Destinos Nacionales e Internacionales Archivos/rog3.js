/** Labels **********************/
$('#ft-child').val('0');
$('#ft-adult').val('1');

function addDateFlightView(){
	var optionsHTML = '';
	var date = new Date();
	var yesterday = new Date(); yesterday.setDate(date.getDate()-1);
	var tomorrow = new Date(); tomorrow.setDate(date.getDate()+1);
	var month = new Array("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
	optionsHTML += '<option value="'+yesterday.getFullYear()+''+("0" + (yesterday.getMonth() + 1)).slice(-2)+''+("0" + yesterday.getDate()).slice(-2)+'">'+yesterday.getDate()+' '+month[yesterday.getMonth()]+' '+yesterday.getFullYear()+'</option>';
	optionsHTML += '<option value="'+date.getFullYear()+''+("0" + (date.getMonth() + 1)).slice(-2)+''+("0" + date.getDate()).slice(-2)+'" selected="selected">'+date.getDate()+' '+month[date.getMonth()]+' '+date.getFullYear()+'</option>';
	optionsHTML += '<option value="'+tomorrow.getFullYear()+''+("0" + (tomorrow.getMonth() + 1)).slice(-2)+''+("0" + tomorrow.getDate()).slice(-2)+'">'+tomorrow.getDate()+' '+month[tomorrow.getMonth()]+' '+tomorrow.getFullYear()+'</option>';
	$('#flightView').html(optionsHTML);
}
	
function addCupons(){
	var cupons = 0;
	var inputsHTML = '';
	var couponLabel = $("#coupons_inputs").data("label-coupon");
	cupons = parseInt($('#ft-adult').val()) + parseInt($('#ft-child').val());
	$('#ft-code,#ft-couponAux').val('');
	if(cupons > 6){ cupons = 6; }
	inputsHTML += '<div id="couponsAux-wrap2">';
	for(var i = 1; i<=cupons; i++)
		inputsHTML += '<span><label for="couponNumber' + i + '">' + couponLabel + i +'</label><input type="text" id="couponNumber'+i+'" name="couponNumber'+i+'" /></span>';
	inputsHTML += '</div>';
	$('#coupons_inputs').html(inputsHTML);
	$('#coupons_input input').keydown(function(event){
	    	inputsCheck = false;
	    	$(this).removeClass('couponError');
	    	$(this).addClass('couponFocus');
	    	if($('#ft-couponAux').val() != ''){
				for(i=1; i<=numCupons; i++){
					if($('#couponNumber'+i).val() == '')
		    			break;
		    		if(i==numCupons)
		    			inputsCheck = true;
				}
			} else {
		    	inputsCheck = false;
	    		$(this).removeClass('couponError');
	    		$(this).addClass('couponFocus');			
			}
			if(inputsCheck == true){
				$('#active_coupons').addClass('button_active_coupon');
			} else {
				$('#active_coupons').removeClass('button_active_coupon');
				$('#active_coupons').addClass('button_inactive_coupon');
			}
	});
	return cupons;
}

$('#ft-submit').click(function(){
      var validaAlerta = '';
      var validaStatus = 1;
      if($('#sector1_o').val() == ''){
        validaAlerta += errorForm[0];
        validaStatus = 0;
      }
      if($('#sector1_d').val() == ''){
        validaAlerta += errorForm[1];
        validaStatus = 0;
      }
      if($('#depDay,#depMonth').val() == ''){
        validaAlerta += errorForm[2];
        validaStatus = 0;
      }
      if($("#bBaf input[type='radio']:checked").val() != 'onewaytravel'){
        if($('#retDay,#retMonth').val() == ''){
          validaAlerta += errorForm[3];
          validaStatus = 0;
        }
      }
      if (validaStatus == 0) alert(validaAlerta);
      else{
      		resFinal = 'Ciudad 1.  '+$('#sector1_o').val()+'\n';
      		resFinal += 'Ciudad 2. '+$('#sector1_d').val()+'\n';
      		resFinal += 'Fecha 1. Dia:'+$('#depDay').val()+'- Mes:'+$('#depMonth').val()+'\n';
      		resFinal += 'Fecha 2. Dia:'+$('#retDay').val()+'- Mes:'+$('#retMonth').val()+'\n';
      		//alert(resFinal);
      }
      
      return (validaStatus == 1) ? true : false;
      return false;
      
});

function oferta(forma){
	var journeySpan = forma.direction.value;
	if(journeySpan == "onewaytravel")
	{
		journeySpan = "oneWay";
	}
	if(journeySpan == "returntravel")
	{
		journeySpan = "RoundTrip";
	}
	var urlAction = "/";
	urlAction  += journeySpan + "/";
	urlAction  += forma.departCity.value + "/";
	urlAction  += forma.returnCity.value + "/";
	urlAction  += forma.depDesp.value + "/";
	if(journeySpan == "RoundTrip")
	{
		urlAction  += forma.retDesp.value + "/";
	}
	urlAction  += forma.ADT.value + "/0/0";
	//alert(urlAction);
	forma.action = forma.formURL.value + urlAction;
}
