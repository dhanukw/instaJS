var databrian1 = require("../brian1");
var databrian2 = require("../brian2");
var databrian3 = require("../brian3");

var datamelissa = require("../melissa1");

var datagrant = require("../grant1");

var datadhanuk = require("../dhanuk1");

var datasnoop = require("../snoop1");

var dataimagined = require("../imagined1");

exports.events_source = function(req, res) {  
	res.send(databrian.brian1);
};

exports.events_source1 = function(req, res) {
	res.send(datamelissa.melissa1);
};

exports.events_source2 = function(req, res) {
	res.send(datagrant.grant1);
};

exports.events_source3 = function(req, res) {
	res.send(datadhanuk.dhanuk1);
};

exports.events_source4 = function(req, res) {
	res.send(datasnoop.snoop1);
};

exports.events_source5 = function(req, res) {
	res.send(dataimagined.imagined1);
};

exports.multi_source = function(req, res){
	console.log(req.params.event_id);
	switch(req.params.event_id) {
		case 'brian1':
			console.log(databrian1.brian1);
			res.send(databrian1.brian1);
			break;
		case 'brian2':
			res.send(databrian2.brian2);
			break;
		case 'brian3':
			res.send(databrian3.brian3);
			break;
		default:
			res.send('hello world');
			break;
	};
	
};
		