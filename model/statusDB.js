//create a mongoose object to manipulate when calling the database
var mongoose = require('mongoose');

//set up the schema for the database
var schema = new mongoose.Schema({
	name: String,
	status: String
})
var Entry = mongoose.model('Status', schema);

var addStatus = function(name, status, callback){
	//var Statuses = mongoose.model('Status');
	var oneStatus = new Entry({name:name, status:status});
	console.log("Saving " + oneStatus.name + "'s status.");
	oneStatus.save(function(err, oneStatus, num){
		if(err){
			console.log(err);
		}
		else{
			console.log("Save sucessful!");
			callback();
		}
	});
}

var getStatuses = function(callback){
	var Statuses = mongoose.model('Status');
	Statuses.find({}, function(err, data){
		if(err){
			console.log(err);
		}
		else{
			callback("",data);
		}
	});
}

var statusDB = {
	add_status: addStatus,
	get_statuses: getStatuses
}

module.exports = statusDB;