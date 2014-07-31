//create a mongoose object to manipulate when calling the database
var mongoose = require('mongoose');

//set up the schema for the database
var schema = new mongoose.Schema({
	name: String,
	status: String
})
//create a document class called "Entry" based on the schema definited above
var Entry = mongoose.model('Status', schema);

//method for adding a status to the database
var addStatus = function(name, status, callback){
	//create a document called "oneStatus" based on the Entry model
	//the document has two fields: name and status
	var oneStatus = new Entry({name:name, status:status});
	//self-check: make sure that you're saving the right information
	console.log("Saving " + oneStatus.name + "'s status.");
	//save the document oneStatus to the database
	oneStatus.save(function(err, oneStatus, num){
		//if there's an error, print it out
		if(err){
			console.log(err);
		}
		//if there isn't an error, print a success message and go back
		//to the router file via the callback method
		else{
			console.log("Save sucessful!");
			callback();
		}
	});
}

//method for getting all statuses from the database
var getStatuses = function(callback){
	//grab the collection of documents in the Status group
	var Statuses = mongoose.model('Status');
	//in the Statuses group, get all of the documents
	Statuses.find({}, function(err, data){
		//if there's an error, print it out
		if(err){
			console.log(err);
		}
		//if there isn't an error, go back to the router file via the callback method
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