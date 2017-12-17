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

																				catchStockData("https://www.onvista.de/onvista/boxes/historicalquote/export.csv?notationId=195555884&dateStart=23.08.2017&interval=Y1", function(data) {
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







