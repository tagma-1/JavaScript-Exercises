function convertCelsiusToFahrenheit(celsius) {
  return (celsius * 1.8) + 32
}


function convertFarenheitToCelcius(farenheit) {
  return (farenheit - 32) / 1.8
}

function formatCelsius(celsius) {
  return Math.round(celsius) + " °C"
}

function hottestTemperature(temperatureArray) {
  sortedArray = temperatureArray.sort( function (a, b) {
    return b - a
  })
  return sortedArray[0]
}

let fahrenheit

// Monday

const mondayTemperature = 24
console.log(`On Monday it is ${mondayTemperature}°C`)
fahrenheit = convertCelsiusToFahrenheit(mondayTemperature)
console.log(`Americans would think of that as ${fahrenheit}°F`)

// Tuesday

const tuesdayTemperature = 31
console.log(`On Tuesday it is ${tuesdayTemperature}°C`)
fahrenheit = convertCelsiusToFahrenheit(tuesdayTemperature)
console.log(`Americans would think of that as ${fahrenheit}°F`)

// Wednesday

const wednesdayTemperature = 75
console.log(`On Wednesday it is ${wednesdayTemperature}°F`)
celsius = convertFarenheitToCelcius(wednesdayTemperature)
console.log(`Non-Americans would think of that as ${formatCelsius(celsius)}`)

// Array of Temperatures

let temperatureArray = [23, 42, 44, 12, 39, 15]
console.log(`The highest temperature is ${hottestTemperature(temperatureArray)} degrees.`)


/*
Challenges:
1. Add Fahrenheit to Celsius converter (`function convertFahrenheitToCelsius`) with examples of usage (COMPLETE)
2. Add `formatCelsius` function that rounds to whole number using `Math.round`, and adds '°C' on end (COMPLETE)
3. Add `hottestTemperature` function, which takes an array of temperatures, and returns the highest one (COMPLETE)
*/