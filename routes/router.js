//import database instructions
var statusDB = require('../model/statusDB.js');

//declare global variables, which are used by several functions
var name;
var status;

//creates the launch page that takes in your information
var launch = function(req, res){
	res.render('index.ejs', {});
}

//saves the name and status information in the database
//also sends the information to the display page apart from the database
var sendInfo = function(req, res){
	//send the name and status info directly to the next page
	name = req.body.myName;
	status = req.body.myStatus;
	//send the name and status info to the database
	statusDB.add_status(name, status, function(err, data){
		//if there's an error, print it to the terminal
		if(err){
			console.log(err);
		}
	});
	//go to the status display page regardless
	res.redirect('/display');
}

//displays information sent directly from the previous page
var redirect = function (req,res){
	res.render('secondpage.ejs', {name: name, status: status});
}

//displays all information stored in the database
var getAll = function (req,res){
	//get all statuses in the database
	statusDB.get_statuses(function(err, data){
		//if there is any data sent back from the database, render the page
		//that displays all statuses
		if(data){
			res.render('all.ejs', {all: data});
		}
		//if there's no information, go back to the home page
		else{
			//if there's an error, print it to the terminal
			if(err){
				console.log(err);
			}
			res.redirect('/');
		}
	});
}

var routes = {
	launch: launch,
	send_info: sendInfo,
	redirect: redirect,
	get_all: getAll
}

module.exports = routes;