var data = require("../brian1.json");


exports.events_source = function(req, res) {  
	res.send(data.brian1);
}