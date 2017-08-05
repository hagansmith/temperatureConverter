//console.log('in main.js');
var temperature = document.getElementById('temperature');

// Get a reference to the button element in the DOM
var button = document.getElementById("btnConvert");
button.addEventListener("click", temp);

function temp() {
	var getInput = parseInt(temperature.value);

	if (document.getElementById("rdoFah").checked) {
		var conversion = toFahrenheit(getInput);
		console.log('convFah', conversion);
		scale(conversion, "f");
 	} else if (document.getElementById("rdoCel").checked){
		var conversion = toCelsius(getInput);
		scale(conversion, 'c');
		console.log('convCel', conversion);
	}	else {
		alert ('pick a covnersion');
	}

}



//console.log("the ending temperatue is " + temperature + " and should not match the start");


function toCelsius (celTemp) {
 //T(°C) = (T(°F) - 32) × 5/9
 var tempC = (celTemp - 32) * 1.8;
 return tempC;
}

function toFahrenheit(fahTemp) {
// //T(°F) = T(°C) × 9/5 + 32
var tempF = (fahTemp * 1.8) + 32;
return tempF;
}

function scale (conversion, t) {
var level;	
	if (t === "c") {
		if (conversion > 32) {
			level = "high";
		} else if (conversion < 0) {
			level = "low";
		} else {
			level = "mid";
		}

	} else {
		if (conversion > 90) {
			level = "high";
		} else if (conversion < 32) {
			level = "low";
		} else {
			level = "mid";
		}
	}

var string = "";
var container = document.getElementById('tempConverted');
string += '<h3 id = "tempConverted" class =' + level + '> Your converted temp is ' + conversion + '</h3>' 

container.innerHTML = string;

}

 
