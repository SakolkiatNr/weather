// TODO
// receive user input
// button to get current location


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
	try {
		const response = await fetch(target);
		const weatherData = await response.json();

		console.log(weatherInfo(weatherData.currentConditions));
	} catch (error) {
		console.log('oof', error);
	}
}

function weatherInfo(data) {
	// return objects
	return {
		// vim macro btw
		temp: data.temp,
		feelslike: data.feelslike,
		humidity: data.humidity,
		precipprob: data.precipprob,
		windspeed: data.windspeed,
		uvindex: data.uvindex,
		conditions: data.conditions,
		icon: data.icon,
		sunrise: data.sunrise,
		sunset: data.sunset,
	}

	// {
	//     "temp": 82.3,
	//     "feelslike": 92.1,
	//     "humidity": 88.9,
	//     "precipprob": 96.8,
	//     "windspeed": 8.1,
	//     "uvindex": 0,
	//     "conditions": "Rain, Partially cloudy",
	//     "icon": "rain",
	//     "sunrise": "06:00:44",
	//     "sunset": "18:12:07",
	// }
}


//days obj (next 7 days)
//weatherData.days.forEach(
//obj => {
//obj.date
//obj.tempmax
//obj.tempmin
//obj.icon
//})

function weatherPredictInfo() {

}


function getUserInput() {

}

function run() {
	// use weather data
	// show data on screen
	// :
}


