const React 				= require("react");

const WeatherForm = React.createClass({

onFormSubmit: function(event) {
	event.preventDefault();

	let location = this.refs.location.value;

	if (location.length > 0) {
		this.refs.location.value = "";
		this.props.onSearch(location);
	}
},	
render: function () {
	return (
		<div>
			<form onSubmit={this.onFormSubmit} >
				<div>
					<input type="text" ref="location" placeholder="Enter Location Here"/>
				</div>
				<div>
					<button>Get Weather</button>
				</div>

			</form>
		</div>
	)
}

});

module.exports = WeatherForm;