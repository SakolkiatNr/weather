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
import { format, parse } from "date-fns";
import { updateIcon } from "./displayIcon";

function activeSearchBtn() {
	const searchBtn = document.querySelector('#search-btn');
	const input = document.querySelector('#location');

	searchBtn.addEventListener('click', () => {
		updateDisplay();
	});

	input.addEventListener('keydown', (event) => {
		const keyName = event.key;

		if (keyName === "Enter") {
			event.preventDefault();
			updateDisplay();
		}
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
	// TOADD idk 
	// feelslike: condition.feelslike,
	// icon: condition.icon,
	// forecast: forecastInfo(data),
	try {

		const data = await getWeatherData();
		if (!data) {
			console.warn("No weather data!");
			return;
		}
		displayData('today-date', getToday());
		displayData('today-temp', data.temp);
		displayData('address', data.address);
		displayData('today-condition', data.conditions);
		displayData('rain-prob', data.precipprob, '%');
		displayData('hl-wind', data.windspeed);
		displayData('hl-hum', data.humidity);
		displayData('hl-uv', data.uvindex);
		displayData('hl-sunri', convertToAM(data.sunrise));
		displayData('hl-sunse', convertToAM(data.sunset));
		updateForecast(data.forecast);

		updateIcon('today-icon', data.icon);

	} catch (err) {
		console.error('Fail to update Display', err);
	}

}

function updateForecast(arr) {
	// pick data -> data.forecast[i].target
	for (let i = 0; i < arr.length; i++) {
		const id = 'fc-d' + (i + 1);
		const date = document.querySelector(`#${id} > .fc-date`);
		const tmphi = document.querySelector(`#${id} > .fc-temp > .fc-tmp-hi`);
		const tmplo = document.querySelector(`#${id} > .fc-temp > .fc-tmp-lo`);
		const iconId = `fc-icon-${i + 1}`;
		console.log('fc-id', iconId);

		date.textContent = getDay(arr[i].date);
		tmphi.textContent = arr[i].tempmax + '°';
		tmplo.textContent = arr[i].tempmin + '°';
		updateIcon(iconId, arr[i].icon);
	}
}

function getToday() {
	const date = format(new Date(), "PP");
	return date;
}

function getDay(date) {
	return format(date, "ccc");
}

function convertToAM(time) {
	const currentTime = parse(time, "HH:mm:ss", new Date());
	return format(currentTime, "p");
}

