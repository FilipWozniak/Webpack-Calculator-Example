const kelvinToCelsius = (temperatureKelvin) => {
    temperatureKelvin = parseFloat(temperatureKelvin);
    return (temperatureKelvin - 273.15).toFixed(2);
};

const kelvinToFahrenheit = (temperatureKelvin) => {
    temperatureKelvin = parseFloat(temperatureKelvin);
    return (((temperatureKelvin - 273.15) * 1.8) + 32).toFixed(2);
};

const celsiusToKelvin = (temperatureCelsius) => {
    temperatureCelsius = parseFloat(temperatureCelsius);
    return (temperatureCelsius + 273.15).toFixed(2);
};

const celsiusToFahrenheit = (temperatureCelsius) => {
    temperatureCelsius = parseFloat(temperatureCelsius);
    return ((temperatureCelsius * 1.8) + 32).toFixed(2);
};

const fahrenheitToKelvin = (temperatureFahrenheit) => {
    temperatureFahrenheit = parseFloat(temperatureFahrenheit);
    return (((temperatureFahrenheit - 32) / 1.8) + 273.15).toFixed(2);
};

const fahrenheitToCelsius = (temperatureFahrenheit) => {
    temperatureFahrenheit = parseFloat(temperatureFahrenheit);
    return ((temperatureFahrenheit - 32) / 1.8).toFixed(2);
};

export {kelvinToCelsius, kelvinToFahrenheit, celsiusToKelvin, celsiusToFahrenheit, fahrenheitToKelvin, fahrenheitToCelsius};