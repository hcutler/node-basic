
var launch = function(req, res){
	res.sendfile('./views/index.html');
}

var redirect = function (req,res){
	res.sendfile('./views/secondpage.html');
}

var routes = {
	launch: launch,
	redirect: redirect
}

module.exports = routes;