
function getUserLocation() {
	const searchBar = document.querySelector('#location');
	const location = searchBar.value;
	searchBar.value = "";
	return removeSpaces(location);
}

function removeSpaces(text) {
	return text.replaceAll(' ', '');
}

function getApiUrl() {
	const url = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
	// I know it shouldn't be here, but it's public api, so no worries!
	const api = '72EU29FQ2J5GMR2YEP6QYSNEZ';
	const location = getUserLocation();
	const target = url + location + '/?key=' + api;

	return target;
}

export async function getWeatherData() {
	try {
		const response = await fetch(getApiUrl());
		const weatherData = await response.json();

		console.log(weatherInfo(weatherData));
		return weatherInfo(weatherData);
	} catch (error) {
		console.log('oof', error);
	}
}

function weatherInfo(data) {
	const condition = data.currentConditions;
	// return objects
	return {
		address: data.address,
		temp: fahToCel(condition.temp),
		feelslike: condition.feelslike,
		humidity: condition.humidity,
		precipprob: condition.precipprob,
		windspeed: condition.windspeed,
		uvindex: condition.uvindex,
		conditions: condition.conditions,
		icon: condition.icon,
		sunrise: condition.sunrise,
		sunset: condition.sunset,
		forecast: forecastInfo(data),
	}
}

function forecastInfo(data) {
	const nextSevenDay = [];
	const day = data.days;

	for (let i = 0; i < 6; i++) {
		nextSevenDay.push(
			{
				date: day[i].datetime,
				condition: day[i].conditions,
				icon: day[i].icon,
				tempmax: fahToCel(day[i].tempmax),
				tempmin: fahToCel(day[i].tempmin),
			}
		)
	}
	return nextSevenDay;
}

function fahToCel(temp) {
	const celcius = (5 / 9 * (temp - 32));
	return Number.parseFloat(celcius).toFixed(0);
}
