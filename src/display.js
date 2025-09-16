// input address
// get api data
// loading animation
// display data on screen
// 
// if search again
// remove content
// loading screen
// display data on screen
//
import { getWeatherData } from "./weather";

function activeSearchBtn() {
	const searchBtn = document.querySelector('#search-btn');
	searchBtn.addEventListener('click', () => {
		updateDisplay();
	});
}

export function test() {
	activeSearchBtn();
}


function displayData(id, data, symbol) {
	const target = document.getElementById(id);
	if (symbol == undefined) symbol = '';
	target.textContent = data + symbol;
}


async function updateDisplay() {
	const data = await getWeatherData();
	// address: data.address,
	// temp: condition.temp,
	// feelslike: condition.feelslike,
	// humidity: condition.humidity,
	// precipprob: condition.precipprob,
	// windspeed: condition.windspeed,
	// uvindex: condition.uvindex,
	// conditions: condition.conditions,
	// icon: condition.icon,
	// sunrise: condition.sunrise,
	// sunset: condition.sunset,
	// forecast: forecastInfo(data),

	// <p id="today-temp">999°C</p>
	// <p id="today-date">today...</p>
	// <p id="today-condition">rain</p>
	// <p id="rain-prob">% rain</p>
	// <p id="address">address</p>
	displayData('today-temp', data.temp, ' °C');
	displayData('address', data.address);
	displayData('today-condition', data.conditions);
	displayData('rain-prob', data.precipprob, '%');
}


















