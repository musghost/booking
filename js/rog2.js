//Códigos y nombres de aeropuertos  
var modalRegions = [
	{	"regionKey": 1, 
		"regionName": "México",
		"regionTitle": "Región México"
	},{
		"regionKey": 2, 
		"regionName": "EEUU y Canadá",
		"regionTitle": "Región EEUU y Canadá"
	},{
		"regionKey": 3, 
		"regionName": "Centroamérica",
		"regionTitle": "Región Centroamérica"
	},{
		"regionKey": 4, 
		"regionName": "Sudamérica",
		"regionTitle": "Región Sudamérica"
	},{
		"regionKey": 5, 
		"regionName": "Europa",
		"regionTitle": "Región Europa"
	},{
		"regionKey": 6, 
		"regionName": "Asia",
		"regionTitle": "Región Asia"
	},{
		"regionKey": 7, 
		"regionName": "El Caribe",
		"regionTitle": "Región El Caribe"
	}
];
//Códigos y nombres de aeropuertos
var airports = [
  {
  "key": "FRA",
  "label": "Frankfurt (FRA)",
  "country": "Alemania",
  "countryCode": "DE",
  "region": 5,
  "partner": 1,
  "depart": Array('MEX')
  }
,  {
  "key": "EZE",
  "label": "Buenos Aires - Ezeiza (EZE)",
  "country": "Argentina",
  "countryCode": "AR",
  "region": 4,
  "partner": 0,
  "depart": Array('ACA','AGU','ATL','BJX','CDG','CEN','CJS','CME','CPE','CUL','CUN','CUU','DEN','DGO','FAT','GDL','HMO','HUX','IAH','JFK','LAP','LAS','LAX','LMM','MAM','MCO','MEX','MIA','MID','MLM','MTT','MTY','MXL','MZT','NLD','OAX','ONT','ORD','PAZ','PHX','PVR','QRO','REX','SAL','SAP','SAT','SFO','SJD','SLP','SLW','SMF','TAM','TAP','TGZ','TIJ','TRC','VER','VSA','YUL','ZCL','ZIH','ZLO')
  }
,  {
  "key": "CNF",
  "label": "Belo Horizonte  (CNF)",
  "country": "Brasil",
  "countryCode": "BR",
  "region": 4,
  "partner": 1,
  "depart": Array('MEX')
  }
,  {
  "key": "BSB",
  "label": "Brasilia  (BSB)",
  "country": "Brasil",
  "countryCode": "BR",
  "region": 4,
  "partner": 1,
  "depart": Array('MEX')
  }
,  {
  "key": "CWB",
  "label": "Curitiba  (CWB)",
  "country": "Brasil",
  "countryCode": "BR",
  "region": 4,
  "partner": 1,
  "depart": Array('MEX')
  }
,  {
  "key": "FLN ",
  "label": "Florianópolis  (FLN)",
  "country": "Brasil",
  "countryCode": "BR",
  "region": 4,
  "partner": 1,
  "depart": Array('MEX')
  }
,  {
  "key": "FOR ",
  "label": "Fortaleza (FOR)",
  "country": "Brasil",
  "countryCode": "BR",
  "region": 4,
  "partner": 1,
  "depart": Array('MEX')
  }
,  {
  "key": "POA",
  "label": "Porto Alegre  (POA)",
  "country": "Brasil",
  "countryCode": "BR",
  "region": 4,
  "partner": 1,
  "depart": Array('MEX')
  }
,  {
  "key": "REC",
  "label": "Recife  (REC)",
  "country": "Brasil",
  "countryCode": "BR",
  "region": 4,
  "partner": 1,
  "depart": Array('MEX')
  }
,  {
  "key": "GIG",
  "label": "Río de Janeiro  (GIG)",
  "country": "Brasil",
  "countryCode": "BR",
  "region": 4,
  "partner": 1,
  "depart": Array('MEX')
  }
,  {
  "key": "GRU",
  "label": "Sao Paulo - Guarulho (GRU)",
  "country": "Brasil",
  "countryCode": "BR",
  "region": 4,
  "partner": 0,
  "depart": Array('ACA','AGU','ATL','BJX','CEN','CJS','CME','CPE','CUL','CUN','CUU','DEN','DFW','DGO','FAT','GDL','HMO','HUX','IAH','JFK','LAP','LAS','LAX','LMM','MAM','MCO','MEX','MIA','MID','MLM','MTT','MTY','MXL','MZT','NLD','OAX','ONT','ORD','PAZ','PHX','PVR','QRO','REX','SAL','SAP','SAT','SFO','SJD','SLP','SLW','SMF','TAM','TAP','TGZ','TIJ','TRC','VER','VSA','YUL','YYZ','ZCL','ZIH','ZLO')
  }
,  {
  "key": "YUL",
  "label": "Montreal - Trudeau (YUL)",
  "country": "Canadá",
  "countryCode": "CA",
  "region": 2,
  "partner": 0,
  "depart": Array('ACA','AGU','BJX','BOG','CEN','CJS','CME','CPE','CUL','CUN','CUU','CVM','DGO','EZE','GDL','GRU','GUA','HMO','LAP','LIM','LMM','MAM','MEX','MID','MLM','MTT','MTY','MXL','MZT','NLD','OAX','PAZ','PVR','QRO','REX','SAP','SJD','SJO','SLP','SLW','TAM','TAP','TGZ','TIJ','TPQ','TRC','VER','VSA','ZCL','ZIH','ZLO')
  }
,  {
  "key": "YYZ",
  "label": "Toronto - Pearson  (YYZ)",
  "country": "Canadá",
  "countryCode": "CA",
  "region": 2,
  "partner": 1,
  "depart": Array('GDL','GRU','LIM','MEX','SCL','SJO')
  }
,  {
  "key": "YVR",
  "label": "Vancouver (YVR)",
  "country": "Canadá",
  "countryCode": "CA",
  "region": 2,
  "partner": 1,
  "depart": Array('MEX')
  }
,  {
  "key": "CCP",
  "label": "Concepción (CCP)",
  "country": "Chile",
  "countryCode": "CL",
  "region": 4,
  "partner": 1,
  "depart": Array('MEX')
  }
,  {
  "key": "PUQ",
  "label": "Punta Arenas (PUQ)",
  "country": "Chile",
  "countryCode": "CL",
  "region": 4,
  "partner": 1,
  "depart": Array('MEX')
  }
,  {
  "key": "SCL",
  "label": "Santiago (SCL)",
  "country": "Chile",
  "countryCode": "CL",
  "region": 4,
  "partner": 0,
  "depart": Array('ACA','AGU','ATL','BJX','CDG','CEN','CJS','CME','CPE','CUL','CUN','CUU','DEN','DFW','DGO','FAT','GDL','HMO','HUX','IAH','JFK','LAP','LAS','LAX','LMM','MAM','MCO','MEX','MIA','MID','MLM','MTT','MTY','MXL','MZT','NLD','NRT','OAX','ONT','ORD','PAZ','PHX','PVR','QRO','REX','SAL','SAP','SAT','SFO','SJD','SLP','SLW','SMF','TAM','TAP','TGZ','TIJ','TRC','VER','VSA','YUL','ZCL','ZIH','ZLO')
  }
,  {
  "key": "PVG",
  "label": "Shanghái - Pudong (PVG)",
  "country": "China",
  "countryCode": "CN",
  "region": 6,
  "partner": 0,
  "depart": Array('ACA','AGU','ATL','BJX','CCS','CEN','CJS','CME','CPE','CUL','CUN','CUU','DFW','DGO','GDL','GUA','HMO','LAP','LIM','LMM','MAM','MEX','MID','MLM','MTT','MTY','MXL','MZT','NLD','OAX','PAZ','PVR','QRO','REX','SJD','SJO','SLP','SLW','TAM','TAP','TGZ','TIJ','TRC','VER','VSA','ZCL','ZIH','ZLO')
  }
,  {
  "key": "AXM",
  "label": "Armenia (AXM)",
  "country": "Colombia",
  "countryCode": "CO",
  "region": 4,
  "partner": 1,
  "depart": Array('MEX')
  }
,  {
  "key": "BAQ",
  "label": "Barranquilla (BAQ)",
  "country": "Colombia",
  "countryCode": "CO",
  "region": 4,
  "partner": 1,
  "depart": Array('MEX')
  }
,  {
  "key": "BOG",
  "label": "Bogotá (BOG)",
  "country": "Colombia",
  "countryCode": "CO",
  "region": 4,
  "partner": 0,
  "depart": Array('ACA','AGU','ATL','BJX','CDG','CEN','CJS','CME','CPE','CTM','CUL','CUN','CUU','DEN','DFW','DGO','FAT','GDL','HMO','IAH','JFK','LAP','LAX','LMM','MAM','MCO','MEX','MIA','MID','MLM','MTT','MTY','MXL','MZT','NLD','NRT','OAX','ONT','ORD','PAZ','PHX','PVG','PVR','QRO','REX','SAT','SFO','SJD','SLP','SMF','TAM','TAP','TGZ','TIJ','TRC','VER','VSA','YUL','ZCL','ZIH','ZLO')
  }
,  {
  "key": "BGA",
  "label": "Bucaramanga (BGA)",
  "country": "Colombia",
  "countryCode": "CO",
  "region": 4,
  "partner": 1,
  "depart": Array('MEX')
  }
,  {
  "key": "CLO",
  "label": "Cali (CLO)",
  "country": "Colombia",
  "countryCode": "CO",
  "region": 4,
  "partner": 1,
  "depart": Array('MEX')
  }
,  {
  "key": "CTG",
  "label": "Cartagena (CTG)",
  "country": "Colombia",
  "countryCode": "CO",
  "region": 4,
  "partner": 1,
  "depart": Array('MEX')
  }
,  {
  "key": "MDE",
  "label": "Medellín (MDE)",
  "country": "Colombia",
  "countryCode": "CO",
  "region": 4,
  "partner": 1,
  "depart": Array('MEX')
  }
,  {
  "key": "PEI",
  "label": "Pereira (PEI)",
  "country": "Colombia",
  "countryCode": "CO",
  "region": 4,
  "partner": 1,
  "depart": Array('MEX')
  }
,  {
  "key": "SJO",
  "label": "San José, CR (SJO)",
  "country": "Costa Rica",
  "countryCode": "CR",
  "region": 3,
  "partner": 0,
  "depart": Array('ACA','AGU','ATL','BJX','CDG','CEN','CJS','CME','CPE','CTM','CUL','CUN','CUU','DEN','DFW','DGO','FAT','GDL','HMO','HUX','IAD','IAH','JFK','LAP','LAS','LAX','LMM','MAM','MCO','MEX','MIA','MID','MLM','MTT','MTY','MXL','MZT','NLD','NRT','OAX','ONT','ORD','PAZ','PHX','PVG','PVR','QRO','REX','SAT','SFO','SJD','SLP','SLW','SMF','TAM','TAP','TGZ','TIJ','TRC','VER','VSA','YUL','YYZ','ZCL','ZIH','ZLO')
  }
,  {
  "key": "SAL",
  "label": "San Salvador (SAL)",
  "country": "El Salvador",
  "countryCode": "SV",
  "region": 3,
  "partner": 0,
  "depart": Array('ACA','AGU','BJX','CDG','CJS','CPE','CUL','CUN','CUU','DGO','EZE','GDL','GRU','HMO','IAD','IAH','JFK','LAP','LAS','LAX','LIM','MAM','MEX','MID','MLM','MTY','MZT','OAX','PVR','QRO','REX','SCL','SFO','SJD','SLP','TAM','TGZ','TRC','VER','VSA','ZCL')
  }
,  {
  "key": "BCN",
  "label": "Barcelona (BCN)",
  "country": "España",
  "countryCode": "ES",
  "region": 5,
  "partner": 1,
  "depart": Array('MEX')
  }
,  {
  "key": "LPA",
  "label": "Gran Canaria (LPA)",
  "country": "España",
  "countryCode": "ES",
  "region": 5,
  "partner": 1,
  "depart": Array('MEX')
  }
,  {
  "key": "ACE",
  "label": "Lanzarote (ACE)",
  "country": "España",
  "countryCode": "ES",
  "region": 5,
  "partner": 1,
  "depart": Array('MEX')
  }
,  {
  "key": "MAD",
  "label": "Madrid (MAD)",
  "country": "España",
  "countryCode": "ES",
  "region": 5,
  "partner": 0,
  "depart": Array('ACA','AGU','BJX','CEN','CJS','CME','CPE','CUL','CUN','CUU','DGO','GDL','GUA','HMO','LAP','LMM','MAM','MEX','MID','MLM','MTT','MTY','MXL','MZT','NLD','OAX','PAZ','PVR','QRO','REX','SJD','SLP','TAM','TAP','TGZ','TIJ','TRC','VER','VSA','ZCL','ZIH','ZLO')
  }
,  {
  "key": "AGP",
  "label": "Málaga (AGP)",
  "country": "España",
  "countryCode": "ES",
  "region": 5,
  "partner": 1,
  "depart": Array('MEX')
  }
,  {
  "key": "PMI",
  "label": "Palma de Mallorca (PMI)",
  "country": "España",
  "countryCode": "ES",
  "region": 5,
  "partner": 1,
  "depart": Array('ATL','MEX')
  }
,  {
  "key": "VLC",
  "label": "Valencia (VLC)",
  "country": "España",
  "countryCode": "ES",
  "region": 5,
  "partner": 1,
  "depart": Array('MEX')
  }
,  {
  "key": "VGO",
  "label": "Vigo (VGO)",
  "country": "España",
  "countryCode": "ES",
  "region": 5,
  "partner": 1,
  "depart": Array('ATL','MEX')
  }
,  {
  "key": "ALB",
  "label": "Albany (ALB)",
  "country": "Estados Unidos",
  "countryCode": "US",
  "region": 2,
  "partner": 1,
  "depart": Array('CUN','GDL','MEX')
  }
,  {
  "key": "ANC",
  "label": "Anchorage (ANC)",
  "country": "Estados Unidos",
  "countryCode": "US",
  "region": 2,
  "partner": 1,
  "depart": Array('MEX')
  }
,  {
  "key": "ATL",
  "label": "Atlanta (ATL)",
  "country": "Estados Unidos",
  "countryCode": "US",
  "region": 2,
  "partner": 0,
  "depart": Array('ACA','AGU','BJX','BOG','BOS','CCS','CEN','CJS','CME','CPE','CTM','CUL','CUN','CUU','CZM','DGO','DTW','EZE','FCO','GDL','GRU','GUA','HMO','JFK','LAP','LIM','LMM','MAM','MEX','MID','MLM','MTT','MTY','MXL','MZT','NLD','OAX','ORD','PAZ','PMI','PTY','PVG','PVR','QRO','REX','ROC','SCL','SJD','SJO','SLC','SLP','TAM','TAP','TGZ','TIJ','TRC','VER','VGO','VSA','ZCL','ZIH','ZLO')
  }
,  {
  "key": "BWI",
  "label": "Baltimore (BWI)",
  "country": "Estados Unidos",
  "countryCode": "US",
  "region": 2,
  "partner": 1,
  "depart": Array('CUN','GDL','MEX','PVR','SJD')
  }
,  {
  "key": "BOS",
  "label": "Boston (BOS)",
  "country": "Estados Unidos",
  "countryCode": "US",
  "region": 2,
  "partner": 1,
  "depart": Array('ATL','CUN','GDL','MEX','SJD')
  }
,  {
  "key": "BRO",
  "label": "Brownsville (BRO)",
  "country": "Estados Unidos",
  "countryCode": "US",
  "region": 2,
  "partner": 0,
  "depart": Array('BJX','CJS','CUL','CUU','GDL','HMO','MEX','MTY','PBC','QRO','TAM','TLC','VER')
  }
,  {
  "key": "ORD",
  "label": "Chicago - O'Hare (ORD)",
  "country": "Estados Unidos",
  "countryCode": "US",
  "region": 2,
  "partner": 0,
  "depart": Array('ACA','AGU','ATL','BJX','BOG','CCS','CEN','CJS','CME','CPE','CTM','CUL','CUN','CUU','CVM','DGO','EZE','GDL','GRU','GUA','HMO','HUX','LAP','LIM','LMM','MAM','MEX','MID','MLM','MTT','MTY','MXL','MZT','NLD','OAX','PAZ','PTY','PVR','QRO','REX','SAP','SCL','SJD','SJO','SLP','SLW','TAM','TAP','TGZ','TIJ','TRC','VER','VSA','ZCL','ZIH','ZLO')
  }
,  {
  "key": "CVG",
  "label": "Cincinnati (CVG)",
  "country": "Estados Unidos",
  "countryCode": "US",
  "region": 2,
  "partner": 1,
  "depart": Array('CUN','GDL','MEX','PVR','SJD')
  }
,  {
  "key": "CMH",
  "label": "Columbus (CMH)",
  "country": "Estados Unidos",
  "countryCode": "US",
  "region": 2,
  "partner": 1,
  "depart": Array('MEX')
  }
,  {
  "key": "DFW",
  "label": "Dallas - Fort Worth  (DFW)",
  "country": "Estados Unidos",
  "countryCode": "US",
  "region": 2,
  "partner": 0,
  "depart": Array('ACA','AGU','BJX','BOG','CCS','CEN','CJS','CME','CPE','CTM','CUL','CUN','CUU','CVM','DGO','GDL','GRU','GUA','HMO','LAP','LIM','LMM','MAM','MEX','MID','MLM','MTT','MTY','MXL','MZT','NLD','NRT','OAX','PAZ','PVG','PVR','QRO','REX','SCL','SJD','SJO','SLP','SLW','TAM','TGZ','TIJ','TPQ','TRC','VER','VSA','ZCL','ZIH','ZLO')
  }
,  {
  "key": "DEN",
  "label": "Denver (DEN)",
  "country": "Estados Unidos",
  "countryCode": "US",
  "region": 2,
  "partner": 0,
  "depart": Array('ACA','AGU','BJX','BOG','CEN','CJS','CME','CPE','CUL','CUN','CUU','DGO','EZE','GDL','GRU','HMO','LAP','LIM','LMM','MAM','MEX','MID','MLM','MTT','MTY','MXL','MZT','NLD','OAX','PAZ','PVR','REX','SAP','SJD','SJO','SLP','TAM','TAP','TGZ','TIJ','TRC','VER','VSA','ZCL','ZIH')
  }
,  {
  "key": "DTW",
  "label": "Detroit - Metro (DTW)",
  "country": "Estados Unidos",
  "countryCode": "US",
  "region": 2,
  "partner": 1,
  "depart": Array('ATL','CCS','CUN','GDL','GUA','MEX','MTY','PVR','SJD','ZLO')
  }
,  {
  "key": "FAT",
  "label": "Fresno (FAT)",
  "country": "Estados Unidos",
  "countryCode": "US",
  "region": 2,
  "partner": 0,
  "depart": Array('ACA','AGU','BJX','BOG','CEN','CJS','CME','CPE','CUL','CUN','CUU','DGO','EZE','GDL','GRU','GUA','HMO','LAP','LIM','LMM','MAM','MEX','MID','MLM','MTT','MTY','MXL','MZT','NLD','OAX','PAZ','PTY','PVR','QRO','REX','SAP','SJD','SJO','SLP','SLW','TAM','TAP','TGZ','TIJ','TRC','VER','VSA','ZCL','ZIH','ZLO')
  }
,  {
  "key": "BDL",
  "label": "Hartford Springfield (BDL)",
  "country": "Estados Unidos",
  "countryCode": "US",
  "region": 2,
  "partner": 1,
  "depart": Array('CUN','GDL','MEX','PVR','SJD')
  }
,  {
  "key": "IAH",
  "label": "Houston - George Bush (IAH)",
  "country": "Estados Unidos",
  "countryCode": "US",
  "region": 2,
  "partner": 0,
  "depart": Array('ACA','AGU','BJX','BOG','CCS','CEN','CJS','CME','CPE','CUL','CUN','CUU','CVM','DGO','EZE','GDL','GRU','GUA','HMO','HUX','LAP','LIM','LMM','MAM','MEX','MID','MLM','MTT','MTY','MXL','MZT','NLD','OAX','PAZ','PTY','PVR','QRO','REX','SAL','SAP','SJD','SJO','SLP','SLW','TAM','TAP','TGZ','TIJ','TPQ','TRC','VER','VSA','ZCL','ZIH','ZLO')
  }
,  {
  "key": "IND",
  "label": "Indianápolis (IND)",
  "country": "Estados Unidos",
  "countryCode": "US",
  "region": 2,
  "partner": 1,
  "depart": Array('MEX')
  }
,  {
  "key": "MCI",
  "label": "Kansas City (MCI)",
  "country": "Estados Unidos",
  "countryCode": "US",
  "region": 2,
  "partner": 1,
  "depart": Array('CUN','GDL','MEX','SJD')
  }
,  {
  "key": "LRD",
  "label": "Laredo (LRD)",
  "country": "Estados Unidos",
  "countryCode": "US",
  "region": 2,
  "partner": 0,
  "depart": Array('ACA','AGU','BJX','CPE','CUU','DGO','GDL','MEX','MID','MLM','MTY','OAX','PVR','QRO','SLP','TAM','TAP','TLC','TRC','VER','ZCL')
  }
,  {
  "key": "LAS",
  "label": "Las Vegas (LAS)",
  "country": "Estados Unidos",
  "countryCode": "US",
  "region": 2,
  "partner": 0,
  "depart": Array('ACA','AGU','BJX','CCS','CEN','CJS','CME','CPE','CTM','CUL','CUN','CUU','DGO','EZE','GDL','GRU','GUA','HMO','HUX','LAP','LIM','LMM','MAM','MEX','MID','MLM','MTT','MTY','MXL','MZT','NLD','OAX','PAZ','PBC','PPE','PTY','PVR','QRO','REX','SAL','SCL','SJD','SJO','SLP','TAM','TAP','TGZ','TIJ','TPQ','TRC','VER','VSA','ZCL','ZIH','ZLO')
  }
,  {
  "key": "LAX",
  "label": "Los Ángeles (LAX)",
  "country": "Estados Unidos",
  "countryCode": "US",
  "region": 2,
  "partner": 0,
  "depart": Array('ACA','AGU','BJX','BOG','CCS','CEN','CJS','CME','CPE','CTM','CUL','CUN','CUU','CVM','DGO','EZE','GDL','GRU','GUA','HMO','HUX','LAP','LIM','LMM','LTO','MAM','MEX','MID','MLM','MTT','MTY','MXL','MZT','NLD','OAX','PAZ','PTY','PVR','QRO','REX','SAL','SAP','SCL','SJD','SJO','SLP','SLW','TAM','TAP','TGZ','TIJ','TLC','TPQ','TRC','VER','VSA','ZCL','ZIH','ZLO')
  }
,  {
  "key": "MEM",
  "label": "Memphis (MEM)",
  "country": "Estados Unidos",
  "countryCode": "US",
  "region": 2,
  "partner": 1,
  "depart": Array('CUN')
  }
,  {
  "key": "MIA",
  "label": "Miami (MIA)",
  "country": "Estados Unidos",
  "countryCode": "US",
  "region": 2,
  "partner": 0,
  "depart": Array('ACA','AGU','BJX','BOG','CEN','CJS','CME','CPE','CTM','CUL','CUN','CUU','CVM','DGO','EZE','GDL','GRU','GUA','HMO','HUX','LAP','LIM','LMM','MAM','MEX','MID','MLM','MTT','MTY','MXL','MZT','NLD','OAX','PAZ','PTY','PVR','QRO','REX','SAP','SCL','SJD','SJO','SLP','SLW','TAM','TAP','TGZ','TIJ','TPQ','TRC','VER','VSA','ZCL','ZIH','ZLO')
  }
,  {
  "key": "MKE",
  "label": "Milwaukee (MKE)",
  "country": "Estados Unidos",
  "countryCode": "US",
  "region": 2,
  "partner": 1,
  "depart": Array('MEX')
  }
,  {
  "key": "MSP",
  "label": "Minneapolis - St. Paul (MSP)",
  "country": "Estados Unidos",
  "countryCode": "US",
  "region": 2,
  "partner": 1,
  "depart": Array('CUN','MEX')
  }
,  {
  "key": "BNA",
  "label": "Nashville (BNA)",
  "country": "Estados Unidos",
  "countryCode": "US",
  "region": 2,
  "partner": 1,
  "depart": Array('CUN','GDL','MEX','SJD')
  }
,  {
  "key": "ORF",
  "label": "Norfolk (ORF)",
  "country": "Estados Unidos",
  "countryCode": "US",
  "region": 2,
  "partner": 1,
  "depart": Array('MEX')
  }
,  {
  "key": "MSY",
  "label": "Nueva Orleáns (MSY)",
  "country": "Estados Unidos",
  "countryCode": "US",
  "region": 2,
  "partner": 0,
  "depart": Array('AGU','BJX','CME','CPE','CUN','CUU','GDL','MEX','MID','MTY','MZT','OAX','PVR','SJD','TRC','VSA','ZIH')
  }
,  {
  "key": "JFK",
  "label": "Nueva York - John F. Kennedy (JFK)",
  "country": "Estados Unidos",
  "countryCode": "US",
  "region": 2,
  "partner": 0,
  "depart": Array('ACA','AGU','ATL','BJX','BOG','CCS','CEN','CJS','CME','CPE','CTM','CUL','CUN','CUU','CVM','DGO','EZE','GDL','GRU','GUA','HMO','LAP','LIM','LMM','LTO','MAM','MEX','MID','MLM','MTT','MTY','MXL','MZT','NLD','OAX','PAZ','PTY','PVR','QRO','REX','SAL','SAP','SJD','SJO','SLP','SLW','TAM','TAP','TGZ','TIJ','TLC','TPQ','TRC','VER','VSA','ZCL','ZIH','ZLO')
  }
,  {
  "key": "LGA",
  "label": "Nueva York - La Guardia (LGA)",
  "country": "Estados Unidos",
  "countryCode": "US",
  "region": 2,
  "partner": 1,
  "depart": Array('CUN','GDL','MEX')
  }
,  {
  "key": "ONT",
  "label": "Ontario (ONT)",
  "country": "Estados Unidos",
  "countryCode": "US",
  "region": 2,
  "partner": 0,
  "depart": Array('ACA','AGU','BJX','BOG','CEN','CJS','CME','CPE','CUL','CUN','CUU','DGO','EZE','GDL','GRU','HMO','LAP','LIM','LMM','MAM','MEX','MID','MLM','MTT','MTY','MXL','MZT','NLD','OAX','PAZ','PVR','QRO','REX','SAP','SJD','SJO','SLP','TAM','TAP','TGZ','TIJ','TLC','TRC','VER','VSA','ZCL','ZIH')
  }
,  {
  "key": "MCO",
  "label": "Orlando (MCO)",
  "country": "Estados Unidos",
  "countryCode": "US",
  "region": 2,
  "partner": 0,
  "depart": Array('ACA','AGU','BJX','BOG','CEN','CJS','CME','CPE','CTM','CUL','CUN','CUU','DGO','EZE','GDL','GRU','GUA','HMO','LAP','LIM','LMM','MAM','MEX','MID','MLM','MTT','MTY','MXL','MZT','NLD','OAX','PAZ','PVR','QRO','REX','SAP','SCL','SJD','SJO','SLP','SLW','TAM','TAP','TGZ','TIJ','TRC','VER','VSA','ZCL','ZIH')
  }
,  {
  "key": "PHL",
  "label": "Philadelphia (PHL)",
  "country": "Estados Unidos",
  "countryCode": "US",
  "region": 2,
  "partner": 1,
  "depart": Array('CUN','GDL','MEX')
  }
,  {
  "key": "PHX",
  "label": "Phoenix (PHX)",
  "country": "Estados Unidos",
  "countryCode": "US",
  "region": 2,
  "partner": 0,
  "depart": Array('ACA','AGU','BJX','BOG','CEN','CJS','CME','CPE','CTM','CUL','CUN','CUU','DGO','EZE','GDL','GRU','HMO','LAP','LIM','LMM','MAM','MEX','MID','MLM','MTT','MTY','MXL','MZT','NLD','OAX','PAZ','PVR','QRO','REX','SAP','SCL','SJD','SJO','SLP','TAM','TAP','TGZ','TIJ','TRC','VER','VSA','ZCL','ZIH')
  }
,  {
  "key": "PDX",
  "label": "Portland (PDX)",
  "country": "Estados Unidos",
  "countryCode": "US",
  "region": 2,
  "partner": 1,
  "depart": Array('MEX')
  }
,  {
  "key": "RDU",
  "label": "Raleigh (RDU)",
  "country": "Estados Unidos",
  "countryCode": "US",
  "region": 2,
  "partner": 1,
  "depart": Array('CUN','GDL','MEX')
  }
,  {
  "key": "RIC",
  "label": "Richmond (RIC)",
  "country": "Estados Unidos",
  "countryCode": "US",
  "region": 2,
  "partner": 1,
  "depart": Array('MEX')
  }
,  {
  "key": "ROC",
  "label": "Rochester (ROC)",
  "country": "Estados Unidos",
  "countryCode": "US",
  "region": 2,
  "partner": 1,
  "depart": Array('ATL','MEX')
  }
,  {
  "key": "SMF",
  "label": "Sacramento (SMF)",
  "country": "Estados Unidos",
  "countryCode": "US",
  "region": 2,
  "partner": 0,
  "depart": Array('AGU','BJX','BOG','CEN','CJS','CME','CPE','CUL','CUN','CUU','DGO','EZE','GDL','GRU','HMO','LAP','LIM','LMM','MAM','MEX','MID','MLM','MTT','MTY','MXL','MZT','NLD','OAX','PAZ','PVR','REX','SAP','SJD','SJO','SLP','TAM','TAP','TGZ','TIJ','TLC','TRC','VER','VSA','ZCL','ZIH')
  }
,  {
  "key": "SLC",
  "label": "Salt Lake City (SLC)",
  "country": "Estados Unidos",
  "countryCode": "US",
  "region": 2,
  "partner": 1,
  "depart": Array('ATL','CCS','CJS','CUL','CUN','CUU','GDL','HMO','LAP','MEX','MTY','PVR','SJD','TRC','ZLO')
  }
,  {
  "key": "SAT",
  "label": "San Antonio (SAT)",
  "country": "Estados Unidos",
  "countryCode": "US",
  "region": 2,
  "partner": 0,
  "depart": Array('ACA','AGU','BJX','BOG','CCS','CEN','CJS','CME','CPE','CTM','CUL','CUN','CUU','CVM','DGO','EZE','GDL','GRU','GUA','HMO','LAP','LIM','LMM','MAM','MEX','MID','MLM','MTT','MTY','MXL','MZT','NLD','OAX','PAZ','PVR','QRO','REX','SAP','SCL','SJD','SJO','SLP','SLW','TAM','TAP','TGZ','TIJ','TLC','TPQ','TRC','VER','VSA','ZCL','ZIH','ZLO')
  }
,  {
  "key": "SAN",
  "label": "San Diego (SAN)",
  "country": "Estados Unidos",
  "countryCode": "US",
  "region": 2,
  "partner": 1,
  "depart": Array('PVR')
  }
,  {
  "key": "SFO",
  "label": "San Francisco (SFO)",
  "country": "Estados Unidos",
  "countryCode": "US",
  "region": 2,
  "partner": 0,
  "depart": Array('ACA','AGU','BJX','BOG','CEN','CJS','CME','CPE','CUL','CUN','CUU','DGO','EZE','GDL','GRU','GUA','HMO','HUX','LAP','LIM','LMM','MAM','MEX','MID','MLM','MTT','MTY','MXL','MZT','NLD','OAX','PAZ','PTY','PVR','QRO','REX','SAL','SAP','SJD','SJO','SLP','SLW','TAM','TAP','TGZ','TIJ','TRC','VER','VSA','ZCL','ZIH','ZLO')
  }
,  {
  "key": "SJC",
  "label": "San José, CA (SJC)",
  "country": "Estados Unidos",
  "countryCode": "US",
  "region": 2,
  "partner": 1,
  "depart": Array('GDL','MEX','SJD')
  }
,  {
  "key": "SEA",
  "label": "Seattle (SEA)",
  "country": "Estados Unidos",
  "countryCode": "US",
  "region": 2,
  "partner": 1,
  "depart": Array('MEX')
  }
,  {
  "key": "SYR",
  "label": "Siracusa (SYR)",
  "country": "Estados Unidos",
  "countryCode": "US",
  "region": 2,
  "partner": 1,
  "depart": Array('MEX')
  }
,  {
  "key": "STL",
  "label": "St. Louis (STL)",
  "country": "Estados Unidos",
  "countryCode": "US",
  "region": 2,
  "partner": 1,
  "depart": Array('CUN','GDL','MEX','PVR','SJD')
  }
,  {
  "key": "TPA",
  "label": "Tampa (TPA)",
  "country": "Estados Unidos",
  "countryCode": "US",
  "region": 2,
  "partner": 1,
  "depart": Array('MEX')
  }
,  {
  "key": "IAD",
  "label": "Washington - Dulles (IAD)",
  "country": "Estados Unidos",
  "countryCode": "US",
  "region": 2,
  "partner": 0,
  "depart": Array('ACA','AGU','BJX','CEN','CJS','CME','CPE','CUL','CUN','CUU','GDL','GUA','HMO','LAP','LIM','LMM','MAM','MEX','MID','MLM','MTT','MTY','MZT','NLD','OAX','PTY','PVR','QRO','REX','SAL','SAP','SJD','SJO','SLP','SLW','TAM','TGZ','TIJ','TRC','VER','VSA','ZCL','ZIH')
  }
,  {
  "key": "LYS",
  "label": "Lyon (LYS)",
  "country": "Francia",
  "countryCode": "FR",
  "region": 5,
  "partner": 1,
  "depart": Array('MEX')
  }
,  {
  "key": "MRS",
  "label": "Marsella (MRS)",
  "country": "Francia",
  "countryCode": "FR",
  "region": 5,
  "partner": 0,
  "depart": Array('MEX')
  }
,  {
  "key": "NCE",
  "label": "Niza (NCE)",
  "country": "Francia",
  "countryCode": "FR",
  "region": 5,
  "partner": 1,
  "depart": Array('MEX')
  }
,  {
  "key": "CDG",
  "label": "París - Charles de Gaulle  (CDG)",
  "country": "Francia",
  "countryCode": "FR",
  "region": 5,
  "partner": 0,
  "depart": Array('ACA','AGU','BJX','BOG','CDG','CEN','CJS','CME','CPE','CUL','CUN','CUU','CVM','DGO','EZE','GDL','GRU','HMO','IAH','JFK','LAP','LAX','LIM','LMM','MAD','MAM','MCO','MEX','MIA','MID','MLM','MSY','MTT','MTY','MXL','MZT','NLD','OAX','ONT','ORD','PAZ','PTY','PVG','PVR','QRO','REX','SAL','SAP','SAT','SCL','SFO','SJD','SJO','SLP','SLW','TAM','TAP','TGZ','TIJ','TPQ','TRC','VER','VSA','YUL','ZCL','ZIH','ZLO')
  }
,  {
  "key": "TLS",
  "label": "Toulouse (TLS)",
  "country": "Francia",
  "countryCode": "FR",
  "region": 5,
  "partner": 1,
  "depart": Array('MEX')
  }
,  {
  "key": "GUA",
  "label": "Guatemala (GUA)",
  "country": "Guatemala",
  "countryCode": "GT",
  "region": 3,
  "partner": 0,
  "depart": Array('ACA','AGU','ATL','BJX','CCS','CEN','CJS','CME','CPE','CUL','CUN','CUU','CVM','DFW','DGO','DTW','FAT','GDL','HMO','IAD','IAH','JFK','LAP','LAS','LAX','LMM','MAD','MAM','MCO','MEX','MIA','MID','MLM','MTT','MTY','MXL','MZT','NLD','OAX','ORD','PAZ','PVG','PVR','QRO','REX','SAT','SFO','SLP','SLW','TAM','TGZ','TIJ','TPQ','TRC','VER','VSA','YUL','ZCL','ZIH','ZLO')
  }
,  {
  "key": "SAP",
  "label": "San Pedro Sula (SAP)",
  "country": "Honduras",
  "countryCode": "HN",
  "region": 3,
  "partner": 0,
  "depart": Array('ACA','AGU','BJX','CEN','CJS','CME','CPE','CUL','CUN','CUU','CVM','DEN','DGO','EZE','FAT','GDL','GRU','HMO','IAD','IAH','JFK','LAP','LAX','LIM','LMM','MAD','MAM','MCO','MEX','MIA','MID','MLM','MTT','MTY','MXL','MZT','NLD','NRT','OAX','ONT','ORD','PAZ','PHX','PVR','QRO','REX','SAT','SCL','SFO','SJD','SLP','SMF','TAM','TAP','TGZ','TIJ','TRC','VER','VSA','YUL','ZCL','ZIH')
  }
,  {
  "key": "MXP",
  "label": "Milán - Malpensa (MXP)",
  "country": "Italia",
  "countryCode": "IT",
  "region": 5,
  "partner": 1,
  "depart": Array('CUN','GDL','MEX')
  }
,  {
  "key": "FCO",
  "label": "Roma - Fiumicino (FCO)",
  "country": "Italia",
  "countryCode": "IT",
  "region": 5,
  "partner": 1,
  "depart": Array('ATL','CUN','GDL','MEX')
  }
,  {
  "key": "NRT",
  "label": "Tokio - Narita (NRT)",
  "country": "Japón",
  "countryCode": "JP",
  "region": 6,
  "partner": 0,
  "depart": Array('ACA','AGU','BJX','BOG','CCS','CEN','CJS','CME','CPE','CUL','CUN','CUU','DFW','DGO','GDL','HMO','LAP','LIM','LMM','MAM','MEX','MID','MLM','MTT','MTY','MXL','MZT','NLD','OAX','PAZ','PVR','QRO','REX','SAP','SCL','SJD','SJO','SLP','SLW','TAM','TAP','TGZ','TIJ','TRC','VER','VSA','ZCL','ZIH','ZLO')
  }
,  {
  "key": "ACA",
  "label": "Acapulco (ACA)",
  "country": "México",
  "countryCode": "MX",
  "region": 1,
  "partner": 0,
  "depart": Array('AGU','ATL','BJX','BOG','CCS','CDG','CEN','CJS','CME','CPE','CTM','CUL','CUN','CUU','CVM','DEN','DFW','DGO','EZE','FAT','GDL','GRU','GUA','HMO','HUX','IAD','IAH','JFK','LAP','LAS','LAX','LIM','LMM','LRD','MAD','MAM','MCO','MEX','MIA','MID','MLM','MTT','MTY','MXL','MZT','NLD','NRT','OAX','ONT','ORD','PAZ','PHX','PTY','PVG','PVR','QRO','REX','SAL','SAP','SAT','SCL','SFO','SJD','SJO','SLP','SLW','TAM','TAP','TGZ','TIJ','TLC','TPQ','TRC','VER','VSA','YUL','YYZ','ZCL','ZLO')
  }
,  {
  "key": "AGU",
  "label": "Aguascalientes (AGU)",
  "country": "México",
  "countryCode": "MX",
  "region": 1,
  "partner": 0,
  "depart": Array('ACA','ATL','BOG','CCS','CDG','CEN','CJS','CME','CPE','CTM','CUL','CUN','CUU','CVM','DEN','DFW','DGO','EZE','FAT','GDL','GRU','GUA','HMO','HUX','IAD','IAH','JFK','LAP','LAX','LHR','LIM','LMM','LRD','MAD','MAM','MCO','MEX','MIA','MID','MLM','MSY','MTT','MTY','MXL','MZT','NLD','NRT','OAX','ONT','ORD','PAZ','PHX','PTY','PVR','QRO','REX','SAL','SAP','SAT','SCL','SFO','SJD','SJO','SLW','TAM','TAP','TGZ','TIJ','TRC','VER','VSA','YUL','ZIH','ZLO')
  }
,  {
  "key": "SJD",
  "label": "Cabo San Lucas (SJD)",
  "country": "México",
  "countryCode": "MX",
  "region": 1,
  "partner": 0,
  "depart": Array('ACA','AGU','ATL','BDL','BJX','BNA','BOG','BOS','BWI','CDG','CEN','CJS','CME','CPE','CTM','CUL','CUN','CUU','CVG','CVM','DEN','DFW','DGO','DTW','EZE','FAT','GDL','GRU','HMO','IAD','IAH','JFK','LAS','LAX','LIM','LMM','MAD','MAM','MCI','MCO','MEX','MIA','MID','MLM','MSY','MTT','MTY','MXL','MZT','NLD','NRT','OAX','ONT','ORD','PAZ','PHX','PVG','PVR','QRO','REX','SAL','SAP','SAT','SCL','SFO','SJC','SJO','SLC','SLP','SLW','STL','TAM','TAP','TGZ','TIJ','TPQ','TRC','VER','VSA','YUL','ZCL','ZIH','ZLO')
  }
,  {
  "key": "CPE",
  "label": "Campeche (CPE)",
  "country": "México",
  "countryCode": "MX",
  "region": 1,
  "partner": 0,
  "depart": Array('ACA','AGU','ATL','BJX','BOG','CCS','CDG','CEN','CJS','CME','CUL','CUN','CUU','DEN','DFW','DGO','EZE','FAT','GDL','GRU','GUA','HMO','HUX','IAD','IAH','JFK','LAP','LAS','LAX','LIM','LMM','LRD','MAD','MAM','MCO','MEX','MIA','MID','MLM','MSY','MTT','MTY','MXL','MZT','NLD','NRT','OAX','ONT','ORD','PAZ','PHX','PTY','PVG','PVR','QRO','REX','SAL','SAP','SAT','SCL','SFO','SJD','SJO','SLP','SLW','TAM','TAP','TGZ','TIJ','TRC','VER','VSA','YUL','ZCL','ZIH','ZLO')
  }
,  {
  "key": "CUN",
  "label": "Cancún (CUN)",
  "country": "México",
  "countryCode": "MX",
  "region": 1,
  "partner": 0,
  "depart": Array('ACA','AGU','ALB','AMS','ATL','BDL','BJX','BNA','BOG','BOS','BWI','CCS','CDG','CEN','CJS','CME','CPE','CUL','CUU','CVG','CVM','DEN','DFW','DGO','DTW','EZE','FAT','FCO','GDL','GRU','GUA','HMO','HUX','IAD','IAH','JFK','LAP','LAS','LAX','LGA','LHR','LIM','LMM','LPA','MAD','MAM','MCI','MCO','MEM','MEX','MIA','MID','MLM','MSP','MSY','MTT','MTY','MXL','MXP','MZT','NLD','NRT','OAX','ONT','ORD','PAZ','PHL','PHX','PTY','PVG','PVR','QRO','RDU','REX','SAL','SAP','SAT','SCL','SFO','SJD','SJO','SJU','SLC','SLP','SLW','STL','TAM','TAP','TGZ','TIJ','TLC','TPQ','TRC','VER','VSA','YUL','YYZ','ZCL','ZIH','ZLO')
  }
,  {
  "key": "CTM",
  "label": "Chetumal (CTM)",
  "country": "México",
  "countryCode": "MX",
  "region": 1,
  "partner": 0,
  "depart": Array('ACA','AGU','ATL','BJX','BOG','CUU','DFW','GDL','HMO','JFK','LAP','LAS','LAX','MCO','MEX','MIA','MTT','MTY','MZT','NLD','OAX','ORD','PAZ','PHX','PVR','QRO','REX','SAT','SJD','SJO','SLP','SLW','TAM','TAP','TGZ','TIJ','TRC','VER','VSA','ZCL','ZIH')
  }
,  {
  "key": "CUU",
  "label": "Chihuahua (CUU)",
  "country": "México",
  "countryCode": "MX",
  "region": 1,
  "partner": 0,
  "depart": Array('ACA','AGU','ATL','BJX','BOG','BRO','CCS','CDG','CEN','CJS','CME','CPE','CTM','CUL','CUN','CVM','DEN','DFW','DGO','EZE','FAT','GDL','GRU','GUA','HMO','HUX','IAD','IAH','JFK','LAP','LAS','LAX','LHR','LIM','LMM','LRD','MAD','MAM','MCO','MEX','MIA','MID','MLM','MSY','MTT','MTY','MXL','MZT','NLD','NRT','OAX','ONT','ORD','PAZ','PHX','PPE','PTY','PVG','PVR','QRO','REX','SAL','SAP','SAT','SCL','SFO','SJD','SJO','SLC','SLP','SLW','TAM','TAP','TGZ','TIJ','TLC','TPQ','TRC','VER','VSA','YUL','ZCL','ZIH','ZLO')
  }
,  {
  "key": "MEX",
  "label": "Ciudad de México (MEX)",
  "country": "México",
  "countryCode": "MX",
  "region": 1,
  "partner": 0,
  "depart": Array('ACA','ACE','AGP','AGU','ALB','AMS','ANC','ATL','AXM','BAQ','BCN','BDL','BGA','BJX','BNA','BOG','BOS','BRO','BSB','BWI','CCP','CCS','CDG','CEN','CIX','CJS','CLO','CME','CMH','CNF','CPE','CTG','CTM','CUL','CUN','CUU','CUZ','CVG','CVM','CWB','DEN','DFW','DGO','DTW','EZE','FAT','FCO','FLN','FOR','FRA','GDL','GIG','GRU','GUA','HMO','HUX','IAD','IAH','ICN','IND','JFK','JUL','LAP','LAS','LAX','LGA','LHR','LIM','LIS','LMM','LPA','LRD','LTO','LYS','MAD','MAM','MCI','MCO','MDE','MIA','MID','MKE','MLM','MRS','MSP','MSY','MTT','MTY','MXL','MXP','MZT','NCE','NLD','NRT','OAX','ONT','ORD','ORF','PAZ','PDX','PEI','PEM','PHL','PHX','PMI','POA','PPE','PRG','PTY','PUQ','PVG','PVR','QRO','RDU','REC','REX','RIC','ROC','SAL','SAP','SAT','SCL','SEA','SFO','SJC','SJD','SJO','SJU','SLC','SLP','SLW','SMF','STL','SYR','TAM','TAP','TGZ','TIJ','TLS','TPA','TPQ','TRC','VER','VGO','VLC','VSA','YUL','YVR','YYZ','ZCL','ZIH','ZLO')
  }
,  {
  "key": "CME",
  "label": "Ciudad del Carmen (CME)",
  "country": "México",
  "countryCode": "MX",
  "region": 1,
  "partner": 0,
  "depart": Array('ACA','AGU','ATL','BJX','BOG','CCS','CDG','CEN','CJS','CPE','CUL','CUN','CUU','CVM','DEN','DFW','DGO','EZE','FAT','GDL','GRU','GUA','HMO','IAD','IAH','JFK','LAP','LAS','LAX','LHR','LIM','LMM','MAD','MAM','MCO','MEX','MIA','MID','MLM','MSY','MTT','MTY','MXL','MZT','NLD','NRT','OAX','ONT','ORD','PAZ','PHX','PVG','PVR','QRO','REX','SAP','SAT','SCL','SFO','SJD','SJO','SLP','SLW','TAM','TAP','TIJ','TPQ','TRC','VER','VSA','YUL','ZCL','ZIH','ZLO')
  }
,  {
  "key": "CJS",
  "label": "Ciudad Juárez (CJS)",
  "country": "México",
  "countryCode": "MX",
  "region": 1,
  "partner": 0,
  "depart": Array('ACA','AGU','ATL','BJX','BOG','BRO','CCS','CDG','CEN','CME','CPE','CUL','CUN','CUU','CVM','DEN','DFW','DGO','EZE','FAT','GDL','GRU','GUA','HMO','HUX','IAD','IAH','JFK','LAP','LAS','LAX','LIM','LMM','MAD','MAM','MCO','MEX','MIA','MID','MLM','MSY','MTT','MTY','MXL','MZT','NLD','NRT','OAX','ONT','ORD','PAZ','PBC','PHX','PTY','PVG','PVR','QRO','REX','SAL','SAP','SAT','SCL','SFO','SJD','SJO','SLC','SLP','SLW','TAM','TAP','TGZ','TIJ','TLC','TRC','VER','VSA','YUL','ZCL','ZIH','ZLO')
  }
,  {
  "key": "CEN",
  "label": "Ciudad Obregón (CEN)",
  "country": "México",
  "countryCode": "MX",
  "region": 1,
  "partner": 0,
  "depart": Array('ACA','AGU','ATL','BJX','BOG','CCS','CDG','CJS','CME','CPE','CUL','CUN','CUU','DEN','DFW','DGO','EZE','FAT','GDL','GRU','GUA','HMO','HUX','IAD','IAH','JFK','LAP','LAS','LAX','LIM','LMM','MAD','MAM','MCO','MEX','MIA','MID','MLM','MTT','MTY','MXL','MZT','NLD','NRT','OAX','ONT','ORD','PAZ','PHX','PPE','PTY','PVG','PVR','QRO','REX','SAP','SAT','SCL','SFO','SJD','SJO','SLP','SLW','TAM','TAP','TGZ','TIJ','TRC','VER','VSA','YUL','ZIH')
  }
,  {
  "key": "CVM",
  "label": "Ciudad Victoria (CVM)",
  "country": "México",
  "countryCode": "MX",
  "region": 1,
  "partner": 0,
  "depart": Array('ACA','AGU','BJX','CCS','CDG','CJS','CME','CUN','CUU','DFW','GDL','GUA','HMO','HUX','IAH','JFK','LAP','LAX','LHR','LIM','MEX','MIA','MID','MTT','MZT','NLD','OAX','ORD','PVR','SAP','SAT','SJD','SLP','TAP','TGZ','TIJ','TRC','VER','VSA','YUL','ZCL','ZIH')
  }
,  {
  "key": "CZM",
  "label": "Cozumel (CZM)",
  "country": "México",
  "countryCode": "MX",
  "region": 1,
  "partner": 0,
  "depart": Array('ATL')
  }
,  {
  "key": "CUL",
  "label": "Culiacán (CUL)",
  "country": "México",
  "countryCode": "MX",
  "region": 1,
  "partner": 0,
  "depart": Array('ACA','AGU','ATL','BJX','BOG','BRO','CCS','CDG','CEN','CJS','CME','CPE','CUN','CUU','DEN','DFW','DGO','EZE','FAT','GDL','GRU','GUA','HMO','HUX','IAD','IAH','JFK','LAP','LAS','LAX','LHR','LIM','LMM','LTO','MAD','MAM','MCO','MEX','MIA','MID','MLM','MTT','MTY','MXL','NLD','NRT','OAX','ONT','ORD','PAZ','PHX','PPE','PTY','PVG','PVR','QRO','REX','SAL','SAP','SAT','SCL','SFO','SJD','SJO','SLC','SLP','SLW','TAM','TAP','TGZ','TIJ','TLC','TRC','VER','VSA','YUL','ZCL','ZIH','ZLO')
  }
,  {
  "key": "DGO",
  "label": "Durango (DGO)",
  "country": "México",
  "countryCode": "MX",
  "region": 1,
  "partner": 0,
  "depart": Array('ACA','AGU','ATL','BJX','BOG','CCS','CDG','CEN','CJS','CME','CPE','CUL','CUN','CUU','DEN','DFW','EZE','FAT','GDL','GRU','GUA','HMO','HUX','IAH','JFK','LAP','LAS','LAX','LHR','LIM','LMM','LRD','MAD','MCO','MEX','MIA','MID','MLM','MTT','MTY','MXL','MZT','NLD','NRT','OAX','ONT','ORD','PAZ','PHX','PTY','PVG','PVR','QRO','REX','SAL','SAP','SAT','SCL','SFO','SJD','SJO','SLW','TAM','TAP','TGZ','TIJ','TRC','VER','VSA','YUL','ZIH','ZLO')
  }
,  {
  "key": "GDL",
  "label": "Guadalajara (GDL)",
  "country": "México",
  "countryCode": "MX",
  "region": 1,
  "partner": 0,
  "depart": Array('ACA','AGU','ALB','ATL','BDL','BJX','BNA','BOG','BOS','BRO','BWI','CCS','CDG','CEN','CJS','CME','CPE','CTM','CUL','CUN','CUU','CVG','CVM','DEN','DFW','DGO','DTW','EZE','FAT','FCO','GRU','GUA','HMO','HUX','IAD','IAH','JFK','LAP','LAS','LAX','LGA','LHR','LIM','LMM','LRD','MAD','MAM','MCI','MCO','MEX','MIA','MID','MSY','MTT','MTY','MXL','MXP','MZT','NLD','NRT','OAX','ONT','ORD','PAZ','PBC','PHL','PHX','PPE','PTY','PVG','PVR','QRO','RDU','REX','SAL','SAP','SAT','SCL','SFO','SJC','SJD','SJO','SJU','SLC','SLP','SLW','SMF','STL','TAM','TAP','TGZ','TIJ','TLC','TRC','VER','VSA','YUL','YYZ','ZCL','ZIH')
  }
,  {
  "key": "HMO",
  "label": "Hermosillo (HMO)",
  "country": "México",
  "countryCode": "MX",
  "region": 1,
  "partner": 0,
  "depart": Array('ACA','AGU','ATL','BJX','BOG','BRO','CCS','CDG','CEN','CJS','CME','CPE','CTM','CUL','CUN','CUU','CVM','DEN','DFW','DGO','EZE','FAT','GDL','GRU','GUA','HUX','IAD','IAH','JFK','LAP','LAS','LAX','LHR','LIM','LMM','MAD','MAM','MCO','MEX','MIA','MID','MLM','MSY','MTT','MTY','MXL','MZT','NLD','NRT','OAX','ONT','ORD','PAZ','PBC','PHX','PPE','PTY','PVG','PVR','QRO','REX','SAL','SAP','SAT','SCL','SFO','SJD','SJO','SLC','SLP','SLW','TAM','TAP','TGZ','TIJ','TRC','VER','VSA','YUL','ZCL','ZIH','ZLO')
  }
,  {
  "key": "HUX",
  "label": "Huatulco (HUX)",
  "country": "México",
  "countryCode": "MX",
  "region": 1,
  "partner": 0,
  "depart": Array('ACA','AGU','BJX','CEN','CJS','CPE','CUL','CUN','CUU','CVM','DGO','EZE','GDL','GRU','HMO','IAH','LAP','LAS','LAX','LIM','LMM','MAM','MEX','MIA','MID','MLM','MTY','MXL','MZT','ORD','PAZ','PVR','REX','SCL','SFO','SJO','SLP','SLW','TAM','TAP','TGZ','TIJ','TPQ','TRC','VER','VSA','ZCL','ZIH')
  }
,  {
  "key": "ZIH",
  "label": "Ixtapa Zihuatanejo (ZIH)",
  "country": "México",
  "countryCode": "MX",
  "region": 1,
  "partner": 0,
  "depart": Array('AGU','ATL','BJX','BOG','CCS','CDG','CEN','CJS','CME','CPE','CTM','CUL','CUN','CUU','CVM','DEN','DFW','DGO','EZE','FAT','GDL','GRU','GUA','HMO','HUX','IAD','IAH','JFK','LAP','LAS','LAX','LIM','LMM','MAD','MAM','MCO','MEX','MIA','MID','MLM','MSY','MTT','MTY','MXL','MZT','NLD','NRT','OAX','ONT','ORD','PAZ','PHX','PTY','PVG','PVR','QRO','REX','SAP','SAT','SCL','SFO','SJD','SJO','SLP','SLW','TAM','TAP','TGZ','TIJ','TPQ','TRC','VER','VSA','YUL','ZCL','ZLO')
  }
,  {
  "key": "LAP",
  "label": "La Paz (LAP)",
  "country": "México",
  "countryCode": "MX",
  "region": 1,
  "partner": 0,
  "depart": Array('ACA','AGU','ATL','BJX','BOG','CCS','CDG','CEN','CJS','CME','CPE','CTM','CUL','CUN','CUU','CVM','DEN','DFW','DGO','EZE','FAT','GDL','GRU','GUA','HMO','HUX','IAD','IAH','JFK','LAS','LAX','LIM','LMM','MAD','MAM','MCO','MEX','MIA','MID','MLM','MSY','MTT','MTY','MXL','NLD','NRT','OAX','ONT','ORD','PAZ','PHX','PTY','PVG','PVR','QRO','REX','SAL','SAP','SAT','SCL','SFO','SJO','SLC','SLP','SLW','TAM','TAP','TGZ','TIJ','TRC','VER','VSA','YUL','ZCL','ZIH','ZLO')
  }
,  {
  "key": "BJX",
  "label": "León Bajío (BJX)",
  "country": "México",
  "countryCode": "MX",
  "region": 1,
  "partner": 0,
  "depart": Array('ACA','ATL','BOG','BRO','CCS','CDG','CEN','CJS','CME','CPE','CTM','CUL','CUN','CUU','CVM','DEN','DFW','DGO','EZE','FAT','GDL','GRU','GUA','HMO','HUX','IAD','IAH','JFK','LAP','LAS','LAX','LHR','LIM','LMM','LRD','MAD','MAM','MCO','MEX','MIA','MID','MLM','MSY','MTT','MTY','MXL','MZT','NLD','NRT','OAX','ONT','ORD','PAZ','PHX','PTY','PVG','PVR','REX','SAL','SAP','SAT','SCL','SFO','SJD','SJO','SLW','TAM','TAP','TGZ','TIJ','TLC','TPQ','TRC','VER','VSA','YUL','ZCL','ZIH','ZLO')
  }
,  {
  "key": "LTO",
  "label": "Loreto (LTO)",
  "country": "México",
  "countryCode": "MX",
  "region": 1,
  "partner": 0,
  "depart": Array('CUL','JFK','LAX','MEX')
  }
,  {
  "key": "LMM",
  "label": "Los Mochis (LMM)",
  "country": "México",
  "countryCode": "MX",
  "region": 1,
  "partner": 0,
  "depart": Array('ACA','AGU','ATL','BJX','BOG','CCS','CDG','CEN','CJS','CME','CPE','CUL','CUN','CUU','DEN','DFW','DGO','EZE','FAT','GDL','GRU','GUA','HMO','HUX','IAD','IAH','JFK','LAP','LAS','LAX','LIM','MAD','MAM','MCO','MEX','MIA','MID','MLM','MTT','MTY','MXL','MZT','NLD','NRT','OAX','ONT','ORD','PAZ','PHX','PPE','PVG','PVR','REX','SAP','SAT','SCL','SFO','SJD','SJO','SLP','SLW','TAM','TAP','TGZ','TIJ','TRC','VER','VSA','YUL','ZCL','ZIH','ZLO')
  }
,  {
  "key": "ZLO",
  "label": "Manzanillo (ZLO)",
  "country": "México",
  "countryCode": "MX",
  "region": 1,
  "partner": 0,
  "depart": Array('ACA','AGU','ATL','BJX','BOG','CCS','CDG','CJS','CME','CPE','CUL','CUN','CUU','DFW','DGO','DTW','EZE','FAT','GRU','GUA','HMO','IAH','JFK','LAP','LAS','LAX','LIM','LMM','MAD','MEX','MIA','MID','MLM','MTT','MTY','MXL','MZT','NLD','NRT','OAX','ORD','PAZ','PTY','PVG','QRO','REX','SAT','SCL','SFO','SJD','SJO','SLC','SLP','TAM','TAP','TGZ','TIJ','TRC','VER','VSA','YUL','ZCL','ZIH')
  }
,  {
  "key": "MAM",
  "label": "Matamoros (MAM)",
  "country": "México",
  "countryCode": "MX",
  "region": 1,
  "partner": 0,
  "depart": Array('ACA','AGU','ATL','BJX','BOG','CCS','CDG','CEN','CJS','CME','CPE','CUL','CUN','CUU','DEN','DFW','EZE','GDL','GRU','GUA','HMO','HUX','IAD','IAH','JFK','LAP','LAS','LAX','LIM','LMM','MAD','MCO','MEX','MIA','MID','MLM','MTT','MTY','MZT','NLD','NRT','OAX','ONT','ORD','PAZ','PHX','PTY','PVG','PVR','QRO','SAL','SAP','SAT','SCL','SFO','SJD','SJO','TAP','TGZ','TIJ','TRC','VER','VSA','YUL','ZIH')
  }
,  {
  "key": "MZT",
  "label": "Mazatlán (MZT)",
  "country": "México",
  "countryCode": "MX",
  "region": 1,
  "partner": 0,
  "depart": Array('ACA','AGU','ATL','BJX','BOG','CCS','CDG','CEN','CJS','CME','CPE','CTM','CUN','CUU','CVM','DEN','DFW','DGO','EZE','FAT','GDL','GRU','GUA','HMO','HUX','IAD','IAH','JFK','LAS','LAX','LIM','LMM','MAD','MAM','MCO','MEX','MIA','MID','MLM','MSY','MTT','MTY','MXL','NLD','NRT','OAX','ONT','ORD','PAZ','PHX','PPE','PTY','PVG','PVR','QRO','REX','SAL','SAP','SAT','SCL','SFO','SJD','SJO','SLP','SLW','TAM','TAP','TGZ','TIJ','TRC','VER','VSA','YUL','ZCL','ZIH','ZLO')
  }
,  {
  "key": "MID",
  "label": "Mérida (MID)",
  "country": "México",
  "countryCode": "MX",
  "region": 1,
  "partner": 0,
  "depart": Array('ACA','AGU','ATL','BJX','BOG','CCS','CDG','CEN','CJS','CME','CPE','CUL','CUN','CUU','CVM','DEN','DFW','DGO','EZE','FAT','GDL','GRU','GUA','HMO','HUX','IAD','IAH','JFK','LAP','LAS','LAX','LHR','LIM','LMM','LRD','MAD','MAM','MCO','MEX','MIA','MLM','MSY','MTT','MTY','MXL','MZT','NLD','NRT','OAX','ONT','ORD','PAZ','PHX','PTY','PVG','PVR','QRO','REX','SAL','SAP','SAT','SCL','SFO','SJD','SJO','SLP','SLW','TAM','TAP','TGZ','TIJ','TPQ','TRC','VER','VSA','YUL','ZCL','ZIH','ZLO')
  }
,  {
  "key": "MXL",
  "label": "Mexicali (MXL)",
  "country": "México",
  "countryCode": "MX",
  "region": 1,
  "partner": 0,
  "depart": Array('ACA','AGU','ATL','BJX','BOG','CDG','CEN','CJS','CME','CPE','CUL','CUN','CUU','DEN','DFW','DGO','EZE','FAT','GDL','GRU','GUA','HMO','HUX','IAH','JFK','LAP','LAS','LAX','LIM','LMM','MAD','MCO','MEX','MIA','MID','MLM','MTT','MTY','MZT','NLD','NRT','OAX','ONT','ORD','PAZ','PBC','PHX','PTY','PVG','PVR','QRO','REX','SAP','SAT','SCL','SFO','SJD','SJO','SLP','SLW','TAM','TAP','TGZ','TPQ','TRC','VER','VSA','YUL','ZCL','ZIH','ZLO')
  }
,  {
  "key": "MTT",
  "label": "Minatitlán (MTT)",
  "country": "México",
  "countryCode": "MX",
  "region": 1,
  "partner": 0,
  "depart": Array('ACA','AGU','ATL','BJX','BOG','CCS','CDG','CEN','CJS','CME','CPE','CTM','CUL','CUN','CUU','CVM','DEN','DFW','DGO','EZE','FAT','GDL','GRU','GUA','HMO','IAD','IAH','JFK','LAP','LAS','LAX','LHR','LIM','LMM','MAD','MAM','MCO','MEX','MIA','MID','MLM','MTY','MXL','MZT','NLD','NRT','OAX','ONT','ORD','PAZ','PHX','PTY','PVG','PVR','QRO','REX','SAP','SAT','SCL','SFO','SJD','SJO','SLP','SLW','TAM','TAP','TGZ','TIJ','TPQ','TRC','VER','VSA','YUL','ZCL','ZIH','ZLO')
  }
,  {
  "key": "MTY",
  "label": "Monterrey (MTY)",
  "country": "México",
  "countryCode": "MX",
  "region": 1,
  "partner": 0,
  "depart": Array('ACA','AGU','ATL','BJX','BOG','BRO','CCS','CDG','CEN','CJS','CME','CPE','CTM','CUL','CUN','CUU','DEN','DFW','DGO','DTW','EZE','FAT','GDL','GRU','GUA','HMO','HUX','IAD','IAH','JFK','LAP','LAS','LAX','LHR','LIM','LMM','LRD','MAD','MAM','MCO','MEX','MIA','MID','MLM','MSY','MTT','MXL','MZT','NLD','NRT','OAX','ONT','ORD','PAZ','PBC','PHX','PPE','PTY','PVG','PVR','QRO','SAL','SAP','SAT','SCL','SFO','SJD','SJO','SLC','SLP','TAM','TAP','TGZ','TIJ','TLC','TPQ','TRC','VER','VSA','YUL','ZCL','ZIH','ZLO')
  }
,  {
  "key": "MLM",
  "label": "Morelia (MLM)",
  "country": "México",
  "countryCode": "MX",
  "region": 1,
  "partner": 0,
  "depart": Array('ACA','AGU','ATL','BJX','BOG','CCS','CDG','CEN','CJS','CME','CPE','CUL','CUN','CUU','DEN','DFW','DGO','EZE','FAT','GRU','GUA','HMO','HUX','IAD','IAH','JFK','LAP','LAS','LAX','LIM','LMM','LRD','MAD','MAM','MCO','MEX','MIA','MID','MSY','MTT','MTY','MXL','MZT','NLD','NRT','OAX','ONT','ORD','PAZ','PHX','PTY','PVG','PVR','QRO','REX','SAL','SAP','SAT','SCL','SFO','SJD','SJO','SLP','SLW','TAM','TAP','TGZ','TIJ','TRC','VER','VSA','YUL','ZCL','ZIH','ZLO')
  }
,  {
  "key": "NLD",
  "label": "Nuevo Laredo (NLD)",
  "country": "México",
  "countryCode": "MX",
  "region": 1,
  "partner": 0,
  "depart": Array('ACA','AGU','ATL','BJX','BOG','CCS','CDG','CEN','CJS','CME','CPE','CTM','CUL','CUN','CUU','CVM','DEN','DFW','DGO','EZE','FAT','GDL','GRU','GUA','HMO','IAD','IAH','JFK','LAP','LAS','LAX','LHR','LIM','LMM','MAD','MAM','MCO','MEX','MIA','MID','MLM','MTT','MTY','MXL','MZT','NRT','OAX','ONT','ORD','PAZ','PHX','PTY','PVG','PVR','QRO','REX','SAP','SAT','SCL','SFO','SJD','SJO','SLP','TAM','TAP','TGZ','TIJ','TPQ','TRC','VER','VSA','YUL','ZCL','ZIH','ZLO')
  }
,  {
  "key": "OAX",
  "label": "Oaxaca (OAX)",
  "country": "México",
  "countryCode": "MX",
  "region": 1,
  "partner": 0,
  "depart": Array('ACA','AGU','ATL','BJX','BOG','CCS','CDG','CEN','CJS','CME','CPE','CTM','CUL','CUN','CUU','CVM','DEN','DFW','DGO','EZE','FAT','GDL','GRU','GUA','HMO','IAD','IAH','JFK','LAP','LAS','LAX','LHR','LIM','LMM','LRD','MAD','MAM','MCO','MEX','MIA','MID','MLM','MSY','MTT','MTY','MXL','MZT','NLD','NRT','ONT','ORD','PAZ','PHX','PTY','PVG','PVR','QRO','REX','SAL','SAP','SAT','SCL','SFO','SJD','SJO','SLP','SLW','TAM','TAP','TGZ','TIJ','TPQ','TRC','VER','VSA','YUL','ZCL','ZIH','ZLO')
  }
,  {
  "key": "PAZ",
  "label": "Poza Rica (PAZ)",
  "country": "México",
  "countryCode": "MX",
  "region": 1,
  "partner": 0,
  "depart": Array('ACA','AGU','ATL','BJX','BOG','CCS','CDG','CEN','CJS','CME','CPE','CTM','CUL','CUN','CUU','DEN','DFW','DGO','EZE','FAT','GDL','GRU','GUA','HMO','HUX','IAH','JFK','LAP','LAS','LAX','LIM','LMM','MAD','MAM','MCO','MEX','MIA','MID','MLM','MSY','MTT','MTY','MXL','MZT','NLD','NRT','OAX','ONT','ORD','PHX','PTY','PVG','PVR','QRO','REX','SAP','SAT','SCL','SFO','SJD','SJO','SLP','SLW','TAM','TAP','TGZ','TIJ','TRC','VER','VSA','YUL','ZCL','ZIH','ZLO')
  }
,  {
  "key": "PBC",
  "label": "Puebla (PBC)",
  "country": "México",
  "countryCode": "MX",
  "region": 1,
  "partner": 0,
  "depart": Array('BRO','CJS','GDL','HMO','LAS','MTY','MXL','VSA')
  }
,  {
  "key": "PPE",
  "label": "Puerto Peñasco (PPE)",
  "country": "México",
  "countryCode": "MX",
  "region": 1,
  "partner": 0,
  "depart": Array('CEN','GDL','HMO','LAS')
  }
,  {
  "key": "PVR",
  "label": "Puerto Vallarta (PVR)",
  "country": "México",
  "countryCode": "MX",
  "region": 1,
  "partner": 0,
  "depart": Array('ACA','AGU','ATL','BDL','BJX','BOG','BWI','CCS','CDG','CEN','CJS','CME','CPE','CTM','CUL','CUN','CUU','CVG','CVM','DEN','DFW','DGO','DTW','EZE','FAT','GDL','GRU','GUA','HMO','HUX','IAD','IAH','JFK','LAP','LAS','LAX','LHR','LIM','LMM','LRD','MAD','MAM','MCO','MEX','MIA','MID','MLM','MSY','MTT','MTY','MXL','MZT','NLD','NRT','OAX','ONT','ORD','PAZ','PHX','PTY','PVG','QRO','REX','SAL','SAN','SAP','SAT','SCL','SFO','SJD','SJO','SLC','SLP','SLW','STL','TAM','TAP','TGZ','TIJ','TLC','TRC','VER','VSA','YUL','ZCL','ZIH')
  }
,  {
  "key": "QRO",
  "label": "Querétaro (QRO)",
  "country": "México",
  "countryCode": "MX",
  "region": 1,
  "partner": 0,
  "depart": Array('ACA','AGU','ATL','BOG','BRO','CCS','CDG','CEN','CJS','CME','CPE','CTM','CUL','CUN','CUU','DFW','DGO','EZE','FAT','GDL','GRU','GUA','HMO','IAD','IAH','JFK','LAP','LAS','LAX','LIM','LRD','MAD','MAM','MCO','MEX','MIA','MID','MLM','MTT','MTY','MXL','MZT','NLD','NRT','OAX','ONT','ORD','PAZ','PHX','PVG','PVR','REX','SAL','SAP','SAT','SCL','SFO','SJD','SJO','SLP','TAM','TAP','TGZ','TIJ','TRC','VER','VSA','YUL','ZCL','ZIH','ZLO')
  }
,  {
  "key": "REX",
  "label": "Reynosa (REX)",
  "country": "México",
  "countryCode": "MX",
  "region": 1,
  "partner": 0,
  "depart": Array('ACA','AGU','ATL','BJX','BOG','CCS','CDG','CEN','CJS','CME','CPE','CTM','CUL','CUN','CUU','DEN','DFW','DGO','EZE','FAT','GDL','GRU','GUA','HMO','HUX','IAD','IAH','JFK','LAP','LAS','LAX','LHR','LIM','LMM','MAD','MCO','MEX','MIA','MID','MLM','MTT','MXL','MZT','NLD','NRT','OAX','ONT','ORD','PAZ','PHX','PTY','PVG','PVR','QRO','SAL','SAP','SAT','SCL','SFO','SJD','SJO','SLP','TAM','TAP','TGZ','TIJ','TPQ','TRC','VER','VSA','YUL','ZCL','ZIH','ZLO')
  }
,  {
  "key": "CUN",
  "label": "Riviera Maya (CUN)",
  "country": "México",
  "countryCode": "MX",
  "region": 1,
  "partner": 0,
  "depart": Array('ACA','AGU','ALB','AMS','ATL','BDL','BJX','BNA','BOG','BOS','BWI','CCS','CDG','CEN','CJS','CME','CPE','CUL','CUU','CVG','CVM','DEN','DFW','DGO','DTW','EZE','FAT','FCO','GDL','GRU','GUA','HMO','HUX','IAD','IAH','JFK','LAP','LAS','LAX','LGA','LHR','LIM','LMM','LPA','MAD','MAM','MCI','MCO','MEM','MEX','MIA','MID','MLM','MSP','MSY','MTT','MTY','MXL','MXP','MZT','NLD','NRT','OAX','ONT','ORD','PAZ','PHL','PHX','PTY','PVG','PVR','QRO','RDU','REX','SAL','SAP','SAT','SCL','SFO','SJD','SJO','SJU','SLC','SLP','SLW','STL','TAM','TAP','TGZ','TIJ','TLC','TPQ','TRC','VER','VSA','YUL','YYZ','ZCL','ZIH','ZLO')
  }
,  {
  "key": "PVR",
  "label": "Riviera Nayarit (PVR)",
  "country": "México",
  "countryCode": "MX",
  "region": 1,
  "partner": 0,
  "depart": Array('ACA','AGU','ATL','BDL','BJX','BOG','BWI','CCS','CDG','CEN','CJS','CME','CPE','CTM','CUL','CUN','CUU','CVG','CVM','DEN','DFW','DGO','DTW','EZE','FAT','GDL','GRU','GUA','HMO','HUX','IAD','IAH','JFK','LAP','LAS','LAX','LHR','LIM','LMM','LRD','MAD','MAM','MCO','MEX','MIA','MID','MLM','MSY','MTT','MTY','MXL','MZT','NLD','NRT','OAX','ONT','ORD','PAZ','PHX','PTY','PVG','QRO','REX','SAL','SAN','SAP','SAT','SCL','SFO','SJD','SJO','SLC','SLP','SLW','STL','TAM','TAP','TGZ','TIJ','TLC','TRC','VER','VSA','YUL','ZCL','ZIH')
  }
,  {
  "key": "SLW",
  "label": "Saltillo (SLW)",
  "country": "México",
  "countryCode": "MX",
  "region": 1,
  "partner": 0,
  "depart": Array('ACA','AGU','BJX','CCS','CDG','CEN','CJS','CME','CPE','CTM','CUL','CUN','CUU','DFW','DGO','EZE','FAT','GDL','GRU','GUA','HMO','HUX','IAD','IAH','JFK','LAP','LAX','LHR','LIM','LMM','MCO','MEX','MIA','MID','MLM','MTT','MXL','MZT','NRT','OAX','ORD','PAZ','PVG','PVR','SAT','SCL','SFO','SJD','SJO','SLP','TAM','TAP','TGZ','TIJ','TPQ','VER','VSA','YUL','ZCL','ZIH')
  }
,  {
  "key": "SLP",
  "label": "San Luis Potosí (SLP)",
  "country": "México",
  "countryCode": "MX",
  "region": 1,
  "partner": 0,
  "depart": Array('ACA','ATL','BOG','CCS','CDG','CEN','CJS','CME','CPE','CTM','CUL','CUN','CUU','CVM','DEN','DFW','EZE','FAT','GDL','GRU','GUA','HMO','HUX','IAD','IAH','JFK','LAP','LAS','LAX','LHR','LIM','LMM','LRD','MAD','MCO','MEX','MIA','MID','MLM','MTT','MTY','MXL','MZT','NLD','NRT','OAX','ONT','ORD','PAZ','PHX','PTY','PVG','PVR','QRO','REX','SAL','SAP','SAT','SCL','SFO','SJD','SJO','SLW','TAM','TAP','TGZ','TIJ','TPQ','TRC','VER','VSA','YUL','ZIH','ZLO')
  }
,  {
  "key": "TAM",
  "label": "Tampico (TAM)",
  "country": "México",
  "countryCode": "MX",
  "region": 1,
  "partner": 0,
  "depart": Array('ACA','AGU','ATL','BJX','BOG','BRO','CCS','CDG','CEN','CJS','CME','CPE','CTM','CUL','CUN','CUU','DEN','DFW','DGO','EZE','FAT','GDL','GRU','GUA','HMO','HUX','IAD','IAH','JFK','LAP','LAS','LAX','LHR','LIM','LMM','LRD','MAD','MCO','MEX','MIA','MID','MLM','MSY','MTT','MTY','MXL','MZT','NLD','NRT','OAX','ONT','ORD','PAZ','PHX','PTY','PVG','PVR','QRO','REX','SAL','SAP','SAT','SCL','SFO','SJD','SJO','SLP','SLW','TAP','TGZ','TIJ','TPQ','TRC','VER','VSA','YUL','ZCL','ZIH','ZLO')
  }
,  {
  "key": "TAP",
  "label": "Tapachula (TAP)",
  "country": "México",
  "countryCode": "MX",
  "region": 1,
  "partner": 0,
  "depart": Array('ACA','AGU','ATL','BJX','BOG','CCS','CDG','CEN','CJS','CME','CPE','CTM','CUL','CUN','CUU','CVM','DEN','DGO','EZE','FAT','GDL','GRU','HMO','HUX','IAH','JFK','LAP','LAS','LAX','LIM','LMM','LRD','MAD','MAM','MCO','MEX','MIA','MID','MLM','MSY','MTT','MTY','MXL','MZT','NLD','NRT','OAX','ONT','ORD','PAZ','PHX','PTY','PVG','PVR','QRO','REX','SAP','SAT','SCL','SFO','SJD','SJO','SLP','SLW','TAM','TGZ','TIJ','TPQ','TRC','VER','VSA','YUL','ZCL','ZIH','ZLO')
  }
,  {
  "key": "TPQ",
  "label": "Tepic (TPQ)",
  "country": "México",
  "countryCode": "MX",
  "region": 1,
  "partner": 0,
  "depart": Array('ACA','BJX','CCS','CDG','CME','CUN','CUU','DFW','GUA','HUX','IAH','JFK','LAS','LAX','LHR','LIM','MEX','MIA','MID','MTT','MTY','MXL','NLD','OAX','REX','SAT','SJD','SLP','SLW','TAM','TAP','TGZ','TIJ','TRC','VER','VSA','YUL','ZIH')
  }
,  {
  "key": "TIJ",
  "label": "Tijuana (TIJ)",
  "country": "México",
  "countryCode": "MX",
  "region": 1,
  "partner": 0,
  "depart": Array('ACA','AGU','ATL','BJX','BOG','CCS','CDG','CEN','CJS','CME','CPE','CTM','CUL','CUN','CUU','CVM','DEN','DFW','DGO','EZE','FAT','GDL','GRU','GUA','HMO','HUX','IAD','IAH','ICN','JFK','LAP','LAS','LAX','LHR','LIM','LMM','MAD','MAM','MCO','MEX','MIA','MID','MLM','MSY','MTT','MTY','MZT','NLD','NRT','OAX','ONT','ORD','PAZ','PHX','PPE','PTY','PVG','PVR','QRO','REX','SAP','SAT','SCL','SFO','SJD','SJO','SLP','SLW','TAM','TAP','TGZ','TPQ','TRC','VER','VSA','YUL','ZCL','ZIH','ZLO')
  }
,  {
  "key": "TLC",
  "label": "Toluca (TLC)",
  "country": "México",
  "countryCode": "MX",
  "region": 1,
  "partner": 0,
  "depart": Array('ACA','BJX','BRO','CJS','CUL','CUN','CUU','GDL','JFK','LAX','LRD','MTY','ONT','PVR','SAT','SMF')
  }
,  {
  "key": "TRC",
  "label": "Torreón (TRC)",
  "country": "México",
  "countryCode": "MX",
  "region": 1,
  "partner": 0,
  "depart": Array('ACA','AGU','ATL','BJX','BOG','CCS','CDG','CEN','CJS','CME','CPE','CTM','CUL','CUN','CUU','CVM','DEN','DFW','DGO','EZE','FAT','GDL','GRU','GUA','HMO','HUX','IAD','IAH','JFK','LAP','LAS','LAX','LHR','LIM','LMM','LRD','MAD','MAM','MCO','MEX','MIA','MID','MLM','MSY','MTT','MTY','MXL','MZT','NLD','NRT','OAX','ONT','ORD','PAZ','PHX','PPE','PTY','PVG','PVR','QRO','REX','SAL','SAP','SAT','SCL','SFO','SJD','SJO','SLC','SLP','TAM','TAP','TGZ','TIJ','TPQ','VER','VSA','YUL','ZIH','ZLO')
  }
,  {
  "key": "TGZ",
  "label": "Tuxtla Gutiérrez (TGZ)",
  "country": "México",
  "countryCode": "MX",
  "region": 1,
  "partner": 0,
  "depart": Array('ACA','AGU','ATL','BJX','BOG','CCS','CDG','CEN','CJS','CPE','CTM','CUL','CUN','CUU','CVM','DEN','DFW','DGO','EZE','FAT','GDL','GRU','GUA','HMO','HUX','IAD','IAH','JFK','LAP','LAS','LAX','LHR','LIM','LMM','MAD','MAM','MCO','MEX','MIA','MID','MLM','MTT','MTY','MXL','MZT','NLD','NRT','OAX','ONT','ORD','PAZ','PHX','PTY','PVG','PVR','QRO','REX','SAL','SAP','SAT','SCL','SFO','SJD','SJO','SLP','SLW','TAM','TAP','TIJ','TPQ','TRC','VER','YUL','ZCL','ZIH','ZLO')
  }
,  {
  "key": "VER",
  "label": "Veracruz (VER)",
  "country": "México",
  "countryCode": "MX",
  "region": 1,
  "partner": 0,
  "depart": Array('ACA','AGU','ATL','BJX','BOG','BRO','CCS','CDG','CEN','CJS','CME','CPE','CTM','CUL','CUN','CUU','CVM','DEN','DFW','DGO','EZE','FAT','GDL','GRU','GUA','HMO','HUX','IAD','IAH','JFK','LAP','LAS','LAX','LHR','LIM','LMM','LRD','MAD','MAM','MCO','MEX','MIA','MID','MLM','MSY','MTT','MTY','MXL','MZT','NLD','NRT','OAX','ONT','ORD','PAZ','PHX','PTY','PVG','PVR','QRO','REX','SAL','SAP','SAT','SCL','SFO','SJD','SJO','SLP','SLW','TAM','TAP','TGZ','TIJ','TPQ','TRC','VSA','YUL','ZCL','ZIH','ZLO')
  }
,  {
  "key": "VSA",
  "label": "Villahermosa (VSA)",
  "country": "México",
  "countryCode": "MX",
  "region": 1,
  "partner": 0,
  "depart": Array('ACA','AGU','ATL','BJX','BOG','CCS','CDG','CEN','CJS','CME','CPE','CTM','CUL','CUN','CUU','CVM','DEN','DFW','DGO','EZE','FAT','GDL','GRU','GUA','HMO','HUX','IAD','IAH','JFK','LAP','LAS','LAX','LHR','LIM','LMM','MAD','MAM','MCO','MEX','MIA','MID','MLM','MSY','MTT','MTY','MXL','MZT','NLD','NRT','OAX','ONT','ORD','PAZ','PBC','PHX','PTY','PVG','PVR','QRO','REX','SAL','SAP','SAT','SCL','SFO','SJD','SJO','SLP','SLW','TAM','TAP','TIJ','TPQ','TRC','VER','YUL','ZCL','ZIH','ZLO')
  }
,  {
  "key": "ZCL",
  "label": "Zacatecas (ZCL)",
  "country": "México",
  "countryCode": "MX",
  "region": 1,
  "partner": 0,
  "depart": Array('ACA','ATL','BJX','BOG','CCS','CDG','CJS','CME','CPE','CTM','CUL','CUN','CUU','CVM','DEN','DFW','EZE','FAT','GDL','GRU','GUA','HMO','HUX','IAD','IAH','JFK','LAP','LAS','LAX','LHR','LIM','LMM','LRD','MAD','MCO','MEX','MIA','MID','MLM','MTT','MTY','MXL','MZT','NLD','NRT','OAX','ONT','ORD','PAZ','PHX','PTY','PVG','PVR','QRO','REX','SAL','SAP','SAT','SCL','SFO','SJD','SJO','SLW','TAM','TAP','TGZ','TIJ','VER','VSA','YUL','ZIH','ZLO')
  }
,  {
  "key": "AMS",
  "label": "Amsterdam (AMS)",
  "country": "Países Bajos",
  "countryCode": "NL",
  "region": 5,
  "partner": 1,
  "depart": Array('CUN','MEX')
  }
,  {
  "key": "PTY",
  "label": "Panamá (PTY)",
  "country": "Panamá",
  "countryCode": "PA",
  "region": 3,
  "partner": 1,
  "depart": Array('ACA','AGU','ATL','BJX','CEN','CJS','CPE','CUL','CUN','CUU','DGO','FAT','GDL','HMO','IAD','IAH','JFK','LAP','LAS','LAX','LMM','MAM','MEX','MIA','MID','MLM','MTT','MTY','MXL','MZT','NLD','OAX','ORD','PAZ','PVR','REX','SFO','SLP','TAM','TAP','TGZ','TIJ','TRC','VER','VSA','ZCL','ZIH','ZLO')
  }
,  {
  "key": "CIX",
  "label": "Chiclayo (CIX)",
  "country": "Perú",
  "countryCode": "PE",
  "region": 4,
  "partner": 1,
  "depart": Array('MEX')
  }
,  {
  "key": "CUZ",
  "label": "Cuzco (CUZ)",
  "country": "Perú",
  "countryCode": "PE",
  "region": 4,
  "partner": 1,
  "depart": Array('MEX')
  }
,  {
  "key": "JUL",
  "label": "Juliaca (JUL)",
  "country": "Perú",
  "countryCode": "PE",
  "region": 4,
  "partner": 1,
  "depart": Array('MEX')
  }
,  {
  "key": "LIM",
  "label": "Lima (LIM)",
  "country": "Perú",
  "countryCode": "PE",
  "region": 4,
  "partner": 0,
  "depart": Array('ACA','AGU','ATL','BJX','CDG','CEN','CJS','CME','CPE','CUL','CUN','CUU','CVM','DEN','DFW','DGO','FAT','GDL','HMO','HUX','IAD','IAH','JFK','LAP','LAS','LAX','LMM','MAM','MCO','MEX','MIA','MID','MLM','MTT','MTY','MXL','MZT','NLD','OAX','ONT','ORD','PAZ','PHX','PVR','QRO','REX','SAL','SAP','SAT','SFO','SJD','SLP','SLW','SMF','TAM','TAP','TGZ','TIJ','TPQ','TRC','VER','VSA','YUL','YYZ','ZCL','ZIH','ZLO')
  }
,  {
  "key": "PEM",
  "label": "Puerto Maldonado (PEM)",
  "country": "Perú",
  "countryCode": "PE",
  "region": 4,
  "partner": 1,
  "depart": Array('MEX')
  }
,  {
  "key": "LIS",
  "label": "Lisboa (LIS)",
  "country": "Portugal",
  "countryCode": "PT",
  "region": 5,
  "partner": 1,
  "depart": Array('MEX')
  }
,  {
  "key": "SJU",
  "label": "San Juan (SJU)",
  "country": "Puerto Rico",
  "countryCode": "PR",
  "region": 7,
  "partner": 1,
  "depart": Array('CUN','GDL','MEX')
  }
,  {
  "key": "LHR",
  "label": "Londres - Heathrow (LHR)",
  "country": "Reino Unido",
  "countryCode": "GB",
  "region": 5,
  "partner": 0,
  "depart": Array('AGU','BJX','CME','CUL','CUN','CUU','CVM','DGO','GDL','HMO','MEX','MID','MTT','MTY','NLD','OAX','PVR','REX','SLP','SLW','TAM','TGZ','TIJ','TPQ','TRC','VER','VSA','ZCL')
  }
,  {
  "key": "PRG",
  "label": "Praga (PRG)",
  "country": "República Checa",
  "countryCode": "CZ",
  "region": 5,
  "partner": 1,
  "depart": Array('MEX')
  }
,  {
  "key": "ICN",
  "label": "Seúl - Incheon (ICN)",
  "country": "República de Corea",
  "countryCode": "KR",
  "region": 6,
  "partner": 1,
  "depart": Array('MEX','TIJ')
  }
,  {
  "key": "CCS",
  "label": "Caracas (CCS)",
  "country": "Venezuela",
  "countryCode": "VE",
  "region": 4,
  "partner": 0,
  "depart": Array('ACA','AGU','ATL','BJX','CEN','CJS','CME','CPE','CUL','CUN','CUU','CVM','DFW','DGO','DTW','GDL','GUA','HMO','IAH','JFK','LAP','LAS','LAX','LMM','MAM','MEX','MID','MLM','MTT','MTY','MZT','NLD','NRT','OAX','ORD','PAZ','PVG','PVR','QRO','REX','SAT','SLC','SLP','SLW','TAM','TAP','TGZ','TIJ','TPQ','TRC','VER','VSA','ZCL','ZIH','ZLO')
  }
];
