const React          			= require("react");
const ReactDOM        			= require("react-dom");
const Main						= require("Main");
const Weather					= require("Weather");
const About						= require("About");
const Examples					= require("Examples");


const {Route, Router, IndexRoute, hashHistory} = require("react-router");



ReactDOM.render(
  <Router history={hashHistory}>
  	<Route path="/" component={Main}>
  		<Route path="about" component={About}/>
  		<Route path="examples" component={Examples}/>
  		<IndexRoute component={Weather}/> 
  	</Route>
  </Router>,
  document.getElementById('app')
);


//API Keys

// b8da50a3402251dc69e10171370ca774

// http://api.openweathermap.org/data/2.5/find?q=London&units=imperial&appid=b8da50a3402251dc69e10171370ca774