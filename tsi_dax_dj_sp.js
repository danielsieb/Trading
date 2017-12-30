var request = require('request');
var dateFormat = require('dateformat');

var emaLang = 15;
var emaKurz = 5;
var avg = 30;

function catchStockData(url, callback) {

	var avg = 0;

	request(url, function (err, res, body) {
		if (!err && res.statusCode == 200) {

			var stockData = [];

			var regex = (/\d*\,\d*/g);
			var result = body.match(regex);
			var j = 1;

			for (i = 0; i < result.length; i++) {
				if ((j % 4) == 0) {
					stockData.push(Number((result[i].toString()).replace(',','.')));
				} 
				j++;
			}

			var term;

			// Zaehler

			var momentum = [];

			for (i = stockData.length-2; i >= 0; i--) {
				term = stockData[i] - stockData[i-1];
				momentum.push(term);
			} 

			var ema1 = [momentum[0]];

			for (i = 1; i < momentum.length; i++) {
				term = (momentum[i]*(2/(emaLang+1)))+(ema1[i-1]*(1-(2/(emaLang+1))));
				ema1.push(term);
			}

			var ema2 = [ema1[0]];

			for (i = 1; i < ema1.length; i++) {
				term = (ema1[i]*(2/(emaKurz+1)))+(ema2[i-1]*(1-(2/(emaKurz+1))));
				ema2.push(term);
			}

			// Nenner

			var absMomentum = [];

			for (i = 0; i < momentum.length; i++) {
				term = Math.abs(momentum[i]);
				absMomentum.push(term);
			}

			var absEma1 = [absMomentum[0]];

			for (i = 1; i < absMomentum.length; i++) {
				term = (absMomentum[i]*(2/(emaLang+1)))+(absEma1[i-1]*(1-(2/(emaLang+1))));
				absEma1.push(term);
			}

			var absEma2 = [absEma1[0]];

			for (i = 1; i < absEma1.length; i++) {
				term = (absEma1[i]*(2/(emaKurz+1)))+(absEma2[i-1]*(1-(2/(emaKurz+1))));
				absEma2.push(term);
			}

			// TSI

			var tsi = [];

			for (i = 0; i < ema2.length; i++) {
				term = 100*(ema2[i]/absEma2[i]);
				tsi.push(term);
			}

			callback(tsi);
		}
	});
}

function handleArray(results) {
	var vna = 0;
	var vow3 = 0;
	var tka = 0;
	var sie = 0;
	var sap = 0;
	var rwe = 0;
	var psm = 0;
	var muv2 = 0;
	var mrk = 0;
	var linu = 0;
	var ifx = 0;
	var hen3 = 0;
	var hei = 0;
	var fre = 0;
	var fme = 0;
	var eoan = 0;
	var dte = 0;
	var dpw = 0;
	var lha = 0;
	var db1 = 0;
	var dbk = 0;
	var dai = 0;
	var con = 0;
	var cbk = 0;
	var bei = 0;
	var bmw = 0;
	var bayn = 0;
	var bas = 0;
	var alv = 0;
	var ads = 0;
	var MMM = 0;
	var AEC1 = 0;
	var APC = 0;
	var BCO = 0;
	var CAT1 = 0;
	var CHV = 0;
	var CIS = 0;
	var CCC3 = 0;
	var D6D8 = 0;
	var XONA = 0;
	var GEC = 0;
	var GOS = 0;
	var HDI = 0;
	var INL = 0;
	var IBM = 0;
	var JNJ = 0;
	var CMC = 0;
	var MDO = 0;
	var M6MK = 0;
	var MSF = 0;
	var NKE = 0;
	var PFE = 0;
	var PRG = 0;
	var WDP = 0;
	var PA9 = 0;
	var UTC1 = 0;
	var UNH = 0;
	var BAC = 0;
	var V3V64 = 0;
	var WMT = 0;
																													
	for (k = 1; k <= avg; k++) {
																													
		var priority = [];
																														
		priority['VNA'] = results['VNA'][k];
		priority['VOW3'] = results['VOW3'][k];
		priority['TKA'] = results['TKA'][k];
		priority['SIE'] = results['SIE'][k];
		priority['SAP'] = results['SAP'][k];
		priority['RWE'] = results['RWE'][k];
		priority['PSM'] = results['PSM'][k];
		priority['MUV2'] = results['MUV2'][k];
		priority['MRK'] = results['MRK'][k];
		priority['LINU'] = results['LINU'][k];
		priority['IFX'] = results['IFX'][k];
		priority['HEN3'] = results['HEN3'][k];
		priority['HEI'] = results['HEI'][k];
		priority['FRE'] = results['FRE'][k];
		priority['FME'] = results['FME'][k];
		priority['EOAN'] = results['EOAN'][k];
		priority['DTE'] = results['DTE'][k];
		priority['DPW'] = results['DPW'][k];
		priority['LHA'] = results['LHA'][k];
		priority['DB1'] = results['DB1'][k];
		priority['DBK'] = results['DBK'][k];
		priority['DAI'] = results['DAI'][k];
		priority['CON'] = results['CON'][k];
		priority['CBK'] = results['CBK'][k];
		priority['BEI'] = results['BEI'][k];
		priority['BMW'] = results['BMW'][k];
		priority['BAYN'] = results['BAYN'][k];
		priority['BAS'] = results['BAS'][k];
		priority['ALV'] = results['ALV'][k];
		priority['ADS'] = results['ADS'][k];
		priority['MMM'] = results['MMM'][k];
		priority['AEC1'] = results['AEC1'][k];
		priority['APC'] = results['APC'][k];
		priority['BCO'] = results['BCO'][k];
		priority['CAT1'] = results['CAT1'][k];
		priority['CHV'] = results['CHV'][k];
		priority['CIS'] = results['CIS'][k];
		priority['CCC3'] = results['CCC3'][k];
		priority['D6D8'] = results['D6D8'][k];
		priority['XONA'] = results['XONA'][k];
		priority['GEC'] = results['GEC'][k];
		priority['GOS'] = results['GOS'][k];
		priority['HDI'] = results['HDI'][k];
		priority['INL'] = results['INL'][k];
		priority['IBM'] = results['IBM'][k];
		priority['JNJ'] = results['JNJ'][k];
		priority['CMC'] = results['CMC'][k];
		priority['MDO'] = results['MDO'][k];
		priority['M6MK'] = results['M6MK'][k];
		priority['MSF'] = results['MSF'][k];
		priority['NKE'] = results['NKE'][k];
		priority['PFE'] = results['PFE'][k];
		priority['PRG'] = results['PRG'][k];
		priority['WDP'] = results['WDP'][k];
		priority['PA9'] = results['PA9'][k];
		priority['UTC1'] = results['UTC1'][k];
		priority['UNH'] = results['UNH'][k];
		priority['BAC'] = results['BAC'][k];
		priority['V3V64'] = results['V3V64'][k];
		priority['WMT'] = results['WMT'][k];
																														
		var prio = [];
																														
		for (var key in priority) prio.push([key, priority[key]]);
		
		prio.sort(function(a, b) {
		    a = a[1];
		    b = b[1];
		
		    return a < b ? -1 : (a > b ? 1 : 0);
		});
																														
		prio.reverse();
																														
		var j = prio.length;
																														
		for (i = 0; i < prio.length; i++) {
			prio[i][1] = j;
			j--;
		}
																														
		
		for (var i in prio) {
			switch(prio[i][0]) {
				case 'VNA':
				vna += prio[i][1];
																														
				break;
				case 'VOW3':
				vow3 += prio[i][1];
																														
				break;
				case 'TKA':
				tka += prio[i][1];
																														
				break;
				case 'SIE':
				sie += prio[i][1];
																														
				break;
				case 'SAP':
				sap += prio[i][1];
																														
				break;
				case 'RWE':
				rwe += prio[i][1];
																														
				break;
				case 'PSM':
				psm += prio[i][1];
																														
				break;
				case 'MUV2':
				muv2 += prio[i][1];
																														
				break;
				case 'MRK':
				mrk += prio[i][1];
																														
				break;
				case 'LINU':
				linu += prio[i][1];
																														
				break;
				case 'IFX':
				ifx += prio[i][1];
																														
				break;
				case 'HEN3':
				hen3 += prio[i][1];
																														
				break;
				case 'HEI':
				hei += prio[i][1];
																														
				break;
				case 'FRE':
				fre += prio[i][1];
																														
				break;
				case 'FME':
				fme += prio[i][1];
																														
				break;
				case 'EOAN':
				eoan += prio[i][1];
																														
				break;
				case 'DTE':
				dte += prio[i][1];
																														
				break;
				case 'DPW':
				dpw += prio[i][1];
																														
				break;
				case 'LHA':
				lha += prio[i][1];
																														
				break;
				case 'DB1':
				db1 += prio[i][1];
																														
				break;
				case 'DBK':
				dbk += prio[i][1];
																														
				break;
				case 'DAI':
				dai += prio[i][1];
																														
				break;
				case 'CON':
				con += prio[i][1];
																														
				break;
				case 'CBK':
				cbk += prio[i][1];
																														
				break;
				case 'BEI':
				bei += prio[i][1];
																														
				break;
				case 'BMW':
				bmw += prio[i][1];
																														
				break;
				case 'BAYN':
				bayn += prio[i][1];
																														
				break;
				case 'BAS':
				bas += prio[i][1];
																														
				break;
				case 'ALV':
				alv += prio[i][1];
																														
				break;
				case 'ADS':
				ads += prio[i][1];
																														
				break;

				case 'MMM':
				MMM += prio[i][1];
																														
				break;
				case 'AEC1':
				AEC1 += prio[i][1];
																														
				break;
				case 'APC':
				APC += prio[i][1];
																														
				break;
				case 'BCO':
				BCO += prio[i][1];
																														
				break;
				case 'CAT1':
				CAT1 += prio[i][1];
																														
				break;
				case 'CHV':
				CHV += prio[i][1];
																														
				break;
				case 'CIS':
				CIS += prio[i][1];
																														
				break;
				case 'CCC3':
				CCC3 += prio[i][1];
																														
				break;
				case 'D6D8':
				D6D8 += prio[i][1];
																														
				break;
				case 'XONA':
				XONA += prio[i][1];
																														
				break;
				case 'GEC':
				GEC += prio[i][1];
																														
				break;
				case 'GOS':
				GOS += prio[i][1];
																														
				break;
				case 'HDI':
				HDI += prio[i][1];
																														
				break;
				case 'INL':
				INL += prio[i][1];
																														
				break;
				case 'IBM':
				IBM += prio[i][1];
																														
				break;
				case 'JNJ':
				JNJ += prio[i][1];
																														
				break;
				case 'CMC':
				CMC += prio[i][1];
																														
				break;
				case 'MDO':
				MDO += prio[i][1];
																														
				break;
				case 'M6MK':
				M6MK += prio[i][1];
																														
				break;
				case 'MSF':
				MSF += prio[i][1];
																														
				break;
				case 'NKE':
				NKE += prio[i][1];
																														
				break;
				case 'PFE':
				PFE += prio[i][1];
																														
				break;
				case 'PRG':
				PRG += prio[i][1];
																														
				break;
				case 'WDP':
				WDP += prio[i][1];
																														
				break;
				case 'PA9':
				PA9 += prio[i][1];
																														
				break;
				case 'UTC1':
				UTC1 += prio[i][1];
																														
				break;
				case 'UNH':
				UNH += prio[i][1];
																														
				break;
				case 'BAC':
				BAC += prio[i][1];
																														
				break;
				case 'V3V64':
				V3V64 += prio[i][1];
																														
				break;
				case 'WMT':
				WMT += prio[i][1];
																														
				break;
			}
		}
	}
																													
	vna /= avg;
	vow3 /= avg;
	tka /= avg;
	sie /= avg;
	sap /= avg;
	rwe /= avg;
	psm /= avg;
	muv2 /= avg;
	mrk /= avg;
	linu = avg;
	ifx /= avg;
	hen3 /= avg;
	hei /= avg;
	fre /= avg;
	fme /= avg;
	eoan /= avg;
	dte /= avg;
	dpw /= avg;
	lha /= avg;
	db1 /= avg;
	dbk /= avg;
	dai /= avg;
	con /= avg;
	cbk /= avg;
	bei /= avg;
	bmw /= avg;
	bayn /= avg;
	bas /= avg;
	alv /= avg;
	ads /= avg;
	MMM /= avg;
	AEC1 /= avg;
	APC /= avg;
	BCO /= avg;
	CAT1 /= avg;
	CHV /= avg;
	CIS /= avg;
	CCC3 /= avg;
	D6D8 /= avg;
	XONA = avg;
	GEC /= avg;
	GOS  /= avg;
	HDI /= avg;
	INL /= avg;
	IBM /= avg;
	JNJ  /= avg;
	CMC /= avg;
	MDO /= avg;
	M6MK /= avg;
	MSF /= avg;
	NKE /= avg;
	PFE /= avg;
	PRG /= avg;
	WDP /= avg;
	PA9 /= avg;
	UTC1 /= avg;
	UNH  /= avg;
	BAC /= avg;
	V3V64 /= avg;
	WMT /= avg;
																													
	var endprio = [];
																													
	endprio['VNA'] = Math.round(vna*100)/100
	endprio['VOW3'] = Math.round(vow3*100)/100
	endprio['TKA'] = Math.round(tka*100)/100
	endprio['SIE'] = Math.round(sie*100)/100
	endprio['SAP'] = Math.round(sap*100)/100
	endprio['RWE'] = Math.round(rwe*100)/100
	endprio['PSM'] = Math.round(psm*100)/100
	endprio['MUV2'] = Math.round(muv2*100)/100
	endprio['MRK'] = Math.round(mrk*100)/100
	endprio['LINU'] = Math.round(linu*100)/100
	endprio['IFX'] = Math.round(ifx*100)/100
	endprio['HEN3'] = Math.round(hen3*100)/100
	endprio['HEI'] = Math.round(hei*100)/100
	endprio['FRE'] = Math.round(fre*100)/100
	endprio['FME'] = Math.round(fme*100)/100
	endprio['EOAN'] = Math.round(eoan*100)/100
	endprio['DTE'] = Math.round(dte*100)/100
	endprio['DPW'] = Math.round(dpw*100)/100
	endprio['LHA'] = Math.round(lha*100)/100
	endprio['DB1'] = Math.round(db1*100)/100
	endprio['DBK'] = Math.round(dbk*100)/100
	endprio['DAI'] = Math.round(dai*100)/100
	endprio['CON'] = Math.round(con*100)/100
	endprio['CBK'] = Math.round(cbk*100)/100
	endprio['BEI'] = Math.round(bei*100)/100
	endprio['BMW'] = Math.round(bmw*100)/100
	endprio['BAYN'] = Math.round(bayn*100)/100
	endprio['BAS'] = Math.round(bas*100)/100
	endprio['ALV'] = Math.round(alv*100)/100
	endprio['ADS'] = Math.round(ads*100)/100
	endprio['MMM'] = Math.round(MMM *100)/100
	endprio['AEC1'] = Math.round(AEC1*100)/100
	endprio['APC'] = Math.round(APC *100)/100
	endprio['BCO'] = Math.round(BCO *100)/100
	endprio['CAT1'] = Math.round(CAT1*100)/100
	endprio['CHV'] = Math.round(CHV *100)/100
	endprio['CIS'] = Math.round(CIS *100)/100
	endprio['CCC3'] = Math.round(CCC3*100)/100
	endprio['D6D8'] = Math.round(D6D8*100)/100
	endprio['XONA'] = Math.round(XONA*100)/100
	endprio['GEC'] = Math.round(GEC *100)/100
	endprio['GOS'] = Math.round(GOS *100)/100
	endprio['HDI'] = Math.round(HDI *100)/100
	endprio['INL'] = Math.round(INL *100)/100
	endprio['IBM'] = Math.round(IBM *100)/100
	endprio['JNJ'] = Math.round(JNJ *100)/100
	endprio['CMC'] = Math.round(CMC *100)/100
	endprio['MDO'] = Math.round(MDO *100)/100
	endprio['M6MK'] = Math.round(M6MK*100)/100
	endprio['MSF'] = Math.round(MSF *100)/100
	endprio['NKE'] = Math.round(NKE *100)/100
	endprio['PFE'] = Math.round(PFE *100)/100
	endprio['PRG'] = Math.round(PRG *100)/100
	endprio['WDP'] = Math.round(WDP *100)/100
	endprio['PA9'] = Math.round(PA9 *100)/100
	endprio['UTC1'] = Math.round(UTC1*100)/100
	endprio['UNH'] = Math.round(UNH *100)/100
	endprio['BAC'] = Math.round(BAC *100)/100
	endprio['V3V64'] = Math.round(V3V64 *100)/100
	endprio['WMT'] = Math.round(WMT *100)/100
																													
	var endbossprio = [];
																													
	for (var key in endprio) endbossprio.push([key, endprio[key]]);
																													
	endbossprio.sort(function(a, b) {
	    a = a[1];
	    b = b[1];
		
	    return a < b ? -1 : (a > b ? 1 : 0);
	});
																													
	endbossprio.reverse();
																													
	console.log(endbossprio);
}

var d = new Date();
d = dateFormat(d, "dd.mm.yyyy");
d.toString();
var date = d.replace("2017","2016");

var results = [];

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=39471840&dateStart="+date+"&interval=Y1", function(data) {
results['ADS'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=1937897&dateStart="+date+"&interval=Y1", function(data) {
results['ALV'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=37886885&dateStart="+date+"&interval=Y1", function(data) {
results['BAS'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=30820934&dateStart="+date+"&interval=Y1", function(data) {
results['BAYN'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=143094&dateStart="+date+"&interval=Y1", function(data) {
results['BMW'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=143111&dateStart="+date+"&interval=Y1", function(data) {
results['BEI'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=180039&dateStart="+date+"&interval=Y1", function(data) {
results['CBK'] = data;
		
catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=144339&dateStart="+date+"&interval=Y1", function(data) {
results['CON'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=161766&dateStart="+date+"&interval=Y1", function(data) {
results['DAI'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=142991&dateStart="+date+"&interval=Y1", function(data) {
results['DBK'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=2036789&dateStart="+date+"&interval=Y1", function(data) {
results['DB1'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=1543196&dateStart="+date+"&interval=Y1", function(data) {
results['LHA'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=144553&dateStart="+date+"&interval=Y1", function(data) {
results['DPW'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=2025437&dateStart="+date+"&interval=Y1", function(data) {
results['DTE'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=24022547&dateStart="+date+"&interval=Y1", function(data) {
results['EOAN'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=150288&dateStart="+date+"&interval=Y1", function(data) {
results['FME'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=1958612&dateStart="+date+"&interval=Y1", function(data) {
results['FRE'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=152371&dateStart="+date+"&interval=Y1", function(data) {
results['HEI'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=152378&dateStart="+date+"&interval=Y1", function(data) {
results['HEN3'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=154990&dateStart="+date+"&interval=Y1", function(data) {
results['IFX'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=195555884&dateStart="+date+"&interval=Y1", function(data) {
results['LINU'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=158463&dateStart="+date+"&interval=Y1", function(data) {
results['MRK'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=186563&dateStart="+date+"&interval=Y1", function(data) {
results['MUV2'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=86514940&dateStart="+date+"&interval=Y1", function(data) {
results['PSM'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=160037&dateStart="+date+"&interval=Y1", function(data) {
results['RWE'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=163500&dateStart="+date+"&interval=Y1", function(data) {
results['SAP'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=1929749&dateStart="+date+"&interval=Y1", function(data) {
results['SIE'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=167332&dateStart="+date+"&interval=Y1", function(data) {
results['TKA'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=176173&dateStart="+date+"&interval=Y1", function(data) {
results['VOW3'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=84035198&dateStart="+date+"&interval=Y1", function(data) {
results['VNA'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=9386168&dateStart="+date+"&interval=Y1", function(data) {
results['MMM'] = data;
																													
catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=9386114&dateStart="+date+"&interval=Y1", function(data) {
results['AEC1'] = data;
																														
catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=9385885&dateStart="+date+"&interval=Y1", function(data) {
results['APC'] = data;
																														
catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=9386000&dateStart="+date+"&interval=Y1", function(data) {
results['BCO'] = data;
																														
catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=9386014&dateStart="+date+"&interval=Y1", function(data) {
results['CAT1'] = data;
																														
catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=21731398&dateStart="+date+"&interval=Y1", function(data) {
results['CHV'] = data;
																														
catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=9385756&dateStart="+date+"&interval=Y1", function(data) {
results['CIS'] = data;
																														
catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=9385862&dateStart="+date+"&interval=Y1", function(data) {
results['CCC3'] = data;
																														
catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=11709741&dateStart="+date+"&interval=Y1", function(data) {
results['D6D8'] = data;
																														
catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=9386209&dateStart="+date+"&interval=Y1", function(data) {
results['XONA'] = data;
																														
catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=9385931&dateStart="+date+"&interval=Y1", function(data) {
results['GEC'] = data;
																														
catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=20798505&dateStart="+date+"&interval=Y1", function(data) {
results['GOS'] = data;
																														
catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=9386052&dateStart="+date+"&interval=Y1", function(data) {
results['HDI'] = data;
																														
catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=9385733&dateStart="+date+"&interval=Y1", function(data) {
results['INL'] = data;
																														
catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=9386100&dateStart="+date+"&interval=Y1", function(data) {
results['IBM'] = data;
																														
catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=9385912&dateStart="+date+"&interval=Y1", function(data) {
results['JNJ'] = data;
																														
catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=9385801&dateStart="+date+"&interval=Y1", function(data) {
results['CMC'] = data;
																														
catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=9385690&dateStart="+date+"&interval=Y1", function(data) {
results['MDO'] = data;
																														
catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=31548133&dateStart="+date+"&interval=Y1", function(data) {
results['M6MK'] = data;
																														
catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=9385717&dateStart="+date+"&interval=Y1", function(data) {
results['MSF'] = data;
																														
catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=24155440&dateStart="+date+"&interval=Y1", function(data) {
results['NKE'] = data;
																														
catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=9385990&dateStart="+date+"&interval=Y1", function(data) {
results['PFE'] = data;
																														
catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=9385838&dateStart="+date+"&interval=Y1", function(data) {
results['PRG'] = data;
																														
catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=9385870&dateStart="+date+"&interval=Y1", function(data) {
results['WDP'] = data;
																														
catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=29383275&dateStart="+date+"&interval=Y1", function(data) {
results['PA9'] = data;
																													
catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=9386033&dateStart="+date+"&interval=Y1", function(data) {
results['UTC1'] = data;
																														
catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=23788277&dateStart="+date+"&interval=Y1", function(data) {
results['UNH'] = data;
																														
catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=9620544&dateStart="+date+"&interval=Y1", function(data) {
results['BAC'] = data;
																														
catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=22196914&dateStart="+date+"&interval=Y1", function(data) {
results['V3V64'] = data;
																														
catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=9385921&dateStart="+date+"&interval=Y1", function(data) {
results['WMT'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=87212359&dateStart="+date+"&interval=Y1", function(data) {
results['NXWB'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=35349266&dateStart="+date+"&interval=Y1", function(data) {
results['ABL'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=93536624&dateStart="+date+"&interval=Y1", function(data) {
results['X4AB'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=55081566&dateStart="+date+"&interval=Y1", function(data) {
results['CSA'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=23788261&dateStart="+date+"&interval=Y1", function(data) {
results['AIY'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=163897662&dateStart="+date+"&interval=Y1", function(data) {
results['AQ8'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=9385978&dateStart="+date+"&interval=Y1", function(data) {
results['ADB'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=182054818&dateStart="+date+"&interval=Y1", function(data) {
results['AWN'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=9385927&dateStart="+date+"&interval=Y1", function(data) {
results['AMD'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=35349255&dateStart="+date+"&interval=Y1", function(data) {
results['AES'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=35349256&dateStart="+date+"&interval=Y1", function(data) {
results['HE8'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=132092925&dateStart="+date+"&interval=Y1", function(data) {
results['AFS'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=23584990&dateStart="+date+"&interval=Y1", function(data) {
results['AFL'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=23293634&dateStart="+date+"&interval=Y1", function(data) {
results['AG8'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=35479074&dateStart="+date+"&interval=Y1", function(data) {
results['AP3'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=9386034&dateStart="+date+"&interval=Y1", function(data) {
results['AK3'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=172501138&dateStart="+date+"&interval=Y1", function(data) {
results['ALK'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=160637207&dateStart="+date+"&interval=Y1", function(data) {
results['AMC'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=184123395&dateStart="+date+"&interval=Y1", function(data) {
results['A6W'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=37044460&dateStart="+date+"&interval=Y1", function(data) {
results['AXP'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=106377177&dateStart="+date+"&interval=Y1", function(data) {
results['AFW'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=132035812&dateStart="+date+"&interval=Y1", function(data) {
results['X60A'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=35559265&dateStart="+date+"&interval=Y1", function(data) {
results['A60'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=132092963&dateStart="+date+"&interval=Y1", function(data) {
results['LID'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=129194157&dateStart="+date+"&interval=Y1", function(data) {
results['AY1'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=132144293&dateStart="+date+"&interval=Y1", function(data) {
results['ALS'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=100766162&dateStart="+date+"&interval=Y1", function(data) {
results['ABEC'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=10395231&dateStart="+date+"&interval=Y1", function(data) {
results['ABEA'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=9386024&dateStart="+date+"&interval=Y1", function(data) {
results['PHM7'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=9386024&dateStart="+date+"&interval=Y1", function(data) {
results['PHM7'] = data;

// Du checkst nicht	
// du au nit																																																													


handleArray(results);
																																																																																								
});});});});});});});});});});});});});});});});});});});});});});});});});});});});});});});});});});});});});});});});});});});});});});});});});});







