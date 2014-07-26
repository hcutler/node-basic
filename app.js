//import all necessary components
//Express provides tools to help us make a minimum web application
var express = require('express');
//create the app itself from Express
var app = express();
//create a router object that calls the router.js file
var router = require("./routes/router.js");
//creates the body parser
var bodyParser = require('body-parser');

//tell the application to look in the /public directory for extra files
app.use(express.static(__dirname + '/public'));

//set up the body parser, so we can extract information we enter on web pages
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(bodyParser.json({ type: 'application/vnd.api+json' }))

//create routes to the various pages
app.get('/', router.launch);
app.post('/sendname', router.send_name);
app.get('/secondpage', router.redirect);

//run on the localhost port 5000
var port = Number(process.env.PORT || 5000);
app.listen(port, function(){
	console.log("Listening on " + port);
});