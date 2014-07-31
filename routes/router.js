//import database instructions
var statusDB = require('../model/statusDB.js');

//declare global variables, which are used by several functions
var name;
var status;

//creates the launch page
var launch = function(req, res){
	res.render('index.ejs', {});
}

//saves the name information so the second page can use it
var sendInfo = function(req, res){
	name = req.body.myName;
	status = req.body.myStatus;
	statusDB.add_status(name, status, function(err, data){
	});
	res.redirect('/display');
}

//creates the second page
var redirect = function (req,res){
	res.render('secondpage.ejs', {name: name, status: status});
}

//creates the second page
var getAll = function (req,res){
	statusDB.get_statuses(function(err, data){
		if(data){
			res.render('all.ejs', {all: data});
		}
		else{
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