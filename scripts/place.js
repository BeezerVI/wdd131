const wind = 5; // wind speed in kilometers per hour
const temp = 10; // temperature in degrees Celsius

function calculateWindChill(temp, wind) {
  return 13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16);
}

function isViableForWindChill(temp, wind) {
  return temp <= 10 && wind > 4.8;
}

let windChill;

if (isViableForWindChill(temp, wind)) {
  windChill = calculateWindChill(temp, wind).toFixed(2) + '°C';
} else {
  windChill = 'N/A';
}


document.getElementById("wind").innerText = wind
document.getElementById("chill").innerText = temp
document.getElementById("windchill").innerText = windChill

console.log(`The wind chill is: ${windChill}`);
