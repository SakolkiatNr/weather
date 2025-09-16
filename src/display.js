// input address
// get api data/
// loading animation
// display data on screen/
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
	// feelslike: condition.feelslike,
	// icon: condition.icon,
	// forecast: forecastInfo(data),

	displayData('today-temp', data.temp, ' °C');
	displayData('address', data.address);
	displayData('today-condition', data.conditions);
	displayData('rain-prob', data.precipprob, '%');
	displayData('hl-wind', data.windspeed);
	displayData('hl-hum', data.humidity);
	displayData('hl-uv', data.uvindex);
	displayData('hl-sunri', data.sunrise);
	displayData('hl-sunse', data.sunset);

}

// pick data -> data.forecast[i].target
// date: day[i].datetime,
// condition: day[i].conditions,
// icon: day[i].icon,
// tempmax: fahToCel(day[i].tempmax),
// tempmin: fahToCel(day[i].tempmin),
