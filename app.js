//import all necessary components
//Express provides tools to help us make a minimum web application
var express = require('express');
//create the app itself from Express
var app = express();
//create a router object that calls the router.js file
var router = require("./routes/router.js");
//create the body parser
var bodyParser = require('body-parser');
//create a mongoose object that we can use to connect to our database
var mongoose = require('mongoose');

//connect to the "test1" database running locally on your computer
mongoose.connect('mongodb://localhost/test1', function(err){
	//if there's an error, print out the error message
	if (err) {
		console.log(err);
	}
	//if you successfully connect to the database, print on the cons
    else {
    	console.log('DB success');
    }
});

//tell the application to look in the /public directory for extra files
app.use(express.static(__dirname + '/public'));

//set up the body parser, so we can extract information we enter on web pages
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(bodyParser.json({ type: 'application/vnd.api+json' }))

//create routes to the various pages
app.get('/', router.launch);
app.post('/sendinfo', router.send_info);
app.get('/display', router.redirect);
app.get('/all', router.get_all);

//run on the localhost port 5000
var port = Number(process.env.PORT || 5000);
app.listen(port, function(){
	console.log("Listening on " + port);
});