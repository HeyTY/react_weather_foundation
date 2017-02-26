const express 		= require("express");
const app			= express();

const PORT          = process.env.PORT || 3000;

app.use(function(req, res, next){
	if (req.headers["x-forwarded-proto"] === "https") {
		res.redirect("http://" + req.hostname + req.url);
	} else {
		next();
	}
});

app.use(express.static("public"));

// app.get("/", (req, res) =>{
// 	res.send("Welcome to the Homepage");
// });


app.listen(PORT, (req,res) =>{
	console.log("Server Deployed!");
});