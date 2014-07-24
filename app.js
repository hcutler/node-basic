var express = require('express');
var app = express();
var router = require("./routes/router.js");

app.use(express.static(__dirname + '/public'));

app.get('/', router.launch);
app.get('/ect', router.redirect);
var port = Number(process.env.PORT || 5000);
app.listen(port, function(){
	console.log("Listening on " + port);
});