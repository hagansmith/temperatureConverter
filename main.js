var temperature = document.getElementById('temperature');

// This allows the diplayed temp calculation to update after each number that is entered into the text field
document.getElementById("temperature").addEventListener("keyup", temp);
document.getElementById('rdoFah').addEventListener('click', temp);
document.getElementById('rdoCel').addEventListener('click', temp);

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

function toCelsius (celTemp) {
 //T(°C) = (T(°F) - 32) × 5/9
 var tempC = (celTemp - 32) * (5/9);
 return tempC;
}

function toFahrenheit(fahTemp) {
// //T(°F) = T(°C) × 9/5 + 32
var tempF = (fahTemp * (5/9)) + 32;
return tempF;
}

function scale (conversion, t) {
var level;
var format;
var start;
	if (t === "c") {
		var format = "°C";
		var start = "°F"
			if (conversion > 32) {
			level = "high";
		} else if (conversion < 0) {
			level = "low";
		} else {
			level = "mid";
		}
	} else {
		var format = "°F";
		var start = "°C"
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
if (!isNaN(conversion) === true) {
string += '<h3 id = "tempConverted" class =' + level + '>' + temperature.value + start + ' is '  + conversion.toFixed(2) + format + '</h3>'
} else {
 string += '<h3 id = "tempConverted" class ="black"> Please select a conversion and place a value in the box</h3>'
}

container.innerHTML = string;
}
