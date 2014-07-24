
var launch = function(req, res){
	res.sendfile('./views/index.html');
}

var routes = {
	launch: launch
}

module.exports = routes;