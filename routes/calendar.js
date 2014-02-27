var eventdata1 = require("../brian1");
var eventdata2 = require("../brian2");
var eventdata3 = require("../brian3");

var fs = require('fs');

exports.eventsuccess = function(req, res){

	var eventTitle = req.body.title;

	var startdate = req.body.starttime;

	var enddate = req.body.endtime;

	var notes = req.body.notes;

	var newEvent = {
		'title': eventTitle,
		'start': startdate,
		'end': enddate,
		'notes': notes
	};

	switch(req.body.filter) {
		case 'social':

			eventdata1["brian1"].push(newEvent);

			fs.writeFile('brian1.json',JSON.stringify(eventdata1, null, 4), function(){});
			break;

		case 'work':

			eventdata2["brian2"].push(newEvent);

			fs.writeFile('brian2.json',JSON.stringify(eventdata2, null, 4), function(){});
			break;

		case 'volunteering':

			eventdata3["brian3"].push(newEvent);

			fs.writeFile('brian3.json',JSON.stringify(eventdata3, null, 4), function(){});
			break;

		default:

	}

	res.render('calendar');
};