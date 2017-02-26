const axios 		= require("axios");

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=b8da50a3402251dc69e10171370ca774&units=imperial';

// b8da50a3402251dc69e10171370ca774

function getTemp (location){
	let encodedLocation = encodeURIComponent(location);
	let requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

	return axios.get(requestUrl).then(function (res) {
		debugger;
		if (res.data.cod && res.data.message) {
			throw new Error(res.data.message);
		} else {
			return res.data.main.temp;

		}
	}, function (err)  {
		throw new Error(err.response.data.message);
	});

};


module.exports = {
	getTemp
};