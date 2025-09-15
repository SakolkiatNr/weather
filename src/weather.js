// receive user input
// button to get current location
//
// getWeatherData


const url = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
const location = 'Chanthaburi,Thailand';

// This is public api so no worries!
const api = '72EU29FQ2J5GMR2YEP6QYSNEZ';
const target = url + location + '/?key=' + api;

export function test() {
	console.log(target);
	getWeatherData();
}

async function getWeatherData() {
	const response = await fetch(target);
	const weatherData = response.json();
	console.log(`response: `, response);
	console.log('weather data: ', weatherData);
	console.log('temp: ', weatherData.currentConditions);
}



// Weather data obj
// {
//     "datetime": "18:00:00",
//     "datetimeEpoch": 1757934000,
//     "temp": 82.3,
//     "feelslike": 92.1,
//     "humidity": 88.9,
//     "dew": 78.7,
//     "precip": 0.047,
//     "precipprob": 96.8,
//     "snow": 0,
//     "snowdepth": 0,
//     "preciptype": [
//         "rain"
//     ],
//     "windgust": null,
//     "windspeed": 8.1,
//     "winddir": 220,
//     "pressure": 1009,
//     "visibility": 6.2,
//     "cloudcover": 50,
//     "solarradiation": 0,
//     "solarenergy": 0,
//     "uvindex": 0,
//     "conditions": "Rain, Partially cloudy",
//     "icon": "rain",
//     "stations": [
//         "VTBO"
//     ],
//     "source": "obs",
//     "sunrise": "06:00:44",
//     "sunriseEpoch": 1757977244,
//     "sunset": "18:12:07",
//     "sunsetEpoch": 1758021127,
//     "moonphase": 0.8
// }
