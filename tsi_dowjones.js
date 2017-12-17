var request = require('request');
var dateFormat = require('dateformat');

var emaLang = 20;
var emaKurz = 6;
var avg = 90;

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

var d = new Date();
d = dateFormat(d, "dd.mm.yyyy");
d.toString();
var date = d.replace("2017","2016");

var results = [];

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

																				catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=24155440&dateStart=23.08.2017&interval=Y1", function(data) {
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
	
																													});
																												});
																											});
																										});
																									});
																								});
																							});
																						});
																					});
																				});
																			});
																		});
																	});
																});
															});
														});
													});
												});
											});
										});
									});
								});
							});
						});
					});
				});
			});
		});		
	});
});







