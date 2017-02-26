const React 				= require("react");

var WeatherMessage = (props) => {
	let {location, temp} = props
	
	return (
			<div>
				<h3>It's {temp} in the {location}!</h3>
			</div>
	)
};



module.exports = WeatherMessage;