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
import { format } from "date-fns";

function activeSearchBtn() {
	const searchBtn = document.querySelector('#search-btn');
	searchBtn.addEventListener('click', () => {
		updateDisplay();
		getToday();
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
	// TOADD idk 
	// feelslike: condition.feelslike,
	// icon: condition.icon,
	// forecast: forecastInfo(data),

	displayData('today-date', getToday());
	displayData('today-temp', data.temp, ' °C');
	displayData('address', data.address);
	displayData('today-condition', data.conditions);
	displayData('rain-prob', data.precipprob, '%');
	displayData('hl-wind', data.windspeed);
	displayData('hl-hum', data.humidity);
	displayData('hl-uv', data.uvindex);
	displayData('hl-sunri', data.sunrise);
	displayData('hl-sunse', data.sunset);
	updateForecast(data.forecast);
}

function updateForecast(arr) {
	// pick data -> data.forecast[i].target
	for (let i = 0; i < arr.length; i++) {
		const id = 'fc-d' + (i + 1);
		const date = document.querySelector(`#${id} > .fc-date`);
		const tmphi = document.querySelector(`#${id} > .fc-temp > .fc-tmp-hi`);
		const tmplo = document.querySelector(`#${id} > .fc-temp > .fc-tmp-lo`);

		date.textContent = getDay(arr[i].date);
		tmphi.textContent = arr[i].tempmax;
		tmplo.textContent = arr[i].tempmin;
	}
}

function getToday() {
	const date = format(new Date(), "PP");
	return date;
}

function getDay(date) {
	return format(date, "ccc");
}




