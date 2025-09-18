// get icon name from api
// get svg assets direction
// 

function icon(iconName) {
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
	return name;
}

export async function updateIcon(id, iconName) {
	const img = document.getElementById(icon);

	import(`./assets/SVG/icons/${icon(iconName)}.svg`).then((svg) => {
		img.src = svg.default;
	});
}
