const React 			= require("react");
const WeatherForm 		= require("WeatherForm");
const WeatherMessage 	= require("WeatherMessage");
const openWeatherMap    = require("openWeatherMap");

const Weather = React.createClass({

	getInitialState: function() {
		return {
			isLoading: false 
		}
	},	

	// pass this to weather message as props
	handleSearch: function(location) {
		var that = this;

		
		this.setState({isLoading: true});

		openWeatherMap.getTemp(location).then(function (temp) {
			that.setState({
				location: location,
				temp: temp,
				isLoading:false
			})

		}, function (errorMessage){
			that.setState({isLoading: false});
			alert(errorMessage);
		});
	},

	render: function () {
		let {isLoading, temp, location} = this.state;

		function renderMessage () {

			if(isLoading) {
				return <h3>Fetching Weather ...</h3>;
			} else if (temp && location) {
				return <WeatherMessage temp={temp} location={location}/>
			}
		}
		return (
			<div>
				<h2> Weather Component</h2>
				<WeatherForm onSearch={this.handleSearch}/>
				{renderMessage()}
			</div>
			)
	}
});



module.exports = Weather;