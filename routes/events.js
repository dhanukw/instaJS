var databrian = require("../brian1");

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