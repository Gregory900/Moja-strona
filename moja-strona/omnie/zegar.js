function zegar()
{
	var godzina = new Date();
	
	var rok=godzina.getFullYear();
	var mies=godzina.getMonth();
	mies=mies+1;
	if(mies<10) mies="0"+mies;
	var dzien=godzina.getDate();
	var godz = godzina.getHours();
	var min= godzina.getMinutes();
	if (min<10) min="0"+min;
	var sec = godzina.getSeconds();
	if (sec<10) sec="0"+sec;
	
	document.getElementById("zegar").innerHTML=rok + "-" +mies+ "-" + dzien + "  "+ godz+" : " + min + " : " + sec;
	
	setTimeout("zegar()",1000);
	
}