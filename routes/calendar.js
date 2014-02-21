var eventdata = require("../brian1");

var fs = require('fs');

exports.eventsuccess = function(req, res){

	var eventTitle = req.body.title;

	var startdate = req.body.starttime;

	var enddate = req.body.endtime;

	var newEvent = {
		'title': eventTitle,
		'start': startdate,
		'end': enddate
	};

	eventdata["brian1"].push(newEvent);

	fs.writeFile('brian1.json',JSON.stringify(eventdata, null, 4), function() {

	}
	)
	res.render('calendar');
};