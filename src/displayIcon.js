// get icon name from api
// get svg assets direction
// 


export function iconUrl(iconName) {
	if (!iconName) return;
	let name = iconName;

	// grouping icon 
	if (iconName === "thunder-showers-day" ||
		iconName === "thunder-showers-night") {
		name = "thunder-rain";
	}
	if (iconName === "snow-showers-night" ||
		iconName === "snow-showers-day") {
		name = "snow";

	}
	const src = "./assets/SVG/icons/" + name + ".svg";
	return src;
}
