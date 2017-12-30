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
	var	NXWB = 0;
	var ABL = 0;
	var X4AB = 0;
	var CSA = 0;
	var AIY	= 0;
	var AQ8	= 0;
	var ADB = 0;
	var AWN = 0;
	var AMD = 0;
	var AES	= 0;
	var HE8	= 0;
	var AFS	= 0;
	var AFL	= 0;
	var AG8	= 0;
	var AP3	= 0;
	var AK3	= 0;
	var ALK	= 0;
	var AMC = 0;
	var A6W = 0;
	var AXP = 0;
	var AFW = 0;
	var X60A = 0;
	var A60 = 0;
	var LID = 0;
	var AY1 = 0;
	var ALS = 0;
	var ABEC = 0;
	var ABEA = 0;
	var PHM7 = 0;
	var AMZ = 0;
	var AE4 = 0;
	var A1G = 0;
	var AEP = 0;
	var AINN = 0;
	var A0T = 0;
	var AWC = 0;
	var A4S = 0;
	var ABG = 0;
	var AK1 = 0;
	var AMG = 0;
	var XPH = 0;
	var AAZ = 0;
	var ANL = 0;
	var TX5 = 0;
	var AKX = 0;
	var A58 = 0;
	var X9H6 = 0;
	var APA = 0;
	var AIV = 0;
	var AP2 = 0;
	var D7A = 0;
	var ADM = 0;
	var ALU2 = 0;
	var ZAS = 0;
	var SOBA = 0;
	var AUD = 0;
	var ADP = 0;
	var AZ5 = 0;
	var WV8 = 0;
	var AV3 = 0;
	var X68V = 0;
	var BL8 = 0;
	var NCB = 0;
	var BN9 = 0;
	var BR6 = 0;
	var BTL = 0;
	var BBK = 0;
	var BOX = 0;
	var BRYN = 0;
	var BUY = 0;
	var IDP = 0;
	var BLQA = 0;
	var BGW = 0;
	var BO9 = 0;
	var BSX	= 0;
	var BROC = 0;
	var BRM = 0;
	var BRX = 0;
	var BF5B = 0;
	var CH1A = 0;
	var X9C7 = 0;
	var XCQ = 0;
	var CDS = 0;
	var CSC = 0;
	var CFX = 0;
	var CLH = 0;
	var XA4 = 0;
	var CVC1 = 0;
	var C67 = 0;
	var RF6 = 0;
	var C5S = 0;
	var CG3 = 0;
	var QEN = 0;
	var HOU = 0;
	var CYT = 0;
	var CRE = 0;
	var C4F = 0;
	var SWG = 0;
	var CQD = 0;
	var CS1 = 0;
	var C9F = 0;
	var AEX = 0;
	var CXU = 0;
	var CGN = 0;
	var ENY = 0;
																													
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
		priority['NXWB'] = results['NXWB'][k];
		priority['ABL'] = results['ABL'][k];
		priority['X4AB'] = results['X4AB'][k];
		priority['CSA'] = results['CSA'][k];
		priority['AIY'] = results['AIY'][k];
		priority['AQ8'] = results['AQ8'][k];
		priority['ADB'] = results['ADB'][k];
		priority['AWN'] = results['AWN'][k];
		priority['AMD'] = results['AMD'][k];
		priority['AES'] = results['AES'][k];
		priority['HE8'] = results['HE8'][k];
		priority['AFS'] = results['AFS'][k];
		priority['AFL'] = results['AFL'][k];
		priority['AG8'] = results['AG8'][k];
		priority['AP3'] = results['AP3'][k];
		priority['AK3'] = results['AK3'][k];
		priority['ALK'] = results['ALK'][k];
		priority['AMC'] = results['AMC'][k];
		priority['A6W'] = results['A6W'][k];
		priority['AXP'] = results['AXP'][k];
		priority['AFW'] = results['AFW'][k];
		priority['X60A'] = results['X60A'][k];
		priority['A60'] = results['A60'][k];
		priority['LID'] = results['LID'][k];
		priority['AY1'] = results['AY1'][k];
		priority['ALS'] = results['ALS'][k];
		priority['ABEC'] = results['ABEC'][k];
		priority['ABEA'] = results['ABEA'][k];
		priority['PHM7'] = results['PHM7'][k];
		priority['AMZ'] = results['AMZ'][k];
		priority['AE4'] = results['AE4'][k];
		priority['A1G'] = results['A1G'][k];
		priority['AEP'] = results['AEP'][k];
		priority['AINN'] = results['AINN'][k];
		priority['A0T'] = results['A0T'][k];
		priority['AWC'] = results['AWC'][k];
		priority['A4S'] = results['A4S'][k];
		priority['ABG'] = results['ABG'][k];
		priority['AK1'] = results['AK1'][k];
		priority['AMG'] = results['AMG'][k];
		priority['XPH'] = results['XPH'][k];
		priority['AAZ'] = results['AAZ'][k];
		priority['ANL'] = results['ANL'][k];
		priority['TX5'] = results['TX5'][k];
		priority['AKX'] = results['AKX'][k];
		priority['A58'] = results['A58'][k];
		priority['X9H6'] = results['X9H6'][k];
		priority['APA'] = results['APA'][k];
		priority['AIV'] = results['AIV'][k];
		priority['AP2'] = results['AP2'][k];
		priority['D7A'] = results['D7A'][k];
		priority['ADM'] = results['ADM'][k];
		priority['ALU2'] = results['ALU2'][k];
		priority['ZAS'] = results['ZAS'][k];
		priority['SOBA'] = results['SOBA'][k];
		priority['AUD'] = results['AUD'][k];
		priority['ADP'] = results['ADP'][k];
		priority['AZ5'] = results['AZ5'][k];
		priority['WV8'] = results['WV8'][k];
		priority['AV3'] = results['AV3'][k];
		priority['X68V'] = results['X68V'][k];
		priority['BL8'] = results['BL8'][k];
		priority['NCB'] = results['NCB'][k];
		priority['BN9'] = results['BN9'][k];
		priority['BR6'] = results['BR6'][k];
		priority['BTL'] = results['BTL'][k];
		priority['BBK'] = results['BBK'][k];
		priority['BOX'] = results['BOX'][k];
		priority['BRYN'] = results['BRYN'][k];
		priority['BUY'] = results['BUY'][k];
		priority['IDP'] = results['IDP'][k];
		priority['BLQA'] = results['BLQA'][k];
		priority['BGW'] = results['BGW'][k];
		priority['BO9'] = results['BO9'][k];
		priority['BSX'] = results['BSX'][k];
		priority['BROC'] = results['BROC'][k];
		priority['BRM'] = results['BRM'][k];
		priority['BRX'] = results['BRX'][k];
		priority['BF5B'] = results['BF5B'][k];
		priority['CH1A'] = results['CH1A'][k];
		priority['X9C7'] = results['X9C7'][k];
		priority['XCQ'] = results['XCQ'][k];
		priority['CDS'] = results['CDS'][k];
		priority['CSC'] = results['CSC'][k];
		priority['CFX'] = results['CFX'][k];
		priority['CLH'] = results['CLH'][k];
		priority['XA4'] = results['XA4'][k];
		priority['CVC1'] = results['CVC1'][k];
		priority['C67'] = results['C67'][k];
		priority['RF6'] = results['RF6'][k];
		priority['C5S'] = results['C5S'][k];
		priority['CG3'] = results['CG3'][k];
		priority['QEN'] = results['QEN'][k];
		priority['HOU'] = results['HOU'][k];
		priority['CYT'] = results['CYT'][k];
		priority['CRE'] = results['CRE'][k];
		priority['C4F'] = results['C4F'][k];
		priority['SWG'] = results['SWG'][k];
		priority['CQD'] = results['CQD'][k];
		priority['CS1'] = results['CS1'][k];
		priority['C9F'] = results['C9F'][k];
		priority['AEX'] = results['AEX'][k];
		priority['CXU'] = results['CXU'][k];
		priority['CGN'] = results['CGN'][k];
		priority['ENY'] = results['ENY'][k];
								
	

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
	NXWB /= avg;
	ABL /= avg;	
	X4AB /= avg;
	CSA /= avg;	
	AIY /= avg;	
	AQ8 /= avg;	
	ADB /= avg;
	AWN /= avg;
	AMD /= avg;
	AES /= avg;	
	HE8 /= avg;	
	AFS /= avg;	
	AFL /= avg;	
	AG8 /= avg;	
	AP3 /= avg;	
	AK3 /= avg;	
	ALK /= avg;	
	AMC /= avg;
	A6W /= avg;
	AXP /= avg;	
	AFW /= avg;
	X60A /= avg;
	A60 /= avg;	
	LID /= avg;	
	AY1 /= avg;	
	ALS /= avg;	
	ABEC /= avg;
	ABEA /= avg;
	PHM7 /= avg;
	AMZ /= avg;
	AE4 /= avg;	
	A1G /= avg;	
	AEP /= avg;	
	AINN /= avg;
	A0T /= avg;	
	AWC /= avg;
	A4S /= avg;	
	ABG /= avg;
	AK1 /= avg;	
	AMG /= avg;
	XPH /= avg;
	AAZ /= avg;	
	ANL /= avg;	
	TX5 /= avg;	
	AKX /= avg;	
	A58 /= avg;	
	X9H6 /= avg;
	APA /= avg;	
	AIV /= avg;	
	AP2 /= avg;	
	D7A /= avg;	
	ADM /= avg;
	ALU2 /= avg;
	ZAS /= avg;	
	SOBA /= avg;
	AUD /= avg;
	ADP /= avg;	
	AZ5 /= avg;	
	WV8 /= avg;
	AV3 /= avg;	
	X68V /= avg;
	BL8 /= avg;	
	NCB /= avg;
	BN9 /= avg;	
	BR6 /= avg;	
	BTL /= avg;	
	BBK /= avg;	
	BOX /= avg;
	BRYN /= avg;
	BUY /= avg;
	IDP /= avg;	
	BLQA /= avg;
	BGW /= avg;
	BO9 /= avg;
	BSX /= avg;	
	BROC /= avg;
	BRM /= avg;
	BRX /= avg;	
	BF5B /= avg;
	CH1A /= avg;
	X9C7 /= avg;
	XCQ /= avg;
	CDS /= avg;
	CSC /= avg;
	CFX /= avg;	
	CLH /= avg;	
	XA4 /= avg;	
	CVC1 /= avg;
	C67 /= avg;	
	RF6 /= avg;	
	C5S /= avg;	
	CG3 /= avg;
	QEN /= avg;
	HOU /= avg;
	CYT /= avg;	
	CRE /= avg;	
	C4F /= avg;	
	SWG /= avg;
	CQD /= avg;
	CS1 /= avg;	
	C9F /= avg;	
	AEX /= avg;	
	CXU /= avg;
	CGN /= avg;
	ENY /= avg;	
																													
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
	endprio['NXWB'] = Math.round(NXWB *100)/100 
	endprio['ABL'] = Math.round(ABL *100)/100 	
	endprio['X4AB'] = Math.round(X4AB *100)/100  
	endprio['CSA'] = Math.round(CSA *100)/100 	
	endprio['AIY'] = Math.round(AIY *100)/100 	
	endprio['AQ8'] = Math.round(AQ8 *100)/100 	
	endprio['ADB'] = Math.round(ADB *100)/100 
	endprio['AWN'] = Math.round(AWN *100)/100 
	endprio['AMD'] = Math.round(AMD *100)/100 
	endprio['AES'] = Math.round(AES *100)/100 	
	endprio['HE8'] = Math.round(HE8 *100)/100 	
	endprio['AFS'] = Math.round(AFS *100)/100 	
	endprio['AFL'] = Math.round(AFL *100)/100 	
	endprio['AG8'] = Math.round(AG8 *100)/100 	
	endprio['AP3'] = Math.round(AP3 *100)/100 	
	endprio['AK3'] = Math.round(AK3 *100)/100 	
	endprio['ALK'] = Math.round(ALK *100)/100 	
	endprio['AMC'] = Math.round(AMC *100)/100 
	endprio['A6W'] = Math.round(A6W *100)/100 
	endprio['AXP'] = Math.round(AXP *100)/100 	
	endprio['AFW'] = Math.round(AFW *100)/100 
	endprio['X60A'] = Math.round(X60A *100)/100  
	endprio['A60'] = Math.round(A60 *100)/100 	
	endprio['LID'] = Math.round(LID *100)/100 	
	endprio['AY1'] = Math.round(AY1 *100)/100 	
	endprio['ALS'] = Math.round(ALS *100)/100 	
	endprio['ABEC'] = Math.round(ABEC *100)/100  
	endprio['ABEA'] = Math.round(ABEA *100)/100  
	endprio['PHM7'] = Math.round(PHM7 *100)/100  
	endprio['AMZ'] = Math.round(AMZ *100)/100 
	endprio['AE4'] = Math.round(AE4 *100)/100 	
	endprio['A1G'] = Math.round(A1G *100)/100 	
	endprio['AEP'] = Math.round(AEP *100)/100 	
	endprio['AINN'] = Math.round(AINN *100)/100  
	endprio['A0T'] = Math.round(A0T *100)/100 	
	endprio['AWC'] = Math.round(AWC *100)/100 
	endprio['A4S'] = Math.round(A4S *100)/100 	
	endprio['ABG'] = Math.round(ABG *100)/100 
	endprio['AK1'] = Math.round(AK1 *100)/100 	
	endprio['AMG'] = Math.round(AMG *100)/100 
	endprio['XPH'] = Math.round(XPH *100)/100 
	endprio['AAZ'] = Math.round(AAZ *100)/100 	
	endprio['ANL'] = Math.round(ANL *100)/100 	
	endprio['TX5'] = Math.round(TX5 *100)/100 	
	endprio['AKX'] = Math.round(AKX *100)/100 	
	endprio['A58'] = Math.round(A58 *100)/100 	
	endprio['X9H6'] = Math.round(X9H6 *100)/100  
	endprio['APA'] = Math.round(APA *100)/100 	
	endprio['AIV'] = Math.round(AIV *100)/100 	
	endprio['AP2'] = Math.round(AP2 *100)/100 	
	endprio['D7A'] = Math.round(D7A *100)/100 	
	endprio['ADM'] = Math.round(ADM *100)/100 
	endprio['ALU2'] = Math.round(ALU2 *100)/100  
	endprio['ZAS'] = Math.round(ZAS *100)/100 	
	endprio['SOBA'] = Math.round(SOBA *100)/100  
	endprio['AUD'] = Math.round(AUD *100)/100 
	endprio['ADP'] = Math.round(ADP *100)/100 	
	endprio['AZ5'] = Math.round(AZ5 *100)/100 	
	endprio['WV8'] = Math.round(WV8 *100)/100 
	endprio['AV3'] = Math.round(AV3 *100)/100 	
	endprio['X68V'] = Math.round(X68V *100)/100  
	endprio['BL8'] = Math.round(BL8 *100)/100 	
	endprio['NCB'] = Math.round(NCB *100)/100 
	endprio['BN9'] = Math.round(BN9 *100)/100 	
	endprio['BR6'] = Math.round(BR6 *100)/100 	
	endprio['BTL'] = Math.round(BTL *100)/100 	
	endprio['BBK'] = Math.round(BBK *100)/100 	
	endprio['BOX'] = Math.round(BOX *100)/100 
	endprio['BRYN'] = Math.round(BRYN *100)/100  
	endprio['BUY'] = Math.round(BUY *100)/100 
	endprio['IDP'] = Math.round(IDP *100)/100 	
	endprio['BLQA'] = Math.round(BLQA *100)/100  
	endprio['BGW'] = Math.round(BGW *100)/100 
	endprio['BO9'] = Math.round(BO9 *100)/100 
	endprio['BSX'] = Math.round(BSX *100)/100 	
	endprio['BROC'] = Math.round(BROC *100)/100  
	endprio['BRM'] = Math.round(BRM *100)/100 
	endprio['BRX'] = Math.round(BRX *100)/100 	
	endprio['BF5B'] = Math.round(BF5B *100)/100  
	endprio['CH1A'] = Math.round(CH1A *100)/100  
	endprio['X9C7'] = Math.round(X9C7 *100)/100  
	endprio['XCQ'] = Math.round(XCQ *100)/100 
	endprio['CDS'] = Math.round(CDS *100)/100 
	endprio['CSC'] = Math.round(CSC *100)/100 
	endprio['CFX'] = Math.round(CFX *100)/100 	
	endprio['CLH'] = Math.round(CLH *100)/100 	
	endprio['XA4'] = Math.round(XA4 *100)/100 	
	endprio['CVC1'] = Math.round(CVC1 *100)/100  
	endprio['C67'] = Math.round(C67 *100)/100 	
	endprio['RF6'] = Math.round(RF6 *100)/100 	
	endprio['C5S'] = Math.round(C5S *100)/100 	
	endprio['CG3'] = Math.round(CG3 *100)/100 
	endprio['QEN'] = Math.round(QEN *100)/100 
	endprio['HOU'] = Math.round(HOU *100)/100 
	endprio['CYT'] = Math.round(CYT *100)/100 	
	endprio['CRE'] = Math.round(CRE *100)/100 	
	endprio['C4F'] = Math.round(C4F *100)/100 	
	endprio['SWG'] = Math.round(SWG *100)/100 
	endprio['CQD'] = Math.round(CQD *100)/100 
	endprio['CS1'] = Math.round(CS1 *100)/100 	
	endprio['C9F'] = Math.round(C9F *100)/100 	
	endprio['AEX'] = Math.round(AEX *100)/100 	
	endprio['CXU'] = Math.round(CXU *100)/100 
	endprio['CGN'] = Math.round(CGN *100)/100 
	endprio['ENY'] = Math.round(ENY *100)/100 	
																													
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

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=9386187&dateStart="+date+"&interval=Y1", function(data) {
results['AMZ'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=132144251&dateStart="+date+"&interval=Y1", function(data) {
results['AE4'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=95915411&dateStart="+date+"&interval=Y1", function(data) {
results['A1G'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=35447692&dateStart="+date+"&interval=Y1", function(data) {
results['AEP'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=29801225&dateStart="+date+"&interval=Y1", function(data) {
results['AINN'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=132035784&dateStart="+date+"&interval=Y1", function(data) {
results['A0T'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=164521605&dateStart="+date+"&interval=Y1", function(data) {
results['AWC'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=132144234&dateStart="+date+"&interval=Y1", function(data) {
results['A4S'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=35447693&dateStart="+date+"&interval=Y1", function(data) {
results['ABG'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=132092920&dateStart="+date+"&interval=Y1", function(data) {
results['AK1'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=9385984&dateStart="+date+"&interval=Y1", function(data) {
results['AMG'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=132144406&dateStart="+date+"&interval=Y1", function(data) {
results['XPH'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=35479099&dateStart="+date+"&interval=Y1", function(data) {
results['AAZ'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=35447694&dateStart="+date+"&interval=Y1", function(data) {
results['ANL'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=35569314&dateStart="+date+"&interval=Y1", function(data) {
results['TX5'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=206274427&dateStart="+date+"&interval=Y1", function(data) {
results['AKX'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=35559266&dateStart="+date+"&interval=Y1", function(data) {
results['A58'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=62101431&dateStart="+date+"&interval=Y1", function(data) {
results['X9H6'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=35349243&dateStart="+date+"&interval=Y1", function(data) {
results['APA'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=35395984&dateStart="+date+"&interval=Y1", function(data) {
results['AIV'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=9386046&dateStart="+date+"&interval=Y1", function(data) {
results['AP2'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=56917503&dateStart="+date+"&interval=Y1", function(data) {
results['D7A'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=20438822&dateStart="+date+"&interval=Y1", function(data) {
results['ADM'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=174147665&dateStart="+date+"&interval=Y1", function(data) {
results['ALU2'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=35447695&dateStart="+date+"&interval=Y1", function(data) {
results['ZAS'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=13421834&dateStart="+date+"&interval=Y1", function(data) {
results['SOBA'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=10992135&dateStart="+date+"&interval=Y1", function(data) {
results['AUD'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=23584988&dateStart="+date+"&interval=Y1", function(data) {
results['ADP'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=35349263&dateStart="+date+"&interval=Y1", function(data) {
results['AZ5'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=35349238&dateStart="+date+"&interval=Y1", function(data) {
results['WV8'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=132144315&dateStart="+date+"&interval=Y1", function(data) {
results['AV3'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=23293645&dateStart="+date+"&interval=Y1", function(data) {
results['68V'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=35349268&dateStart="+date+"&interval=Y1", function(data) {
results['BL8'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=20419933&dateStart="+date+"&interval=Y1", function(data) {
results['NCB'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=35349262&dateStart="+date+"&interval=Y1", function(data) {
results['BN9'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=172501142&dateStart="+date+"&interval=Y1", function(data) {
results['BR6'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=28842391&dateStart="+date+"&interval=Y1", function(data) {
results['BTL'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=35373040&dateStart="+date+"&interval=Y1", function(data) {
results['BBK'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=31861258&dateStart="+date+"&interval=Y1", function(data) {
results['BOX'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=32989299&dateStart="+date+"&interval=Y1", function(data) {
results['BRYN'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=35373062&dateStart="+date+"&interval=Y1", function(data) {
results['BUY'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=9385718&dateStart="+date+"&interval=Y1", function(data) {
results['IDP'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=131818143&dateStart="+date+"&interval=Y1", function(data) {
results['BLQA'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=197531148&dateStart="+date+"&interval=Y1", function(data) {
results['BGW'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=35373037&dateStart="+date+"&interval=Y1", function(data) {
results['BO9'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=35373036&dateStart="+date+"&interval=Y1", function(data) {
results['BSX'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=192604726&dateStart="+date+"&interval=Y1", function(data) {
results['BROC'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=22474683&dateStart="+date+"&interval=Y1", function(data) {
results['BRM'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=30553934&dateStart="+date+"&interval=Y1", function(data) {
results['BRX'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=35373049&dateStart="+date+"&interval=Y1", function(data) {
results['BF5B'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=13088847&dateStart="+date+"&interval=Y1", function(data) {
results['CH1A'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=23052497&dateStart="+date+"&interval=Y1", function(data) {
results['X9C7'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=35349273&dateStart="+date+"&interval=Y1", function(data) {
results['XCQ'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=13541124&dateStart="+date+"&interval=Y1", function(data) {
results['CDS'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=80375977&dateStart="+date+"&interval=Y1", function(data) {
results['CSC'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=35349264&dateStart="+date+"&interval=Y1", function(data) {
results['CFX'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=35349240&dateStart="+date+"&interval=Y1", function(data) {
results['CLH'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=109672196&dateStart="+date+"&interval=Y1", function(data) {
results['XA4'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=35349277&dateStart="+date+"&interval=Y1", function(data) {
results['CVC1'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=37044459&dateStart="+date+"&interval=Y1", function(data) {
results['C67'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=112379660&dateStart="+date+"&interval=Y1", function(data) {
results['RF6'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=35349278&dateStart="+date+"&interval=Y1", function(data) {
results['C5S'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=12459862&dateStart="+date+"&interval=Y1", function(data) {
results['CG3'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=144207704&dateStart="+date+"&interval=Y1", function(data) {
results['QEN'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=35349274&dateStart="+date+"&interval=Y1", function(data) {
results['HOU'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=35349260&dateStart="+date+"&interval=Y1", function(data) {
results['CYT'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=30177673&dateStart="+date+"&interval=Y1", function(data) {
results['CRE'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=35349247&dateStart="+date+"&interval=Y1", function(data) {
results['C4F'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=35373058&dateStart="+date+"&interval=Y1", function(data) {
results['SWG'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=161508873&dateStart="+date+"&interval=Y1", function(data) {
results['CQD'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=32186404&dateStart="+date+"&interval=Y1", function(data) {
results['CS1'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=59525439&dateStart="+date+"&interval=Y1", function(data) {
results['C9F'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=153935926&dateStart="+date+"&interval=Y1", function(data) {
results['AEX'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=89045813&dateStart="+date+"&interval=Y1", function(data) {
results['CXU'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=35373055&dateStart="+date+"&interval=Y1", function(data) {
results['CGN'] = data;

catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=129284733&dateStart="+date+"&interval=Y1", function(data) {
results['ENY'] = data;


handleArray(results);
																																																																																								
});});});});});});});});});});});});});});});});});});});});});});});});});});});});});});});});});});});});});});});});});});});});});});});});});});







