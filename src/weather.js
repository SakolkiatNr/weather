// TODO

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
	const api = '72EU29FQ2J5GMR2YEP6QYSNEZ';
	const location = getUserLocation();
	const target = url + location + '/?key=' + api;

	return target;
}


function activeSearchBtn() {
	const searchBtn = document.querySelector('#search-btn');
	searchBtn.addEventListener('click', () => {
		getWeatherData();
	});
}

export function test() {
	activeSearchBtn();
}


async function getWeatherData() {
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
	// return objects
	return {
		// vim macro btw
		temp: data.currentConditions.temp,
		feelslike: data.currentConditions.feelslike,
		humidity: data.currentConditions.humidity,
		precipprob: data.currentConditions.precipprob,
		windspeed: data.currentConditions.windspeed,
		uvindex: data.currentConditions.uvindex,
		conditions: data.currentConditions.conditions,
		icon: data.currentConditions.icon,
		sunrise: data.currentConditions.sunrise,
		sunset: data.currentConditions.sunset,
		forecast: forecastInfo(data),
	}
}

function forecastInfo(data) {
	const days = data.days;
	// [obj1, obj2, obj3,...]

	const nextSevenDay = [];

	for (let i = 1; i <= 7; i++) {
		nextSevenDay.push(
			{
				date: data.days[i].datetime,
				condition: data.days[i].conditions,
				icon: data.days[i].icon,
				tempmax: data.days[i].tempmax,
				tempmin: data.days[i].tempmin,
			}
		)
	}

	return nextSevenDay;
}


//days obj (next 7 days)
//weatherData.days.forEach(
//obj => {
//obj.date
//obj.tempmax
//obj.tempmin
//obj.icon
//})
