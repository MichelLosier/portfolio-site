var Artwork = require('../models/project');

//get artwork by project id
exports.queryProject = function(req, res, next) {
	Artwork.find({projects:[req.params.project]}, function(err, docs){
		if(err) return console.error(err);
		res.json(docs);
	});
};
//get artwork by id
exports.queryID = function(req, res, next) {
	Artwork.find({_id:ObjectId(req.params.id)}, function(err, doc){
		res.json(doc);
	});
};