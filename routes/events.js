var databrian = require("../brian1");

var datamelissa = require("../melissa1");

exports.events_source = function(req, res) {  
	res.send(databrian.brian1);
};

exports.events_source1 = function(req, res) {
	res.send(datamelissa.melissa1);
};