var Artwork = require('../models/artwork');

//get artwork by project id
exports.queryProject = function(req, res, next) {
	Artwork.find({projects:[req.query._id]}, function(err, docs){
		if(err) return console.error(err);
		res.json(docs);
	});
};
//get artwork by id
exports.queryID = function(req, res, next) {
	Artwork.findOne({_id:req.params._id}, function(err, doc){
		res.json(doc);
	});
};
