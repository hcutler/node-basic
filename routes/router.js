var name;

//creates the launch page
var launch = function(req, res){
	res.render('index.ejs', {});
}

//saves the name information so the second page can use it
var sendName = function(req, res){
	name = req.body.myName;
	res.redirect('/secondpage');
}

//creates the second page
var redirect = function (req,res){
	res.render('secondpage.ejs', {name: name});
}

var routes = {
	launch: launch,
	send_name: sendName,
	redirect: redirect
}

module.exports = routes;