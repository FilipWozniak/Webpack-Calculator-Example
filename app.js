require('./calculate-distance.js');
require('./calculate-temperature.js');

import * as distance from './calculate-distance.js';
import * as temperature from './calculate-temperature.js';

let TemperatureGroupOne = document.getElementsByName('TemperatureGroupOne');
let TemperatureGroupTwo = document.getElementsByName('TemperatureGroupTwo');

let DistanceGroupOne = document.getElementsByName('DistanceGroupOne');
let DistanceGroupTwo = document.getElementsByName('DistanceGroupTwo');

function getRadioCheckedElement(elementGroup) {
    for (var i = 0, length = elementGroup.length; i < length; i++) {
        if (elementGroup[i].checked) {
            return elementGroup[i].value;
        }
    }
}

document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById('convertTemperatureButton').addEventListener('click', function() {
        let TemperatureValue = document.querySelector('[name="inputTemperatureValue"]').value;
        calculateTemperature(getRadioCheckedElement(TemperatureGroupOne), getRadioCheckedElement(TemperatureGroupTwo), TemperatureValue);
    }, false);

    document.getElementById('convertDistanceButton').addEventListener('click', function() {
        let DistanceValue = document.querySelector('[name="inputDistanceValue"]').value;
        calculateDistance(getRadioCheckedElement(DistanceGroupOne), getRadioCheckedElement(DistanceGroupTwo), DistanceValue);
    }, false);
});

function calculateTemperature(leftSide, rightSide, valueNumber) {

    let leftSideTemperature = leftSide;
    let rightSideTemperature = rightSide;
    let valueNumberTemperature = valueNumber;

    document.getElementById("temperatureResult").innerHTML = " ";

    if(validateEmptyValues(valueNumberTemperature)) {
        document.getElementById("temperatureResult").innerHTML = "Provide a Value";
        return; 
    }

    if(validateSimilarity(leftSideTemperature, rightSideTemperature)) { 
        result("temperatureResult", valueNumberTemperature);
        return; 
    }
    
    leftSide = leftSide.charAt(0).toUpperCase() + leftSide.slice(1);
    rightSide = rightSide.charAt(0).toUpperCase() + rightSide.slice(1);

    let expression = leftSide + rightSide;
    switch (expression) {
        case 'CelsiusKelvin':
            result("temperatureResult", temperature.celsiusToKelvin(valueNumber));
            break;
        case 'CelsiusFahrenheit':
            result("temperatureResult", temperature.celsiusToFahrenheit(valueNumber));
        break;
        case 'KelvinCelsius':
            result("temperatureResult", temperature.kelvinToCelsius(valueNumber));
        break;java
        case 'KelvinFahrenheit':
            result("temperatureResult", temperature.kelvinToFahrenheit(valueNumber));
        break;
        case 'FahrenheitCelsius':
            result("temperatureResult", temperature.fahrenheitToCelsius(valueNumber));
        break;
        case 'FahrenheitKelvin':
            result("temperatureResult", temperature.fahrenheitToKelvin(valueNumber));
        break;
        default:
            result("temperatureResult", 'ERROR');
    }

};

function calculateDistance(leftSide, rightSide, valueNumber) {
    let leftSideDistance = leftSide;
    let rightSideDistance = rightSide;
    let valueNumberDistance = valueNumber;

    document.getElementById("distanceResult").innerHTML = " ";

    if(validateEmptyValues(valueNumberDistance)) {
        document.getElementById("distanceResult").innerHTML = "Provide a Value";
        return; 
    }

    if(validateSimilarity(leftSideDistance, rightSideDistance)) { 
        result("distanceResult", valueNumberDistance);
        return; 
    }

    leftSide = leftSide.charAt(0).toUpperCase() + leftSide.slice(1);
    rightSide = rightSide.charAt(0).toUpperCase() + rightSide.slice(1);

    let expression = leftSide + rightSide;
    switch (expression) {
        case 'KilometersMiles':
            result("distanceResult", distance.kilometersToMiles(valueNumber));
            break;
        case 'MilesKilometers':
            result("distanceResult", distance.milesToKilometers(valueNumber));
        break;
        default:
            result("distanceResult", 'ERROR');
    }

};

function result(elementID, valueNumber) {
    document.getElementById(elementID).innerHTML = "Result: " + valueNumber;
};

function validateEmptyValues(valueNumber) {
    if(valueNumber == "" || valueNumber == null)
        return true;
    return false; 
};

function validateSimilarity(leftSide, rightSide) {
    if(leftSide === rightSide)
        return true;
    return false; 
};