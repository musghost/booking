var len_number = 9;
var FPSessionIDAMEX = Calc_MID();

var FPSID;
var NTH;
var THDirPrincipal;
var THDirComp;
var THCiudad;
var THEstado;
var THPais;
var THCP;
var THTel;
var THEmail;
var TipoPago;

var MaxLenPhoneNumber = 15;

	jQuery(document).ready( function()
	{
		/* Paso 4 */		
		//if( jQuery('#main-Page').hasClass('resItinDetailPAX') )
		/* Paso 5 y elegir asientos viewSeatMap */
		//if( jQuery('#main-Page').hasClass('viewSeatMap'))		
	
		/* Paso 6 resItinDetailPayment */
		if( jQuery('#main-Page').hasClass('resItinDetailPayment') )
		{
			DeviceFingerPrint();
		}

		/* Paso 7 pnrReview */
		if( jQuery('#main-Page').hasClass('pnrReview') )
		{
			SepararCampos();
			WebServiceFingerPrint();
		}
	}
);

	//Funci?n para generar el Session_ID y disparar los eventos de CyberSource
	function DeviceFingerPrint()
	{
		// - IMPORTANT!!! Change this value to org_id ="k8vif92e" for Production Environment
		var	org_id = "k8vif92e";
		

		var bodyElements = document.body.childNodes;

		//Objeto Param de Flash
		objectParam = document.createElement("param");
		objectParam.setAttribute("name","movie");
		objectParam.setAttribute("value","https://h.online-metrix.net/fp/fp.swf?org_id=" + org_id + "&session_id=Aeromexico" + FPSessionIDAMEX);

		//Creaci?n e inserci?n de propiedades del objeto de flash
		objectFlash = document.createElement("object");
		objectFlash.setAttribute("type","application/x-shockwave-flash");
		objectFlash.setAttribute("data","https://h.online-metrix.net/fp/fp.swf?org_id=" + org_id + "&session_id=Aeromexico" + FPSessionIDAMEX);
		objectFlash.setAttribute("width","1");
		objectFlash.setAttribute("height","1");
		objectFlash.setAttribute("id","thm_fp");
		objectFlash.appendChild(objectParam);
		document.body.insertBefore(objectFlash, bodyElements[0]);

		//Creaci?n e inserci?n de propiedades del objeto Script
		objectScript = document.createElement("script");
		objectScript.setAttribute("src","https://h.online-metrix.net/fp/check.js?org_id=" + org_id + "&session_id=Aeromexico" + FPSessionIDAMEX);
		objectScript.setAttribute("type","text/javascript");
		document.body.insertBefore(objectScript, bodyElements[0]);

		//Creaci?n e inserci?n de propiedades del objeto Imagen
		objectImage = document.createElement("img");
		objectImage.setAttribute("src","https://h.online-metrix.net/fp/clear.png?org_id=" + org_id + "&session_id=Aeromexico" + FPSessionIDAMEX + "&m=2");
		objectImage.setAttribute("alt","");
		document.body.insertBefore(objectImage, bodyElements[0]);

		//Creaci?n e inserci?n de propiedades del objeto P?rrafo
		objectParagraph = document.createElement("p");
		objectParagraph.setAttribute("style", "background:url(https://h.online-metrix.net/fp/clear.png?org_id=" + org_id + "&session_id=Aeromexico" + FPSessionIDAMEX + "&m=1)");
		document.body.insertBefore(objectParagraph, bodyElements[0]);
		
		eventoFingerPrint(
			function() 
			{
				FPSID = FPSessionIDAMEX;
				if(document.getElementById('cardHolderName').value != null )
					NTH = ReemplazapCarEsp(trim(document.getElementById('cardHolderName').value).toUpperCase());  //document.forms[0].cardHolderName.value;		
				else
					NTH = "";
					
				if(typeof document.forms[0].billingAddress1 != "undefined" && document.forms[0].billingAddress1.value != null )
					THDirPrincipal = ReemplazapCarEsp(trim(document.forms[0].billingAddress1.value).toUpperCase());
				else
					THDirPrincipal="";
					
				if(typeof document.forms[0].billingAddress2 != "undefined" && document.forms[0].billingAddress2.value != null )
					THDirComp = ReemplazapCarEsp(trim(document.forms[0].billingAddress2.value).toUpperCase());
				else
					THDirComp="";
					
				if(typeof document.forms[0].billingCity != "undefined" && document.forms[0].billingCity.value != null )
					THCiudad = ReemplazapCarEsp(trim(document.forms[0].billingCity.value).toUpperCase());
				else
					THCiudad="";
				
				if(typeof document.forms[0].billingStateProv != "undefined" && document.forms[0].billingStateProv.value != null )
					THEstado = ReemplazapCarEsp(trim(document.forms[0].billingStateProv.value).toUpperCase());
				else
					THEstado="";
				
				if(typeof document.forms[0].billingCountry != "undefined" && document.forms[0].billingCountry.value != null )
					THPais = ReemplazapCarEsp(trim(document.forms[0].billingCountry.value).toUpperCase());
				else
					THPais="";
				
				if(typeof document.forms[0].billingZip != "undefined" && document.forms[0].billingZip.value != null )
					THCP = ReemplazapCarEsp(trim(document.forms[0].billingZip.value));
				else
					THCP="";
				
				if( typeof document.forms[0].cardHolderPhoneCountry != "undefined" && typeof document.forms[0].cardHolderPhoneArea != "undefined" && typeof document.forms[0].cardHolderPhoneCode != "undefined" && 
					document.forms[0].cardHolderPhoneCountry.value != null && document.forms[0].cardHolderPhoneArea.value != null && document.forms[0].cardHolderPhoneCode.value != null)
				{
					var THTel_Country = ReemplazapCarEsp(trim(document.forms[0].cardHolderPhoneCountry.value));
					var THTel_City = ReemplazapCarEsp(trim(document.forms[0].cardHolderPhoneArea.value));
					var THTel_Phone = ReemplazapCarEsp(trim(document.forms[0].cardHolderPhoneCode.value));
					
					if ( (THTel_Country.toString().length + THTel_City.toString().length + THTel_Phone.toString().length) > MaxLenPhoneNumber )
					{
						if ( (THTel_City.toString().length + THTel_Phone.toString().length) > MaxLenPhoneNumber )
						{
							THTel = THTel_Phone.toString();
						}
						else
						{
							THTel = THTel_City.toString() + THTel_Phone.toString();
						}
					}
					else
					{
						THTel = THTel_Country.toString() + THTel_City.toString() + THTel_Phone.toString();
					}
				}
				else
				{
					THTel="";
				}
				
				if(typeof document.forms[0].cardHolderEmail != "undefined" && document.forms[0].cardHolderEmail.value != null )
					THEmail = ReemplazapCarEsp(trim(document.forms[0].cardHolderEmail.value));
				else
					THEmail="";
		
		
				if (document.getElementById('PPPaymentChecked') != null && document.getElementById('PPDCPaymentChecked') != null)
				{
					if(document.getElementById('PPPaymentChecked').checked || document.getElementById('PPDCPaymentChecked').checked)
						TipoPago = "PYP";
					else
						TipoPago = "TC";
				}
				else 
					TipoPago = "";
					
					
				if(document.getElementById('remotePaymentChecked') != null && document.getElementById('remotePaymentChecked').checked)
				{
					TipoPago = "REF";
				}
					
						   
				window.name = 'FPSID:='+FPSID+'|NTH:='+NTH+'|THTel:='+THTel+'|THEmail:='+THEmail+'|THDirPrincipal:='+THDirPrincipal+
				'|THDirComp:='+THDirComp+'|THCiudad:='+THCiudad+'|THEstado:='+THEstado+'|THPais:='+THPais+'|THCP:='+THCP+'|TipoPago:='+TipoPago;
			}
		);
	}

	function eventoFingerPrint(func)
	{
		elem = document.forms[0];
		if (elem.addEventListener)
		{ // W3C DOM
			elem.addEventListener('submit',func,false);
			return true;
		}
		else
		{
			if (elem.attachEvent) // IE DOM
				return elem.attachEvent("onsubmit", func);
			else
			{
				throw 'No es posible a?adir evento';
				return false;
			}
		}
	}
	
	//Funci?n que env?a Session_ID y PNR al WebService de FingerPrint
	function WebServiceFingerPrint()
	{
		// Data for PROD Environment
		var wb_source = "https://fingerprint.aeromexico.com/FingerPrintSessions.asmx/";
		var wb_method = "StoreFingerPrint";		
		var swf_source = "https://fingerprint.aeromexico.com/FFP.swf";
				
		
		var PNR = "";
		var Currency= "";
		var TotalPrice = "";
		
		var navegador= $.browser;
		var NAV ="";
		var VER = navigator.userAgent;
		
		if(VER.length > 100)
		{
			VER = VER.substring(0, 99);
		}
		
		if(navegador.webkit){
			NAV = "ChromeSafari";
		}else if(navegador.opera){
			NAV = "Opera";
		}else if(navegador.mozilla){
			NAV = "Firefox";
		}else if(navegador.safari ){
			NAV = "Safari";
		}else if ($.browser.msie && $.browser.version > 6 ){
			NAV = "IEmayor6";
		}else if ($.browser.msie && $.browser.version <= 6 ){
			NAV = "IEMenorIgual6";
		}
		
		NAV = NAV + " - " + VER;
		

		//Obtenemos el PNR
		if($(".recordLocater").text() != null )
			PNR = $(".recordLocater").text().replace(" ","");
		else
			PNR="PNRNULL";
		
		if(document.getElementById('totalFee').nextSibling.data != null )
			Currency = ReemplazapCarEsp(trim(document.getElementById('totalFee').nextSibling.data));
		
		
		var bodyElements = document.body.childNodes;
		
		//Obtenemos el explorador que se esta usando
		if ( ($.browser.msie && $.browser.version > 6 ) || $.browser.opera)
		{
			if (document.getElementById('totalFee').innerText != null)
				TotalPrice = trim(document.getElementById('totalFee').innerText.replace("$","").replace(",",""));
		}
		else
		{
			if (document.getElementById('totalFee').lastChild.data != null)
				TotalPrice = trim(document.getElementById('totalFee').lastChild.data.replace("$","").replace(",",""));
		}

		//Intento 1
		objectDiv = document.createElement("div");
		objectDiv.setAttribute("id", "div_swf");
		document.body.insertBefore(objectDiv, bodyElements[0]);
		
		var variables = {FPSID:FPSID,PNR:PNR,NTH:NTH,THDirPrincipal:THDirPrincipal,THDirComp:THDirComp,THCiudad:THCiudad,THEstado:THEstado,THPais:THPais,THCP:THCP,THTel:THTel,THEmail:THEmail,Currency:Currency,TotalPrice:TotalPrice,NAV:NAV+",11",TipoPago:TipoPago};
		
		var params = {};
		var atributos = {};
		swfobject.embedSWF(swf_source, "div_swf", "1", "1", "9.0.0", "",
						   variables, params, atributos);

						   
		//Intento 2
		var parameters = "FPSID=" + FPSID + "&PNR=" + PNR + "&NTH=" + NTH + "&THDirPrincipal=" + THDirPrincipal + "&THDirComp=" + THDirComp + "&THCiudad=" + THCiudad +	"&THEstado=" + THEstado + "&THPais=" + THPais + "&THCP=" + THCP + "&THTel=" + THTel + "&THEmail=" + THEmail + "&Currency=" + Currency + "&TotalPrice=" + TotalPrice + "&NAV=" + NAV +",12"+ "&TipoPago=" + TipoPago;
	
		//Creaci?n Objeto iFrame
		objectiFrame = document.createElement("iframe");
		objectiFrame.setAttribute("name", "wsfingerprint");		
		objectiFrame.setAttribute("src", wb_source + wb_method + "?" + parameters);
		objectiFrame.setAttribute("style", "display:none");
		document.body.insertBefore(objectiFrame, bodyElements[0]);
		
		
		//Intento 3
		parameters = "FPSID=" + FPSID + "&PNR=" + PNR + "&NTH=" + NTH + "&THDirPrincipal=" + THDirPrincipal + "&THDirComp=" + THDirComp + "&THCiudad=" + THCiudad +	"&THEstado=" + THEstado + "&THPais=" + THPais + "&THCP=" + THCP + "&THTel=" + THTel + "&THEmail=" + THEmail + "&Currency=" + Currency + "&TotalPrice=" + TotalPrice + "&NAV=" + NAV +",13" + "&TipoPago=" + TipoPago;
				
		objectFlash = document.createElement("object");
		objectFlash.setAttribute("type","application/x-shockwave-flash");
		objectFlash.setAttribute("data", swf_source + "?" + parameters);
		objectFlash.setAttribute("width","1");
		objectFlash.setAttribute("height","1");
		objectFlash.setAttribute("id","flashfingerprint");
		document.body.insertBefore(objectFlash, bodyElements[0]);
	}
	
	
	function ReemplazapCarEsp(cadena)
	{
		var new_cad = cadena;
		
		try
		{
			new_cad = new_cad.replace(" ","%20"); new_cad = new_cad.replace("!","%21");
			//new_cad = new_cad.replace("""","%22"); //new_cad = new_cad.replace("%","%25");
			new_cad = new_cad.replace("#","%23"); new_cad = new_cad.replace("$","%24"); 
			new_cad = new_cad.replace("&","%26"); new_cad = new_cad.replace("'","%27");
			new_cad = new_cad.replace("(","%28"); new_cad = new_cad.replace(")","%29");
			new_cad = new_cad.replace("*","%2A"); new_cad = new_cad.replace("+","%2B");
			new_cad = new_cad.replace(",","%2C"); new_cad = new_cad.replace("-","%2D");
			new_cad = new_cad.replace(".","%2E"); new_cad = new_cad.replace("/","%2F");
			
			new_cad = new_cad.replace(":","%3A"); new_cad = new_cad.replace(";","%3B");
			new_cad = new_cad.replace("<","%3C"); new_cad = new_cad.replace("=","%3D");
			new_cad = new_cad.replace(">","%3E"); new_cad = new_cad.replace("?","%3F");
			
			new_cad = new_cad.replace("[","%5B"); new_cad = new_cad.replace("\\","%5C");
			new_cad = new_cad.replace("]","%5D"); new_cad = new_cad.replace("^","%5E");
			new_cad = new_cad.replace("_","%5F"); 

			new_cad = new_cad.replace("`","%60");

			new_cad = new_cad.replace("{","%7B"); new_cad = new_cad.replace("|","%7C");
			new_cad = new_cad.replace("}","%7D"); new_cad = new_cad.replace("~","%7E");
			
			
			//new_cad = new_cad.replace("?","%"); new_cad = new_cad.replace("?","%20AC");
			new_cad = new_cad.replace("?","%A2"); new_cad = new_cad.replace("?","%F7");
			
			new_cad = new_cad.replace("?","A"); new_cad = new_cad.replace("?","A");
			new_cad = new_cad.replace("?","E"); new_cad = new_cad.replace("?","E");
			new_cad = new_cad.replace("?","I"); new_cad = new_cad.replace("?","I");
			new_cad = new_cad.replace("?","O"); new_cad = new_cad.replace("?","O");
			new_cad = new_cad.replace("?","U"); new_cad = new_cad.replace("?","U");
			new_cad = new_cad.replace("?","A"); new_cad = new_cad.replace("?","A");
			new_cad = new_cad.replace("?","E"); new_cad = new_cad.replace("?","E");
			new_cad = new_cad.replace("?","I"); new_cad = new_cad.replace("?","I");
			new_cad = new_cad.replace("?","O"); new_cad = new_cad.replace("?","O");
			new_cad = new_cad.replace("?","U"); new_cad = new_cad.replace("?","U");
			
			new_cad = new_cad.replace("?","A"); new_cad = new_cad.replace("?","A");
			new_cad = new_cad.replace("?","E"); new_cad = new_cad.replace("?","E");
			new_cad = new_cad.replace("?","I"); new_cad = new_cad.replace("?","I");
			new_cad = new_cad.replace("?","O"); new_cad = new_cad.replace("?","O");
			new_cad = new_cad.replace("?","U"); new_cad = new_cad.replace("?","U");
			new_cad = new_cad.replace("?","A"); new_cad = new_cad.replace("?","A");
			new_cad = new_cad.replace("?","E"); new_cad = new_cad.replace("?","E");
			new_cad = new_cad.replace("?","I"); new_cad = new_cad.replace("?","I");
			new_cad = new_cad.replace("?","O"); new_cad = new_cad.replace("?","O");
			new_cad = new_cad.replace("?","U"); new_cad = new_cad.replace("?","U");
			
			new_cad = new_cad.replace("?","A"); new_cad = new_cad.replace("?","A");
			new_cad = new_cad.replace("?","%D1"); new_cad = new_cad.replace("?","A");
			new_cad = new_cad.replace("?","O"); new_cad = new_cad.replace("?","%C7");
			new_cad = new_cad.replace("?","A"); new_cad = new_cad.replace("?","%E7");
			new_cad = new_cad.replace("?","%F1"); new_cad = new_cad.replace("?","Y");
			new_cad = new_cad.replace("?","O"); new_cad = new_cad.replace("?","Y");
			new_cad = new_cad.replace("?","%D8"); new_cad = new_cad.replace("?","Y");
			new_cad = new_cad.replace("?","%F8"); new_cad = new_cad.replace("?","%DE");
			new_cad = new_cad.replace("?","%D0"); new_cad = new_cad.replace("?","%FE");
			new_cad = new_cad.replace("?","%F0"); new_cad = new_cad.replace("?","%C6");
			new_cad = new_cad.replace("?","%DF"); new_cad = new_cad.replace("?","%E6");
			
			new_cad = new_cad.replace("?","%BC"); 
			new_cad = new_cad.replace("?","%BD"); new_cad = new_cad.replace("?","%A1");
			new_cad = new_cad.replace("?","%BE"); new_cad = new_cad.replace("?","%A3");
			new_cad = new_cad.replace("?","%A9"); new_cad = new_cad.replace("?","%A5");
			new_cad = new_cad.replace("?","%AE"); new_cad = new_cad.replace("?","%A7");
			new_cad = new_cad.replace("?","%AA"); new_cad = new_cad.replace("?","%A4");
			new_cad = new_cad.replace("?","%B2"); new_cad = new_cad.replace("?","%A6");
			new_cad = new_cad.replace("?","%B3"); new_cad = new_cad.replace("?","%AB");
			new_cad = new_cad.replace("?","%B9"); new_cad = new_cad.replace("?","%AC");
			new_cad = new_cad.replace("?","%AF");
			new_cad = new_cad.replace("?","%B5"); new_cad = new_cad.replace("?","%BA");
			new_cad = new_cad.replace("?","%B6"); new_cad = new_cad.replace("?","%B4");
			new_cad = new_cad.replace("?","%B7"); new_cad = new_cad.replace("?","%A8");
			new_cad = new_cad.replace("?","%B0"); new_cad = new_cad.replace("?","%B1");
			new_cad = new_cad.replace("?","%B8"); new_cad = new_cad.replace("?","%BB");
			new_cad = new_cad.replace("?","%BF");
			
			if (new_cad != cadena)
			{
				new_cad = ReemplazapCarEsp(new_cad);
			}		
		}
		catch (err) 
		{			
		}
	
		return new_cad;
	}

	
	function SepararCampos()
	{
		var campos = window.name.split('|');
		for(i=0; i<campos.length; i++)
		{
			var campo = campos[i].split(':=')[0];
			switch (campos[i].split(':=')[0])
			{
				case 'FPSID':
					FPSID = campos[i].split(':=')[1];
					break;
				case 'NTH':
					NTH = campos[i].split(':=')[1];
					break;
				case 'THDirPrincipal':
					THDirPrincipal = campos[i].split(':=')[1];
					break;
				case 'THDirComp':
					THDirComp = campos[i].split(':=')[1];
					break;
				case 'THCiudad':
					THCiudad = campos[i].split(':=')[1];
					break;
				case 'THEstado':
					THEstado = campos[i].split(':=')[1];
					break;
				case 'THPais':
					THPais = campos[i].split(':=')[1];
					break;
				case 'THCP':
					THCP = campos[i].split(':=')[1];
					break;
				case 'THTel':
					THTel = campos[i].split(':=')[1];
					break;
				case 'THEmail':
					THEmail = campos[i].split(':=')[1];
					break;
				case 'TipoPago':
					TipoPago = campos[i].split(':=')[1];
					break;
			}
		}
	}
	
	function Calc_MID()
	{
		var MID = Math.floor((Math.random() * Math.pow(10, len_number)))
		if (MID.toString().length != len_number)
			MID = Calc_MID();
			
		return MID;
	}
	
	
	function trim(stringToTrim) {
		return stringToTrim.replace(/^\s+|\s+$/g,"");
	}
	function ltrim(stringToTrim) {
		return stringToTrim.replace(/^\s+/,"");
	}
	function rtrim(stringToTrim) {
		return stringToTrim.replace(/\s+$/,"");
	}



