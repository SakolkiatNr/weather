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
		getWeatherData();
	});
}

export function test() {
	activeSearchBtn();
}

